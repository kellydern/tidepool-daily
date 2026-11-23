import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const PORT = 8787;
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SESSION = path.join(ROOT, ".oura-session.json");
const REDIRECT = `http://localhost:${PORT}/auth/oura/callback`;
const SCOPES = "daily heartrate workout tag personal";
const pending = new Map();

loadEnv();

function handleRequest(req, res) {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  if (url.pathname === "/api/oura/status") return sendJson(res, statusBody());
  if (url.pathname === "/auth/oura") return startAuth(res);
  if (url.pathname === "/auth/oura/callback") return finishAuth(url, res);
  if (url.pathname === "/api/oura/days") return ouraDays(url, res);
  return serveStatic(url.pathname, res);
}

const server = http.createServer(handleRequest);

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Prototype at http://127.0.0.1:${PORT}/#daily`);
  console.log(`Oura redirect ${REDIRECT}`);
});
http.createServer(handleRequest).listen(PORT, "::1").on("error", () => {});

function loadEnv() {
  const file = path.join(ROOT, ".env");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function configured() {
  return Boolean(process.env.OURA_CLIENT_ID && process.env.OURA_CLIENT_SECRET);
}

function statusBody() {
  const session = readSession();
  return { configured: configured(), connected: Boolean(session?.refresh_token || session?.access_token) };
}

function startAuth(res) {
  if (!configured()) {
    sendHtml(res, 200, `<!doctype html><meta charset="utf-8"><title>Connect Oura</title>
      <body style="font-family:Figtree,sans-serif;max-width:640px;margin:48px auto;color:#271b46">
      <h1>Add your Oura app</h1>
      <p>Oura no longer issues personal tokens. Create an application at <a href="https://cloud.ouraring.com/oauth/applications">cloud.ouraring.com</a>, then put the client id and secret in a <code>.env</code> file next to <code>oura-server.mjs</code>.</p>
      <p>Register this redirect URI exactly:</p>
      <p><code>${REDIRECT}</code></p>
      <pre style="background:#f7f7f8;padding:12px">OURA_CLIENT_ID=your-client-id
OURA_CLIENT_SECRET=your-client-secret</pre>
      <p>Restart this server after saving the file, then use Connect Oura again.</p>
      <p><a href="/#daily">Back to Daily</a></p></body>`);
    return;
  }
  const state = crypto.randomBytes(16).toString("hex");
  const verifier = crypto.randomBytes(32).toString("base64url");
  const challenge = crypto.createHash("sha256").update(verifier).digest("base64url");
  pending.set(state, verifier);
  const auth = new URL("https://cloud.ouraring.com/oauth/authorize");
  auth.searchParams.set("response_type", "code");
  auth.searchParams.set("client_id", process.env.OURA_CLIENT_ID);
  auth.searchParams.set("redirect_uri", REDIRECT);
  auth.searchParams.set("scope", SCOPES);
  auth.searchParams.set("state", state);
  auth.searchParams.set("code_challenge", challenge);
  auth.searchParams.set("code_challenge_method", "S256");
  res.writeHead(302, { Location: auth.toString() });
  res.end();
}

async function finishAuth(url, res) {
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  const verifier = pending.get(state);
  pending.delete(state);
  if (!code || !verifier) {
    sendHtml(res, 400, "<p>Oura did not return a usable sign-in. <a href=\"/auth/oura\">Try again</a>.</p>");
    return;
  }
  try {
    const token = await tokenRequest({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT,
      client_id: process.env.OURA_CLIENT_ID,
      client_secret: process.env.OURA_CLIENT_SECRET,
      code_verifier: verifier,
    });
    writeSession(token);
    res.writeHead(302, { Location: "/#daily" });
    res.end();
  } catch {
    sendHtml(res, 502, "<p>Oura rejected the sign-in. Check the client id, secret, and redirect URI. <a href=\"/auth/oura\">Try again</a>.</p>");
  }
}

async function ouraDays(url, res) {
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start || "") || !/^\d{4}-\d{2}-\d{2}$/.test(end || "")) {
    sendJson(res, { error: "bad date" }, 400);
    return;
  }
  try {
    const token = await accessToken();
    if (!token) {
      sendJson(res, { error: "not connected" }, 401);
      return;
    }
    const from = shiftDate(start, -1);
    const until = shiftDate(end, 1);
    const [sleep, workouts, tags, stressDocs, heartDocs, sleepScores, readinessDocs, activityDocs] = await Promise.all([
      collection(token, "/v2/usercollection/sleep", { start_date: from, end_date: until }),
      collection(token, "/v2/usercollection/workout", { start_date: start, end_date: until }),
      collection(token, "/v2/usercollection/tag", { start_date: start, end_date: until }),
      safeCollection(token, "/v2/usercollection/daily_stress", { start_date: start, end_date: until }),
      safeCollection(token, "/v2/usercollection/heartrate", {
        start_datetime: localStamp(start, false),
        end_datetime: localStamp(end, true),
      }, 16),
      safeCollection(token, "/v2/usercollection/daily_sleep", { start_date: start, end_date: until }),
      safeCollection(token, "/v2/usercollection/daily_readiness", { start_date: start, end_date: until }),
      safeCollection(token, "/v2/usercollection/daily_activity", { start_date: start, end_date: until }),
    ]);
    const days = {};
    for (const date of eachDate(start, end)) {
      days[date] = await daySummary(
        token,
        date,
        sleep.data || [],
        workouts.data || [],
        tags.data || [],
        stressDocs.data || [],
        heartDocs.data || [],
        sleepScores.data || [],
        readinessDocs.data || [],
        activityDocs.data || [],
      );
    }
    sendJson(res, { days });
  } catch {
    sendJson(res, { error: "oura unavailable" }, 502);
  }
}

async function daySummary(token, date, sleepRows, workoutRows, tagRows, stressRows, heartRows, sleepScoreRows, readinessRows, activityRows) {
  const sleepHits = sleepRows
    .map((row) => ({ row, span: overlapHours(row.bedtime_start, row.bedtime_end, date) }))
    .filter((item) => item.span);
  const sleep = sleepHits.map((item) => item.span);
  const main = sleepHits.sort((a, b) => (b.span[1] - b.span[0]) - (a.span[1] - a.span[0]))[0];
  const tags = tagRows
    .filter((row) => row.day === date || (row.timestamp && localDate(row.timestamp) === date))
    .map((row) => ({
      hour: row.timestamp ? hourOf(row.timestamp) : 12,
      label: tagLabel(row),
      source: "Oura Ring",
    }));
  const workouts = workoutRows.filter((row) => overlapHours(row.start_datetime, row.end_datetime, date));
  workouts.sort((a, b) => duration(b) - duration(a));
  const workout = workouts[0] ? await workoutSummary(token, workouts[0], date) : null;
  const night = sleepRows.find((row) => row.day === date && row.type === "long_sleep")
    || sleepRows.find((row) => row.day === date);
  const restingHeartRate = night && Number.isFinite(night.lowest_heart_rate) ? Math.round(night.lowest_heart_rate) : null;
  const nightDetail = sleepNight(night);
  return {
    sleep,
    sleepWhen: main ? timeRange(main.row.bedtime_start, main.row.bedtime_end) : "",
    tags,
    workout,
    restingHeartRate,
    hrv: nightDetail.hrv,
    sleepStages: nightDetail.stages,
    readiness: scoreFor(readinessRows, date),
    activity: activityFor(activityRows, date),
    sleepScore: scoreFor(sleepScoreRows, date),
    stress: stressSummary(stressRows, date),
    heartRate: heartSeries(heartRows, date),
  };
}

function secondsOrNull(value) {
  return Number.isFinite(value) ? value : null;
}

function sleepNight(night) {
  if (!night) return { stages: null, hrv: null };
  const stages = {
    deep: secondsOrNull(night.deep_sleep_duration),
    rem: secondsOrNull(night.rem_sleep_duration),
    light: secondsOrNull(night.light_sleep_duration),
    awake: secondsOrNull(night.awake_time),
  };
  const hasStage = Object.values(stages).some((value) => value != null);
  return {
    stages: hasStage ? stages : null,
    hrv: Number.isFinite(night.average_hrv) ? Math.round(night.average_hrv) : null,
  };
}

function activityFor(rows, date) {
  const row = (rows || []).find((item) => item.day === date);
  if (!row) return null;
  const steps = Number.isFinite(row.steps) ? Math.round(row.steps) : null;
  const parts = [row.medium_activity_time, row.high_activity_time].filter((value) => Number.isFinite(value));
  const active = parts.length ? parts.reduce((sum, value) => sum + value, 0) : null;
  if (steps == null && active == null) return null;
  return { steps, active };
}

function scoreFor(rows, date) {
  const row = (rows || []).find((item) => item.day === date);
  return row && Number.isFinite(row.score) ? Math.round(row.score) : null;
}

function heartSeries(rows, date) {
  return (rows || [])
    .filter((item) => item.timestamp && localDate(item.timestamp) === date && Number.isFinite(item.bpm))
    .map((item) => ({ hour: Math.round(hourOf(item.timestamp) * 100) / 100, bpm: Math.round(item.bpm) }))
    .sort((a, b) => a.hour - b.hour);
}

function localStamp(date, end) {
  const when = new Date(`${date}T00:00:00`);
  if (end) when.setDate(when.getDate() + 1);
  const pad = (value) => String(value).padStart(2, "0");
  const offset = -when.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const abs = Math.abs(offset);
  return `${when.getFullYear()}-${pad(when.getMonth() + 1)}-${pad(when.getDate())}T${pad(when.getHours())}:${pad(when.getMinutes())}:00${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
}
function stressSummary(rows, date) {
  const row = (rows || []).find((item) => item.day === date);
  if (!row) return null;
  return {
    summary: row.day_summary ? titleCase(String(row.day_summary)) : "",
    high: Number.isFinite(row.stress_high) ? row.stress_high : null,
    recovery: Number.isFinite(row.recovery_high) ? row.recovery_high : null,
  };
}

async function safeCollection(token, pathname, params, maxPages) {
  try {
    return await collection(token, pathname, params, maxPages);
  } catch {
    return { data: [] };
  }
}

async function workoutSummary(token, row, date) {
  const span = overlapHours(row.start_datetime, row.end_datetime, date);
  let hr = null;
  try {
    const series = await collection(token, "/v2/usercollection/heartrate", {
      start_datetime: row.start_datetime,
      end_datetime: row.end_datetime,
    });
    const beats = (series.data || []).map((item) => item.bpm).filter((bpm) => Number.isFinite(bpm));
    if (beats.length) hr = Math.round(beats.reduce((sum, bpm) => sum + bpm, 0) / beats.length);
  } catch {
    hr = null;
  }
  const intensity = row.intensity ? row.intensity[0].toUpperCase() + row.intensity.slice(1) : "";
  return {
    name: titleCase(row.label || row.activity || "Activity"),
    start: span[0],
    end: span[1],
    when: timeRange(row.start_datetime, row.end_datetime),
    hr,
    calories: row.calories ? Math.round(row.calories) : null,
    stress: intensity,
    live: true,
  };
}

async function accessToken() {
  const session = readSession();
  if (!session) return null;
  if (session.access_token && session.expires_at > Date.now() + 60_000) return session.access_token;
  if (!session.refresh_token) return session.access_token || null;
  const token = await tokenRequest({
    grant_type: "refresh_token",
    refresh_token: session.refresh_token,
    client_id: process.env.OURA_CLIENT_ID,
    client_secret: process.env.OURA_CLIENT_SECRET,
  });
  writeSession(token);
  return token.access_token;
}

async function tokenRequest(fields) {
  const res = await fetch("https://api.ouraring.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(fields),
  });
  if (!res.ok) throw new Error("token");
  return res.json();
}

async function collection(token, pathname, params, maxPages = 6) {
  const rows = [];
  let next = "";
  for (let page = 0; page < maxPages; page += 1) {
    const query = new URLSearchParams(params);
    if (next) query.set("next_token", next);
    const res = await fetch(`https://api.ouraring.com${pathname}?${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) throw new Error("unauthorized");
    if (!res.ok) throw new Error("oura");
    const json = await res.json();
    rows.push(...(json.data || []));
    next = json.next_token || "";
    if (!next) break;
  }
  return { data: rows };
}

function readSession() {
  try {
    return JSON.parse(fs.readFileSync(SESSION, "utf8"));
  } catch {
    return null;
  }
}

function writeSession(token) {
  const previous = readSession() || {};
  const next = {
    access_token: token.access_token,
    refresh_token: token.refresh_token || previous.refresh_token,
    expires_at: Date.now() + (Number(token.expires_in) || 3600) * 1000,
  };
  fs.writeFileSync(SESSION, JSON.stringify(next), { mode: 0o600 });
}

function overlapHours(startIso, endIso, date) {
  if (!startIso || !endIso) return null;
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();
  const dayStart = new Date(`${date}T00:00:00`).getTime();
  const dayEnd = dayStart + 24 * 60 * 60 * 1000;
  const from = Math.max(start, dayStart);
  const to = Math.min(end, dayEnd);
  if (!(to > from)) return null;
  return [((from - dayStart) / 3600000), ((to - dayStart) / 3600000)];
}

function duration(row) {
  return new Date(row.end_datetime) - new Date(row.start_datetime);
}

function hourOf(iso) {
  const when = new Date(iso);
  return when.getHours() + when.getMinutes() / 60;
}

function localDate(iso) {
  const when = new Date(iso);
  const month = String(when.getMonth() + 1).padStart(2, "0");
  const day = String(when.getDate()).padStart(2, "0");
  return `${when.getFullYear()}-${month}-${day}`;
}

function formatDay(when) {
  const month = String(when.getMonth() + 1).padStart(2, "0");
  const day = String(when.getDate()).padStart(2, "0");
  return `${when.getFullYear()}-${month}-${day}`;
}

function shiftDate(iso, days) {
  const when = new Date(`${iso}T00:00:00`);
  when.setDate(when.getDate() + days);
  return formatDay(when);
}

function eachDate(start, end) {
  const dates = [];
  const when = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (when <= last && dates.length < 31) {
    dates.push(formatDay(when));
    when.setDate(when.getDate() + 1);
  }
  return dates;
}

function timeRange(startIso, endIso) {
  const fmt = (iso) => new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return `${fmt(startIso)} – ${fmt(endIso)}`;
}

function tagLabel(row) {
  if (row.text) return row.text;
  const raw = (row.tags && row.tags[0]) || "Tag";
  return titleCase(raw.replace(/^tag_generic_/, "").replace(/^tag_/, ""));
}

function titleCase(value) {
  return String(value).replace(/[_-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function sendJson(res, body, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(body));
}

function sendHtml(res, status, html) {
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}

function serveStatic(pathname, res) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const file = path.normalize(path.join(ROOT, requested));
  if (!file.startsWith(ROOT) || path.basename(file).startsWith(".")) {
    res.writeHead(404);
    res.end();
    return;
  }
  fs.readFile(file, (error, body) => {
    if (error) {
      res.writeHead(404);
      res.end();
      return;
    }
    const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" };
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(body);
  });
}
