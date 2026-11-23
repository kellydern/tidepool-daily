const cycles = [
  { start: "Dec 20, 2025", end: "Jan 16, 2026", length: 29, period: 3 },
  { start: "Nov 18, 2025", end: "Dec 19, 2025", length: 32, period: 4 },
  { start: "Oct 21, 2025", end: "Nov 17, 2025", length: 28, period: 3 },
];

const g3 = [118, 122, 128, 124, 120, 118, 122, 108, 125, 132, 140, 138, 148, 155, 162, 170, 188, 205, 212, 208, 200, 198, 190, 175, 168, 160, 155, 148, 142, 138, 140, 136];
const u3 = [18, 22, 24, 20, 22, 26, 28, 24, 30, 32, 28, 36, 34, 40, 42, 48, 52, 55, 58, 54, 50, 52, 48, 46, 42, 40, 36, 32, 28, 30, 26, 24];
const g1 = [120, 124, 122, 118, 120, 116, 122, 112, 128, 135, 142, 140, 148, 152, 160, 175, 198, 215, 208, 202, 190, 185, 170, 160, 155, 148, 152, 145, 140];
const u1 = [20, 22, 24, 22, 26, 24, 28, 26, 30, 34, 32, 36, 38, 42, 48, 52, 58, 55, 50, 48, 46, 44, 40, 38, 36, 34, 32, 30, 28];
const g2 = [116, 120, 122, 118, 116, 114, 118, 110, 122, 128, 134, 136, 142, 148, 155, 162, 178, 190, 196, 192, 184, 176, 168, 160, 154, 148, 144, 140, 136, 134, 132, 130];
const u2 = [18, 20, 22, 20, 22, 24, 26, 22, 28, 30, 28, 32, 34, 36, 40, 44, 48, 50, 52, 48, 46, 44, 42, 40, 36, 34, 32, 30, 28, 26, 24, 22];

const days = [
  {
    label: "Thu, May 2, 2024",
    long: "Thursday, May 2",
    avg: 118,
    tir: 91,
    tirParts: [
      ["#6b4c9a", 0, "<54", "0m", "0%"],
      ["#e15b55", 2, "54–70", "20m", "2%"],
      ["#3aaa6a", 91, "70–180", "21h 50m", "91%"],
      ["#f0a04b", 6, "180–250", "1h 20m", "6%"],
      ["#c94b8a", 1, ">250", "10m", "1%"],
    ],
    workout: 0,
    workoutTime: "0m",
    premeal: 0,
    premealTime: "0m",
    markers: [],
    sd: 22,
    range: "96 – 154",
    cv: 19,
    insulin: 24.4,
    basalU: 13.2,
    bolusU: 11.2,
    basalPct: 54,
    bolusPct: 46,
    carbs: 96,
    auto: 100,
    autoTime: "24h",
    manual: 0,
    manualTime: "0m",
    preset: 0,
    presetTime: "0m",
    glucose: [[0, 132], [2, 128], [4, 122], [6, 118], [8, 140], [10, 126], [12, 134], [14, 122], [16, 118], [18, 124], [20, 120], [22, 116], [24, 121]],
    boluses: [{ hour: 8.2, carbs: 40, units: 3.4, delivered: true }, { hour: 13, carbs: 32, units: 2.8, delivered: true }, { hour: 18.5, carbs: 24, units: 2.1, delivered: true }],
    sleep: [[0, 7.4]],
    run: null,
    low: false,
  },
  {
    label: "Fri, May 3, 2024",
    long: "Friday, May 3",
    avg: 128,
    tir: 84,
    tirParts: [
      ["#6b4c9a", 0, "<54", "0m", "0%"],
      ["#e15b55", 12, "54–70", "55m", "12%"],
      ["#3aaa6a", 84, "70–180", "13h 15m", "84%"],
      ["#f0a04b", 3, "180–250", "50m", "3%"],
      ["#c94b8a", 1, ">250", "10m", "1%"],
    ],
    workout: 0,
    workoutTime: "0m",
    premeal: 8,
    premealTime: "2h",
    markers: [
      { hour: 6, label: "M" },
      { hour: 6.6, label: "A" },
      { hour: 10.1, label: "W" },
    ],
    sd: 38,
    range: "99 – 215",
    cv: 30,
    insulin: 30.2,
    basalU: 14.1,
    bolusU: 16.1,
    basalPct: 46,
    bolusPct: 54,
    carbs: 147,
    auto: 98,
    autoTime: "23h 25m",
    manual: 2,
    manualTime: "35m",
    preset: 8,
    presetTime: "2h",
    glucose: [[0, 168], [1.5, 158], [3, 142], [4.5, 118], [5.4, 64], [6.2, 92], [7.5, 124], [9, 138], [10.5, 150], [11.5, 162], [12.3, 214], [13.5, 186], [15, 158], [16.5, 149], [18, 156], [20, 148], [22, 144], [24, 160]],
    boluses: [{ hour: 7.5, carbs: 55, units: 4.2, delivered: true }, { hour: 12.4, carbs: 50, units: 8.6, delivered: true }, { hour: 17.1, carbs: 42, units: 3.2, delivered: false }],
    sleep: [[0, 8.85], [23.05, 24]],
    run: { start: 11.57, end: 12.17 },
    low: true,
  },
  {
    label: "Sat, May 4, 2024",
    long: "Saturday, May 4",
    avg: 141,
    tir: 76,
    tirParts: [
      ["#6b4c9a", 0, "<54", "0m", "0%"],
      ["#e15b55", 4, "54–70", "40m", "4%"],
      ["#3aaa6a", 76, "70–180", "18h 14m", "76%"],
      ["#f0a04b", 16, "180–250", "3h 50m", "16%"],
      ["#c94b8a", 4, ">250", "56m", "4%"],
    ],
    workout: 0,
    workoutTime: "0m",
    premeal: 0,
    premealTime: "0m",
    markers: [],
    sd: 31,
    range: "102 – 198",
    cv: 24,
    insulin: 28.6,
    basalU: 13.8,
    bolusU: 14.8,
    basalPct: 48,
    bolusPct: 52,
    carbs: 120,
    auto: 96,
    autoTime: "23h 2m",
    manual: 4,
    manualTime: "58m",
    preset: 0,
    presetTime: "0m",
    glucose: [[0, 150], [3, 142], [6, 136], [8, 168], [11, 154], [13, 172], [15, 148], [18, 160], [21, 138], [24, 144]],
    boluses: [{ hour: 9, carbs: 48, units: 5.1, delivered: true }, { hour: 14.2, carbs: 38, units: 4.4, delivered: true }],
    sleep: [[0, 8.1]],
    run: null,
    low: false,
  },
];

const cycleDays = [
  {
    long: "Monday, Dec 22",
    label: "Mon, Dec 22, 2025",
    cycleDay: 3,
    phase: "Follicular",
    tone: "follicular",
    title: "Follicular phase",
    sub: "Cycle day 3 of 29 · period day 3",
    copy: "This day is still in the period and in the follicular phase. Across the last three cycles, follicular days averaged 110 mg/dL, 82% time in range, and 35 U. Today sits near those averages. These figures describe the recorded cycles. They are not a medication recommendation.",
    avg: 112,
    tirParts: [
      ["#6b4c9a", 0, "0m", "0%"],
      ["#e15b55", 4, "40m", "4%"],
      ["#3aaa6a", 84, "20h 10m", "84%"],
      ["#f0a04b", 10, "2h 24m", "10%"],
      ["#c94b8a", 2, "26m", "2%"],
    ],
    sd: 24,
    insulin: 33.4,
    basalU: 16.4,
    bolusU: 17.0,
    basalPct: 49,
    bolusPct: 51,
    carbs: 128,
    glucose: [[0, 128], [3, 118], [6, 108], [8, 142], [11, 124], [14, 132], [17, 118], [20, 122], [24, 116]],
    boluses: [
      { hour: 8, carbs: 48, units: 4.1, delivered: true },
      { hour: 10 + 30 / 60, carbs: 28, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 13, carbs: 42, units: 3.6, delivered: true },
      { hour: 18.5, carbs: 38, units: 3.2, delivered: true },
    ],
    sleep: [[0, 7.3]],
    exercise: { name: "Walk", start: 15, end: 15 + 40 / 60, when: "3:00–3:40 pm" },
    stress: { high: 45, recovery: 25 },
  },
  {
    long: "Saturday, Jan 3",
    label: "Sat, Jan 3, 2026",
    cycleDay: 15,
    phase: "Luteal",
    tone: "luteal",
    title: "Luteal phase",
    sub: "Cycle day 15 of 29",
    copy: "This is the first luteal day of the cycle. Across the last three cycles, luteal days averaged 140 mg/dL, 69% time in range, and 42 U — higher glucose and insulin than the follicular phase. Today follows that pattern. These figures describe the recorded cycles. They are not a medication recommendation.",
    avg: 146,
    tirParts: [
      ["#6b4c9a", 0, "0m", "0%"],
      ["#e15b55", 6, "1h 10m", "6%"],
      ["#3aaa6a", 71, "17h 2m", "71%"],
      ["#f0a04b", 18, "4h 20m", "18%"],
      ["#c94b8a", 5, "1h 12m", "5%"],
    ],
    sd: 36,
    insulin: 41.8,
    basalU: 18.4,
    bolusU: 23.4,
    basalPct: 44,
    bolusPct: 56,
    carbs: 152,
    glucose: [[0, 148], [3, 142], [6, 136], [8, 168], [11, 188], [13, 214], [15, 176], [18, 162], [21, 154], [24, 158]],
    boluses: [
      { hour: 8.2, carbs: 52, units: 6.4, delivered: true },
      { hour: 12.6, carbs: 58, units: 8.8, delivered: true },
      { hour: 15 + 30 / 60, carbs: 34, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 18, carbs: 42, units: 5.2, delivered: false },
    ],
    sleep: [[0, 8.2], [23.2, 24]],
    exercise: { name: "Yoga", start: 11, end: 11 + 45 / 60, when: "11:00–11:45 am" },
    stress: { high: 110, recovery: 15 },
  },
];

const state = {
  tab: "daily",
  period: "3",
  cursor: 0,
  day: 13,
  phaseIndex: 1,
  source: "cgm",
  devices: { dexcom: true, tandem: true, oura: true },
  layers: { cycle: true, sleep: true, therapy: true, exercise: true, tags: true },
  custom: null,
  ouraStatus: { configured: false, connected: false },
  ouraByDate: {},
  ouraPending: {},
  chartWindow: { start: 0, end: 24 },
  weekWindow: { start: 0, end: 24 },
  cycleWindow: { start: 0, end: 0 },
  cycleWindow2: { start: 0, end: 0 },
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function readHash() {
  const requested = new URLSearchParams(location.search).get("view");
  const raw = location.hash.replace("#", "");
  const hash = requested || (raw.startsWith("figmacapture=") ? "" : raw.split("&")[0]);
  if (hash === "cycle") {
    state.tab = "cycle";
    state.period = "1";
  } else if (hash === "cycle-3") {
    state.tab = "cycle";
    state.period = "3";
  } else if (hash === "cycle-2") {
    state.tab = "cycle";
    state.period = "2";
  } else if (hash === "cycle-insights-2") {
    state.tab = "cycle-insights-2";
  } else if (hash === "daily" || hash === "") {
    state.tab = "daily";
  } else if (hash === "week") {
    state.tab = "week";
  } else if (hash === "daily-cycle") {
    state.tab = "daily-cycle";
  } else if (["basics", "trends", "bg", "devices"].includes(hash)) {
    state.tab = hash;
  }
}

function writeHash() {
  if (state.tab === "cycle") {
    location.hash = state.period === "1" ? "cycle" : state.period === "2" ? "cycle-2" : "cycle-3";
  } else {
    location.hash = state.tab;
  }
}

function icon(name) {
  const common = 'width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"';
  if (name === "calendar") {
    return `<svg ${common}><rect x="2.5" y="3.5" width="13" height="12" rx="1.5" stroke="currentColor"/><path d="M2.5 7h13M6 2.5v2M12 2.5v2" stroke="currentColor" stroke-linecap="round"/></svg>`;
  }
  if (name === "eye") {
    return `<svg ${common}><path d="M1.5 9S4.2 4.5 9 4.5 16.5 9 16.5 9 13.8 13.5 9 13.5 1.5 9 1.5 9Z" stroke="currentColor"/><circle cx="9" cy="9" r="2" stroke="currentColor"/></svg>`;
  }
  if (name === "share") {
    return `<svg ${common}><circle cx="5" cy="9" r="2" stroke="currentColor"/><circle cx="13" cy="5" r="2" stroke="currentColor"/><circle cx="13" cy="13" r="2" stroke="currentColor"/><path d="M7 8.2 11 6M7 9.8 11 12" stroke="currentColor"/></svg>`;
  }
  if (name === "upload") {
    return `<svg ${common}><path d="M9 12.5V4M6 6.5 9 3.5l3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12.5v2h10v-2" stroke="currentColor" stroke-linecap="round"/></svg>`;
  }
  if (name === "gear") {
    return `<svg ${common}><circle cx="9" cy="9" r="2.2" stroke="currentColor"/><path d="M9 2.5v2M9 13.5v2M2.5 9h2M13.5 9h2M4.2 4.2l1.4 1.4M12.4 12.4l1.4 1.4M13.8 4.2l-1.4 1.4M5.6 12.4 4.2 13.8" stroke="currentColor" stroke-linecap="round"/></svg>`;
  }
  if (name === "print") {
    return `<svg ${common}><path d="M5 6.5V3h8v3.5M5 12.5H3.5v-5h11v5H13" stroke="currentColor" stroke-linejoin="round"/><rect x="5" y="10.5" width="8" height="5" stroke="currentColor"/></svg>`;
  }
  if (name === "bulb") {
    return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.2a4.6 4.6 0 0 0-2.6 8.4c.4.3.6.7.6 1.1v.5h4v-.5c0-.4.2-.8.6-1.1A4.6 4.6 0 0 0 10 3.2Z" stroke="#445f87"/><path d="M8.2 15h3.6M8.6 16.6h2.8" stroke="#445f87" stroke-linecap="round"/></svg>`;
  }
  return "";
}

function renderChrome() {
  placeCycleStage();
  placeDailyStage();
  const clinic = state.tab === "daily" || state.tab === "week" || state.tab === "daily-cycle";
  const withCycle = state.tab === "daily" || state.tab === "week" || state.tab === "cycle" || state.tab === "cycle-insights-2" || state.tab === "daily-cycle";
  $("#workspace").hidden = !clinic;
  $("#back").hidden = !clinic;
  $("#who-name").textContent = withCycle ? "Lupita Lionfish" : "Jonathan Jellyfish";
  $("#avatar").textContent = withCycle ? "LL" : "JJ";
  $("#dob").innerHTML = withCycle
    ? "DOB : <b>December 26, 1982</b>"
    : "DOB : <b>1982-08-24</b>";
  $("#mrn").hidden = withCycle;
  $("#share").hidden = clinic;
  $("#settings").hidden = clinic;
  $("#profile").hidden = !clinic;
  $("#account-name").textContent = clinic ? "Dr. Sally Seastar" : "Lupita Lionfish";
  const help = document.querySelector("#help-panel p");
  if (help) {
    help.textContent = state.tab === "cycle-insights-2"
      ? "Cycle Insights 2 keeps the same recorded cycles. Drag a handle to resize the days in view, or circle a region. A tighter window shows each day’s carbohydrates, exercise, and any recorded setting change. Figures describe the sample. They are not treatment advice."
      : state.tab === "daily-cycle"
      ? "Daily + cycle keeps the day chart and adds Lupita’s menstrual cycle: phase, period, and how this day compares with follicular and luteal averages. Figures describe the sample. They are not treatment advice."
      : "Daily uses the Cycle Insights visual system: navy tabs, gray summary panels, and white metric cards. Numbers describe the sample day. They are not treatment advice.";
  }
  $$(".tab").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.tab === state.tab));
  });
  $$(".view").forEach((view) => {
    view.hidden = view.dataset.view !== state.tab;
  });
  $("#empty-title").textContent = {
    basics: "Basics",
    trends: "Trends",
    bg: "BG Log",
    devices: "Devices",
  }[state.tab] || "";
}

function seriesForPeriod() {
  if (state.period === "1") return { g: g1, u: u1, title: "Last Cycle", mean: "Daily Median" };
  if (state.period === "2") return { g: g2, u: u2, title: "Last 2 Cycles", mean: "Daily Mean" };
  return { g: g3, u: u3, title: "Last 3 Cycles", mean: "Daily Mean" };
}

function phaseSegments(cycle) {
  const length = cycle.length || 29;
  const period = Math.min(cycle.period || 3, 10);
  const follicular = Math.max(0, 10 - period);
  const fertile = 5;
  const luteal = Math.max(0, length - period - follicular - fertile);
  return [
    { key: "menstrual", name: "Menstrual", days: period },
    { key: "follicular", name: "Follicular", days: follicular },
    { key: "fertile", name: "Fertile", days: fertile },
    { key: "luteal", name: "Luteal", days: luteal },
  ].filter((segment) => segment.days > 0);
}

function cyclePlotY(fraction, top, height) {
  return top + fraction * height;
}

function cycleGlucoseY(value, top, height) {
  const stops = [[54, 0.957], [70, 0.871], [125, 0.723], [150, 0.5], [180, 0.387], [225, 0.273], [350, 0.047]];
  const reading = Math.min(350, Math.max(54, value));
  for (let index = 0; index < stops.length - 1; index += 1) {
    const [low, lowFraction] = stops[index];
    const [high, highFraction] = stops[index + 1];
    if (reading <= high) {
      const span = high - low || 1;
      return cyclePlotY(lowFraction + ((reading - low) / span) * (highFraction - lowFraction), top, height);
    }
  }
  return cyclePlotY(stops[stops.length - 1][1], top, height);
}

function carbGold(grams) {
  const t = Math.min(1, Math.max(0, (grams - 100) / 100));
  const channel = (light, dark) => Math.round(light + (dark - light) * t);
  return `rgb(${channel(255, 184)},${channel(232, 106)},${channel(207, 26)})`;
}

function cycleInsulinY(units, top, height) {
  const clamped = Math.min(100, Math.max(0, units));
  const topFraction = 0.186;
  const bottomFraction = 0.994;
  return cyclePlotY(topFraction + (1 - clamped / 100) * (bottomFraction - topFraction), top, height);
}

function cycleSmoothPath(points) {
  if (!points.length) return "";
  let path = `M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(0, index - 1)];
    const current = points[index];
    const next = points[index + 1];
    const after = points[Math.min(points.length - 1, index + 2)];
    const c1x = current[0] + (next[0] - previous[0]) / 6;
    const c1y = current[1] + (next[1] - previous[1]) / 6;
    const c2x = next[0] - (after[0] - current[0]) / 6;
    const c2y = next[1] - (after[1] - current[1]) / 6;
    path += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${next[0].toFixed(1)} ${next[1].toFixed(1)}`;
  }
  return path;
}

function cycleCalendarDate(cycle, day) {
  const start = new Date(`${cycle.start} 12:00:00`);
  if (Number.isNaN(start.getTime())) return "";
  start.setDate(start.getDate() + day - 1);
  return start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function cycleDayPhase(day, cycle) {
  let start = 1;
  for (const segment of phaseSegments(cycle)) {
    if (day < start + segment.days) return segment.name;
    start += segment.days;
  }
  return "Luteal";
}

function cycleMethod(cycle) {
  if (String(cycle.start).startsWith("Dec")) return { name: "Hormonal IUD", fill: "#D7E6F8" };
  return { name: "Combined pill", fill: "#E7D7F5" };
}

function cycleDayRecord(cycle, day) {
  const phase = cycleDayPhase(day, cycle);
  let lutealStart = 1;
  for (const segment of phaseSegments(cycle)) {
    if (segment.key === "luteal") break;
    lutealStart += segment.days;
  }
  const lutealDay = phase === "Luteal" ? day - lutealStart + 1 : 0;
  const exercise = phase === "Luteal" && day % 2 === 0
    ? ["Walk", "Yoga", "Pilates"][day % 3]
    : phase === "Fertile" && day % 5 === 0
      ? "Walk"
      : "";
  const carbs = phase === "Menstrual" ? 150 : phase === "Luteal" ? 170 + (day % 2 ? 16 : 0) : phase === "Fertile" ? 130 : 115;
  const therapy = lutealDay === 2
    ? "Carb ratio 8.5 → 7.5 g/U"
    : lutealDay === 6
      ? "Sensitivity 37 → 35 mg/dL/U"
      : lutealDay === 10
        ? "Temp basal 1.05 → 1.2 U/hr"
        : "";
  const therapyShort = lutealDay === 2
    ? "Carb 8.5 → 7.5"
    : lutealDay === 6
      ? "Sensitivity 37 → 35"
      : lutealDay === 10
        ? "Basal 1.05 → 1.2"
        : "";
  const exerciseMinutes = exercise === "Walk" ? 40 : exercise === "Yoga" ? 45 : exercise === "Pilates" ? 50 : 0;
  return { phase, exercise, exerciseMinutes, carbs, therapy, therapyShort };
}

function formatExerciseMinutes(minutes) {
  if (!minutes) return "None";
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest}m`;
  if (!rest) return `${hours}h`;
  return `${hours}h ${rest}m`;
}

function phaseVariability(cycle, startDay, count, readings) {
  const rows = [];
  for (let day = startDay; day < startDay + count; day += 1) {
    const glucose = readings[day - 1];
    const context = cycleDayRecord(cycle, day);
    rows.push({
      glucose,
      insulin: recordedFromGlucose(glucose).insulin,
      carbs: context.carbs,
      minutes: context.exerciseMinutes,
    });
  }
  const values = (key) => rows.map((row) => row[key]);
  const glucoseValues = values("glucose");
  const insulinValues = values("insulin");
  const carbValues = values("carbs");
  const minutes = values("minutes");
  return {
    glucose: { min: Math.min(...glucoseValues), max: Math.max(...glucoseValues), mean: Math.round(mean(glucoseValues)) },
    insulin: {
      min: Math.min(...insulinValues),
      max: Math.max(...insulinValues),
      mean: Math.round(mean(insulinValues)),
      total: insulinValues.reduce((sum, value) => sum + value, 0),
    },
    carbs: {
      min: Math.min(...carbValues),
      max: Math.max(...carbValues),
      total: carbValues.reduce((sum, value) => sum + value, 0),
    },
    minutes: minutes.reduce((sum, value) => sum + value, 0),
  };
}

function cycleDayInsight(phase, glucose, average, ovulation) {
  const delta = glucose - average;
  const compared = Math.abs(delta) < 6
    ? `close to this cycle's average of ${average} mg/dL`
    : `${Math.abs(delta)} mg/dL ${delta > 0 ? "above" : "below"} this cycle's average of ${average} mg/dL`;
  const range = glucose >= 180
    ? "The daily mean is at or above 180 mg/dL."
    : glucose < 70
      ? "The daily mean is below 70 mg/dL."
      : "The daily mean sits between 70 and 180 mg/dL.";
  const lead = ovulation
    ? `${phase} day. Predicted ovulation is a timing marker, not a measured hormone. Recorded glucose is ${compared}.`
    : `${phase} day. Recorded glucose is ${compared}.`;
  return `${lead} ${range}`;
}

function attr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

const cyclePhase = {
  menstrual: "#f6d0d4",
  follicular: "#d7f1fb",
  fertile: "#f8e7b0",
  luteal: "#e6def6",
  ink: "#4f6a92",
};

const tidepool = {
  glucose: "#76D3A6",
  low: "#FF8B7C",
  lowText: "#DB2E2C",
  lowWash: "#FFE8E4",
  veryLow: "#FB5951",
  high: "#BB9AE7",
  highText: "#744AC2",
  highWash: "#F3ECFB",
  insulin: "#708FC2",
  bolus: "#7CD0F0",
  carbs: "#FFE8CF",
  marker: "#6480FB",
  plot: "#E3EAED",
  grid: "#B9C8D0",
  text: "#727375",
};

function limitCycleWindow(start, end, total) {
  const minSpan = Math.min(3, total);
  let nextStart = Math.min(total, Math.max(0, start));
  let nextEnd = Math.min(total, Math.max(0, end));
  if (nextEnd - nextStart < minSpan) {
    if (nextStart + minSpan <= total) nextEnd = nextStart + minSpan;
    else nextStart = nextEnd - minSpan;
  }
  return { start: nextStart, end: nextEnd };
}

function clampCycleWindow(start, end, total) {
  const limited = limitCycleWindow(start, end, total);
  const minSpan = Math.min(3, total);
  let nextStart = Math.round(limited.start * 2) / 2;
  let nextEnd = Math.round(limited.end * 2) / 2;
  if (nextEnd - nextStart < minSpan) {
    if (nextStart + minSpan <= total) nextEnd = nextStart + minSpan;
    else nextStart = nextEnd - minSpan;
  }
  return { start: nextStart, end: nextEnd };
}

function activeCycleWindow(total) {
  const source = state.tab === "cycle-insights-2" ? state.cycleWindow2 : state.cycleWindow;
  const end = source.end > 0 ? source.end : total;
  return limitCycleWindow(source.start, end, total);
}

function cycleHandleMarkup(total) {
  return `
    <div class="chart-shade chart-shade-start" hidden></div>
    <div class="chart-shade chart-shade-end" hidden></div>
    <button class="chart-handle" type="button" data-edge="start" role="slider" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="${total}" aria-label="Left handle. Drag right to show fewer cycle days."></button>
    <button class="chart-handle" type="button" data-edge="end" role="slider" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="${total}" aria-label="Right handle. Drag left to show fewer cycle days."></button>
    <p class="chart-window cycle-window" hidden>
      <span class="cycle-window-label"></span>
      <button type="button" class="cycle-window-reset">Full cycle</button>
    </p>`;
}

function cycleOverlay(cycle) {
  if (!cycle.length) return "";
  const W = 1200;
  const H = 430;
  const top = 46;
  const height = 214;
  const bottom = top + height;
  const left = 0;
  const right = W;
  const plotW = right - left;
  const frame = activeCycleWindow(cycle.length);
  const span = Math.max(0.5, frame.end - frame.start);
  const slot = plotW / span;
  const phaseList = phaseSegments(cycle);
  let phaseCursor = 1;
  let fertileStart = 1;
  let fertileDays = 0;
  phaseList.forEach((segment) => {
    if (segment.key === "fertile") {
      fertileStart = phaseCursor;
      fertileDays = segment.days;
    }
    phaseCursor += segment.days;
  });
  const ovulationDay = fertileDays
    ? fertileStart + fertileDays - 1
    : Math.min(14, cycle.length);
  const yG = (value) => cycleGlucoseY(value, top, height);
  const yU = (units) => cycleInsulinY(units, top, height);
  const dayX = (day) => left + ((day - 1) - frame.start) * slot;
  const centerX = (day) => dayX(day) + slot / 2;
  const readings = Array.from({ length: cycle.length }, (_, index) => dayGlucose(index + 1, cycle.length, cycle.period));
  const average = Math.round(mean(readings));
  const grid = Array.from({ length: cycle.length + 1 }, (_, index) => {
    const x = left + (index - frame.start) * slot;
    return `<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${top}" y2="${bottom}" stroke="${tidepool.grid}"/>`;
  }).join("");
  let washDay = 1;
  const washes = phaseList.map((segment) => {
    const x = dayX(washDay);
    const width = segment.days * slot;
    washDay += segment.days;
    return "";
  }).join("");
  const bars = [];
  const points = [];
  const hits = [];
  for (let day = 1; day <= cycle.length; day += 1) {
    const glucose = readings[day - 1];
    const record = recordedFromGlucose(glucose);
    const tir = Math.max(0, Math.min(100, record.tir));
    const phase = cycleDayPhase(day, cycle);
    const when = cycleCalendarDate(cycle, day);
    const barW = Math.min(28, slot * 0.82);
    const x = centerX(day) - barW / 2;
    const y = yU(record.insulin);
    const barH = bottom - y;
    const radius = Math.min(2, barW / 2, barH / 2);
    const point = [centerX(day), yG(glucose)];
    bars.push(`<path d="M ${x.toFixed(1)} ${bottom} L ${x.toFixed(1)} ${(y + radius).toFixed(1)} Q ${x.toFixed(1)} ${y.toFixed(1)} ${(x + radius).toFixed(1)} ${y.toFixed(1)} L ${(x + barW - radius).toFixed(1)} ${y.toFixed(1)} Q ${(x + barW).toFixed(1)} ${y.toFixed(1)} ${(x + barW).toFixed(1)} ${(y + radius).toFixed(1)} L ${(x + barW).toFixed(1)} ${bottom} Z" fill="${tidepool.insulin}"/>`);
    points.push(point);
    hits.push(`<circle class="cycle-point" cx="${point[0].toFixed(1)}" cy="${point[1].toFixed(1)}" r="1" fill="none" data-x="${point[0].toFixed(1)}" data-y="${point[1].toFixed(1)}" data-when="${attr(when)}" data-title="${attr(`${when} · Cycle day ${day}`)}" data-phase="${attr(phase)}" data-insight="${attr(cycleDayInsight(phase, glucose, average, day === ovulationDay))}" data-ovulation="${day === ovulationDay ? "yes" : ""}" data-glucose="${glucose}" data-tir="${tir}" data-insulin="${record.insulin}"/>`);
  }
  const leftTicks = [350, 225, 150, 125, 54].map((value) => `<text class="cycle-axis" x="2" y="${(yG(value) + 5).toFixed(1)}">${value}</text>`).join("");
  const rightTicks = [100, 75, 50, 25, 0].map((value) => `<text class="cycle-axis" x="${W - 2}" y="${(yU(value) + 5).toFixed(1)}" text-anchor="end">${value} U</text>`).join("");
  const guide = (value) => {
    const y = yG(value);
    return `<line x1="0" x2="${W}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#5CBF8A" stroke-dasharray="5 5"/>
      <rect x="40" y="${(y - 13).toFixed(1)}" width="52" height="26" rx="13" fill="#fff" stroke="#76D3A6"/>
      <text class="cycle-guide" x="66" y="${(y + 5).toFixed(1)}" text-anchor="middle" style="fill:#159B41">${value}</text>`;
  };
  const phaseY = bottom + 40;
  const days = Array.from({ length: cycle.length }, (_, index) => {
    const day = index + 1;
    const x = centerX(day);
    const y = phaseY;
    if (day <= cycle.period) {
      return `<circle cx="${x.toFixed(1)}" cy="${y - 4}" r="13" fill="none" stroke="#F6D0D4" stroke-width="1.5"/><text class="cycle-day period" x="${x.toFixed(1)}" y="${y}" text-anchor="middle">${day}</text>`;
    }
    if (day === ovulationDay) {
      return `<circle cx="${x.toFixed(1)}" cy="${y - 4}" r="13" fill="none" stroke="${tidepool.marker}" stroke-dasharray="2.2 2.2"/><text class="cycle-day" x="${x.toFixed(1)}" y="${y}" text-anchor="middle">${day}</text>`;
    }
    return `<text class="cycle-day" x="${x.toFixed(1)}" y="${y}" text-anchor="middle">${day}</text>`;
  }).join("");
  const line = cycleSmoothPath(points);
  const windowNote = frame.start > 0.01 || frame.end < cycle.length - 0.01
    ? ` Showing cycle days ${Math.floor(frame.start) + 1} through ${Math.ceil(frame.end)}.`
    : "";
  return `
    <div class="cycle-chart" data-total="${cycle.length}" data-left="${left}" data-right="${right}" data-width="${W}">
    <svg class="cycle-overlay cycle-tide" viewBox="0 0 ${W} ${H}" role="img" aria-label="Daily mean glucose and total daily insulin across ${cycle.length} cycle days.${windowNote} Dashed green lines mark 70 and 180 mg/dL. Day ${ovulationDay} is a predicted ovulation marker. Hover the glucose line for that day's recorded values. These figures are recorded. This is not a medication recommendation.">
      <rect x="16" y="8" width="11" height="11" fill="${tidepool.glucose}"/>
      <text class="cycle-legend" x="34" y="18"><tspan class="cycle-legend-strong">Daily Mean Glucose</tspan><tspan> mg/dL</tspan></text>
      <line x1="248" y1="14" x2="272" y2="14" stroke="#5CBF8A" stroke-dasharray="3 2"/>
      <text class="cycle-legend" x="278" y="18">70 and 180 mg/dL</text>
      <rect x="${W - 188}" y="8" width="11" height="11" fill="${tidepool.insulin}"/>
      <text class="cycle-legend" x="${W - 170}" y="18"><tspan class="cycle-legend-strong">Total Daily Dose</tspan><tspan> U</tspan></text>
      <defs><clipPath id="cycle-window-clip"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
      <g clip-path="url(#cycle-window-clip)">
      ${grid}
      ${washes}
      ${bars.join("")}
      <path d="${line}" fill="none" stroke="${tidepool.glucose}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      <line class="cycle-marker-line" x1="0" x2="0" y1="${top}" y2="${bottom}" stroke="${tidepool.text}" stroke-opacity="0.45" opacity="0" pointer-events="none"/>
      <circle class="cycle-marker" r="6" fill="#fff" stroke="${tidepool.glucose}" stroke-width="3" opacity="0" pointer-events="none"/>
      ${hits.join("")}
      <path class="cycle-line-hit" d="${line}" fill="none" stroke="transparent" stroke-width="28" pointer-events="stroke"/>
      ${days}
      </g>
      ${guide(180)}
      ${guide(70)}
      ${leftTicks}
      ${rightTicks}
      <text class="cycle-side" x="8" y="${phaseY - 22}">Cycle Day</text>
      <rect x="${left}" y="${top}" width="${plotW}" height="${phaseY + 16 - top}" fill="transparent"/>
    </svg>
    ${cycleHandleMarkup(cycle.length)}
    <div class="cycle-tip record-tip" hidden>
      <div class="record-tip-card">
        <p class="record-tip-time"></p>
        <dl class="record-tip-rows"></dl>
        <p class="record-tip-copy"></p>
        <div class="record-tip-entry"></div>
        <p class="record-tip-note">Recorded. Not a medication recommendation.</p>
      </div>
    </div>
    </div>
  `;
}

function bindCycleTips() {
  $$(".cycle-chart").forEach((chart) => {
    const svg = chart.querySelector("svg");
    const hit = chart.querySelector(".cycle-line-hit");
    const tip = chart.querySelector(".cycle-tip");
    const marker = chart.querySelector(".cycle-marker");
    const markerLine = chart.querySelector(".cycle-marker-line");
    const points = [...chart.querySelectorAll(".cycle-point")];
    if (!svg || !hit || !tip || !points.length) return;
    const hide = () => {
      tip.hidden = true;
      marker.setAttribute("opacity", "0");
      markerLine.setAttribute("opacity", "0");
    };
    const show = (point) => {
      const when = point.dataset.when || point.dataset.title;
      const rows = [
        ["Cycle phase", point.dataset.phase],
        ["Daily mean glucose", `${point.dataset.glucose} mg/dL`],
        ["Time in range", `${point.dataset.tir}%`],
        ["Total daily dose", `${point.dataset.insulin} U`],
      ];
      if (point.dataset.ovulation) rows.push(["Predicted ovulation", "Timing marker, not a measured hormone"]);
      if (point.dataset.method) {
        rows.push(
          ["Contraception", point.dataset.method],
          ["Oura exercise", point.dataset.exercise || "None recorded"],
          ["Carbohydrates", `${point.dataset.carbs} g`],
          ["Therapy setting", point.dataset.therapy || "No change recorded"],
        );
      }
      fillRecordTip(tip, when, rows, point.dataset.insight || "");
      tip.hidden = false;
      const x = Number(point.dataset.x);
      const y = Number(point.dataset.y);
      marker.setAttribute("cx", x);
      marker.setAttribute("cy", y);
      marker.setAttribute("opacity", "1");
      markerLine.setAttribute("x1", x);
      markerLine.setAttribute("x2", x);
      markerLine.setAttribute("opacity", "1");
      const view = svg.viewBox.baseVal;
      const svgBox = svg.getBoundingClientRect();
      const px = svgBox.left + (x / view.width) * svgBox.width;
      const py = svgBox.top + (y / view.height) * svgBox.height;
      placeRecordTip(tip, { top: py - 6, left: px - 6, right: px + 6, width: 12, height: 12 }, chart);
    };
    const plotLeft = Number(chart.dataset.left);
    const plotRight = Number(chart.dataset.right);
    svg.addEventListener("pointermove", (event) => {
      const cursor = svg.createSVGPoint();
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      const matrix = svg.getScreenCTM();
      if (!matrix) return;
      const local = cursor.matrixTransform(matrix.inverse());
      if (local.x < plotLeft || local.x > plotRight) {
        hide();
        return;
      }
      let nearest = points[0];
      let best = Infinity;
      points.forEach((point) => {
        const dx = Number(point.dataset.x) - local.x;
        const distance = dx * dx;
        if (distance < best) {
          best = distance;
          nearest = point;
        }
      });
      show(nearest);
    });
    svg.addEventListener("pointerleave", hide);
  });
}

function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function recordedFromGlucose(glucose) {
  return {
    glucose,
    tir: Math.round(86 - (glucose - 104) * (17 / 36)),
    insulin: Math.round(33 + (glucose - 104) * (9 / 36)),
  };
}

function cycleRecord(cycle) {
  if (!cycle.length) return null;
  const values = [];
  for (let day = 1; day <= cycle.length; day += 1) values.push(dayGlucose(day, cycle.length, cycle.period));
  return recordedFromGlucose(Math.round(mean(values)));
}

function bucketRecords(list) {
  const buckets = { period: [], after: [], luteal: [] };
  list.forEach((cycle) => {
    for (let day = 1; day <= cycle.length; day += 1) {
      const value = dayGlucose(day, cycle.length, cycle.period);
      const bucket = day <= cycle.period ? "period" : day < 16 ? "after" : "luteal";
      buckets[bucket].push(value);
    }
  });
  return {
    period: recordedFromGlucose(Math.round(mean(buckets.period))),
    after: recordedFromGlucose(Math.round(mean(buckets.after))),
    luteal: recordedFromGlucose(Math.round(mean(buckets.luteal))),
  };
}

function gapPhrase(later, earlier, unit) {
  const gap = later - earlier;
  if (gap === 0) return `the same ${unit}`;
  return `${Math.abs(gap)} ${unit} ${gap > 0 ? "higher" : "lower"}`;
}

function cycleWindow(list, daysFor) {
  const glucoses = [];
  const tirs = [];
  const insulins = [];
  list.forEach((cycle) => {
    if (!cycle.length) return;
    daysFor(cycle).forEach((day) => {
      if (day < 1 || day > cycle.length) return;
      const glucose = dayGlucose(day, cycle.length, cycle.period);
      const record = recordedFromGlucose(glucose);
      glucoses.push(glucose);
      tirs.push(Math.max(0, Math.min(100, record.tir)));
      insulins.push(record.insulin);
    });
  });
  if (!glucoses.length) return null;
  return {
    days: glucoses.length,
    glucose: Math.round(mean(glucoses)),
    tir: Math.round(mean(tirs)),
    insulin: Math.round(mean(insulins)),
  };
}

function exerciseWindow(list, daysFor) {
  const minutes = [];
  list.forEach((cycle) => {
    if (!cycle.length) return;
    daysFor(cycle).forEach((day) => {
      if (day < 1 || day > cycle.length) return;
      minutes.push(cycleDayRecord(cycle, day).exerciseMinutes);
    });
  });
  if (!minutes.length) return null;
  return { minutes: Math.round(mean(minutes)) };
}

function glucoseTone(value) {
  if (value > 180) return "#856ACF";
  if (value < 70) return "#DB2E2C";
  return "#08A057";
}

function rangeMark(value) {
  const min = 40;
  const max = 250;
  const width = 124;
  const xOf = (reading) => ((reading - min) / (max - min)) * width;
  const lowW = xOf(70);
  const targetW = xOf(180) - lowW;
  const highW = width - lowW - targetW;
  const left = xOf(Math.min(max, Math.max(min, value)));
  return `<div class="range-mark" style="color:${glucoseTone(value)}" aria-hidden="true"><span class="low" style="width:${lowW.toFixed(1)}px"></span><span class="target" style="width:${targetW.toFixed(1)}px"></span><span class="high" style="width:${highW.toFixed(1)}px"></span><i style="left:${left.toFixed(1)}px"></i></div>`;
}

function insightStat(figure, unit, tone, when, hint, mark) {
  const caption = when || hint
    ? `<div>${when ? `<p class="when">${when}</p>` : ""}${hint ? `<p class="hint">${hint}</p>` : ""}</div>`
    : "";
  return `<div class="insight-stat">
    <p class="figure" style="color:${tone}">${figure} <small>${unit}</small></p>
    ${mark || ""}
    ${caption}
  </div>`;
}

function renderCycleInsights(list) {
  const host = $("#cycle-insight-cards");
  if (!host) return;
  const complete = (list || []).filter((cycle) => cycle.length);
  const early = cycleWindow(complete, () => [1, 2, 3, 4]);
  const late = cycleWindow(complete, (cycle) => [cycle.length - 2, cycle.length - 1, cycle.length]);
  if (!early || !late) {
    host.innerHTML = `<article class="insight-card"><h2>Cycle insights</h2><p class="insight-banner">A comparison needs a complete cycle.</p></article>`;
    return;
  }
  const glucoseGap = late.glucose - early.glucose;
  const tirGap = late.tir - early.tir;
  const insulinGap = late.insulin - early.insulin;
  const scope = complete.length === 1 ? "In this cycle" : `Across these ${complete.length} cycles`;
  const direction = (gap) => (gap > 0 ? "higher" : gap < 0 ? "lower" : "the same");
  const glucoseLine = glucoseGap === 0
    ? `${scope}, recorded glucose averaged ${early.glucose} mg/dL on cycle days 1–4 and in the last 3 days before the next period.`
    : `${scope}, recorded glucose in the last 3 days before the next period averaged ${Math.abs(glucoseGap)} mg/dL ${direction(glucoseGap)} than on cycle days 1–4.`;
  const tirLine = tirGap === 0
    ? `${scope}, recorded time in range averaged ${early.tir}% on cycle days 1–4 and in the last 3 days before the next period.`
    : `${scope}, recorded time in range in the last 3 days before the next period averaged ${Math.abs(tirGap)} points ${direction(tirGap)} than on cycle days 1–4.`;
  const insulinLine = insulinGap === 0
    ? `${scope}, recorded insulin averaged ${early.insulin} U on cycle days 1–4 and in the last 3 days before the next period.`
    : `${scope}, recorded insulin in the last 3 days before the next period averaged ${Math.abs(insulinGap)} U ${insulinGap > 0 ? "more" : "less"} than on cycle days 1–4.`;
  const pair = (left, right) => `<div class="insight-stats">${left}<div class="insight-rule"></div>${right}</div>`;
  host.innerHTML = `
    <article class="insight-card">
      <h2>Glucose</h2>
      <div class="insight-banner">${icon("bulb")}<p>${glucoseLine}</p></div>
      ${pair(
        insightStat(early.glucose, "mg/dL", glucoseTone(early.glucose), "", "", rangeMark(early.glucose)),
        insightStat(late.glucose, "mg/dL", glucoseTone(late.glucose), "", "", rangeMark(late.glucose)),
      )}
    </article>
    <article class="insight-card">
      <h2>Average Time in Range (TIR)</h2>
      <div class="insight-banner">${icon("bulb")}<p>${tirLine} <button class="insight-explore" type="button">Explore potential causes.</button></p></div>
      ${pair(
        insightStat(early.tir, "%", "#08A057", "", ""),
        insightStat(late.tir, "%", "#08A057", "", ""),
      )}
    </article>
    <article class="insight-card">
      <h2>Insulin</h2>
      <div class="insight-banner">${icon("bulb")}<p>${insulinLine} Recorded totals, not a recommendation to change a dose.</p></div>
      ${pair(
        insightStat(early.insulin, "U", "#0096D1", "", ""),
        insightStat(late.insulin, "U", "#0096D1", "", ""),
      )}
    </article>
  `;
}

function renderCycleTherapy(list) {
  const lead = $("#cycle-therapy-lead");
  const host = $("#cycle-therapy-balance");
  if (!lead || !host) return;
  const complete = (list || []).filter((cycle) => cycle.length);
  if (!complete.length) {
    lead.textContent = "The recorded profile is below. Comparing it with a cycle needs a complete cycle.";
    host.innerHTML = "";
    return;
  }
  const { period, after, luteal } = bucketRecords(complete);
  const which = complete.length === 1 ? "this cycle" : "these cycles";
  const insulinGap = luteal.insulin - after.insulin;
  const insulinPhrase = insulinGap === 0
    ? "the same insulin"
    : `${Math.abs(insulinGap)} U ${insulinGap > 0 ? "more" : "less"} insulin`;
  lead.textContent = `One profile was recorded for every day of ${which}. Basal stayed 25.65 U, carb ratios stayed 7.5 to 8.5 g/U, and sensitivity stayed 35 to 37 mg/dL per U. Luteal days averaged ${gapPhrase(luteal.glucose, after.glucose, "mg/dL")} glucose and ${insulinPhrase} than the days after bleeding. Period days averaged ${gapPhrase(period.glucose, after.glucose, "mg/dL")} glucose. A few recorded setting changes sit on luteal days in the chart, inside those ranges. This describes the record. It is not a recommendation to change a dose.`;
  const columns = [
    ["After bleeding", after, "after"],
    ["Period", period, "period"],
    ["Luteal", luteal, "luteal"],
  ];
  const settingRows = [
    ["Programmed basal", "25.65 U"],
    ["Carb ratio", "7.5–8.5 g/U"],
    ["Sensitivity", "35–37 mg/dL/U"],
    ["Correction range", "105–115 mg/dL"],
  ];
  host.innerHTML = `
    <table class="balance">
      <caption>The programmed profile repeats. Recorded glucose and insulin do not.</caption>
      <thead>
        <tr><th scope="col">Recorded</th>${columns.map(([name]) => `<th scope="col">${name}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${settingRows.map(([name, value]) => `<tr class="balance-set"><th scope="row">${name}</th>${columns.map(() => `<td>${value}</td>`).join("")}</tr>`).join("")}
        <tr class="balance-recorded"><th scope="row">Glucose</th>${columns.map(([, record, tone]) => `<td class="${tone}">${record.glucose} mg/dL</td>`).join("")}</tr>
        <tr class="balance-recorded"><th scope="row">Insulin delivered</th>${columns.map(([, record, tone]) => `<td class="${tone}">${record.insulin} U</td>`).join("")}</tr>
      </tbody>
    </table>
  `;
}

function shortCycleRange(cycle) {
  const trim = (value) => value.replace(/, \d{4}$/, "");
  return `${trim(cycle.start)} – ${trim(cycle.end)}`;
}

function connectedCycleOverlay(list) {
  const total = list.reduce((sum, cycle) => sum + cycle.length, 0);
  const W = 1200;
  const top = 70;
  const height = 214;
  const bottom = top + height;
  const left = 0;
  const right = W;
  const plotW = right - left;
  const frame = activeCycleWindow(total);
  const span = Math.max(0.5, frame.end - frame.start);
  const zoomedOut = span > total * 0.75;
  const detailed = span <= 18;
  const slot = plotW / span;
  const yG = (value) => cycleGlucoseY(value, top, height);
  const yU = (units) => cycleInsulinY(units, top, height);
  const dayX = (index) => left + (index - frame.start) * slot;
  const centerX = (index) => dayX(index) + slot / 2;
  const carbStack = state.tab === "cycle-insights-2";
  const exerciseY = bottom + 110;
  const stripY = bottom + 148;
  const phaseY = stripY + 26;
  const lineY = phaseY + 44;
  const lineH = 48;
  const carbY = carbStack ? phaseY : bottom + 140;
  const settingY = carbStack ? lineY + lineH + 20 : bottom + 182;
  const H = carbStack ? settingY + 92 : 576;
  const yCarb = (grams) => {
    const t = Math.min(1, Math.max(0, (grams - 90) / 110));
    return lineY + lineH - 8 - t * (lineH - 16);
  };
  const bars = [];
  const points = [];
  const hits = [];
  const washes = [];
  const days = [];
  const dates = [];
  const dividers = [];
  const exerciseMarks = [];
  const carbMarks = [];
  const carbStrip = [];
  const carbPhase = [];
  const carbLinePoints = [];
  const settingMarks = [];
  const methodMarks = [];
  const glucoseBands = [];
  const glucoseDots = [];
  let cursor = 0;
  list.forEach((cycle, cycleIndex) => {
    const readings = Array.from({ length: cycle.length }, (_, index) => dayGlucose(index + 1, cycle.length, cycle.period));
    const average = Math.round(mean(readings));
    const phaseList = phaseSegments(cycle);
    let phaseCursor = 1;
    let fertileStart = 1;
    let fertileDays = 0;
    phaseList.forEach((segment) => {
      if (segment.key === "fertile") {
        fertileStart = phaseCursor;
        fertileDays = segment.days;
      }
      phaseCursor += segment.days;
    });
    const ovulationDay = fertileDays ? fertileStart + fertileDays - 1 : Math.min(14, cycle.length);
    const method = cycleMethod(cycle);
    const previousMethod = cycleIndex > 0 ? cycleMethod(list[cycleIndex - 1]) : null;
    if (cycleIndex > 0) {
      const x = dayX(cursor);
      dividers.push(`<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${top}" y2="${settingY + 22}" stroke="#8aa0b4" stroke-width="1.5"/>`);
      if (previousMethod && previousMethod.name !== method.name) {
        const label = `${previousMethod.name} → ${method.name}`;
        const labelW = Math.max(148, label.length * 6.4 + 16);
        methodMarks.push(`<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${top}" y2="${settingY + 22}" stroke="#7A4EA3" stroke-width="1.5" stroke-dasharray="3 3"/>`);
        methodMarks.push(`<g aria-label="Recorded method change on ${cycle.start}: ${previousMethod.name} to ${method.name}. This is the method on record. It is not a recommendation to start, stop, or change a method."><rect x="${(x + 8).toFixed(1)}" y="${top + 8}" width="${labelW.toFixed(1)}" height="22" rx="11" fill="#E7D7F5" stroke="#7A4EA3"/><text x="${(x + 16).toFixed(1)}" y="${top + 23}" fill="#271b46" font-size="11" font-weight="600">${label}</text></g>`);
      }
    }
    let washDay = 0;
    phaseList.forEach((segment) => {
      const x = dayX(cursor + washDay);
      const width = segment.days * slot;
      if (zoomedOut) {
        const spread = phaseVariability(cycle, washDay + 1, segment.days, readings);
        const bandTop = yG(spread.glucose.max);
        const bandBottom = yG(spread.glucose.min);
        const bandH = Math.max(8, bandBottom - bandTop);
        glucoseBands.push(`<rect x="${(x + 3).toFixed(1)}" y="${bandTop.toFixed(1)}" width="${Math.max(4, width - 6).toFixed(1)}" height="${bandH.toFixed(1)}" rx="6" fill="${tidepool.glucose}" fill-opacity="0.55"/>`);
        const meanY = yG(spread.glucose.mean);
        glucoseBands.push(`<line x1="${(x + 8).toFixed(1)}" x2="${(x + width - 8).toFixed(1)}" y1="${meanY.toFixed(1)}" y2="${meanY.toFixed(1)}" stroke="#159B41" stroke-width="3"/>`);
        if (spread.minutes) {
          const exH = Math.min(16, Math.max(8, (spread.minutes / 360) * 16));
          exerciseMarks.push(`<rect x="${(x + 4).toFixed(1)}" y="${(exerciseY + 18 - exH).toFixed(1)}" width="${Math.max(4, width - 8).toFixed(1)}" height="${exH.toFixed(1)}" rx="4" fill="#4A60E2"/>`);
          if (width > 72) {
            exerciseMarks.push(`<text class="cycle-phase" x="${(x + width / 2).toFixed(1)}" y="${(exerciseY + 15).toFixed(1)}" text-anchor="middle" style="fill:#fff">${formatExerciseMinutes(spread.minutes)}</text>`);
          }
        }
      }
      if (carbStack && zoomedOut && segment.days) {
        let sum = 0;
        for (let offset = 1; offset <= segment.days; offset += 1) sum += cycleDayRecord(cycle, washDay + offset).carbs;
        const phaseAvg = Math.round(sum / segment.days);
        const barH = Math.max(8, (phaseAvg / 200) * 32);
        const barX = x + 4;
        const barW = Math.max(4, width - 8);
        carbPhase.push(`<rect x="${barX.toFixed(1)}" y="${(phaseY + 34 - barH).toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" rx="4" fill="#E8B56A"/>`);
        if (width > 64) {
          carbPhase.push(`<text class="cycle-phase" x="${(x + width / 2).toFixed(1)}" y="${(phaseY + 16).toFixed(1)}" text-anchor="middle" style="fill:#5c3b12;font-size:11px;font-weight:600">${phaseAvg} g</text>`);
        }
      }
      washDay += segment.days;
    });
    const spanX = dayX(cursor);
    const spanW = cycle.length * slot;
    dates.push(`<text class="cycle-legend" x="${(spanX + spanW / 2).toFixed(1)}" y="${top - 16}" text-anchor="middle">${shortCycleRange(cycle)}</text>`);
    for (let day = 1; day <= cycle.length; day += 1) {
      const index = cursor + day - 1;
      const glucose = readings[day - 1];
      const record = recordedFromGlucose(glucose);
      const tir = Math.max(0, Math.min(100, record.tir));
      const phase = cycleDayPhase(day, cycle);
      const when = cycleCalendarDate(cycle, day);
      const barW = Math.min(18, slot * 0.62);
      const x = centerX(index) - barW / 2;
      const y = yU(record.insulin);
      const barH = bottom - y;
      const radius = Math.min(2, barW / 2, barH / 2);
      const point = [centerX(index), yG(glucose)];
      bars.push(`<path d="M ${x.toFixed(1)} ${bottom} L ${x.toFixed(1)} ${(y + radius).toFixed(1)} Q ${x.toFixed(1)} ${y.toFixed(1)} ${(x + radius).toFixed(1)} ${y.toFixed(1)} L ${(x + barW - radius).toFixed(1)} ${y.toFixed(1)} Q ${(x + barW).toFixed(1)} ${y.toFixed(1)} ${(x + barW).toFixed(1)} ${(y + radius).toFixed(1)} L ${(x + barW).toFixed(1)} ${bottom} Z" fill="${tidepool.insulin}"/>`);
      if (!zoomedOut) glucoseDots.push(`<circle cx="${point[0].toFixed(1)}" cy="${point[1].toFixed(1)}" r="3.5" fill="#fff" stroke="#159B41" stroke-width="2"/>`);
      points.push(point);
      const context = cycleDayRecord(cycle, day);
      hits.push(`<circle class="cycle-point" cx="${point[0].toFixed(1)}" cy="${point[1].toFixed(1)}" r="1" fill="none" data-x="${point[0].toFixed(1)}" data-y="${point[1].toFixed(1)}" data-when="${attr(when)}" data-title="${attr(`${when} · Cycle day ${day}`)}" data-phase="${attr(phase)}" data-insight="${attr(cycleDayInsight(phase, glucose, average, day === ovulationDay))}" data-ovulation="${day === ovulationDay ? "yes" : ""}" data-glucose="${glucose}" data-tir="${tir}" data-insulin="${record.insulin}" data-method="${attr(method.name)}" data-exercise="${attr(context.exercise)}" data-carbs="${context.carbs}" data-therapy="${attr(context.therapy)}"/>`);
      const laneX = dayX(index);
      const laneW = Math.max(2, slot - 1.4);
      if (!zoomedOut && context.exercise) {
        exerciseMarks.push(`<rect x="${(laneX + 0.6).toFixed(1)}" y="${exerciseY + 4}" width="${laneW.toFixed(1)}" height="14" rx="4" fill="#4A60E2"/>`);
        if (detailed || (carbStack && slot >= 36)) {
          exerciseMarks.push(`<text x="${centerX(index).toFixed(1)}" y="${(exerciseY + 14).toFixed(1)}" text-anchor="middle" style="fill:#fff;font-size:11px;font-weight:600">${context.exercise}</text>`);
        }
      }
      const carbH = Math.max(3, (context.carbs / 200) * 30);
      if (carbStack) {
        carbStrip.push(`<rect x="${laneX.toFixed(1)}" y="${stripY}" width="${Math.max(1, slot - 0.6).toFixed(1)}" height="16" fill="${carbGold(context.carbs)}"/>`);
        carbLinePoints.push([centerX(index), yCarb(context.carbs), context.carbs]);
        if (!zoomedOut) {
          carbPhase.push(`<rect x="${(laneX + 0.6).toFixed(1)}" y="${(phaseY + 34 - carbH).toFixed(1)}" width="${laneW.toFixed(1)}" height="${carbH.toFixed(1)}" rx="1" fill="#FFE8CF"/>`);
          if (slot >= 18) {
            carbPhase.push(`<text class="cycle-phase" x="${centerX(index).toFixed(1)}" y="${(phaseY + 12).toFixed(1)}" text-anchor="middle" style="font-size:11px">${context.carbs} g</text>`);
          }
        }
      } else {
        carbMarks.push(`<rect x="${(laneX + 0.6).toFixed(1)}" y="${(carbY + 34 - carbH).toFixed(1)}" width="${laneW.toFixed(1)}" height="${carbH.toFixed(1)}" rx="1" fill="#FFE8CF"/>`);
        if (detailed) {
          carbMarks.push(`<text class="cycle-phase" x="${centerX(index).toFixed(1)}" y="${(carbY + 13).toFixed(1)}" text-anchor="middle" style="font-size:11px">${context.carbs} g</text>`);
        }
      }
      if (context.therapy) {
        if (slot >= 34) {
          const label = detailed ? context.therapy : context.therapyShort;
          settingMarks.push(`<line x1="${centerX(index).toFixed(1)}" x2="${centerX(index).toFixed(1)}" y1="${settingY + 4}" y2="${settingY + 18}" stroke="#4f6a92" stroke-width="1.5"/><text x="${(centerX(index) + 6).toFixed(1)}" y="${(settingY + 15).toFixed(1)}" style="fill:#271b46;font-size:11px;font-weight:600">${label}</text>`);
        } else {
          settingMarks.push(`<circle cx="${centerX(index).toFixed(1)}" cy="${(settingY + 11).toFixed(1)}" r="4.5" fill="#4f6a92"/>`);
        }
      }
      const labelX = centerX(index);
      const labelY = bottom + 40;
      const markerR = Math.max(7, Math.min(13, slot * 0.42));
      if (day <= cycle.period) {
        days.push(`<circle cx="${labelX.toFixed(1)}" cy="${labelY - 4}" r="${markerR.toFixed(1)}" fill="none" stroke="#F6D0D4" stroke-width="1.5"/><text class="cycle-day period" x="${labelX.toFixed(1)}" y="${labelY}" text-anchor="middle">${day}</text>`);
      } else if (day === ovulationDay) {
        days.push(`<circle cx="${labelX.toFixed(1)}" cy="${labelY - 4}" r="${markerR.toFixed(1)}" fill="none" stroke="${tidepool.marker}" stroke-dasharray="2.2 2.2"/><text class="cycle-day" x="${labelX.toFixed(1)}" y="${labelY}" text-anchor="middle">${day}</text>`);
      } else {
        days.push(`<text class="cycle-day" x="${labelX.toFixed(1)}" y="${labelY}" text-anchor="middle">${day}</text>`);
      }
    }
    cursor += cycle.length;
  });
  const grid = zoomedOut ? "" : Array.from({ length: total + 1 }, (_, index) => {
    const x = dayX(index);
    return `<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${top}" y2="${bottom}" stroke="${tidepool.grid}" stroke-opacity="0.55"/>`;
  }).join("");
  const leftTicks = [350, 225, 150, 125, 54].map((value) => `<text class="cycle-axis" x="2" y="${(yG(value) + 5).toFixed(1)}">${value}</text>`).join("");
  const rightTicks = [100, 75, 50, 25, 0].map((value) => `<text class="cycle-axis" x="${W - 2}" y="${(yU(value) + 5).toFixed(1)}" text-anchor="end">${value} U</text>`).join("");
  const guide = (value) => {
    const y = yG(value);
    return `<line x1="0" x2="${W}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#5CBF8A" stroke-dasharray="5 5"/>
      <rect x="40" y="${(y - 13).toFixed(1)}" width="52" height="26" rx="13" fill="#fff" stroke="#76D3A6"/>
      <text class="cycle-guide" x="66" y="${(y + 5).toFixed(1)}" text-anchor="middle" style="fill:#159B41">${value}</text>`;
  };
  const line = cycleSmoothPath(points);
  const carbAverage = carbLinePoints.length ? Math.round(mean(carbLinePoints.map((point) => point[2]))) : 0;
  const carbPath = carbLinePoints.map((point, index) => `${index ? "L" : "M"}${point[0].toFixed(1)} ${point[1].toFixed(1)}`).join(" ");
  const carbLine = carbStack && carbLinePoints.length
    ? `<path d="${carbPath}" fill="none" stroke="#C9842A" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      <line x1="0" x2="${W}" y1="${yCarb(carbAverage).toFixed(1)}" y2="${yCarb(carbAverage).toFixed(1)}" stroke="#727375" stroke-dasharray="4 4"/>
      <text class="cycle-note" x="${W - 8}" y="${(yCarb(carbAverage) - 6).toFixed(1)}" text-anchor="end">avg ${carbAverage} g</text>`
    : "";
  const glucoseTitle = zoomedOut ? "Glucose range" : "Daily Mean Glucose";
  const insulinTitle = "Total Daily Dose";
  const noteLead = carbStack
    ? "The shade is daily carbohydrate intake, darker when higher. Drag either handle inward, or circle a region, and the middle row shows each day."
    : zoomedOut
    ? "Green is the glucose range for each phase. Each blue bar is that day’s total insulin dose. Gold bars are that day’s carbohydrates, and exercise is the phase total."
    : "Luteal days show more recorded Oura exercise, higher carbohydrate totals, and a few therapy setting changes than the days after bleeding.";
  const noteTail = carbStack
    ? "The line is daily grams against the average of these cycles. Recorded intake, not a recommendation for what to eat."
    : zoomedOut
    ? "Drag a handle inward to see each day. Zoom further and a setting change shows its previous and new value. Recorded values, not a recommendation to change a dose, a method, or what to eat."
    : "Recorded values. This is not a recommendation to change a dose or what to eat.";
  const first = list[0];
  const last = list[list.length - 1];
  const windowNote = frame.start > 0.01 || frame.end < total - 0.01
    ? ` Showing days ${Math.floor(frame.start) + 1} through ${Math.ceil(frame.end)}.`
    : "";
  return `
    <div class="cycle-chart is-connected" data-total="${total}" data-left="${left}" data-right="${right}" data-width="${W}">
    <svg class="cycle-overlay cycle-tide is-connected" viewBox="0 0 ${W} ${H}" role="img" aria-label="${zoomedOut ? "Zoomed out variability" : "Daily values"} for glucose, insulin, carbohydrates, and Oura exercise across ${list.length} cycles, ${first.start} to ${last.end}.${windowNote} ${zoomedOut ? "Each phase shows the lowest to highest day. Drag a handle inward to see each day." : "Hover the glucose line for that day's recorded values."} These figures are recorded. This is not a recommendation to change a dose, a method, or what to eat.">
      <rect x="16" y="8" width="11" height="11" fill="${tidepool.glucose}"/>
      <text class="cycle-legend" x="34" y="18"><tspan class="cycle-legend-strong">${glucoseTitle}</tspan><tspan> mg/dL</tspan></text>
      <line x1="248" y1="14" x2="272" y2="14" stroke="#5CBF8A" stroke-dasharray="3 2"/>
      <text class="cycle-legend" x="278" y="18">70 and 180 mg/dL</text>
      <rect x="${W - 220}" y="8" width="11" height="11" fill="${tidepool.insulin}"/>
      <text class="cycle-legend" x="${W - 202}" y="18"><tspan class="cycle-legend-strong">${insulinTitle}</tspan><tspan> U</tspan></text>
      <defs><clipPath id="cycle-window-clip"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>
      <g clip-path="url(#cycle-window-clip)">
      ${grid}
      ${washes.join("")}
      ${glucoseBands.join("")}
      ${bars.join("")}
      ${zoomedOut ? "" : `<path d="${line}" fill="none" stroke="${tidepool.glucose}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`}
      ${glucoseDots.join("")}
      <line class="cycle-marker-line" x1="0" x2="0" y1="${top}" y2="${settingY + 22}" stroke="${tidepool.text}" stroke-opacity="0.45" opacity="0" pointer-events="none"/>
      <circle class="cycle-marker" r="6" fill="#fff" stroke="${tidepool.glucose}" stroke-width="3" opacity="0" pointer-events="none"/>
      ${hits.join("")}
      <path class="cycle-line-hit" d="${line}" fill="none" stroke="transparent" stroke-width="28" pointer-events="stroke"/>
      ${dividers.join("")}
      ${days.join("")}
      ${dates.join("")}
      ${exerciseMarks.join("")}
      ${carbStrip.join("")}
      ${carbPhase.join("")}
      ${carbLine}
      ${carbMarks.join("")}
      ${settingMarks.join("")}
      ${methodMarks.join("")}
      </g>
      ${guide(180)}
      ${guide(70)}
      ${leftTicks}
      ${rightTicks}
      <text class="cycle-side" x="8" y="${bottom + 18}">Cycle Day</text>
      <rect x="0" y="${exerciseY + 2}" width="72" height="18" fill="#f7f7f8"/>
      <text class="cycle-side" x="8" y="${exerciseY + 15}">Exercise</text>
      ${carbStack ? `
      <rect x="0" y="${stripY}" width="52" height="16" fill="#f7f7f8"/>
      <text class="cycle-side" x="8" y="${stripY + 12}">Shade</text>
      <rect x="0" y="${phaseY + 8}" width="68" height="18" fill="#f7f7f8"/>
      <text class="cycle-side" x="8" y="${phaseY + 22}">By phase</text>
      <rect x="0" y="${lineY + 14}" width="78" height="18" fill="#f7f7f8"/>
      <text class="cycle-side" x="8" y="${lineY + 28}">Vs average</text>
      ` : `
      <rect x="0" y="${carbY + 8}" width="68" height="18" fill="#f7f7f8"/>
      <text class="cycle-side" x="8" y="${carbY + 22}">Carbs g</text>
      `}
      <rect x="0" y="${settingY + 2}" width="68" height="18" fill="#f7f7f8"/>
      <text class="cycle-side" x="8" y="${settingY + 15}">Settings</text>
      <text class="cycle-note" x="8" y="${settingY + 48}">${noteLead}</text>
      <text class="cycle-note" x="8" y="${settingY + 66}">${noteTail}</text>
      <rect x="${left}" y="${top}" width="${plotW}" height="${bottom + 56 - top}" fill="transparent"/>
    </svg>
    ${cycleHandleMarkup(total)}
    <div class="cycle-tip record-tip" hidden>
      <div class="record-tip-card">
        <p class="record-tip-time"></p>
        <dl class="record-tip-rows"></dl>
        <p class="record-tip-copy"></p>
        <div class="record-tip-entry"></div>
        <p class="record-tip-note">Recorded. Not a medication recommendation.</p>
      </div>
    </div>
    </div>
  `;
}

function connectedCycleRow(list) {
  return `
    <div class="cycle-row">
      <div class="cycle-head">
        <span class="cycle-dates">Cycle: ${list[0].start} – ${list[list.length - 1].end}</span>
      </div>
      ${connectedCycleOverlay(list)}
    </div>
  `;
}

function cycleRow(cycle, arrows) {
  return `
    <div class="cycle-row">
      <div class="cycle-head">
        ${arrows ? `<button class="icon-btn" id="cycle-prev" type="button" aria-label="Previous cycle">${chevron("left")}</button>` : ""}
        <span class="cycle-dates">Cycle: ${cycle.start} – ${cycle.end}</span>
        ${arrows ? `<button class="icon-btn" id="cycle-next" type="button" aria-label="Next cycle">${chevron("right")}</button>` : ""}
      </div>
      ${cycleOverlay(cycle)}
    </div>
  `;
}

function cyclePlotPercent(day, origin, geometry) {
  const plotLeft = (geometry.left / geometry.width) * 100;
  const plotRight = (geometry.right / geometry.width) * 100;
  const span = Math.max(0.5, origin.end - origin.start);
  return plotLeft + ((day - origin.start) / span) * (plotRight - plotLeft);
}

function placeCycleHandles() {
  const chart = document.querySelector("#cycle-list .cycle-chart");
  if (!chart) return;
  const total = Number(chart.dataset.total);
  const geometry = {
    left: Number(chart.dataset.left),
    right: Number(chart.dataset.right),
    width: Number(chart.dataset.width),
  };
  const window = activeCycleWindow(total);
  chart.querySelectorAll(".chart-handle").forEach((handle) => {
    const day = handle.dataset.edge === "start" ? window.start : window.end;
    handle.style.left = `${Math.min(cyclePlotPercent(day, window, geometry), 99)}%`;
    handle.setAttribute("aria-valuenow", String(day));
    handle.setAttribute("aria-valuemax", String(total));
    const from = Math.floor(window.start) + 1;
    const to = Math.ceil(window.end);
    handle.setAttribute("aria-valuetext", `Days ${from} through ${to}`);
  });
  const label = chart.querySelector(".cycle-window");
  const text = chart.querySelector(".cycle-window-label");
  if (!label) return;
  const zoomed = window.start > 0.01 || window.end < total - 0.01;
  label.hidden = !zoomed;
  if (text) text.textContent = `Days ${Math.floor(window.start) + 1}–${Math.ceil(window.end)}`;
}

function replaceCycleSvg() {
  const chart = document.querySelector("#cycle-list .cycle-chart");
  if (!chart) return;
  const holder = document.createElement("div");
  if (state.period === "custom" && state.custom) holder.innerHTML = cycleOverlay(state.custom);
  else if (Number(state.period) === 1) holder.innerHTML = cycleOverlay(cycles[state.cursor]);
  else holder.innerHTML = connectedCycleOverlay([...cycles.slice(0, Number(state.period))].reverse());
  const next = holder.querySelector("svg");
  const current = chart.querySelector("svg");
  if (next && current) current.replaceWith(next);
  bindCycleTips();
  placeCycleHandles();
}

function placeDailyStage() {
  const stage = $("#daily-stage");
  if (!stage) return;
  const host = document.querySelector('[data-view="daily"]');
  if (host && stage.parentElement !== host) host.appendChild(stage);
  stage.classList.remove("is-phone");
}

function placeCycleStage() {
  const stage = $("#cycle-stage");
  if (!stage) return;
  const circle = state.tab === "cycle-insights-2";
  const host = document.querySelector(`[data-view="${circle ? "cycle-insights-2" : "cycle"}"]`);
  if (host && stage.parentElement !== host) host.appendChild(stage);
  stage.classList.toggle("is-circle-zoom", circle);
}

function cycleIndexAt(chart, x) {
  const total = Number(chart.dataset.total);
  const left = Number(chart.dataset.left);
  const right = Number(chart.dataset.right);
  const frame = activeCycleWindow(total);
  const span = Math.max(0.5, frame.end - frame.start);
  return frame.start + ((x - left) / (right - left)) * span;
}

function bindCircleZoom() {
  const list = $("#cycle-list");
  if (!list || list.dataset.lasso) return;
  list.dataset.lasso = "true";
  let lasso = null;
  const localPoint = (svg, event) => {
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const matrix = svg.getScreenCTM();
    if (!matrix) return null;
    return point.matrixTransform(matrix.inverse());
  };
  const pathData = (points, close) => {
    const [first, ...rest] = points;
    const lines = rest.map((point) => `L ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
    return `M ${first.x.toFixed(1)} ${first.y.toFixed(1)} ${lines}${close ? " Z" : ""}`;
  };
  list.addEventListener("pointerdown", (event) => {
    if (state.tab !== "cycle-insights-2" || event.button !== 0) return;
    if (event.target.closest("button, a, input, .record-tip")) return;
    const chart = event.target.closest(".cycle-chart");
    const svg = chart?.querySelector("svg");
    if (!chart || !svg) return;
    const origin = localPoint(svg, event);
    if (!origin) return;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "cycle-lasso");
    path.setAttribute("d", pathData([origin], false));
    svg.appendChild(path);
    lasso = { pointer: event.pointerId, chart, svg, path, points: [origin] };
    try { chart.setPointerCapture(event.pointerId); } catch (error) { /* Pointer capture needs a real pointer. */ }
    const tip = chart.querySelector(".cycle-tip");
    if (tip) tip.hidden = true;
    event.preventDefault();
  });
  list.addEventListener("pointermove", (event) => {
    if (!lasso || lasso.pointer !== event.pointerId) return;
    const point = localPoint(lasso.svg, event);
    if (!point) return;
    const last = lasso.points[lasso.points.length - 1];
    if (Math.hypot(point.x - last.x, point.y - last.y) < 4) return;
    lasso.points.push(point);
    lasso.path.setAttribute("d", pathData(lasso.points, false));
  });
  const finish = (event) => {
    if (!lasso || lasso.pointer !== event.pointerId) return;
    const { chart, path, points } = lasso;
    lasso = null;
    path.remove();
    const total = Number(chart.dataset.total);
    if (!total || points.length < 4) return;
    const xs = points.map((point) => point.x);
    const width = Math.max(...xs) - Math.min(...xs);
    if (width < 18) return;
    const start = cycleIndexAt(chart, Math.min(...xs));
    const end = cycleIndexAt(chart, Math.max(...xs));
    glideResize("cycle2", clampCycleWindow(Math.min(start, end), Math.max(start, end), total), (window) => {
      state.cycleWindow2 = window;
    }, replaceCycleSvg, () => activeCycleWindow(total));
  };
  list.addEventListener("pointerup", finish);
  list.addEventListener("pointercancel", finish);
  list.addEventListener("dblclick", (event) => {
    if (state.tab !== "cycle-insights-2") return;
    if (event.target.closest("button, a, input")) return;
    const total = Number(list.querySelector(".cycle-chart")?.dataset.total || 0);
    if (!total) return;
    glideResize("cycle2", { start: 0, end: total }, (window) => {
      state.cycleWindow2 = window;
    }, replaceCycleSvg, () => activeCycleWindow(total));
  });
}

function cycleResizeMode() {
  const circle = state.tab === "cycle-insights-2";
  return {
    key: circle ? "cycle2" : "cycle",
    commit: (window) => {
      if (circle) state.cycleWindow2 = window;
      else state.cycleWindow = window;
    },
  };
}

function bindCycleHandles() {
  const list = $("#cycle-list");
  if (!list || list.dataset.handles) return;
  list.dataset.handles = "true";
  let drag = null;
  list.addEventListener("pointerdown", (event) => {
    const handle = event.target.closest(".chart-handle");
    if (!handle || event.button !== 0) return;
    const chart = handle.closest(".cycle-chart");
    const svg = chart?.querySelector("svg");
    if (!svg) return;
    const total = Number(chart.dataset.total);
    const geometry = {
      left: Number(chart.dataset.left),
      right: Number(chart.dataset.right),
      width: Number(chart.dataset.width),
    };
    const mode = cycleResizeMode();
    drag = {
      edge: handle.dataset.edge,
      pointer: event.pointerId,
      originX: event.clientX,
      origin: shownResize(mode.key, activeCycleWindow(total)),
      total,
      geometry,
      mode,
      width: svg.getBoundingClientRect().width * ((geometry.right - geometry.left) / geometry.width),
    };
    try { handle.setPointerCapture(event.pointerId); } catch (error) { /* Pointer capture needs a real pointer. */ }
    event.preventDefault();
  });
  list.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointer !== event.pointerId) return;
    const span = drag.origin.end - drag.origin.start;
    const delta = ((event.clientX - drag.originX) / drag.width) * span;
    drag.next = drag.edge === "start"
      ? limitCycleWindow(drag.origin.start + delta, drag.origin.end, drag.total)
      : limitCycleWindow(drag.origin.start, drag.origin.end + delta, drag.total);
    glideResize(drag.mode.key, drag.next, drag.mode.commit, replaceCycleSvg, () => activeCycleWindow(drag.total));
  });
  const finish = (event) => {
    if (!drag || drag.pointer !== event.pointerId) return;
    const next = drag.next;
    const total = drag.total;
    const mode = drag.mode;
    drag = null;
    if (next) {
      glideResize(mode.key, clampCycleWindow(next.start, next.end, total), mode.commit, replaceCycleSvg, () => activeCycleWindow(total));
    } else placeCycleHandles();
  };
  list.addEventListener("pointerup", finish);
  list.addEventListener("pointercancel", finish);
  list.addEventListener("dblclick", (event) => {
    const handle = event.target.closest(".chart-handle");
    if (!handle) return;
    const total = Number(handle.closest(".cycle-chart")?.dataset.total || 0);
    if (!total) return;
    const mode = cycleResizeMode();
    glideResize(mode.key, { start: 0, end: total }, mode.commit, replaceCycleSvg, () => activeCycleWindow(total));
  });
  list.addEventListener("keydown", (event) => {
    const handle = event.target.closest(".chart-handle");
    if (!handle) return;
    const chart = handle.closest(".cycle-chart");
    const total = Number(chart?.dataset.total || 0);
    if (!total) return;
    const step = event.shiftKey ? 1 : 0.5;
    let window = activeCycleWindow(total);
    if (event.key === "ArrowLeft") {
      if (handle.dataset.edge === "start") window.start -= step;
      else window.end -= step;
    } else if (event.key === "ArrowRight") {
      if (handle.dataset.edge === "start") window.start += step;
      else window.end += step;
    } else if (event.key === "Home" && handle.dataset.edge === "start") window.start = 0;
    else if (event.key === "End" && handle.dataset.edge === "end") window.end = total;
    else return;
    event.preventDefault();
    const mode = cycleResizeMode();
    glideResize(mode.key, clampCycleWindow(window.start, window.end, total), mode.commit, replaceCycleSvg, () => activeCycleWindow(total));
  });
  list.addEventListener("click", (event) => {
    if (!event.target.closest(".cycle-window-reset")) return;
    const total = Number(document.querySelector("#cycle-list .cycle-chart")?.dataset.total || 0);
    if (!total) return;
    const key = state.tab === "cycle-insights-2" ? "cycle2" : "cycle";
    glideResize(key, { start: 0, end: total }, (window) => {
      if (state.tab === "cycle-insights-2") state.cycleWindow2 = window;
      else state.cycleWindow = window;
    }, replaceCycleSvg, () => activeCycleWindow(total));
  });
}

function renderCycles() {
  cancelResize("cycle");
  $$("[data-period]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.period === state.period));
  });
  if (state.period === "custom" && state.custom) {
    $("#cycle-list").classList.remove("is-months");
    $("#cycle-list").innerHTML = cycleRow(state.custom, false);
    $("#chart-title").textContent = "Custom range";
    renderCycleInsights([state.custom]);
    renderCycleTherapy([state.custom]);
    renderPeriodImpact();
    renderHormonePattern();
    bindCycleTips();
    placeCycleHandles();
    return;
  }
  const count = Number(state.period);
  const showArrows = count === 1;
  const visible = showArrows ? [cycles[state.cursor]] : cycles.slice(0, count);
  const list = $("#cycle-list");
  list.classList.remove("is-months");
  const chronological = [...visible].reverse();
  renderCycleInsights(visible);
  renderCycleTherapy(visible);
  list.innerHTML = count > 1
    ? connectedCycleRow(chronological)
    : visible.map((cycle) => cycleRow(cycle, showArrows)).join("");
  if (showArrows) {
    $("#cycle-prev").addEventListener("click", () => {
      state.cursor = (state.cursor + cycles.length - 1) % cycles.length;
      renderCycles();
    });
    $("#cycle-next").addEventListener("click", () => {
      state.cursor = (state.cursor + 1) % cycles.length;
      renderCycles();
    });
  }
  drawCycleChart();
  renderPeriodImpact();
  renderHormonePattern();
  bindCycleTips();
  placeCycleHandles();
}

function selectedCycles() {
  const count = Number(state.period);
  if (![1, 2, 3].includes(count)) return [];
  return count === 1 ? [cycles[state.cursor]] : cycles.slice(0, count);
}

function renderHormonePattern() {
  const host = $("#hormone-chart");
  const list = selectedCycles();
  const names = { 1: "Last cycle", 2: "Last 2 cycles", 3: "Last 3 cycles" };
  const span = $("#hormone-span");
  if (span) span.textContent = names[list.length] ? `${names[list.length]} · recorded` : "Complete cycles";
  if (!list.length) {
    if (host) host.innerHTML = "";
    const legend = $("#hormone-legend");
    const phases = $("#hormone-phases");
    const details = $("#hormone-details");
    if (legend) legend.innerHTML = "";
    if (phases) phases.innerHTML = "";
    if (details) details.innerHTML = "";
    const note = $("#hormone-glucose");
    if (note) note.textContent = "Choose Last Cycle, Last 2 Cycles, or Last 3 Cycles. This chart uses complete cycles.";
    return;
  }
  const stats = bucketRecords(list);
  const repeats = list.filter((cycle) => {
    const parts = { after: [], luteal: [] };
    for (let day = 1; day <= cycle.length; day += 1) {
      const value = dayGlucose(day, cycle.length, cycle.period);
      if (day > cycle.period && day < 16) parts.after.push(value);
      if (day >= 16) parts.luteal.push(value);
    }
    return mean(parts.luteal) > mean(parts.after);
  }).length;
  paintGlucoseLegend(list.length);
  paintPhasePills(stats);
  paintGlucoseDetails(stats, list.length, repeats);
  if (host) host.innerHTML = glucoseByCycleDay(list);
  const note = $("#hormone-glucose");
  if (note) {
    note.textContent = "Progesterone is typically highest in the luteal band, and estrogen typically peaks just before ovulation. Those hormones were not measured, so they are not drawn on this scale. Glucose, time in range, and insulin describe the recorded days. They are not a medication recommendation.";
  }
}

function paintGlucoseLegend(count) {
  const legend = $("#hormone-legend");
  if (!legend) return;
  const each = count > 1 ? `<span><i style="background:${tidepool.marker}"></i>Each cycle</span>` : "";
  legend.innerHTML = `
    <span><i style="background:${tidepool.glucose}"></i>${count > 1 ? "Mean glucose" : "This cycle"}</span>
    ${each}
    <span><i class="guide"></i>70 and 180 mg/dL</span>
  `;
}

function paintPhasePills(stats) {
  const phases = $("#hormone-phases");
  if (!phases) return;
  phases.innerHTML = [
    ["menstrual", "Period", stats.period],
    ["follicular", "After bleeding", stats.after],
    ["luteal", "Luteal", stats.luteal],
  ].map(([tone, name, record]) => `<span class="hormone-phase ${tone}">${name} · ${record.glucose} mg/dL</span>`).join("");
}

function paintGlucoseDetails(stats, count, repeats) {
  const details = $("#hormone-details");
  if (!details) return;
  const glucoseGap = stats.luteal.glucose - stats.after.glucose;
  const tirGap = stats.after.tir - stats.luteal.tir;
  const insulinGap = stats.luteal.insulin - stats.after.insulin;
  const repeatText = count === 1
    ? "One cycle is on screen. Last 3 Cycles shows whether this luteal rise appears again."
    : `Luteal glucose is higher than the days after bleeding in ${repeats} of ${count} cycles.`;
  const cards = [
    ["Period", `${stats.period.glucose} mg/dL`, `${stats.period.tir}% in range · ${stats.period.insulin} U recorded`, "While bleeding."],
    ["After bleeding", `${stats.after.glucose} mg/dL`, `${stats.after.tir}% in range · ${stats.after.insulin} U recorded`, "Through day 15, including the fertile days."],
    ["Luteal", `${stats.luteal.glucose} mg/dL`, `${stats.luteal.tir}% in range · ${stats.luteal.insulin} U recorded`, "Day 16 through the next period."],
    ["Luteal vs after", `${glucoseGap} mg/dL`, `${tirGap} points less time in range · ${insulinGap} U more insulin recorded`, repeatText],
  ];
  details.innerHTML = cards.map(([title, value, line, note]) => `
    <div>
      <h3>${title}</h3>
      <p><b>${value}</b> · ${line}. ${note}</p>
    </div>
  `).join("");
}

function glucoseByCycleDay(list) {
  const maxLen = Math.max(...list.map((cycle) => cycle.length));
  const maxPeriod = Math.max(...list.map((cycle) => cycle.period));
  const W = 880;
  const H = 250;
  const left = 48;
  const right = 848;
  const top = 16;
  const bottom = 196;
  const xBand = (day) => left + ((day - 1) / maxLen) * (right - left);
  const step = xBand(2) - xBand(1);
  const x = (day) => xBand(day) + step / 2;
  const y = (value) => bottom - ((value - 60) / 160) * (bottom - top);
  const band = (start, end, fill) => {
    const x1 = xBand(start);
    const width = xBand(end) - x1;
    return `<rect x="${x1.toFixed(1)}" y="${top}" width="${Math.max(0, width).toFixed(1)}" height="${bottom - top}" fill="${fill}"/>`;
  };
  const lineFor = (cycle, stroke, width) => {
    const points = [];
    for (let day = 1; day <= cycle.length; day += 1) {
      points.push(`${x(day).toFixed(1)},${y(dayGlucose(day, cycle.length, cycle.period)).toFixed(1)}`);
    }
    return `<polyline points="${points.join(" ")}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round"/>`;
  };
  const byDay = Array.from({ length: maxLen }, () => []);
  list.forEach((cycle) => {
    for (let day = 1; day <= cycle.length; day += 1) byDay[day - 1].push(dayGlucose(day, cycle.length, cycle.period));
  });
  const meanLine = byDay.map((values, index) => `${x(index + 1).toFixed(1)},${y(mean(values)).toFixed(1)}`).join(" ");
  const individuals = list.length > 1
    ? list.map((cycle) => lineFor(cycle, tidepool.marker, 1.4)).join("")
    : "";
  const average = list.length > 1
    ? `<polyline points="${meanLine}" fill="none" stroke="${tidepool.glucose}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>`
    : lineFor(list[0], tidepool.glucose, 2.6);
  const rangeLine = (value) => `<line x1="${left}" x2="${right}" y1="${y(value)}" y2="${y(value)}" stroke="#5CBF8A" stroke-dasharray="4 4"/>`;
  const yLabel = (value) => `<text class="tiny" x="${left - 8}" y="${y(value) + 4}" text-anchor="end">${value}</text>`;
  const ticks = [...new Set([1, maxPeriod, 16, maxLen])];
  const dayLabels = ticks.map((day) => `<text class="tiny" x="${x(day)}" y="${bottom + 18}" text-anchor="middle">${day === 16 ? "16" : day}</text>`).join("");
  return `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Recorded glucose by cycle day. The green line is the average of the cycles in view. Guides mark 70 and 180 mg/dL. Shaded bands are period, the days after bleeding, and luteal. This is not a medication recommendation.">
      <text class="tiny" x="${left}" y="12">mg/dL</text>
      ${band(1, maxPeriod + 1, "rgba(246,208,212,0.85)")}
      ${band(maxPeriod + 1, 16, "rgba(215,241,251,0.9)")}
      ${band(16, maxLen + 1, "rgba(230,222,246,0.92)")}
      ${rangeLine(180)}
      ${rangeLine(70)}
      ${yLabel(180)}
      ${yLabel(70)}
      ${individuals}
      ${average}
      ${dayLabels}
      <text class="tiny" x="${right}" y="${bottom + 36}" text-anchor="end">Cycle day</text>
    </svg>
  `;
}

const cycleGlucoseTraces = {
  "29-3": [152, 141, 128, 118, 109, 104, 136, 112, 98, 107, 121, 114, 108, 166, 119, 124, 118, 131, 142, 138, 155, 149, 172, 161, 188, 154, 146, 139, 158],
  "32-4": [158, 149, 136, 122, 111, 104, 99, 142, 108, 101, 116, 97, 124, 110, 105, 119, 128, 122, 141, 136, 152, 168, 144, 159, 181, 173, 148, 139, 156, 164, 151, 143],
  "28-3": [144, 133, 121, 106, 101, 114, 98, 109, 103, 118, 126, 111, 104, 132, 115, 122, 129, 136, 148, 141, 163, 178, 156, 192, 171, 149, 138, 161],
};

function dayGlucose(day, length, periodDays) {
  const trace = cycleGlucoseTraces[`${length}-${periodDays}`];
  if (trace && trace[day - 1] != null) return trace[day - 1];
  if (day <= periodDays) {
    const drop = periodDays <= 1 ? 0 : (day - 1) / (periodDays - 1);
    return 140 - drop * 14;
  }
  if (day < 16) return 104 + ((day % 3) - 1) * 2;
  const span = Math.max(1, length - 16);
  return 112 + ((day - 16) / span) * 48;
}

function renderPeriodImpact() {
  const lead = $("#impact-lead");
  const note = $("#impact-note");
  const chart = $("#impact-chart");
  const compare = $("#impact-compare");
  if (state.period === "custom") {
    $("#impact-span").textContent = "Complete cycles";
    lead.textContent = "This comparison uses complete cycles. Choose Last Cycle, Last 2 Cycles, or Last 3 Cycles.";
    chart.innerHTML = "";
    compare.innerHTML = "";
    note.textContent = "";
    return;
  }
  const count = Number(state.period);
  const visible = count === 1 ? [cycles[state.cursor]] : cycles.slice(0, count);
  const maxLen = Math.max(...visible.map((cycle) => cycle.length));
  const maxPeriod = Math.max(...visible.map((cycle) => cycle.period));
  const byDay = Array.from({ length: maxLen }, () => []);
  const buckets = { period: [], after: [], luteal: [] };
  visible.forEach((cycle) => {
    for (let day = 1; day <= cycle.length; day += 1) {
      const value = dayGlucose(day, cycle.length, cycle.period);
      byDay[day - 1].push(value);
      const bucket = day <= cycle.period ? "period" : day < 16 ? "after" : "luteal";
      buckets[bucket].push(value);
    }
  });
  const period = recordedFromGlucose(Math.round(mean(buckets.period)));
  const after = recordedFromGlucose(Math.round(mean(buckets.after)));
  const luteal = recordedFromGlucose(Math.round(mean(buckets.luteal)));
  const names = { 1: "Last cycle", 2: "Last 2 cycles", 3: "Last 3 cycles" };
  $("#impact-span").textContent = names[count];
  const higher = period.glucose - after.glucose;
  const tirGap = after.tir - period.tir;
  lead.textContent = `Period days averaged ${higher} mg/dL higher glucose and ${tirGap} points less time in range than the days after bleeding ended. Recorded insulin stayed nearer the luteal days than those quieter days.`;
  note.textContent = "Glucose is the average by cycle day. Time in range and insulin are the recorded daily averages for the same days. This describes these cycles. It is not a medication recommendation.";

  const rows = [
    ["menstrual", "Period", period, "While bleeding"],
    ["follicular", "After period", after, "Before the luteal phase"],
    ["luteal", "Luteal", luteal, "Day 16 through the next period"],
  ];
  compare.innerHTML = rows.map(([tone, name, stats, hint]) => `
    <div class="impact-row">
      <i class="swatch" style="background:${cyclePhase[tone]}"></i>
      <strong>${name}</strong>
      <span>${stats.glucose} mg/dL · ${stats.tir}% in range · ${stats.insulin} U recorded</span>
      <span>${hint}</span>
    </div>
  `).join("");

  const W = 640;
  const H = 210;
  const left = 36;
  const right = 624;
  const top = 16;
  const bottom = 176;
  const x = (day) => left + ((day - 1) / (maxLen - 1)) * (right - left);
  const y = (value) => bottom - ((value - 70) / 120) * (bottom - top);
  const points = byDay.map((values, index) => `${x(index + 1)},${y(mean(values))}`).join(" ");
  const shade = x(maxPeriod + 0.5) - x(1);
  const guides = [180, 70].map((value) => `<line x1="${left}" x2="${right}" y1="${y(value)}" y2="${y(value)}" stroke="#5CBF8A" stroke-dasharray="4 4"/>`).join("");
  const labels = [1, maxPeriod, 16, maxLen]
    .filter((day, index, list) => list.indexOf(day) === index)
    .map((day) => `<text class="tiny" x="${x(day)}" y="198" text-anchor="middle">${day === 1 ? "Day 1" : day === maxPeriod ? "Period" : day === 16 ? "Luteal" : `Day ${day}`}</text>`)
    .join("");
  chart.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Average glucose by cycle day, with period days shaded">
      <rect x="${x(1)}" y="${top}" width="${Math.max(8, shade)}" height="${bottom - top}" fill="${cyclePhase.menstrual}" fill-opacity="0.9"/>
      ${guides}
      <polyline points="${points}" fill="none" stroke="${tidepool.glucose}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
      <text class="tiny" x="4" y="${y(180) + 4}">180</text>
      <text class="tiny" x="4" y="${y(70) + 4}">70</text>
      ${labels}
    </svg>
  `;
}

function chevron(dir) {
  const d = dir === "left" ? "M11 4 6 9l5 5" : "M7 4l5 5-5 5";
  return `<svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="${d}" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function drawCycleChart() {
  const { g, u, title, mean } = seriesForPeriod();
  $("#chart-title").textContent = title;
  const W = 1100;
  const H = 430;
  const left = 78;
  const right = 1000;
  const top = state.period === "1" ? 118 : 72;
  const bottom = 330;
  const plotW = right - left;
  const plotH = bottom - top;
  const yGlu = (v) => top + ((350 - v) / (350 - 54)) * plotH;
  const yIns = (v) => bottom - (v / 100) * plotH;
  const x = (i) => left + (i / (g.length - 1)) * plotW;
  const line = g.map((v, i) => `${x(i).toFixed(1)},${yGlu(v).toFixed(1)}`).join(" ");
  const bars = u.map((v, i) => {
    const bw = Math.max(6, plotW / g.length - 8);
    const bx = x(i) - bw / 2;
    const by = yIns(v);
    return `<rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${(bottom - by).toFixed(1)}" rx="2" fill="${tidepool.insulin}"/>`;
  }).join("");
  const yTicks = [350, 225, 150, 125, 54];
  const yRight = [100, 75, 50, 25, 0];
  const leftLabels = yTicks.map((v) => `<text class="axis-label" x="${left - 12}" y="${yGlu(v) + 5}" text-anchor="end">${v}</text>`).join("");
  const rightLabels = yRight.map((v) => `<text class="axis-label" x="${right + 12}" y="${yIns(v) + 5}">${v} U</text>`).join("");
  const grid = [225, 180, 150, 125, 70].map((v) => `<line x1="${left}" x2="${right}" y1="${yGlu(v)}" y2="${yGlu(v)}" stroke="${tidepool.grid}" stroke-dasharray="3 4"/>`).join("");
  const days = g.map((_, i) => `<text class="tiny" x="${x(i)}" y="${bottom + 22}" text-anchor="middle">${i + 1}</text>`).join("");

  let phase = "";
  if (state.period === "1") {
    const cycle = cycles[state.cursor];
    const segments = phaseSegments(cycle);
    const colors = { menstrual: cyclePhase.menstrual, follicular: cyclePhase.follicular, fertile: cyclePhase.fertile, luteal: cyclePhase.luteal };
    const chips = colors;
    const ink = { menstrual: cyclePhase.ink, follicular: cyclePhase.ink, fertile: cyclePhase.ink, luteal: cyclePhase.ink };
    let cursor = 0;
    phase = `<text class="tiny" x="8" y="51">Cycle Phase</text>`;
    segments.forEach((segment) => {
      const width = (segment.days / g.length) * plotW;
      const start = left + (cursor / g.length) * plotW;
      phase += `
        <rect x="${start}" y="36" width="${width}" height="22" fill="${chips[segment.key]}"/>
        ${width > 90 ? `<text class="phase-label" x="${start + width / 2}" y="51" text-anchor="middle" fill="${ink[segment.key]}">${segment.name}</text>` : ""}
      `;
      cursor += segment.days;
    });
    for (let d = 11; d <= 15; d++) {
      phase += `<circle cx="${x(d - 1)}" cy="${bottom + 18}" r="9" fill="none" stroke="${tidepool.marker}" stroke-dasharray="2 2"/>`;
    }
  } else {
    phase = `<rect x="${left}" y="${top}" width="${plotW}" height="${plotH}" fill="${tidepool.plot}"/>`;
  }

  const pill = (v, label) => `
    <line x1="${left}" x2="${right}" y1="${yGlu(v)}" y2="${yGlu(v)}" stroke="#5CBF8A" stroke-dasharray="4 4"/>
    <rect x="8" y="${yGlu(v) - 11}" width="34" height="20" rx="4" fill="#fff" stroke="#76D3A6"/>
    <text class="tiny" x="25" y="${yGlu(v) + 3}" text-anchor="middle" fill="#159B41" font-weight="700">${label}</text>
  `;

  $("#cycle-chart").innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${title} glucose and insulin chart">
      <text class="tiny" x="${left}" y="18">${mean} Blood Glucose mg/dL</text>
      <text class="tiny" x="${right}" y="18" text-anchor="end">Total Daily Dose</text>
      ${phase}
      ${grid}
      ${bars}
      <polyline points="${line}" fill="none" stroke="${tidepool.glucose}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${pill(180, "180")}
      ${pill(70, "70")}
      ${leftLabels}
      ${rightLabels}
      ${days}
      <text class="tiny" x="${left - 8}" y="${bottom + 40}" text-anchor="end">Cycle Day</text>
    </svg>
  `;
}

function decemberPhase(date) {
  if (date <= 12) return { phase: "luteal", name: "Luteal" };
  if (date <= 15) return { phase: "menstrual", name: "Menstrual", periodDay: date - 12 };
  if (date <= 22) return { phase: "follicular", name: "Follicular" };
  if (date <= 27) return { phase: "fertile", name: "Fertile" };
  return { phase: "luteal", name: "Luteal" };
}

function formatDuration(minutes) {
  const rounded = Math.max(0, Math.round(minutes));
  const hours = Math.floor(rounded / 60);
  const mins = rounded % 60;
  if (!hours) return `${mins}m`;
  return mins ? `${hours}h ${mins}m` : `${hours}h`;
}

function traceStats(points) {
  const samples = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const [h0, v0] = points[i];
    const [h1, v1] = points[i + 1];
    const steps = Math.max(1, Math.round((h1 - h0) * 12));
    for (let step = 0; step < steps; step += 1) {
      samples.push(v0 + ((v1 - v0) * step) / steps);
    }
  }
  samples.push(points[points.length - 1][1]);
  const mean = samples.reduce((sum, value) => sum + value, 0) / samples.length;
  const variance = samples.reduce((sum, value) => sum + (value - mean) ** 2, 0) / samples.length;
  const bands = [0, 0, 0, 0, 0];
  samples.forEach((value) => {
    if (value < 54) bands[0] += 1;
    else if (value < 70) bands[1] += 1;
    else if (value <= 180) bands[2] += 1;
    else if (value <= 250) bands[3] += 1;
    else bands[4] += 1;
  });
  const colors = ["#FB5951", "#FB5951", "#76D3A6", "#B69CE2", "#8C65D6"];
  const labels = ["<54", "54–70", "70–180", "180–250", ">250"];
  const parts = bands.map((count, index) => {
    const pct = Math.round((count / samples.length) * 100);
    return [colors[index], pct, labels[index], formatDuration((count / samples.length) * 24 * 60), `${pct}%`];
  });
  const drift = 100 - parts.reduce((sum, part) => sum + part[1], 0);
  parts[2][1] += drift;
  parts[2][4] = `${parts[2][1]}%`;
  const min = Math.min(...points.map(([, value]) => value));
  const max = Math.max(...points.map(([, value]) => value));
  return {
    avg: Math.round(mean),
    sd: Math.round(Math.sqrt(variance)),
    cv: Math.round((Math.sqrt(variance) / mean) * 100),
    tir: parts[2][1],
    tirParts: parts,
    range: `${min} – ${max}`,
  };
}

function glucoseSegments(points) {
  const cuts = [54, 70, 180, 250];
  const split = [points[0]];
  for (let i = 1; i < points.length; i += 1) {
    const [h0, v0] = points[i - 1];
    const [h1, v1] = points[i];
    const crossings = cuts
      .filter((cut) => (v0 - cut) * (v1 - cut) < 0)
      .map((cut) => [h0 + ((h1 - h0) * (cut - v0)) / (v1 - v0), cut])
      .sort((a, b) => a[0] - b[0]);
    split.push(...crossings, points[i]);
  }
  return split;
}

function glucoseColor(value) {
  if (value < 54) return "#6b4c9a";
  if (value < 70) return "#e15b55";
  if (value <= 180) return "#3aaa6a";
  if (value <= 250) return "#f0a04b";
  return "#c94b8a";
}

function ouraTag(label, group, hour = null, chart = false, when = "") {
  return { label, group, hour, chart: Boolean(chart) && hour != null, when, source: "Oura Ring" };
}

const tagGroupOrder = [
  "Diet & Substances",
  "Health & Physical State",
  "Sleep & Environment",
  "Recovery & Therapies",
  "Workouts & Movement",
];

function defaultTags(date, info) {
  if (date === 14) {
    return [
      ouraTag("Period", "Health & Physical State", 4.2, true),
      ouraTag("Caffeine", "Diet & Substances", 7 + 10 / 60, false),
      ouraTag("Breakfast", "Diet & Substances", 8.15, true),
      ouraTag("Lunch", "Diet & Substances", 12.5, false),
      ouraTag("Headache", "Health & Physical State", 15.5, true),
      ouraTag("Dinner", "Diet & Substances", 18, false),
      ouraTag("Sauna", "Recovery & Therapies", 19.5, true),
    ];
  }
  const tags = [];
  if (info.phase === "menstrual") tags.push(ouraTag("Period", "Health & Physical State", 5.5, true));
  tags.push(ouraTag("Breakfast", "Diet & Substances", 8.15, true));
  tags.push(ouraTag("Lunch", "Diet & Substances", 12.6, true));
  return tags;
}

function tagWhen(hour) {
  if (hour == null) return "";
  const whole = Math.floor(hour);
  const minutes = Math.round((hour - whole) * 60);
  const suffix = whole >= 12 ? "pm" : "am";
  const hour12 = whole % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function windowClock(hour) {
  const clamped = Math.min(24, Math.max(0, hour));
  const whole = Math.floor(clamped + 1e-6);
  const minutes = Math.round((clamped - whole) * 60) % 60;
  const midnight = whole === 0 || whole === 24;
  const suffix = midnight || whole < 12 ? "am" : "pm";
  const hour12 = midnight ? 12 : whole % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function axisHours(start, end) {
  const span = end - start;
  const step = span <= 4 ? 0.5 : span <= 9 ? 1 : 3;
  const hours = [];
  const first = Math.ceil((start - 1e-6) / step) * step;
  for (let hour = first; hour < end - 0.05; hour += step) hours.push(Math.round(hour * 4) / 4);
  return hours;
}

function axisHourLabel(hour) {
  const whole = Math.floor(hour + 1e-6);
  const minutes = Math.round((hour - whole) * 60) % 60;
  const midnight = whole === 0 || whole === 24;
  const suffix = midnight || whole < 12 ? "am" : "pm";
  const hour12 = midnight ? 12 : whole % 12 || 12;
  return minutes ? `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}` : `${hour12} ${suffix}`;
}

function limitChartWindow(start, end) {
  const minSpan = 3;
  let nextStart = Math.min(24, Math.max(0, start));
  let nextEnd = Math.min(24, Math.max(0, end));
  if (nextEnd - nextStart < minSpan) {
    if (nextStart + minSpan <= 24) nextEnd = nextStart + minSpan;
    else nextStart = nextEnd - minSpan;
  }
  return { start: nextStart, end: nextEnd };
}

function clampChartWindow(start, end) {
  const limited = limitChartWindow(start, end);
  let nextStart = Math.round(limited.start * 4) / 4;
  let nextEnd = Math.round(limited.end * 4) / 4;
  if (nextEnd - nextStart < 3) {
    if (nextStart + 3 <= 24) nextEnd = nextStart + 3;
    else nextStart = nextEnd - 3;
  }
  return { start: nextStart, end: nextEnd };
}

function easeOutCurve(t) {
  const x1 = 0.2;
  const y1 = 0;
  const x2 = 0;
  const y2 = 1;
  const sampleX = (u) => 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u;
  const sampleY = (u) => 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u;
  const slopeX = (u) => 3 * (1 - u) * (1 - 3 * u) * x1 + 3 * u * (2 - 3 * u) * x2 + 3 * u * u;
  let u = t;
  for (let i = 0; i < 6; i += 1) {
    const dx = slopeX(u);
    if (Math.abs(dx) < 1e-4) break;
    u = Math.min(1, Math.max(0, u - (sampleX(u) - t) / dx));
  }
  return sampleY(u);
}

const resizeFollow = new Map();

function cancelResize(id) {
  const motion = resizeFollow.get(id);
  if (!motion?.frame) return;
  cancelAnimationFrame(motion.frame);
  motion.frame = 0;
}

function shownResize(id, fallback) {
  const motion = resizeFollow.get(id);
  return motion ? { start: motion.current.start, end: motion.current.end } : { ...fallback };
}

function glideResize(id, target, commit, paint, read) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let motion = resizeFollow.get(id);
  if (!motion) {
    const seed = read ? read() : target;
    motion = { current: { start: seed.start, end: seed.end }, from: { start: seed.start, end: seed.end }, to: { start: seed.start, end: seed.end }, started: 0, frame: 0 };
    resizeFollow.set(id, motion);
  }
  motion.from = { start: motion.current.start, end: motion.current.end };
  motion.to = { start: target.start, end: target.end };
  motion.started = performance.now();
  motion.commit = commit;
  motion.paint = paint;
  const arrived = Math.abs(motion.from.start - motion.to.start) < 0.001 && Math.abs(motion.from.end - motion.to.end) < 0.001;
  if (reduce || arrived) {
    if (motion.frame) cancelAnimationFrame(motion.frame);
    motion.frame = 0;
    motion.current = { start: motion.to.start, end: motion.to.end };
    commit(motion.current);
    paint();
    return;
  }
  if (motion.frame) return;
  const duration = 240;
  const step = (now) => {
    const t = Math.min(1, (now - motion.started) / duration);
    const eased = easeOutCurve(t);
    motion.current = {
      start: motion.from.start + (motion.to.start - motion.from.start) * eased,
      end: motion.from.end + (motion.to.end - motion.from.end) * eased,
    };
    motion.commit(motion.current);
    motion.paint();
    motion.frame = t < 1 ? requestAnimationFrame(step) : 0;
  };
  motion.frame = requestAnimationFrame(step);
}

const dayStories = {
  8: {
    glucose: [[0, 146], [3, 138], [6, 132], [8, 128], [9.5, 176], [11, 168], [12.5, 154], [13.5, 210], [15, 236], [16.3, 188], [17.2, 142], [19, 158], [20.5, 184], [22, 166], [24, 152]],
    basalU: 18.6,
    basalCurve: [0.7, 0.75, 0.6, 0.85, 1.1, 0.9, 0.7, 0.8, 0.65],
    boluses: [
      { hour: 9.4, carbs: 48, units: 5.2, delivered: true },
      { hour: 13.2, carbs: 62, units: 7.4, delivered: true },
      { hour: 19.2, carbs: 40, units: 4.1, delivered: true },
    ],
    sleep: [[0, 7.6]],
    tags: [
      ouraTag("Breakfast", "Diet & Substances", 9.4, true),
      ouraTag("Lunch", "Diet & Substances", 13.2, true),
      ouraTag("Dinner", "Diet & Substances", 19.1, true),
    ],
    run: { name: "Walk", start: 16 + 20 / 60, end: 17, when: "4:20–5:00 pm", hr: 112, calories: 160, stress: "Low" },
    presets: [{ name: "Premeal", start: 9, end: 10.5, needs: "150%", range: "100–140 mg/dL", when: "9:00–10:30 am" }],
    auto: 94,
  },
  9: {
    glucose: [[0, 134], [4, 126], [6.5, 118], [8, 162], [9.5, 148], [12, 156], [13.2, 194], [15, 176], [17, 188], [19, 214], [21, 196], [23, 172], [24, 164]],
    basalU: 19.4,
    basalCurve: [0.6, 0.65, 0.55, 0.9, 1.2, 1.15, 1.05, 1.25, 0.9],
    boluses: [
      { hour: 7.8, carbs: 36, units: 4.4, delivered: true },
      { hour: 12.1, carbs: 55, units: 6.8, delivered: true },
      { hour: 18.5, carbs: 28, units: 3.2, delivered: true },
    ],
    sleep: [[0, 6.3]],
    tags: [
      ouraTag("Coffee", "Diet & Substances", 6.4, true),
      ouraTag("Breakfast", "Diet & Substances", 8.1, true),
      ouraTag("Lunch", "Diet & Substances", 12.1, true),
    ],
    run: null,
    presets: [{ name: "Premeal", start: 7.5, end: 8.5, needs: "140%", range: "100–140 mg/dL", when: "7:30–8:30 am" }],
    auto: 98,
  },
  10: {
    glucose: [[0, 172], [3, 164], [6, 158], [8.2, 196], [10, 174], [12.4, 182], [14, 124], [15.2, 68], [16.4, 96], [18, 132], [20, 158], [22, 148], [24, 142]],
    basalU: 17.8,
    basalCurve: [0.8, 0.85, 0.7, 0.95, 1.0, 0.55, 0.5, 0.85, 0.7],
    boluses: [
      { hour: 8, carbs: 42, units: 5.1, delivered: true },
      { hour: 12.2, carbs: 58, units: 8.2, delivered: true },
      { hour: 18.5, carbs: 30, units: 3.0, delivered: false },
    ],
    sleep: [[0, 6.9]],
    tags: [
      ouraTag("Breakfast", "Diet & Substances", 8, true),
      ouraTag("Lunch", "Diet & Substances", 12.2, true),
      ouraTag("Walk", "Workouts & Movement", 14.7, true),
    ],
    run: { name: "Walk", start: 14 + 40 / 60, end: 15 + 20 / 60, when: "2:40–3:20 pm", hr: 128, calories: 180, stress: "Low" },
    presets: [{ name: "Premeal", start: 8, end: 10, needs: "150%", range: "100–140 mg/dL", when: "8:00–10:00 am" }],
    auto: 96,
  },
  11: {
    glucose: [[0, 150], [4, 142], [7, 128], [10.2, 188], [11.4, 248], [13, 210], [15, 164], [17, 148], [19.2, 206], [20.4, 262], [22, 198], [24, 170]],
    basalU: 20.2,
    basalCurve: [0.55, 0.6, 0.5, 0.7, 1.45, 1.2, 0.8, 1.5, 0.85],
    boluses: [
      { hour: 10.4, carbs: 70, units: 8.8, delivered: true },
      { hour: 19.3, carbs: 64, units: 7.6, delivered: false },
    ],
    sleep: [[0, 8.3]],
    tags: [
      ouraTag("Brunch", "Diet & Substances", 10.4, true),
      ouraTag("Dinner", "Diet & Substances", 19.3, true),
    ],
    run: null,
    presets: [{ name: "Premeal", start: 10, end: 12, needs: "160%", range: "110–150 mg/dL", when: "10:00 am–12:00 pm" }],
    auto: 91,
  },
  12: {
    glucose: [[0, 168], [3, 176], [5.5, 194], [7, 188], [8.5, 226], [10.5, 204], [12.5, 198], [14, 232], [16, 186], [18.5, 172], [21, 164], [24, 158]],
    basalU: 21.5,
    basalCurve: [0.9, 1.0, 0.85, 1.15, 1.4, 1.25, 1.05, 1.1, 0.95],
    boluses: [
      { hour: 8.2, carbs: 40, units: 6.4, delivered: true },
      { hour: 12.4, carbs: 52, units: 7.1, delivered: true },
      { hour: 18.2, carbs: 36, units: 4.4, delivered: true },
    ],
    sleep: [[0, 5.2]],
    tags: [
      ouraTag("Breakfast", "Diet & Substances", 8.2, true),
      ouraTag("Lunch", "Diet & Substances", 12.4, true),
    ],
    run: null,
    presets: [{ name: "Premeal", start: 8, end: 10, needs: "150%", range: "100–140 mg/dL", when: "8:00–10:00 am" }],
    auto: 93,
  },
  13: {
    glucose: [[0, 154], [3, 168], [6, 146], [8, 178], [9.4, 216], [11.2, 188], [13, 162], [15.5, 134], [17, 128], [18.6, 156], [20.2, 184], [22, 170], [24, 160]],
    basalU: 19.2,
    basalCurve: [0.7, 0.8, 0.65, 1.05, 1.2, 0.95, 0.75, 1.0, 0.8],
    boluses: [
      { hour: 8.2, carbs: 38, units: 5.6, delivered: true },
      { hour: 12.6, carbs: 44, units: 5.2, delivered: true },
      { hour: 18.5, carbs: 48, units: 6.0, delivered: true },
    ],
    sleep: [[0, 7.8]],
    tags: [
      ouraTag("Period", "Health & Physical State", 5.5, true),
      ouraTag("Breakfast", "Diet & Substances", 8.2, true),
      ouraTag("Dinner", "Diet & Substances", 18.5, true),
    ],
    run: null,
    presets: [{ name: "Premeal", start: 7 + 40 / 60, end: 8 + 25 / 60, needs: "120%", range: "80–130 mg/dL", when: "7:40–8:25 am" }],
    auto: 95,
  },
};

function makeCalendarDay(date) {
  const info = decemberPhase(date);
  const profiles = {
    menstrual: { avg: 133, tir: 72, sd: 42, cv: 32, insulin: 38.4, basalPct: 52, carbs: 118, wave: 16, tirParts: [[0, "0m", "0%"], [3, "40m", "3%"], [72, "17h 17m", "72%"], [25, "6h 3m", "25%"], [0, "0m", "0%"]] },
    follicular: { avg: 116, tir: 84, sd: 24, cv: 21, insulin: 34.6, basalPct: 50, carbs: 132, wave: 26, tirParts: [[0, "0m", "0%"], [4, "50m", "4%"], [84, "20h 10m", "84%"], [10, "2h 24m", "10%"], [2, "26m", "2%"]] },
    fertile: { avg: 128, tir: 78, sd: 30, cv: 24, insulin: 37.8, basalPct: 48, carbs: 140, wave: 42, tirParts: [[0, "0m", "0%"], [6, "1h 20m", "6%"], [78, "18h 43m", "78%"], [13, "3h 7m", "13%"], [3, "40m", "3%"]] },
    luteal: { avg: 144, tir: 70, sd: 36, cv: 26, insulin: 42.4, basalPct: 44, carbs: 150, wave: 58, tirParts: [[0, "0m", "0%"], [8, "1h 55m", "8%"], [70, "16h 48m", "70%"], [16, "3h 50m", "16%"], [6, "1h 26m", "6%"]] },
  };
  const colors = ["#FB5951", "#FB5951", "#76D3A6", "#B69CE2", "#8C65D6"];
  const labels = ["<54", "54–70", "70–180", "180–250", ">250"];
  const profile = profiles[info.phase];
  const wobble = ((date * 3) % 5) - 2;
  const avg = profile.avg + wobble;
  const insulin = +(profile.insulin + wobble * 0.2).toFixed(1);
  const basalU = +((insulin * profile.basalPct) / 100).toFixed(1);
  const bolusU = +(insulin - basalU).toFixed(1);
  const bolusPct = 100 - profile.basalPct;
  const when = new Date(2026, 10, date);
  const long = when.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
  const label = when.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const menstrualShape = [
    [0, 128], [3, 142], [5.5, 118], [6.4, 96], [7.2, 61], [8, 154],
    [9.2, 204], [10.6, 238], [12, 192], [13.4, 162], [16, 138],
    [18.2, 166], [19.4, 198], [20.6, 172], [22.5, 146], [24, 134],
  ];
  const nov14Shape = [
    [0, 192], [1.6, 228], [2.8, 176], [4.2, 138], [5.4, 112],
    [6.2, 78], [7.0, 51], [7.6, 68], [8.4, 124], [9.4, 158],
    [10.2, 214], [11.1, 268], [12.2, 206], [13.2, 148], [14.4, 126],
    [15.2, 198], [16.1, 236], [17.0, 164], [17.7, 92], [18.3, 56],
    [19.1, 118], [20.2, 172], [21.0, 228], [21.8, 262], [22.8, 194],
    [23.5, 142], [24, 168],
  ];
  const story = dayStories[date];
  const glucose = story
    ? story.glucose
    : date === 14
      ? nov14Shape
      : info.phase === "menstrual"
        ? menstrualShape.map(([hour, value]) => [hour, value + wobble])
        : [0, 3, 6, 8, 11, 13, 15, 18, 21, 24].map((hour, index) => {
          const bump = hour > 10 && hour < 16 ? profile.wave : hour < 7 ? -12 : 0;
          return [hour, Math.round(avg - 6 + bump + (index % 2 ? 5 : -3))];
        });
  const measured = story || info.phase === "menstrual" ? traceStats(glucose) : null;
  const presets = story
    ? story.presets
    : info.phase === "luteal"
    ? [{ name: "Premeal", start: 8, end: 10, needs: "150%", range: "100–140 mg/dL", when: "8:00–10:00 am" }]
    : info.phase === "menstrual"
      ? [
          { name: "Premeal", start: 7 + 40 / 60, end: 8 + 25 / 60, needs: "120%", range: "80–130 mg/dL", when: "7:40–8:25 am" },
          { name: "Premeal", start: 17 + 40 / 60, end: 18 + 20 / 60, needs: "120%", range: "80–130 mg/dL", when: "5:40–6:20 pm" },
        ]
      : [];
  const presetMinutes = (name) => Math.round(presets.filter((preset) => preset.name === name).reduce((sum, preset) => sum + (preset.end - preset.start) * 60, 0));
  const premealMinutes = presetMinutes("Premeal");
  const workoutMinutes = presetMinutes("Workout");
  const boluses = story ? story.boluses : [
    { hour: 8, carbs: Math.round(profile.carbs * 0.34), units: +(bolusU * 0.3).toFixed(1), delivered: true },
    { hour: 12.5, carbs: Math.round(profile.carbs * 0.4), units: +(bolusU * 0.45).toFixed(1), delivered: true },
    { hour: 18, carbs: Math.round(profile.carbs * 0.26), units: +(bolusU * 0.25).toFixed(1), delivered: date % 4 !== 0 },
  ];
  if (!story && date === 14) {
    const shift = (hour, units) => {
      const bolus = boluses.find((item) => item.hour === hour && item.units);
      if (!bolus) return;
      bolus.units = +(bolus.units - units).toFixed(1);
    };
    shift(8, 1.2);
    shift(12.5, 1.4);
    shift(18, 0.8);
    boluses.push(
      { hour: 5 + 30 / 60, carbs: 28, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 8 + 18 / 60, carbs: 0, units: 1.2, delivered: true },
      { hour: 9 + 40 / 60, carbs: 45, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 12.5 + 22 / 60, carbs: 0, units: 1.4, delivered: true },
      // Cluster of carb meals close together to show overlap as small dots.
      { hour: 14 + 18 / 60, carbs: 18, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 14 + 26 / 60, carbs: 12, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 14 + 30 / 60, carbs: 32, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 14 + 36 / 60, carbs: 8, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 14 + 42 / 60, carbs: 15, units: 0, delivered: true, meal: "Carb meal" },
      { hour: 18 + 16 / 60, carbs: 0, units: 0.8, delivered: true },
      { hour: 20 + 30 / 60, carbs: 22, units: 0, delivered: true, meal: "Carb meal" },
    );
  }
  const extraCarbs = boluses.filter((bolus) => bolus.meal && !bolus.units).reduce((sum, bolus) => sum + bolus.carbs, 0);
  const dayBasalU = story ? story.basalU : basalU;
  const dayBolusU = story ? +boluses.reduce((sum, bolus) => sum + bolus.units, 0).toFixed(1) : bolusU;
  const dayInsulin = story ? +(dayBasalU + dayBolusU).toFixed(1) : insulin;
  const dayBasalPct = Math.round((dayBasalU / dayInsulin) * 100);
  const autoPct = story ? story.auto : 97;
  const autoMinutes = Math.round((autoPct / 100) * 24 * 60);
  return {
    date,
    label,
    long,
    phase: info.phase,
    phaseName: info.name,
    periodDay: info.periodDay || 0,
    avg: measured ? measured.avg : avg,
    tir: measured ? measured.tir : profile.tir,
    tirParts: measured ? measured.tirParts : profile.tirParts.map((part, index) => [colors[index], part[0], labels[index], part[1], part[2]]),
    sd: measured ? measured.sd : profile.sd,
    range: measured ? measured.range : info.phase === "luteal" ? "98 – 214" : "92 – 168",
    cv: measured ? measured.cv : profile.cv,
    insulin: dayInsulin,
    basalU: dayBasalU,
    bolusU: dayBolusU,
    basalPct: dayBasalPct,
    bolusPct: 100 - dayBasalPct,
    carbs: story ? boluses.reduce((sum, bolus) => sum + bolus.carbs, 0) : profile.carbs + wobble + extraCarbs,
    auto: autoPct,
    autoTime: formatDuration(autoMinutes),
    manual: 100 - autoPct,
    manualTime: formatDuration(24 * 60 - autoMinutes),
    workout: Math.round((workoutMinutes / 1440) * 100),
    workoutTime: formatDuration(workoutMinutes),
    premeal: Math.round((premealMinutes / 1440) * 100),
    premealTime: formatDuration(premealMinutes),
    preset: Math.round(((premealMinutes + workoutMinutes) / 1440) * 100),
    presetTime: formatDuration(premealMinutes + workoutMinutes),
    presets,
    markers: [],
    glucose,
    basalCurve: story ? story.basalCurve : null,
    boluses,
    sleep: story ? story.sleep : date === 14 ? [[0, 5 + 40 / 60], [21 + 45 / 60, 24]] : [[0, 7.4]],
    tags: (story ? story.tags : defaultTags(date, info)).map((tag) => ({ source: "Oura Ring", ...tag })),
    run: story ? story.run : date === 14 ? {
      name: "Run",
      start: 6 + 5 / 60,
      end: 7,
      when: "6:05–7:00 am",
      hr: 154,
      calories: 380,
      stress: "Medium",
      preset: { start: 5, end: 7, when: "5:00–7:00 am", name: "Activity" },
    } : null,
    scheduled: !story && date === 14 ? [
      { name: "Workout", start: 8.3, end: 9.5, when: "8:18–9:30 am", source: "Tidepool Loop" },
      { name: "Run", start: 18, end: 19, when: "6:00–7:00 pm", source: "Tidepool Loop" },
    ] : [],
    low: false,
  };
}

const calendarDays = Array.from({ length: 30 }, (_, index) => makeCalendarDay(index + 1));
const todayIndex = 13;

function ringDays() {
  return calendarDays.filter((day) => day.date >= 12 && day.date <= 17);
}

function renderMonthCircles() {
  const viewing = calendarDays[state.day];
  $("#cycle-circles").innerHTML = calendarDays.map((day, index) => {
    const detail = day.periodDay ? `, period day ${day.periodDay}` : "";
    return `<button type="button" class="cycle-circle ${day.phase}${index === todayIndex ? " is-today" : ""}" data-day-index="${index}" aria-pressed="${index === state.day}" ${index === todayIndex ? 'aria-current="date"' : ""} aria-label="${day.long}, ${day.phaseName}${detail}">${day.date}</button>`;
  }).join("");
  $("#cycle-today-note").textContent = state.day === todayIndex
    ? "Today is day 2 of your period."
    : `Today is day 2 of your period. Viewing ${viewing.long} · ${viewing.phaseName}.`;
}

function placeFill(bar, chip, pct) {
  const width = pct > 0 ? Math.max(pct, 6) : 0;
  bar.style.width = `${width}%`;
  chip.style.left = `${pct === 0 ? 10 : Math.min(Math.max(width, 12), 86)}%`;
}

function isoDate(day) {
  const when = new Date(2026, 10, day.date);
  const month = String(when.getMonth() + 1).padStart(2, "0");
  const date = String(when.getDate()).padStart(2, "0");
  return `${when.getFullYear()}-${month}-${date}`;
}

function ouraOrigin() {
  return location.protocol.startsWith("http") ? location.origin : "http://localhost:8787";
}

function loopPresets(day) {
  return (day.scheduled || []).filter((item) => item.source === "Tidepool Loop");
}

function presetMatch(preset, workout) {
  if (!preset || !workout || workout.start == null || workout.end == null) {
    return { status: "Unconfirmed", overlap: null };
  }
  const start = Math.max(preset.start, workout.start);
  const end = Math.min(preset.end, workout.end);
  if (end - start <= 0.02) return { status: "Unconfirmed", overlap: null };
  const covers = workout.start <= preset.start + 0.02 && workout.end >= preset.end - 0.02;
  return { status: covers ? "Confirmed" : "Partial overlap", overlap: [start, end] };
}

function presetAria(preset, status) {
  const lead = `${preset.name} preset from Tidepool Loop, ${preset.when}.`;
  const detail = status === "Confirmed"
    ? "Oura Ring recorded a workout across this preset. Confirmed."
    : status === "Partial overlap"
      ? "Oura Ring recorded a workout for only part of this preset. Partial overlap."
      : "Oura did not record a workout during this preset. Unconfirmed.";
  return `${lead} ${detail} This is not a medication recommendation.`;
}

function loopVerifiedWorkout(workout) {
  if (!workout || (workout.name || "").toLowerCase() !== "pilates") return workout;
  return {
    ...workout,
    preset: {
      name: "Pilates",
      start: workout.start,
      end: workout.end,
      when: workout.when,
      source: "Tidepool Loop",
    },
  };
}

function ouraRecord(live) {
  if (!live) {
    return {
      sleepStages: null,
      hrv: null,
      readiness: null,
      activity: null,
      restingHeartRate: null,
      sleepScore: null,
      ouraStress: null,
    };
  }
  return {
    sleepStages: live.sleepStages || null,
    hrv: live.hrv ?? null,
    readiness: live.readiness ?? null,
    activity: live.activity || null,
    restingHeartRate: live.restingHeartRate ?? null,
    sleepScore: live.sleepScore ?? null,
    ouraStress: live.stress || null,
  };
}

function applyOura(day) {
  if (state.ouraStatus.connected && state.devices.oura) {
    const live = state.ouraByDate[isoDate(day)];
    if (!live) {
      return {
        ...day,
        sleep: [],
        tags: [],
        run: null,
        scheduled: loopPresets(day),
        sleepWhen: "",
        heartRate: [],
        ...ouraRecord(null),
      };
    }
    return {
      ...day,
      sleep: live.sleep,
      tags: live.tags,
      run: loopVerifiedWorkout(live.workout),
      scheduled: loopPresets(day),
      sleepWhen: live.sleepWhen || "",
      heartRate: live.heartRate || [],
      ...ouraRecord(live),
    };
  }
  const live = state.ouraByDate[isoDate(day)];
  if (!live) return day;
  return {
    ...day,
    sleep: live.sleep,
    tags: live.tags,
    run: loopVerifiedWorkout(live.workout),
    sleepWhen: live.sleepWhen || "",
    heartRate: live.heartRate || [],
    ...ouraRecord(live),
  };
}

function wearableCaption(run) {
  const bits = [`${run.name || "Run"} ${run.when}`, "Wearable · Oura Ring"];
  if (run.hr) bits.push(`${run.hr} bpm`);
  if (run.calories) bits.push(`${run.calories} kcal`);
  if (run.live && run.stress) bits.push(`Intensity ${run.stress}`);
  else if (run.stress) bits.push(`Stress ${run.stress}`);
  return bits.join(" · ");
}

function paintOuraButton() {
  const button = $("#oura-connect");
  if (!button) return;
  if (state.ouraStatus.connected) {
    button.hidden = true;
    return;
  }
  button.hidden = false;
  button.textContent = state.ouraStatus.configured ? "Connect Oura" : "Add Oura app";
}

async function loadOuraStatus() {
  try {
    const response = await fetch(`${ouraOrigin()}/api/oura/status`);
    if (response.ok) state.ouraStatus = await response.json();
  } catch {
    state.ouraStatus = { configured: false, connected: false };
  }
  paintOuraButton();
}

function ensureOura(days) {
  if (!state.ouraStatus.connected) return;
  const missing = [...new Set(days.map(isoDate))].filter((iso) => !state.ouraByDate[iso] && !state.ouraPending[iso]);
  if (!missing.length) return;
  missing.forEach((iso) => { state.ouraPending[iso] = true; });
  const ordered = missing.slice().sort();
  fetch(`${ouraOrigin()}/api/oura/days?start=${ordered[0]}&end=${ordered[ordered.length - 1]}`)
    .then((response) => response.ok ? response.json() : null)
    .then((payload) => {
      missing.forEach((iso) => {
        state.ouraByDate[iso] = payload?.days?.[iso] || { sleep: [], tags: [], workout: null, sleepWhen: "" };
        state.ouraPending[iso] = false;
      });
      if (payload) render();
    })
    .catch(() => {
      missing.forEach((iso) => { state.ouraPending[iso] = false; });
    });
}

function alignSummaryToRange() {
  const rail = document.querySelector("#daily-stage .stat-rail");
  const layout = document.querySelector("#daily-stage:not(.is-phone) .daily-layout");
  const band = document.querySelector("#daily-chart [data-in-range]");
  const card = document.querySelector("#daily-stage .stat-rail [data-panel='tir']");
  if (!rail) return;
  if (!layout || !band || !card || layout.classList.contains("is-rail-closed")) {
    rail.style.marginTop = "";
    return;
  }
  const columns = getComputedStyle(layout).gridTemplateColumns.trim().split(/\s+/);
  if (columns.length < 2) {
    rail.style.marginTop = "";
    return;
  }
  rail.style.marginTop = "0px";
  const layoutTop = layout.getBoundingClientRect().top;
  const bandTop = band.getBoundingClientRect().top - layoutTop;
  const cardTop = card.getBoundingClientRect().top - layoutTop;
  const railTop = rail.getBoundingClientRect().top - layoutTop;
  rail.style.marginTop = `${Math.round(Math.max(-railTop, bandTop - cardTop))}px`;
}

function renderDay() {
  const day = applyOura(calendarDays[state.day]);
  $("#day-label").textContent = day.label;
  $("#prev-day").disabled = state.day === 0;
  $("#next-day").disabled = state.day === calendarDays.length - 1;
  renderMonthCircles();
  const bgm = state.source === "bgm";
  $("#glucose-when").textContent = day.long;
  $("#avg-glucose").textContent = String(bgm ? day.avg + 6 : day.avg);
  $("#tir-rows").innerHTML = day.tirParts.map(([color, pct, , time, percent]) => `
    <div class="range-row">
      <div class="range-track"><span style="width:${Math.max(pct, pct > 0 ? 2 : 0)}%;background:${color}"></span></div>
      <span class="range-time">${time}</span>
      <span class="range-pct">${percent}</span>
    </div>
  `).join("");
  $("#tir-legend").innerHTML = day.tirParts.map(([color, , label]) => `<span><i class="swatch" style="background:${color}"></i>${label}</span>`).join("");
  $("#avg-label").textContent = bgm ? "Avg. Glucose (BGM)" : "Avg. Glucose (CGM)";
  $("#cv-label").textContent = bgm ? "CV (BGM)" : "CV (CGM)";
  $("#sd-value").textContent = String(day.sd);
  $("#sd-range").textContent = `(${day.range})`;
  $("#cv-value").innerHTML = `${day.cv} <small>%</small>`;
  $("#insulin-total").textContent = `(${day.insulin.toFixed(1)} U)`;
  $("#basal-chip").textContent = `${day.basalU.toFixed(1)}U`;
  $("#bolus-chip").textContent = `${day.bolusU.toFixed(1)}U`;
  $("#basal-read").textContent = `${day.basalPct}%`;
  $("#bolus-read").textContent = `${day.bolusPct}%`;
  $("#carbs-value").innerHTML = `${day.carbs} <small>g</small>`;
  $("#auto-chip").textContent = day.autoTime;
  $("#manual-chip").textContent = day.manualTime;
  $("#auto-read").textContent = `${day.auto}%`;
  $("#manual-read").textContent = `${day.manual}%`;
  $("#workout-chip").textContent = day.workoutTime;
  $("#premeal-chip").textContent = day.premealTime;
  $("#workout-read").textContent = `${day.workout}%`;
  $("#premeal-read").textContent = `${day.premeal}%`;
  placeFill($("#basal-bar"), $("#basal-chip"), day.basalPct);
  placeFill($("#bolus-bar"), $("#bolus-chip"), day.bolusPct);
  placeFill($("#auto-bar"), $("#auto-chip"), day.auto);
  placeFill($("#manual-bar"), $("#manual-chip"), day.manual);
  placeFill($("#workout-bar"), $("#workout-chip"), day.workout);
  placeFill($("#premeal-bar"), $("#premeal-chip"), day.premeal);
  const deviceCount = Object.values(state.devices).filter(Boolean).length;
  $("#device-count").textContent = `Devices (${deviceCount})`;
  $("#cgm-only").hidden = !bgm;
  $("#run-card").hidden = !(day.run && state.devices.oura && state.layers.exercise);
  const showTherapy = state.devices.tandem && state.layers.therapy;
  $("#therapy-settings").hidden = !showTherapy;
  const strip = $("#therapy-strip");
  strip.hidden = !showTherapy;
  if (showTherapy) strip.innerHTML = therapyStripMarkup(true, 0, state.chartWindow);
  $("#sleep-hot").setAttribute("aria-label", `Sleep on ${day.long}`);
  const sleepWhen = day.sleepWhen || "11:10 pm – 7:05 am";
  const sleepTime = document.querySelector("#sleep-pop .record-tip-time");
  if (sleepTime) sleepTime.textContent = sleepWhen;
  renderSleepPop(day);
  drawDailyChart(day);
  renderOuraTags(day);
  renderOuraVitals(day);
  alignSummaryToRange();
}

function stressDetail(stress) {
  if (!stress) return "";
  const parts = [];
  if (stress.high != null) parts.push(`High stress ${formatDuration(stress.high / 60)}`);
  if (stress.recovery != null) parts.push(`Recovery ${formatDuration(stress.recovery / 60)}`);
  return parts.join(" · ");
}

function stressLine(stress) {
  const detail = stressDetail(stress);
  if (stress?.summary && detail) return `${stress.summary} · ${detail}`;
  return stress?.summary || detail || "—";
}

function stressGraph(stress, ariaLead = "Daytime stress recorded by Oura Ring") {
  if (!stress) return "—";
  const parts = [
    ["High stress", stress.high, "#E9695E"],
    ["Recovery", stress.recovery, "#7eb6e8"],
  ].filter(([, seconds]) => seconds != null && seconds > 0);
  if (!parts.length) return stress.summary || "—";
  const total = parts.reduce((sum, [, seconds]) => sum + seconds, 0);
  const bars = parts.map(([, seconds, color]) => {
    const width = (seconds / total) * 100;
    return `<span style="width:${width.toFixed(2)}%;background:${color}"></span>`;
  }).join("");
  const key = parts.map(([name, seconds, color]) => `<li><span><i style="background:${color}"></i>${name}</span><b>${formatDuration(seconds / 60)}</b></li>`).join("");
  const label = parts.map(([name, seconds]) => `${name} ${formatDuration(seconds / 60)}`).join(", ");
  return `<div class="stage-bar" role="img" aria-label="${attr(ariaLead)}: ${attr(label)}. This is not a diagnosis.">${bars}</div><ul class="stage-key">${key}</ul>`;
}

function stageGraph(stages) {
  if (!stages) return "—";
  const parts = [
    ["Deep", stages.deep, "#4A60E2"],
    ["REM", stages.rem, "#7eb6e8"],
    ["Light", stages.light, "#9ec4ea"],
    ["Awake", stages.awake, "#F6D36B"],
  ].filter(([, seconds]) => seconds != null);
  if (!parts.length) return "—";
  const total = parts.reduce((sum, [, seconds]) => sum + Math.max(0, seconds), 0);
  if (!total) return "—";
  const bars = parts.map(([name, seconds, color]) => {
    const width = (Math.max(0, seconds) / total) * 100;
    return `<span style="width:${width.toFixed(2)}%;background:${color}"></span>`;
  }).join("");
  const key = parts.map(([name, seconds, color]) => `<li><span><i style="background:${color}"></i>${name}</span><b>${formatDuration(seconds / 60)}</b></li>`).join("");
  const label = parts.map(([name, seconds]) => `${name} ${formatDuration(seconds / 60)}`).join(", ");
  return `<div class="stage-bar" role="img" aria-label="Sleep stages recorded by Oura Ring: ${label}. This is not a diagnosis.">${bars}</div><ul class="stage-key">${key}</ul>`;
}

function stageLine(stages) {
  if (!stages) return "";
  const parts = [
    ["Deep", stages.deep],
    ["REM", stages.rem],
    ["Light", stages.light],
    ["Awake", stages.awake],
  ].filter(([, seconds]) => seconds != null);
  if (!parts.length) return "";
  return parts.map(([name, seconds]) => `${name} ${formatDuration(seconds / 60)}`).join(" · ");
}

function renderSleepPop(day) {
  const list = document.querySelector("#sleep-pop dl");
  if (!list) return;
  if (!renderSleepPop.sample) renderSleepPop.sample = list.innerHTML;
  const live = state.ouraByDate[isoDate(day)];
  if (!live) {
    list.innerHTML = renderSleepPop.sample;
    setRecordEntry($("#sleep-pop"), document.querySelector("#sleep-pop .record-tip-time")?.textContent || "");
    return;
  }
  const heart = day.restingHeartRate ? `${day.restingHeartRate} bpm` : "—";
  const hrv = day.hrv != null ? `${day.hrv} ms` : "—";
  const stages = stageLine(day.sleepStages) || "—";
  const readiness = day.readiness != null ? String(day.readiness) : "—";
  const steps = day.activity?.steps != null ? day.activity.steps.toLocaleString("en-US") : "—";
  const active = day.activity?.active != null ? formatDuration(day.activity.active / 60) : "—";
  const stress = stressLine(day.ouraStress);
  list.innerHTML = `
    <div><dt>Sleep</dt><dd>${day.sleepWhen || "—"}${day.sleepScore ? ` · score ${day.sleepScore}` : ""}</dd></div>
    <div><dt>Stages</dt><dd>${stages}</dd></div>
    <div><dt>Resting heart rate</dt><dd>${heart}</dd></div>
    <div><dt>Heart rate variability</dt><dd>${hrv}</dd></div>
    <div><dt>Readiness</dt><dd>${readiness}</dd></div>
    <div><dt>Steps</dt><dd>${steps}</dd></div>
    <div><dt>Active time</dt><dd>${active}</dd></div>
    <div><dt>Daytime stress</dt><dd>${stress}</dd></div>
    <div><dt>Source</dt><dd>Oura Ring</dd></div>
  `;
  const when = document.querySelector("#sleep-pop .record-tip-time")?.textContent || "";
  setRecordEntry($("#sleep-pop"), when);
}

function renderOuraVitals(day) {
  const card = $("#oura-vitals");
  if (!card) return;
  const live = state.ouraByDate[isoDate(day)];
  const show = Boolean(live && state.devices.oura && (day.restingHeartRate || day.ouraStress || day.hrv != null || day.readiness != null || day.sleepStages || day.activity));
  card.hidden = !show;
  if (!show) return;
  const heart = $("#resting-hr");
  const hrv = $("#sleep-hrv");
  const readiness = $("#readiness-score");
  const stages = $("#sleep-stages");
  const steps = $("#oura-steps");
  const active = $("#oura-active");
  const summary = $("#stress-summary");
  if (heart) heart.innerHTML = day.restingHeartRate ? `${day.restingHeartRate} <small>bpm</small>` : "—";
  if (hrv) hrv.innerHTML = day.hrv != null ? `${day.hrv} <small>ms</small>` : "—";
  if (readiness) readiness.textContent = day.readiness != null ? String(day.readiness) : "—";
  if (stages) stages.innerHTML = stageGraph(day.sleepStages);
  if (steps) steps.textContent = day.activity?.steps != null ? day.activity.steps.toLocaleString("en-US") : "—";
  if (active) active.textContent = day.activity?.active != null ? formatDuration(day.activity.active / 60) : "—";
  if (summary) summary.innerHTML = stressGraph(day.ouraStress);
}

function renderOuraTags(day) {
  const card = $("#oura-tags-card");
  if (!card) return;
  const tags = state.layers.tags && state.devices.oura ? day.tags || [] : [];
  const host = $("#oura-tags");
  const live = state.ouraByDate[isoDate(day)];
  if (!tags.length) {
    card.hidden = !live;
    if (live && host) {
      const count = $("#oura-tags-count");
      if (count) count.textContent = "None logged";
      host.innerHTML = `<p class="quiet">No tags logged on this day.</p>`;
    }
    return;
  }
  card.hidden = false;
  const grouped = new Map(tagGroupOrder.map((name) => [name, []]));
  tags.forEach((tag) => {
    const name = grouped.has(tag.group) ? tag.group : "Tags";
    if (!grouped.has(name)) grouped.set(name, []);
    grouped.get(name).push(tag);
  });
  const count = $("#oura-tags-count");
  if (count) count.textContent = `${tags.length} logged`;
  host.innerHTML = [...grouped.entries()].filter(([, items]) => items.length).map(([name, items]) => `
    <section class="oura-tag-group">
      <h3>${name}</h3>
      <div class="oura-tag-chips">
        ${items.map((tag) => {
          const when = tag.when || tagWhen(tag.hour);
          return `<span class="oura-chip"><i class="oura-tag"></i>${tag.label}${when ? `<span>${when}</span>` : ""}</span>`;
        }).join("")}
      </div>
    </section>
  `).join("");
}

const therapySchedule = [
  { name: "Basal U/hr", key: "basal", unit: "U/hr", segments: [
    { start: 6.5, from: "1.1", to: "1.3" },
    { start: 13.5, from: "1.1", to: "1" },
  ] },
  { name: "Carb g/U", key: "carb", unit: "g/U", segments: [
    { start: 21, from: "8", to: "7.5", added: true },
  ] },
  { name: "Sensitivity", key: "sensitivity", unit: "mg/dL/U", segments: [
    { start: 1.5, from: "35", to: "37" },
  ] },
  { name: "Range mg/dL", key: "range", summary: "No change · 105–115", segments: [] },
];

function therapyStripMarkup(withNote, plotLeft, domain = { start: 0, end: 24 }) {
  const W = 920;
  const left = plotLeft;
  const rowH = 20;
  const gap = 3;
  const H = therapySchedule.length * rowH + (therapySchedule.length - 1) * gap;
  const span = Math.max(0.25, domain.end - domain.start);
  const x = (hour) => left + ((hour - domain.start) / span) * (W - left);
  const fills = { basal: "#d7ecfb", carb: "#e1eaf9", sensitivity: "#e6dff6", range: "#e5f6fc" };
  const guides = [3, 6, 9, 12, 15, 18, 21].map((hour) => `<line x1="${x(hour)}" x2="${x(hour)}" y1="0" y2="${H}" stroke="#e3e6ea"/>`).join("");
  const rows = therapySchedule.map((row, index) => {
    const y = index * (rowH + gap);
    const summaryX = left < 8 ? 96 : left + 8;
    const summary = row.summary
      ? `<text class="tiny" x="${summaryX}" y="${y + 14}" fill="#271b46">${row.summary}</text>`
      : "";
    const segments = row.segments.map((segment) => {
      if (segment.start < domain.start || segment.start > domain.end) return "";
      const px = x(segment.start);
      const value = `${segment.from} → ${segment.to}`;
      const neighbors = row.segments.filter((item) => item.start >= domain.start && item.start <= domain.end);
      const next = neighbors.find((item) => item.start > segment.start);
      const prev = [...neighbors].reverse().find((item) => item.start < segment.start);
      const nextGap = next ? x(next.start) - px : Infinity;
      const prevGap = prev ? px - x(prev.start) : px - left;
      const placeLeft = nextGap < 76 && prevGap > nextGap;
      const anchor = placeLeft ? "end" : "start";
      const tx = placeLeft ? px - 7 : px + 7;
      const when = tagWhen(segment.start);
      const added = segment.added ? " Another recorded ratio." : "";
      return `<g aria-label="${row.name} at ${when} changed from ${segment.from} to ${segment.to} ${row.unit || ""}.${added} Recorded. Not a recommendation to change a dose."><line x1="${px.toFixed(1)}" x2="${px.toFixed(1)}" y1="${y + 3}" y2="${y + rowH - 3}" stroke="#4f6a92" stroke-width="1.5"/><circle cx="${px.toFixed(1)}" cy="${y + rowH / 2}" r="3.5" fill="${fills[row.key]}" stroke="#4f6a92"/><text class="tiny" x="${tx.toFixed(1)}" y="${y + 14}" text-anchor="${anchor}" fill="#271b46">${value}</text></g>`;
    }).join("");
    const labelW = row.name.length * 6.4 + 12;
    const name = left < 8
      ? `<rect x="0" y="${y}" width="${labelW}" height="${rowH}" fill="#f7f7f8"/><text class="tiny" x="4" y="${y + 14}" fill="#707070">${row.name}</text>`
      : `<text class="tiny" x="${left - 6}" y="${y + 14}" text-anchor="end" fill="#707070">${row.name}</text>`;
    return { name, segments: summary + segments };
  });
  const names = rows.map((row) => row.name).join("");
  const segments = rows.map((row) => row.segments).join("");
  const zoomed = domain.start > 0.01 || domain.end < 23.99;
  const plot = zoomed
    ? `<defs><clipPath id="therapy-plot-clip"><rect x="${left}" y="0" width="${W - left}" height="${H}"/></clipPath></defs><g clip-path="url(#therapy-plot-clip)">${guides}${segments}</g>${names}`
    : `${guides}${segments}${names}`;
  const note = withNote
    ? `<p class="fine">A few recorded changes are shown, from the previous value to the new one. Basal stayed within 1–1.3 U/hr. The 9:00 pm carb mark is another recorded ratio. This is not a recommendation to change a dose.</p>`
    : "";
  return `
    <div class="therapy-strip-title"><strong>Therapy settings</strong><span>Tandem t:slim X2 · recorded</span></div>
    <svg class="therapy-axis" viewBox="0 0 ${W} ${H}" role="img" aria-label="Recorded basal, carb ratio, sensitivity, and range, aligned to the hours on the graph below. Not a recommendation to change a dose.">
      ${plot}
    </svg>
    ${note}
  `;
}

function afterExerciseInsight(day) {
  if (!day.run || day.run.live || !day.glucose?.length) return null;
  const from = day.run.start;
  const until = Math.min(24, day.run.end + 4);
  let nadir = null;
  day.glucose.forEach(([hour, value]) => {
    if (hour < from || hour > until) return;
    if (!nadir || value < nadir.value) nadir = { hour, value };
  });
  if (!nadir) return null;
  const name = (day.run.name || "exercise").toLowerCase();
  return {
    hour: nadir.hour,
    value: Math.round(nadir.value),
    when: tagWhen(nadir.hour),
    title: `After ${name}`,
  };
}

/** Wearable HR strip above glucose — taller track so day/activity curves use the card, not a flat baseline. */
const dailyWearableLayout = {
  trackY: 70,
  trackH: 120,
  stressGap: 0,
  stressH: 0,
  separatorPad: 14,
  glucosePad: 56,
};

function dailyWearableBandBottom() {
  const { trackY, trackH, stressGap, stressH, separatorPad } = dailyWearableLayout;
  return trackY + trackH + stressGap + stressH + separatorPad;
}

function upperRingMarkup(day, x, left, windowStart, windowEnd, compact) {
  if (compact || !state.devices.oura) return "";
  const beats = (day.heartRate || []).filter((point) => point.hour >= windowStart - 0.05 && point.hour <= windowEnd + 0.05);
  if (beats.length < 2 && !day.restingHeartRate) return "";
  let markup = "";
  const { trackY, trackH } = dailyWearableLayout;
  if (beats.length > 1) {
    const values = beats.map((point) => point.bpm);
    if (day.restingHeartRate) values.push(day.restingHeartRate);
    const min = Math.min(...values);
    const max = Math.max(...values);
    // Fit the domain to the series with light padding so resting-to-peak swings use the track.
    const pad = Math.max((max - min) * 0.18, 6);
    const lo = min - pad;
    const hi = max + pad;
    const span = Math.max(18, hi - lo);
    const y = (bpm) => trackY + 4 + (1 - (bpm - lo) / span) * (trackH - 8);
    const path = beats.map((point, index) => `${index ? "L" : "M"}${x(point.hour).toFixed(1)} ${y(point.bpm).toFixed(1)}`).join(" ");
    markup += `<path d="${path}" fill="none" stroke="#4A60E2" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" aria-label="Heart rate across this day, recorded by Oura Ring. This is not a diagnosis."/>`;
    if (day.restingHeartRate) {
      const ry = y(day.restingHeartRate);
      markup += `<line x1="${left}" x2="${x(windowEnd)}" y1="${ry.toFixed(1)}" y2="${ry.toFixed(1)}" stroke="#4A60E2" stroke-dasharray="3 3"/>`;
    }
  }
  markup += `<text class="tiny" x="8" y="${trackY + 14}" fill="#737476">Heart rate</text>`;
  if (day.restingHeartRate) markup += `<text class="tiny" x="8" y="${trackY + 28}" fill="#4A60E2">Resting ${day.restingHeartRate}</text>`;
  return markup;
}

function drawDailyChart(day, chartHost, options = {}) {
  const compact = Boolean(options.compact);
  const W = 920;
  const wearableBottom = dailyWearableBandBottom();
  const gTop = compact ? 46 : wearableBottom + dailyWearableLayout.glucosePad;
  const gBot = compact ? 110 : gTop + 200;
  const bTop = compact ? 118 : gBot + 72;
  const bBot = compact ? 144 : bTop + 100;
  const aTop = compact ? 150 : bBot + 56;
  const aBot = compact ? 178 : aTop + 116;
  const H = compact ? 192 : aBot + 28;
  const left = compact ? 44 : 0;
  const right = W;
  const plotW = right - left;
  const windowStart = compact ? state.weekWindow.start : state.chartWindow.start;
  const windowEnd = compact ? state.weekWindow.end : state.chartWindow.end;
  const windowSpan = Math.max(0.25, windowEnd - windowStart);
  const x = (hour) => left + ((hour - windowStart) / windowSpan) * plotW;
  const eventY = compact ? 14 : 36;
  const eventH = compact ? 12 : 26;
  const bandY = compact ? 12 : 28;
  const bandH = H - bandY - 6;
  const separatorY = compact ? null : wearableBottom;
  const dailyLine = (value) => {
    if (value < 70) return "#FB5951";
    if (value <= 180) return "#76D3A6";
    if (value <= 250) return "#B69CE2";
    return "#8C65D6";
  };
  const showGlucose = state.devices.dexcom && state.source === "cgm";
  const showBgm = state.devices.dexcom && state.source === "bgm";
  const showInsulin = state.devices.tandem;
  const showWearable = state.devices.oura;

  const bands = [0, 3, 6, 9, 12, 15, 18, 21].map((h, i) => {
    const fill = compact ? (i % 2 === 0 ? "#f3f5f8" : "#f7f8fa") : (i % 2 === 0 ? "#ffffff" : "#F0F5FF");
    return `<rect x="${x(h)}" y="${bandY}" width="${x(h + 3) - x(h)}" height="${bandH}" fill="${fill}"/>`;
  }).join("");

  const hours = compact && windowSpan >= 23.5 ? [0, 3, 6, 9, 12, 15, 18, 21] : axisHours(windowStart, windowEnd);
  let hourLabels = hours.map((h) => {
    const name = compact && windowSpan >= 23.5
      ? (h === 0 ? "12 am" : h === 12 ? "12 pm" : h < 12 ? `${h} am` : `${h - 12} pm`)
      : axisHourLabel(h);
    return `<text class="tiny" x="${x(h) + 6}" y="${compact ? 11 : 16}">${name}</text>`;
  }).join("");
  if (windowEnd >= 23.99) {
    hourLabels += `<text class="tiny" x="${right - 2}" y="${compact ? 11 : 16}" text-anchor="end">12 am</text>`;
  }

  const yG = (v) => gTop + ((250 - Math.min(250, Math.max(40, v))) / (250 - 40)) * (gBot - gTop);
  let glu = "";
  if (showGlucose || showBgm) {
    glu += `<rect data-in-range="true" x="${left}" y="${yG(180)}" width="${plotW}" height="${yG(70) - yG(180)}" fill="${compact ? "rgba(58,170,106,0.08)" : "#8DD0A9"}" ${compact ? "" : 'fill-opacity="0.34"'}/>`;
    glu += [180, 70].map((v) => `<line x1="${left}" x2="${right}" y1="${yG(v)}" y2="${yG(v)}" stroke="${compact ? "#9dcfb4" : "#7EBE96"}" stroke-dasharray="4 5"/>`).join("");
  }
  if (showGlucose) {
    const split = glucoseSegments(day.glucose);
    const lineColor = compact ? glucoseColor : dailyLine;
    glu += split.slice(1).map(([h, v], index) => {
      const [h0, v0] = split[index];
      const mid = (v0 + v) / 2;
      return `<line x1="${x(h0).toFixed(1)}" y1="${yG(v0).toFixed(1)}" x2="${x(h).toFixed(1)}" y2="${yG(v).toFixed(1)}" stroke="${lineColor(mid)}" stroke-width="${compact ? 2.4 : 4}" stroke-linecap="round"/>`;
    }).join("");
    const insight = state.layers.exercise && showWearable ? afterExerciseInsight(day) : null;
    const detailed = !compact && windowSpan <= 12;
    if (detailed) {
      const gap = windowSpan <= 6 ? 0.3 : 0.7;
      let lastLabeled = -99;
      day.glucose.forEach(([hour, value]) => {
        if (hour <= windowStart + 0.05 || hour >= windowEnd - 0.05) return;
        const reading = Math.round(value);
        const marked = insight && Math.abs(hour - insight.hour) < 0.15;
        if (marked) return;
        if (hour - lastLabeled < gap && reading >= 70 && reading <= 180) return;
        lastLabeled = hour;
        const px = x(hour);
        const py = yG(reading);
        const below = py < gTop + 20;
        glu += `<g aria-label="${reading} mg/dL at ${tagWhen(hour)}, recorded CGM">
          <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.5" fill="#fff" stroke="${dailyLine(reading)}" stroke-width="2"/>
          <text class="tiny" x="${px.toFixed(1)}" y="${(below ? py + 14 : py - 8).toFixed(1)}" text-anchor="middle" fill="#737476">${reading}</text>
        </g>`;
      });
    }
    if (insight) {
      const px = x(insight.hour);
      const py = yG(insight.value);
      const line = `${insight.title} · ${insight.value} mg/dL · ${insight.when}`;
      const rows = attr(JSON.stringify([["Type", insight.title], ["Glucose", `${insight.value} mg/dL`]]));
      glu += `
        <g class="insight-hit" tabindex="0" role="button" data-when="${attr(insight.when)}" data-rows="${rows}" data-line="${line}" aria-label="${line}. Recorded after this activity. This is not a medication recommendation.">
          <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${compact ? 8 : 14}" fill="transparent"/>
        </g>
      `;
    }
  }
  if (showBgm) {
    glu += day.glucose.filter((_, i) => i % 3 === 0).map(([h, v]) => `
      <rect x="${x(h) - 5}" y="${yG(v) - 5}" width="10" height="10" transform="rotate(45 ${x(h)} ${yG(v)})" fill="#0096d1"/>
    `).join("");
  }
  const gLabels = [250, 180, 70].map((v) => `<text class="tiny" x="${compact ? left - 8 : 6}" y="${yG(v) + 4}" text-anchor="${compact ? "end" : "start"}">${v}</text>`).join("");

  const bolusMax = compact ? 12 : 10;
  const yB = (units) => bBot - (Math.min(units, bolusMax) / bolusMax) * (bBot - bTop);
  let axisLabels = gLabels;
  let bolus = "";
  if (showInsulin) {
    axisLabels += [5, 0].map((v) => `<text class="tiny" x="${compact ? left - 8 : 6}" y="${yB(v) + 4}" text-anchor="${compact ? "end" : "start"}">${v}</text>`).join("");
    bolus = [5, 0].map((v) => `<line x1="${left}" x2="${right}" y1="${yB(v)}" y2="${yB(v)}" stroke="${compact ? "#e3e6ea" : "#E3EAED"}"/>`).join("");
    const shownBoluses = [];
    let lastMarker = -Infinity;
    const markerGap = (compact ? 8 : 13) * 2 + 8;
    day.boluses
      .filter((b) => b.hour >= windowStart - 0.02 && b.hour <= windowEnd + 0.02)
      .slice()
      .sort((a, b) => a.hour - b.hour)
      .forEach((b) => {
        const mealOnly = b.meal && !b.units;
        const px = x(b.hour);
        // Carb-meal dots may sit close together; skip collision hiding for them.
        if (!mealOnly && px - lastMarker < markerGap) return;
        shownBoluses.push(b);
        if (!mealOnly) lastMarker = px;
      });
    bolus += shownBoluses.map((b) => {
      const mealOnly = b.meal && !b.units;
      const barTop = yB(b.units);
      const circleR = mealOnly ? (compact ? 3.5 : 4.5) : (compact ? 8 : 13);
      const circleY = compact ? bTop + 10 : (mealOnly ? bTop + 18 : barTop - circleR);
      const units = !mealOnly && b.units && windowSpan < 23.5 && (!compact || windowSpan <= 12)
        ? `<text class="tiny" x="${(x(b.hour) + (compact ? 12 : 20)).toFixed(1)}" y="${circleY + 4}" fill="#737476">${b.units} U</text>`
        : "";
      const bar = mealOnly || !b.units
        ? ""
        : `<rect x="${x(b.hour) - (compact ? 4 : 4.5)}" y="${barTop}" width="${compact ? 8 : 9}" height="${Math.max(4, bBot - barTop)}" rx="1" fill="${compact ? "#7eb0dd" : "#5B9FD4"}"/>`;
      const circle = mealOnly
        ? `<circle cx="${x(b.hour)}" cy="${circleY}" r="${circleR}" fill="#FFE8CF" stroke="#C9A27A" stroke-width="1"/>`
        : b.carbs
        ? `<circle cx="${x(b.hour)}" cy="${circleY}" r="${circleR}" fill="${b.delivered ? "#fff" : "#f8e7b0"}" stroke="${b.delivered ? "#708FC2" : "#e0b84a"}"/><text class="tiny" x="${x(b.hour)}" y="${circleY + (compact ? 3 : 4)}" text-anchor="middle" fill="#737476">${b.carbs}</text>`
        : "";
      return `
      ${bar}
      ${circle}
      ${units}
    `;
    }).join("");
    if (!compact) {
      bolus += shownBoluses.map((b) => {
        const when = tagWhen(b.hour);
        const shared = `data-hour="${b.hour}" data-carbs="${b.carbs}" data-units="${b.units}" data-delivered="${b.delivered}" data-meal="${b.meal || ""}"`;
        const delivery = b.delivered ? "Delivered" : "Undelivered";
        const mealOnly = b.meal && !b.units;
        const carbLabel = mealOnly
          ? `${b.meal}, ${b.carbs} g at ${when}${b.hour > 9 && b.hour < 10 ? ", recorded after the workout" : ""}. No bolus was recorded with this meal. Not a medication recommendation.`
          : `Carbohydrates ${b.carbs} g at ${when}. Absorption time 3 hours, recorded. Not a medication recommendation.`;
        const insulinHit = mealOnly || !b.units ? "" : `
        <g class="bolus-hit" data-kind="insulin" ${shared} tabindex="0" role="button" aria-label="Bolus ${b.units} units at ${when}${b.carbs ? `, with ${b.carbs} g carbohydrates` : ""}. ${delivery}. Recorded. Not a medication recommendation.">
          <rect x="${x(b.hour) - 14}" y="${bTop}" width="28" height="${bBot - bTop}" fill="transparent"/>
        </g>`;
        const carbHit = b.carbs ? `
        <g class="bolus-hit" data-kind="carbs" ${shared} tabindex="0" role="button" aria-label="${carbLabel}">
          <circle cx="${x(b.hour)}" cy="${(mealOnly ? bTop + 18 : yB(b.units) - 13).toFixed(1)}" r="${mealOnly ? 10 : 18}" fill="transparent"/>
        </g>` : "";
        return `
        ${insulinHit}
        ${carbHit}`;
      }).join("");
    }
  }

function basalDelivery(curve, seed) {
  const segments = [];
  const slot = 20 / 60;
  for (let hour = 0; hour < 24 - slot / 2; hour += slot) {
    const t = (hour / 24) * (curve.length - 1);
    const index = Math.floor(t);
    const next = Math.min(curve.length - 1, index + 1);
    const blend = t - index;
    const scheduled = curve[index] * (1 - blend) + curve[next] * blend;
    const wave = Math.sin(hour * 4.7 + seed) ;
    const gap = Math.sin(hour * 1.7 + seed * 0.3) > 0.86;
    const lift = Math.sin(hour * 2.4 + seed) > 0.78;
    let rate = scheduled * (0.45 + (wave + 1) * 0.4);
    if (lift) rate = Math.min(2.2, scheduled * 1.55);
    if (gap) rate = 0;
    const kind = Math.sin(hour * 6.5 + seed) > 0.55 ? "delivered" : "automated";
    segments.push({
      start: hour,
      end: Math.min(24, hour + slot),
      rate: Math.max(0, Math.round(rate * 100) / 100),
      scheduled: Math.round(scheduled * 100) / 100,
      kind,
    });
  }
  return segments;
}

function scheduledBasalPath(curve, x, yA) {
  const step = 24 / (curve.length - 1);
  return curve.map((value, index) => {
    const x0 = x(index * step).toFixed(1);
    const x1 = x(Math.min(24, (index + 1) * step)).toFixed(1);
    const y = yA(value).toFixed(1);
    return `${index ? "L" : "M"}${x0} ${y} L${x1} ${y}`;
  }).join(" ");
}
  let basalSvg = "";
  if (showInsulin && state.layers.therapy) {
    const yA = (value) => aBot - (Math.min(value, 2.4) / 2.4) * (aBot - aTop);
    const curve = day.basalCurve || [0.55, 0.7, 0.45, 0.8, 1.35, 1.1, 0.62, 0.9, 0.48];
    const segments = basalDelivery(curve, day.date * 1.7);
    const bars = segments.filter((segment) => segment.rate > 0.02).map((segment) => {
      const barX = x(segment.start);
      const barW = Math.max(1.5, x(segment.end) - barX - 1.1);
      const barY = yA(segment.rate);
      const fill = segment.kind === "delivered" ? "#d7ecfb" : "#7eb6e8";
      const stroke = segment.kind === "delivered" ? "#7eb0dd" : "none";
      return `<rect x="${barX.toFixed(1)}" y="${barY.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(1, yA(0) - barY).toFixed(1)}" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
    }).join("");
    const legend = compact ? "" : `
      <rect x="${right - 268}" y="${aTop - 32}" width="14" height="8" fill="none" stroke="#8aa0c4" stroke-dasharray="2 2"/>
      <text class="tiny" x="${right - 250}" y="${aTop - 25}" fill="#727375">scheduled</text>
      <rect x="${right - 182}" y="${aTop - 32}" width="14" height="8" fill="#d7ecfb" stroke="#7eb0dd"/>
      <text class="tiny" x="${right - 164}" y="${aTop - 25}" fill="#727375">delivered</text>
      <rect x="${right - 98}" y="${aTop - 32}" width="14" height="8" fill="#7eb6e8"/>
      <text class="tiny" x="${right - 80}" y="${aTop - 25}" fill="#727375">automated</text>
    `;
    axisLabels += `
      <text class="tiny" x="${compact ? left - 8 : 6}" y="${yA(2) + 4}" text-anchor="${compact ? "end" : "start"}">2</text>
      <text class="tiny" x="${compact ? left - 8 : 6}" y="${yA(0) + 4}" text-anchor="${compact ? "end" : "start"}">0</text>
    `;
    basalSvg = `
      <line x1="${left}" x2="${right}" y1="${yA(2)}" y2="${yA(2)}" stroke="#E3EAED"/>
      <line x1="${left}" x2="${right}" y1="${yA(0)}" y2="${yA(0)}" stroke="#D3DBDD"/>
      <path d="${scheduledBasalPath(curve, x, yA)}" fill="none" stroke="#8aa0c4" stroke-width="${compact ? 1.2 : 4}" stroke-dasharray="2 3"/>
      ${bars}
    `;
    basalSvg += (day.presets || []).map((preset) => {
      const visibleStart = Math.max(preset.start, windowStart);
      const visibleEnd = Math.min(preset.end, windowEnd);
      if (visibleEnd <= visibleStart) return "";
      const x1 = x(preset.start);
      const width = Math.max(10, x(preset.end) - x1);
      const captionText = `${preset.name} ${preset.when} · recorded needs ${preset.needs} · range ${preset.range}`;
      const presetRows = attr(JSON.stringify([["Preset", preset.name], ["Recorded needs", preset.needs], ["Range", preset.range]]));
      const hit = compact
        ? ""
        : `<g class="preset-hit" tabindex="0" role="button" data-when="${attr(preset.when)}" data-rows="${presetRows}" data-line="${attr(captionText)}" aria-label="${attr(`${captionText}. Recorded preset. This is not a medication recommendation.`)}"><rect x="${x1}" y="${aTop}" width="${width}" height="${aBot - aTop}" fill="transparent"/></g>`;
      return `<rect x="${x1}" y="${aTop}" width="${width}" height="${aBot - aTop}" fill="rgba(225,234,249,0.28)" stroke="#708FC2" stroke-dasharray="4 3"/>${hit}`;
    }).join("");
    basalSvg += (day.markers || []).map((m) => `
      <line x1="${x(m.hour)}" x2="${x(m.hour)}" y1="${aTop + 8}" y2="${aBot - 6}" stroke="#8aa0c4" stroke-dasharray="2 2"/>
      <circle cx="${x(m.hour)}" cy="${aTop + 4}" r="8" fill="#fff" stroke="#8aa0c4"/>
      <text class="tiny" x="${x(m.hour)}" y="${aTop + 7}" text-anchor="middle" fill="#445f87">${m.label}</text>
    `).join("");
    basalSvg += legend;
  }

  let events = "";
  if (showWearable && state.layers.sleep) {
    events = day.sleep.map(([a, b]) => {
      const width = Math.max(8, x(b) - x(a));
      const duration = formatDuration((b - a) * 60);
      const recorded = state.ouraByDate[isoDate(day)];
      const sleepName = recorded && day.sleepWhen
        ? `Sleep · ${day.sleepWhen}${day.sleepScore ? ` · score ${day.sleepScore}` : ""}`
        : (day.run && day.run.preset ? "Sleep" : "Sleep · Oura Ring");
      const endOfDay = !compact && b >= 23.5 && b - a < 4;
      const fromClock = tagWhen(a);
      const toClock = b >= 23.99 ? "12:00 am" : tagWhen(b);
      const whenLabel = endOfDay ? fromClock : `${fromClock} – ${toClock}`;
      const sleepRows = attr(JSON.stringify([
        ["Sleep", endOfDay ? `Started ${fromClock}` : sleepName],
        ["Duration", duration],
        ["Source", "Oura Ring"],
      ]));
      const sleepHit = compact
        ? ""
        : ` class="sleep-hit" tabindex="0" role="button" data-when="${attr(whenLabel)}" data-rows="${sleepRows}"`;
      const sleepFill = compact ? "#d5deea" : "#E1EAF9";
      const sleepStroke = compact ? "none" : "#708FC2";
      return `<rect${sleepHit} x="${x(a)}" y="${eventY}" width="${width}" height="${eventH}" rx="${eventH / 2}" fill="${sleepFill}" stroke="${sleepStroke}" aria-label="${endOfDay ? `Sleep, ${fromClock}. Went to sleep at the end of the day.` : `${sleepName}.`}"/><circle cx="${x(a) + (compact ? 8 : 14)}" cy="${eventY + eventH / 2}" r="${compact ? 3.5 : 5}" fill="#708FC2"/>`;
    }).join("");
  }
  const loopOnWorkout = day.run && day.run.preset && day.run.preset.source === "Tidepool Loop";
  if (showWearable && state.layers.exercise && day.run && !loopOnWorkout) {
      const preset = day.run.preset;
      const patternStart = preset && preset.end != null ? preset.start : day.run.start;
      const patternEnd = preset && preset.end != null ? preset.end : day.run.end;
      const x1 = x(patternStart);
      const width = Math.max(12, x(patternEnd) - x1);
      events += `
        <rect x="${x1}" y="${eventY}" width="${width}" height="${eventH}" rx="${eventH / 2}" fill="#4A60E2" aria-label="${day.run.name || "Activity"} ${day.run.when}. Recorded on Oura Ring. This is not a medication recommendation."/>
        ${!compact && day.run.live ? `<text class="tiny" x="${(x1 + width + 8).toFixed(1)}" y="${eventY + 17}" fill="#737476">${day.run.name || "Activity"}</text>` : ""}
      `;
  }
  if (state.layers.exercise) {
    const presets = [...(day.scheduled || [])];
    if (loopOnWorkout) presets.unshift(day.run.preset);
    const rank = { Unconfirmed: 0, "Partial overlap": 1, Confirmed: 2 };
    presets.sort((a, b) => rank[presetMatch(a, day.run).status] - rank[presetMatch(b, day.run).status]);
    events += presets.map((item) => {
      const match = presetMatch(item, day.run);
      const x1 = x(item.start);
      const width = Math.max(12, x(item.end) - x1);
      const outline = `<rect x="${x1.toFixed(1)}" y="${eventY}" width="${width.toFixed(1)}" height="${eventH}" rx="${eventH / 2}" fill="${match.status === "Confirmed" ? "#4A60E2" : "#fff"}" stroke="#708FC2" ${match.status === "Confirmed" ? "" : 'stroke-dasharray="4 3"'} aria-label="${presetAria(item, match.status)}"/>`;
      const overlap = match.status === "Partial overlap" && match.overlap
        ? `<rect x="${x(match.overlap[0]).toFixed(1)}" y="${eventY}" width="${Math.max(4, x(match.overlap[1]) - x(match.overlap[0])).toFixed(1)}" height="${eventH}" rx="${eventH / 2}" fill="#4A60E2" aria-hidden="true"/>`
        : "";
      const presetRows = compact
        ? ""
        : ` tabindex="0" role="button" data-when="${attr(item.when || "")}" data-rows="${attr(JSON.stringify([["Preset", item.name], ["Source", item.source || "Tidepool Loop"], ["Status", match.status]]))}"`;
      return `<g class="preset-mark" data-key="${attr(`${item.name}-${item.start}-${item.end}`)}"${presetRows}>${outline}${overlap}</g>`;
    }).join("");
  }
  if (state.layers.tags && day.tags) {
    const zoomed = windowSpan < 23.5;
    const detailed = !compact && windowSpan <= 12;
    events += day.tags.filter((tag) => {
      if (tag.hour == null || tag.hour < windowStart - 0.02 || tag.hour > windowEnd + 0.02) return false;
      return tag.chart !== false || zoomed;
    }).map((tag) => {
      const name = detailed ? `${tag.label} · ${tagWhen(tag.hour)}` : tag.label;
      const width = name.length * (compact ? 5.2 : 6.6) + (compact ? 22 : 32);
      const tx = x(tag.hour);
      const tagY = eventY + eventH + (compact ? 2 : 10);
      const tagH = compact ? 12 : 22;
      const cy = tagY + tagH / 2;
      const iconX = tx + (compact ? 8 : 12);
      const textX = tx + (compact ? 14 : 22);
      const fill = compact ? "#f4f7fb" : "#fff";
      const stroke = compact ? "#8aa0c4" : "#708FC2";
      const ink = compact ? "#445f87" : "#737476";
      return `<g aria-label="${tag.label} at ${tagWhen(tag.hour)}, tag from ${tag.source}"><rect x="${tx}" y="${tagY}" width="${width}" height="${tagH}" rx="${compact ? 6 : tagH / 2}" fill="${fill}" stroke="${stroke}"/><circle cx="${iconX}" cy="${cy}" r="${compact ? 3 : 5}" fill="none" stroke="${stroke}" stroke-width="1.2"/><circle cx="${iconX}" cy="${cy}" r="1.3" fill="${stroke}"/><text class="tiny" x="${textX}" y="${tagY + (compact ? 9 : 15)}" fill="${ink}">${name}</text></g>`;
    }).join("");
  }
  const therapyLabel = state.layers.therapy
    ? `Automation ${day.auto}% · Basal ${day.basalU.toFixed(1)} U recorded`
    : "";

  if (!chartHost) {
    hideBolusTip();
    hideInsightTip();
  }

  const windowText = windowStart > 0.01 || windowEnd < 23.99
    ? ` Showing ${windowClock(windowStart)} to ${windowClock(windowEnd)}.`
    : "";
  const clipId = compact ? `week-plot-${day.date}` : "daily-plot-clip";
  const needsClip = !compact || windowStart > 0.01 || windowEnd < 23.99;
  const plotClip = needsClip ? `<defs><clipPath id="${clipId}"><rect x="${left}" y="0" width="${plotW}" height="${H}"/></clipPath></defs>` : "";
  const plotOpen = needsClip ? `<g clip-path="url(#${clipId})">` : "";
  const plotClose = needsClip ? `</g>` : "";

  const markup = `
    <svg class="${compact ? "" : "daily-tide"}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Glucose, bolus, and basal for ${day.long}.${windowText}">
      ${plotClip}
      ${axisLabels}
      ${plotOpen}
      ${bands}
      ${hourLabels}
      ${glu}
      ${bolus}
      ${basalSvg}
      ${events}
      ${upperRingMarkup(day, x, left, windowStart, windowEnd, compact)}
      ${plotClose}
      ${separatorY == null ? "" : `<line x1="0" x2="${W}" y1="${separatorY}" y2="${separatorY}" stroke="#C5D0DC" stroke-width="1" aria-hidden="true"/>`}
      ${compact ? "" : `<text class="tiny" x="4" y="${gTop - 6}">Glucose mg/dL</text>`}
      ${compact ? "" : `<text class="tiny" x="4" y="${bTop - 36}">Bolus U &amp; carbohydrates g</text>`}
      ${compact ? "" : `<text class="tiny" x="4" y="${aTop - 22}" fill="#445f87">Basal Rates U/hr</text>`}
    </svg>
  `;
  (chartHost || $("#daily-chart")).innerHTML = markup;
  if (!compact && !chartHost) {
    const stage = $("#daily-chart").closest(".chart-stage");
    if (stage && separatorY != null) {
      stage.style.setProperty("--health-legend-top", `${((separatorY + 8) / H) * 100}%`);
      stage.style.setProperty("--glucose-legend-top", `${((gBot + 8) / H) * 100}%`);
    }
    const glucoseLegend = $("#glucose-legend");
    if (glucoseLegend) glucoseLegend.hidden = !showGlucose;
  }
  if (chartHost) return;

  const pct = (px) => (px / W) * 100;
  const sleepBtn = $("#sleep-hot");
  const runBtn = $("#run-hot");
  const laneTop = `${(eventY / H) * 100}%`;
  const laneHeight = `${(eventH / H) * 100}%`;
  $(".cycle-month").hidden = !state.layers.cycle;
  if (showWearable && state.layers.sleep && day.sleep.length) {
    const [a, b] = day.sleep[0];
    const from = Math.max(a, windowStart);
    const to = Math.min(b, windowEnd);
    if (to > from + 0.02) {
      sleepBtn.hidden = false;
      sleepBtn.style.left = `${pct(x(from))}%`;
      sleepBtn.style.width = `${pct(Math.max(8, x(to) - x(from)))}%`;
      sleepBtn.style.top = laneTop;
      sleepBtn.style.height = laneHeight;
    } else {
      sleepBtn.hidden = true;
      $("#sleep-pop").hidden = true;
      sleepBtn.setAttribute("aria-expanded", "false");
    }
  } else {
    sleepBtn.hidden = true;
    $("#sleep-pop").hidden = true;
    sleepBtn.setAttribute("aria-expanded", "false");
  }
  if (showWearable && state.layers.exercise && day.run) {
    const patternStart = day.run.preset && day.run.preset.end != null ? day.run.preset.start : day.run.start;
    const patternEnd = day.run.preset && day.run.preset.end != null ? day.run.preset.end : day.run.end;
    const from = Math.max(patternStart, windowStart);
    const to = Math.min(patternEnd, windowEnd);
    if (to > from + 0.02) {
      runBtn.hidden = false;
      runBtn.style.left = `${pct(x(from))}%`;
      runBtn.style.width = `${pct(Math.max(12, x(to) - x(from)))}%`;
      runBtn.style.top = laneTop;
      runBtn.style.height = laneHeight;
    } else {
      runBtn.hidden = true;
      runBtn.dataset.presetKey = "";
      runBtn.setAttribute("aria-expanded", "false");
    }
    const activityName = day.run.name || "Run";
    const loopPreset = day.run.preset && day.run.preset.source === "Tidepool Loop" ? day.run.preset : null;
    const loopStatus = loopPreset ? presetMatch(loopPreset, day.run).status : "";
    const activityLine = loopPreset
      ? `${activityName} · Tidepool Loop · ${loopStatus} · ${day.run.when}`
      : day.run.preset && day.run.preset.end != null
        ? `Activity ${day.run.preset.when} · ${activityName} ${day.run.when}${day.run.hr ? ` · ${day.run.hr} bpm` : ""}${day.run.calories ? ` · ${day.run.calories} kcal` : ""}`
        : wearableCaption(day.run);
    runBtn.dataset.line = activityLine;
    runBtn.dataset.when = day.run.when || "";
    runBtn.dataset.rows = JSON.stringify([
      ["Activity", activityName],
      ["Source", loopPreset ? "Tidepool Loop" : "Oura Ring"],
      ...(loopStatus ? [["Status", loopStatus]] : []),
      ...(day.run.hr ? [["Heart rate", `${day.run.hr} bpm`]] : []),
      ...(day.run.calories ? [["Calories", `${day.run.calories} kcal`]] : []),
      ...(day.run.stress ? [[day.run.live ? "Intensity" : "Stress", day.run.stress]] : []),
    ]);
    runBtn.dataset.presetKey = loopPreset ? `${loopPreset.name}-${loopPreset.start}-${loopPreset.end}` : "";
    runBtn.setAttribute("aria-label", loopPreset
      ? presetAria(loopPreset, loopStatus)
      : `${day.run.preset && day.run.preset.end != null ? `Activity preset ${day.run.preset.when}. The colored pattern is that scheduled window. ` : ""}${wearableCaption(day.run)}`);
    const runTitle = document.querySelector("#run-card .card-title h2");
    const runSource = document.querySelector("#run-card .card-title span");
    if (runSource) runSource.textContent = loopPreset ? `Tidepool Loop · ${loopStatus}` : "Wearable · Oura Ring";
    const runFacts = document.querySelectorAll("#run-card .fact-list");
    if (runTitle) runTitle.textContent = day.run.when;
    if (runFacts[0]) {
      runFacts[0].innerHTML = `
        <div><dt>Avg. heart rate</dt><dd>${day.run.hr ? `${day.run.hr} bpm` : "—"}</dd></div>
        <div><dt>Calories burned</dt><dd>${day.run.calories ? `${day.run.calories} kcal` : "—"}</dd></div>
        <div><dt>${day.run.live ? "Intensity" : "Stress"}</dt><dd>${day.run.stress || "—"}</dd></div>
      `;
    }
    if (runFacts[1]) runFacts[1].innerHTML = "";
    const runNote = document.querySelector("#run-card .fine");
    if (runNote) runNote.textContent = loopPreset
      ? `${activityName} is a recorded Tidepool Loop preset. ${loopStatus === "Confirmed" ? "Oura Ring recorded a workout across this preset." : loopStatus === "Partial overlap" ? "Oura Ring recorded a workout for only part of this preset." : "Oura did not record a workout during this preset."} ${loopStatus}. This is not a medication recommendation.`
      : day.run.preset && day.run.preset.end != null
        ? `Activity preset ${day.run.preset.when} is the colored pattern. The ${activityName.toLowerCase()} recording is ${day.run.when}. These describe what was scheduled and recorded. This is not a medication recommendation.`
        : `This ${activityName.toLowerCase()} is wearable data from Oura Ring. Heart rate, calories, and ${day.run.live ? "intensity" : "stress"} describe the recording. This is not a medication recommendation.`;
    const runBanner = document.querySelector("#run-card .banner p");
    if (runBanner) runBanner.textContent = `${activityName} ${day.run.when}. ${day.run.hr ? `Average heart rate ${day.run.hr} bpm. ` : ""}${day.run.calories ? `${day.run.calories} kcal. ` : ""}${day.run.stress ? `${day.run.live ? "Intensity" : "Stress"} ${day.run.stress.toLowerCase()}.` : ""}`;
  } else {
    runBtn.hidden = true;
    runBtn.dataset.presetKey = "";
    runBtn.setAttribute("aria-expanded", "false");
  }
  placeChartHandles();
}

function chartPlotPercent(hour, origin = state.chartWindow, plotLeftPx = 0) {
  const plotLeft = (plotLeftPx / 920) * 100;
  const span = Math.max(0.25, origin.end - origin.start);
  return plotLeft + ((hour - origin.start) / span) * (100 - plotLeft);
}

function hideChartShade() {
  ["#chart-shade-start", "#chart-shade-end"].forEach((sel) => {
    const shade = $(sel);
    if (shade) shade.hidden = true;
  });
}

function showChartShade(start, end, origin) {
  const plotLeft = 0;
  const startPct = chartPlotPercent(start, origin);
  const endPct = chartPlotPercent(end, origin);
  const startShade = $("#chart-shade-start");
  const endShade = $("#chart-shade-end");
  if (!startShade || !endShade) return;
  if (startPct > plotLeft + 0.3) {
    startShade.hidden = false;
    startShade.style.left = `${plotLeft}%`;
    startShade.style.width = `${startPct - plotLeft}%`;
  } else startShade.hidden = true;
  if (endPct < 99.7) {
    endShade.hidden = false;
    endShade.style.left = `${endPct}%`;
    endShade.style.width = `${Math.max(0, 100 - endPct)}%`;
  } else endShade.hidden = true;
}

function placeChartHandles() {
  const startBtn = $("#chart-handle-start");
  const endBtn = $("#chart-handle-end");
  if (!startBtn || !endBtn) return;
  const { start, end } = state.chartWindow;
  const zoomed = start > 0.01 || end < 23.99;
  startBtn.style.left = `${chartPlotPercent(start)}%`;
  endBtn.style.left = `${Math.min(chartPlotPercent(end), 99)}%`;
  startBtn.setAttribute("aria-valuenow", String(start));
  endBtn.setAttribute("aria-valuenow", String(end));
  startBtn.setAttribute("aria-valuetext", windowClock(start));
  endBtn.setAttribute("aria-valuetext", windowClock(end));
  startBtn.setAttribute("aria-label", `Left handle, ${windowClock(start)}. Drag right to show a smaller time window.`);
  endBtn.setAttribute("aria-label", `Right handle, ${windowClock(end)}. Drag left to show a smaller time window.`);
  const label = $("#chart-window");
  if (!label) return;
  label.hidden = !zoomed;
  const text = $("#chart-window-label");
  if (text) text.textContent = `${windowClock(start)} – ${windowClock(end)}`;
}

function paintDailyWindow() {
  hideChartShade();
  const strip = $("#therapy-strip");
  if (strip && !strip.hidden) strip.innerHTML = therapyStripMarkup(true, 0, state.chartWindow);
  const day = calendarDays[state.day];
  if (day) drawDailyChart(day);
}

function applyChartWindow(start, end) {
  glideResize("daily", clampChartWindow(start, end), (window) => {
    state.chartWindow = window;
  }, paintDailyWindow, () => state.chartWindow);
}

function placeWeekHandles() {
  const { start, end } = state.weekWindow;
  $$("#week-stack .chart-handle").forEach((handle) => {
    const hour = handle.dataset.edge === "start" ? start : end;
    handle.style.left = `${Math.min(chartPlotPercent(hour, state.weekWindow, 44), 99)}%`;
    handle.setAttribute("aria-valuenow", String(hour));
    handle.setAttribute("aria-valuetext", windowClock(hour));
    handle.setAttribute("aria-label", `${handle.dataset.edge === "start" ? "Left" : "Right"} handle, ${windowClock(hour)}. Drag to show the same hours on each day from November 12 through 17.`);
  });
  const label = $("#week-window");
  if (!label) return;
  const zoomed = start > 0.01 || end < 23.99;
  label.hidden = !zoomed;
  const text = $("#week-window-label");
  if (text) text.textContent = `${windowClock(start)} – ${windowClock(end)}`;
}

function paintWeekCharts() {
  const root = $("#week-stack");
  if (!root) return;
  $$("#week-stack .chart-shade").forEach((shade) => { shade.hidden = true; });
  const strip = root.querySelector(".week-therapy");
  if (strip) strip.innerHTML = therapyStripMarkup(true, 44, state.weekWindow);
  root.querySelectorAll("[data-week-date]").forEach((host) => {
    const day = calendarDays.find((item) => String(item.date) === host.dataset.weekDate);
    if (day) drawDailyChart(applyOura(day), host, { compact: true });
  });
  placeWeekHandles();
}

function applyWeekWindow(start, end) {
  glideResize("week", clampChartWindow(start, end), (window) => {
    state.weekWindow = window;
  }, paintWeekCharts, () => state.weekWindow);
}

function showWeekShade(stage, start, end, origin) {
  const plotLeft = (44 / 920) * 100;
  const startPct = chartPlotPercent(start, origin, 44);
  const endPct = chartPlotPercent(end, origin, 44);
  const startShade = stage.querySelector(".chart-shade-start");
  const endShade = stage.querySelector(".chart-shade-end");
  if (!startShade || !endShade) return;
  if (startPct > plotLeft + 0.3) {
    startShade.hidden = false;
    startShade.style.left = `${plotLeft}%`;
    startShade.style.width = `${startPct - plotLeft}%`;
  } else startShade.hidden = true;
  if (endPct < 99.7) {
    endShade.hidden = false;
    endShade.style.left = `${endPct}%`;
    endShade.style.width = `${Math.max(0, 100 - endPct)}%`;
  } else endShade.hidden = true;
}

function bindWeekHandles() {
  const stack = $("#week-stack");
  if (!stack || stack.dataset.bound) return;
  stack.dataset.bound = "true";
  let drag = null;
  const nudge = (handle, key, shift) => {
    const step = shift ? 1 : 0.5;
    let { start, end } = state.weekWindow;
    if (key === "ArrowLeft") {
      if (handle.dataset.edge === "start") start -= step;
      else end -= step;
    } else if (key === "ArrowRight") {
      if (handle.dataset.edge === "start") start += step;
      else end += step;
    } else if (key === "Home" && handle.dataset.edge === "start") start = 0;
    else if (key === "End" && handle.dataset.edge === "end") end = 24;
    else return false;
    applyWeekWindow(start, end);
    return true;
  };
  stack.addEventListener("pointerdown", (event) => {
    const handle = event.target.closest(".chart-handle");
    if (!handle || event.button !== 0) return;
    const svg = stack.querySelector(".week-stage svg");
    if (!svg) return;
    drag = {
      edge: handle.dataset.edge,
      pointer: event.pointerId,
      originX: event.clientX,
      origin: shownResize("week", state.weekWindow),
      width: svg.getBoundingClientRect().width * ((920 - 44) / 920),
    };
    try { handle.setPointerCapture(event.pointerId); } catch (error) { /* Pointer capture needs a real pointer. */ }
    event.preventDefault();
  });
  stack.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointer !== event.pointerId) return;
    const span = drag.origin.end - drag.origin.start;
    const delta = ((event.clientX - drag.originX) / drag.width) * span;
    const next = drag.edge === "start"
      ? limitChartWindow(drag.origin.start + delta, drag.origin.end)
      : limitChartWindow(drag.origin.start, drag.origin.end + delta);
    drag.next = next;
    glideResize("week", next, (window) => {
      state.weekWindow = window;
    }, paintWeekCharts, () => state.weekWindow);
  });
  const finish = (event) => {
    if (!drag || drag.pointer !== event.pointerId) return;
    const next = drag.next;
    drag = null;
    if (next) applyWeekWindow(next.start, next.end);
    else placeWeekHandles();
  };
  stack.addEventListener("pointerup", finish);
  stack.addEventListener("pointercancel", finish);
  stack.addEventListener("dblclick", (event) => {
    if (event.target.closest(".chart-handle")) applyWeekWindow(0, 24);
  });
  stack.addEventListener("keydown", (event) => {
    const handle = event.target.closest(".chart-handle");
    if (!handle) return;
    if (nudge(handle, event.key, event.shiftKey)) event.preventDefault();
  });
  const reset = $("#week-window-reset");
  if (reset) reset.addEventListener("click", () => applyWeekWindow(0, 24));
}

function bindChartHandles() {
  let drag = null;
  const updatePending = (start, end) => {
    const next = limitChartWindow(start, end);
    drag.next = next;
    glideResize("daily", next, (window) => {
      state.chartWindow = window;
    }, paintDailyWindow, () => state.chartWindow);
  };
  $$(".chart-handle").forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      const svg = handle.parentElement.querySelector("svg");
      if (!svg) return;
      hideBolusTip();
      drag = {
        edge: handle.dataset.edge,
        pointer: event.pointerId,
        originX: event.clientX,
        origin: shownResize("daily", state.chartWindow),
        width: svg.getBoundingClientRect().width,
      };
      try { handle.setPointerCapture(event.pointerId); } catch (error) { /* Pointer capture needs a real pointer. */ }
      event.preventDefault();
    });
    handle.addEventListener("pointermove", (event) => {
      if (!drag || drag.pointer !== event.pointerId) return;
      const span = drag.origin.end - drag.origin.start;
      const delta = ((event.clientX - drag.originX) / drag.width) * span;
      if (drag.edge === "start") updatePending(drag.origin.start + delta, drag.origin.end);
      else updatePending(drag.origin.start, drag.origin.end + delta);
    });
    const finish = (event) => {
      if (!drag || drag.pointer !== event.pointerId) return;
      const next = drag.next;
      drag = null;
      hideChartShade();
      if (next) applyChartWindow(next.start, next.end);
      else placeChartHandles();
    };
    handle.addEventListener("pointerup", finish);
    handle.addEventListener("pointercancel", finish);
    handle.addEventListener("keydown", (event) => {
      const step = event.shiftKey ? 1 : 0.5;
      let { start, end } = state.chartWindow;
      if (event.key === "ArrowLeft") {
        if (handle.dataset.edge === "start") start -= step;
        else end -= step;
      } else if (event.key === "ArrowRight") {
        if (handle.dataset.edge === "start") start += step;
        else end += step;
      } else if (event.key === "Home" && handle.dataset.edge === "start") start = 0;
      else if (event.key === "End" && handle.dataset.edge === "end") end = 24;
      else return;
      event.preventDefault();
      applyChartWindow(start, end);
    });
    handle.addEventListener("dblclick", () => applyChartWindow(0, 24));
  });
  const reset = $("#chart-window-reset");
  if (reset) reset.addEventListener("click", () => applyChartWindow(0, 24));
}

function setRailOpen(open) {
  const layout = document.querySelector("#daily-stage .daily-layout");
  if (layout) layout.classList.toggle("is-rail-closed", !open);
  const show = $("#show-stats");
  if (show) show.hidden = open;
}

function bind() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.tab = tab.dataset.tab;
      if (state.tab === "cycle" && !["1", "2", "3", "custom"].includes(state.period)) state.period = "1";
      writeHash();
      render();
    });
  });

  $$("[data-period]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.period === "custom") {
        $("#custom-panel").hidden = !$("#custom-panel").hidden;
        return;
      }
      state.period = btn.dataset.period;
      state.cycleWindow = { start: 0, end: 0 };
      state.cycleWindow2 = { start: 0, end: 0 };
      $("#custom-panel").hidden = true;
      writeHash();
      renderCycles();
    });
  });

  $("#custom-apply").addEventListener("click", () => {
    const start = $("#custom-start").value;
    const end = $("#custom-end").value;
    const error = $("#custom-error");
    if (!start || !end || start > end) {
      error.hidden = false;
      return;
    }
    error.hidden = true;
    state.period = "custom";
    state.cycleWindow = { start: 0, end: 0 };
    state.cycleWindow2 = { start: 0, end: 0 };
    const fmt = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    state.custom = { start: fmt(start), end: fmt(end) };
    $("#custom-panel").hidden = true;
    renderCycles();
  });

  $$("[data-layer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.layer;
      state.layers[key] = !state.layers[key];
      btn.setAttribute("aria-pressed", String(state.layers[key]));
      renderDay();
      renderWeek();
    });
  });

  $$("[data-source]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.source = btn.dataset.source;
      $$("[data-source]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderDay();
    });
  });

  $("#cycle-circles").addEventListener("click", (event) => {
    const button = event.target.closest("[data-day-index]");
    if (!button) return;
    state.day = Number(button.dataset.dayIndex);
    closePops();
    renderDay();
  });

  $("#cx-prev").addEventListener("click", () => {
    if (state.phaseIndex > 0) {
      state.phaseIndex -= 1;
      renderCycleDaily();
    }
  });
  $("#cx-next").addEventListener("click", () => {
    if (state.phaseIndex < cycleDays.length - 1) {
      state.phaseIndex += 1;
      renderCycleDaily();
    }
  });

  $("#prev-day").addEventListener("click", () => {
    if (state.day > 0) {
      state.day -= 1;
      closePops();
      renderDay();
    }
  });
  $("#next-day").addEventListener("click", () => {
    if (state.day < calendarDays.length - 1) {
      state.day += 1;
      closePops();
      renderDay();
    }
  });

  $$("[data-device]").forEach((box) => {
    box.addEventListener("change", () => {
      state.devices[box.dataset.device] = box.checked;
      renderDay();
      renderWeek();
    });
  });

  $("#close-rail").addEventListener("click", () => setRailOpen(false));
  $("#show-stats").addEventListener("click", () => setRailOpen(true));

  $("#refresh").addEventListener("click", () => {
    const button = $("#refresh");
    if (button.classList.contains("is-loading")) return;
    const label = button.querySelector(".refresh-label");
    const rect = button.querySelector(".refresh-trim rect");
    button.classList.add("is-loading");
    button.setAttribute("aria-busy", "true");
    label.textContent = "Loading insights";
    requestAnimationFrame(() => {
      const box = button.getBoundingClientRect();
      const width = Math.max(1, box.width);
      const height = Math.max(1, box.height);
      button.querySelector(".refresh-trim").setAttribute("viewBox", `0 0 ${width} ${height}`);
      rect.setAttribute("x", "0.75");
      rect.setAttribute("y", "0.75");
      rect.setAttribute("width", Math.max(1, width - 1.5));
      rect.setAttribute("height", Math.max(1, height - 1.5));
      rect.setAttribute("rx", "4");
      button.classList.add("is-drawing");
    });
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      button.classList.remove("is-loading", "is-drawing");
      button.removeAttribute("aria-busy");
      label.textContent = "Refresh";
      state.ouraByDate = {};
      if ($("#status")) $("#status").textContent = "Updated just now";
      render();
    };
    rect.addEventListener("animationend", finish, { once: true });
    setTimeout(finish, 1400);
  });
  const ouraButton = $("#oura-connect");
  if (ouraButton) {
    ouraButton.addEventListener("click", () => {
      if (state.ouraStatus.connected) return;
      window.location.href = `${ouraOrigin()}/auth/oura`;
    });
  }

  $("#print").addEventListener("click", () => window.print());

  const insightCards = $("#cycle-insight-cards");
  if (insightCards) {
    insightCards.addEventListener("click", (event) => {
      if (!event.target.closest(".insight-explore")) return;
      const charts = $("#cycle-list");
      if (charts) charts.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  $("#learn-more").addEventListener("click", () => {
    const panel = $("#learn-panel");
    const open = panel.hidden;
    panel.hidden = !open;
    $("#learn-more").setAttribute("aria-expanded", String(open));
  });

  const dailyChart = $("#daily-chart");
  dailyChart.addEventListener("pointerover", (event) => {
    const hit = event.target.closest(".bolus-hit");
    if (hit) showBolusTip(hit);
    const insight = event.target.closest(".insight-hit, .preset-hit, .preset-mark, .sleep-hit");
    if (insight) showInsightTip(insight);
  });
  dailyChart.addEventListener("pointerout", (event) => {
    const hit = event.target.closest(".bolus-hit");
    if (hit) {
      const next = event.relatedTarget && event.relatedTarget.closest && event.relatedTarget.closest(".bolus-hit");
      if (!next) hideBolusTip();
    }
    const insight = event.target.closest(".insight-hit, .preset-hit, .preset-mark, .sleep-hit");
    if (insight) {
      const next = event.relatedTarget && event.relatedTarget.closest && event.relatedTarget.closest(".insight-hit, .preset-hit, .preset-mark, .sleep-hit");
      if (!next) hideInsightTip();
    }
  });
  dailyChart.addEventListener("focusin", (event) => {
    const hit = event.target.closest(".bolus-hit");
    if (hit) showBolusTip(hit);
    const insight = event.target.closest(".insight-hit, .preset-hit, .preset-mark, .sleep-hit");
    if (insight) showInsightTip(insight);
  });
  dailyChart.addEventListener("focusout", (event) => {
    const nextBolus = event.relatedTarget && event.relatedTarget.closest && event.relatedTarget.closest(".bolus-hit");
    if (!nextBolus) hideBolusTip();
    const nextInsight = event.relatedTarget && event.relatedTarget.closest && event.relatedTarget.closest(".insight-hit, .preset-hit, .preset-mark, .sleep-hit");
    if (!nextInsight) hideInsightTip();
  });

  $("#sleep-hot").addEventListener("click", (event) => {
    togglePop("#sleep-pop", "#sleep-hot", event.currentTarget);
  });
  $("#run-hot").addEventListener("click", () => {
    const card = $("#run-card");
    if (card.hidden) return;
    card.classList.add("emphasis");
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    $("#run-hot").setAttribute("aria-expanded", "true");
  });
  $("#run-hot").addEventListener("pointerenter", () => {
    showRunTip($("#run-hot"));
    setHotPreset(true);
  });
  $("#run-hot").addEventListener("pointerleave", () => {
    hideInsightTip();
    setHotPreset(false);
  });
  $("#run-hot").addEventListener("focus", () => {
    showRunTip($("#run-hot"));
    setHotPreset(true);
  });
  $("#run-hot").addEventListener("blur", () => {
    hideInsightTip();
    setHotPreset(false);
  });

  $("#account").addEventListener("click", () => {
    const menu = $("#account-menu");
    const open = menu.hidden;
    menu.hidden = !open;
    $("#account").setAttribute("aria-expanded", String(open));
  });

  $("#help").addEventListener("click", () => {
    const panel = $("#help-panel");
    const open = panel.hidden;
    panel.hidden = !open;
    $("#help").setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".account-wrap")) {
      $("#account-menu").hidden = true;
      $("#account").setAttribute("aria-expanded", "false");
    }
    if (!event.target.closest(".custom-pop")) {
      $("#custom-panel").hidden = true;
    }
  });

  window.addEventListener("hashchange", () => {
    readHash();
    render();
  });

  bindChartHandles();
  bindWeekHandles();
  bindCycleHandles();
  bindCircleZoom();
}

function togglePop(popSel, btnSel, btn) {
  const pop = $(popSel);
  const open = pop.hidden;
  closePops();
  pop.hidden = !open;
  btn.setAttribute("aria-expanded", String(open));
  if (open) {
    const stage = document.querySelector("#daily-stage .chart-stage");
    if (stage) placeRecordTip(pop, btn.getBoundingClientRect(), stage);
  }
}

function bolusClock(hour) {
  const whole = Math.floor(hour);
  let minutes = Math.round((hour - whole) * 60);
  let h = whole + (minutes === 60 ? 1 : 0);
  if (minutes === 60) minutes = 0;
  const suffix = h % 24 >= 12 ? "pm" : "am";
  const hour12 = h % 12 || 12;
  return { time: `${hour12}:${String(minutes).padStart(2, "0")}`, suffix };
}

function setHotPreset(on) {
  document.querySelectorAll("#daily-chart .preset-mark.is-hot").forEach((mark) => mark.classList.remove("is-hot"));
  const key = $("#run-hot")?.dataset.presetKey;
  if (!on || !key) return;
  const mark = document.querySelector(`#daily-chart .preset-mark[data-key="${CSS.escape(key)}"]`);
  if (mark) mark.classList.add("is-hot");
}

function setRecordEntry(tip, when) {
  const entry = tip?.querySelector(".record-tip-entry");
  if (!entry) return;
  entry.replaceChildren();
  const label = document.createElement("span");
  label.textContent = "Time of Entry";
  const clock = document.createElement("span");
  clock.className = "record-tip-clock";
  const match = String(when).match(/^(.*?)(\s*[ap]m)$/i);
  const bold = document.createElement("b");
  if (match) {
    bold.textContent = match[1];
    clock.append(bold, document.createTextNode(match[2]));
  } else {
    bold.textContent = when;
    clock.append(bold);
  }
  entry.append(label, clock);
}

function fillRecordTip(tip, when, rows, copy = "") {
  const time = tip.querySelector(".record-tip-time");
  if (time) time.textContent = when;
  const list = tip.querySelector(".record-tip-rows");
  if (list) {
    list.innerHTML = rows.map(([label, value]) => `<div><dt>${attr(label)}</dt><dd>${attr(value)}</dd></div>`).join("");
  }
  const note = tip.querySelector(".record-tip-copy");
  if (note) note.textContent = copy;
  setRecordEntry(tip, when);
}

function placeRecordTip(tip, mark, container) {
  const containerBox = container.getBoundingClientRect();
  const markMid = mark.top + mark.height / 2 - containerBox.top;
  const gap = 18;
  let left = mark.right - containerBox.left + gap;
  let flip = false;
  if (left + tip.offsetWidth > containerBox.width - 8) {
    left = mark.left - containerBox.left - tip.offsetWidth - gap;
    flip = true;
  }
  left = Math.max(8, left);
  let top = markMid - tip.offsetHeight / 2;
  top = Math.max(4, Math.min(top, containerBox.height - tip.offsetHeight - 4));
  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
  tip.classList.toggle("is-left", flip);
  const caret = Math.max(22, Math.min(markMid - top, tip.offsetHeight - 22));
  tip.style.setProperty("--caret-y", `${caret}px`);
}

function rowsFrom(hit) {
  try {
    const rows = JSON.parse(hit.dataset.rows || "[]");
    return Array.isArray(rows) ? rows : [];
  } catch {
    return hit.dataset.line ? [["Detail", hit.dataset.line]] : [];
  }
}

function showStructuredTip(tip, hit, stage) {
  if (!tip || !stage || !hit) return;
  fillRecordTip(tip, hit.dataset.when || "", rowsFrom(hit));
  tip.hidden = false;
  placeRecordTip(tip, hit.getBoundingClientRect(), stage);
}

function hideBolusTip() {
  const tip = $("#bolus-tip");
  if (tip) tip.hidden = true;
}

function hideInsightTip() {
  const tip = $("#insight-tip");
  if (tip) tip.hidden = true;
}

function showRunTip(hit) {
  showStructuredTip($("#insight-tip"), hit, document.querySelector("#daily-stage .chart-stage"));
}

function showInsightTip(hit) {
  showStructuredTip($("#insight-tip"), hit, document.querySelector("#daily-stage .chart-stage"));
}

function showBolusTip(hit) {
  const tip = $("#bolus-tip");
  const stage = document.querySelector("#daily-stage .chart-stage");
  if (!tip || !stage) return;
  const hour = Number(hit.dataset.hour);
  const clock = bolusClock(hour);
  const delivered = hit.dataset.delivered === "true";
  const units = Number(hit.dataset.units);
  const unitLabel = Number.isInteger(units) ? String(units) : units.toFixed(1);
  const rows = hit.dataset.kind === "carbs"
    ? [["Type", hit.dataset.meal || "🌮"], ["Absorption Time (hrs)", "3 hr"], ["Carbs", `${hit.dataset.carbs} g`]]
    : [["Type", delivered ? "Normal" : "Undelivered"], ["Insulin", `${unitLabel} U`], ["Carbs", `${hit.dataset.carbs} g`]];
  fillRecordTip(tip, `${clock.time} ${clock.suffix}`, rows);
  tip.hidden = false;
  placeRecordTip(tip, hit.getBoundingClientRect(), stage);
}

function closePops() {
  hideBolusTip();
  hideInsightTip();
  $("#sleep-pop").hidden = true;
  $("#sleep-hot").setAttribute("aria-expanded", "false");
  $("#run-hot").setAttribute("aria-expanded", "false");
  $("#run-card").classList.remove("emphasis");
}

function renderCycleDaily() {
  const day = cycleDays[state.phaseIndex];
  $("#cx-when").textContent = day.long;
  $("#cx-label").textContent = day.label;
  $("#cx-chip").textContent = `Cycle day ${day.cycleDay} · ${day.phase}`;
  $("#cx-chip").className = `phase-chip ${day.tone}`;
  $("#cx-prev").disabled = state.phaseIndex === 0;
  $("#cx-next").disabled = state.phaseIndex === cycleDays.length - 1;
  $("#cx-mark").style.left = `${((day.cycleDay - 0.5) / 29) * 100}%`;
  $("#cx-ruler-note").textContent = `Today is cycle day ${day.cycleDay} · ${day.phase}`;
  $("#cx-chart-card").dataset.phase = day.tone;
  $("#cx-insight-title").textContent = day.title;
  $("#cx-insight-sub").textContent = day.sub;
  $("#cx-insight-copy").textContent = day.copy;
  $("#cx-banner").className = `banner ${day.tone === "luteal" ? "purple" : "blue"}`;
  $("#cx-fol").classList.toggle("is-current", day.tone === "follicular");
  $("#cx-lut").classList.toggle("is-current", day.tone === "luteal");
  $("#cx-tir").innerHTML = day.tirParts.map(([color, pct, time, percent]) => `
    <div class="range-row">
      <div class="range-track"><span style="width:${Math.max(pct, pct > 0 ? 2 : 0)}%;background:${color}"></span></div>
      <span class="range-time">${time}</span>
      <span class="range-pct">${percent}</span>
    </div>
  `).join("");
  $("#cx-avg").innerHTML = `${day.avg} <small>mg/dL</small>`;
  $("#cx-insulin").textContent = `(${day.insulin.toFixed(1)} U)`;
  $("#cx-basal-chip").textContent = `${day.basalU.toFixed(1)}U`;
  $("#cx-bolus-chip").textContent = `${day.bolusU.toFixed(1)}U`;
  $("#cx-basal").textContent = `${day.basalPct}%`;
  $("#cx-bolus").textContent = `${day.bolusPct}%`;
  placeFill($("#cx-basal-bar"), $("#cx-basal-chip"), day.basalPct);
  placeFill($("#cx-bolus-bar"), $("#cx-bolus-chip"), day.bolusPct);
  $("#cx-carbs").innerHTML = `${day.boluses.reduce((sum, bolus) => sum + bolus.carbs, 0)} <small>g</small>`;
  const sleepMinutes = (day.sleep || []).reduce((sum, [start, end]) => sum + (end - start) * 60, 0);
  const sleepStat = $("#cx-sleep");
  const exerciseStat = $("#cx-exercise");
  const stressStat = $("#cx-stress");
  if (sleepStat) sleepStat.textContent = sleepMinutes ? formatDuration(sleepMinutes) : "—";
  if (exerciseStat) exerciseStat.textContent = day.exercise ? `${day.exercise.name} · ${day.exercise.when}` : "—";
  if (stressStat) {
    stressStat.innerHTML = day.stress
      ? stressGraph(
        { high: day.stress.high * 60, recovery: day.stress.recovery * 60 },
        "Daytime stress recorded for this cycle day",
      )
      : "—";
  }
  $("#cx-sd").innerHTML = `${day.sd} <small>mg/dL</small>`;
  drawPhaseChart(day);
}

function drawPhaseChart(day) {
  const W = 920;
  const H = 520;
  const left = 78;
  const right = 900;
  const plotW = right - left;
  const x = (hour) => left + (hour / 24) * plotW;
  const eventY = 34;
  const eventH = 22;
  const gTop = 88;
  const gBot = 210;
  const yG = (v) => gTop + ((250 - Math.min(250, Math.max(40, v))) / 210) * (gBot - gTop);
  const bands = [0, 3, 6, 9, 12, 15, 18, 21].map((h, i) => {
    const fill = i % 2 === 0 ? "#f3f5f8" : "#f7f8fa";
    return `<rect x="${x(h)}" y="18" width="${x(h + 3) - x(h)}" height="${H - 28}" fill="${fill}"/>`;
  }).join("");
  const hours = [0, 3, 6, 9, 12, 15, 18, 21].map((h) => {
    const name = h === 0 ? "12 am" : h === 12 ? "12 pm" : h < 12 ? `${h} am` : `${h - 12} pm`;
    return `<text class="tiny" x="${x(h) + 4}" y="16">${name}</text>`;
  }).join("");
  const sleep = (day.sleep || []).map(([start, end]) => {
    const width = Math.max(8, x(end) - x(start));
    const label = width > 130 ? `<text class="tiny" x="${x(start) + 26}" y="${eventY + 15}" fill="#737476">Sleep · Oura Ring</text>` : "";
    return `<rect x="${x(start)}" y="${eventY}" width="${width}" height="${eventH}" rx="${eventH / 2}" fill="#E1EAF9" stroke="#708FC2" aria-label="Sleep, recorded sample from Oura Ring. This is not a diagnosis."/><circle cx="${x(start) + 14}" cy="${eventY + eventH / 2}" r="5" fill="#708FC2"/>${label}`;
  }).join("");
  const activity = day.exercise
    ? `<rect x="${x(day.exercise.start)}" y="${eventY}" width="${Math.max(12, x(day.exercise.end) - x(day.exercise.start))}" height="${eventH}" rx="${eventH / 2}" fill="#4A60E2" aria-label="${day.exercise.name} ${day.exercise.when}. Recorded sample from Oura Ring. This is not a medication recommendation."/><text class="tiny" x="${x(day.exercise.end) + 8}" y="${eventY + 15}" fill="#737476">${day.exercise.name}</text>`
    : "";
  const line = day.glucose.map(([h, v]) => `${x(h).toFixed(1)},${yG(v).toFixed(1)}`).join(" ");
  const guides = [180, 70].map((v) => `<line x1="${left}" x2="${right}" y1="${yG(v)}" y2="${yG(v)}" stroke="#9dcfb4" stroke-dasharray="4 4"/>`).join("");
  const labels = [250, 180, 70].map((v) => `<text class="tiny" x="${left - 8}" y="${yG(v) + 4}" text-anchor="end">${v}</text>`).join("");
  const bTop = 248;
  const bBot = 340;
  const bolusMax = 10;
  const yB = (units) => bBot - (Math.min(units, bolusMax) / bolusMax) * (bBot - bTop);
  const bolus = day.boluses.map((b) => {
    const mealOnly = b.meal && !b.units;
    const barTop = yB(b.units);
    const circleR = mealOnly ? 4.5 : 13;
    const circleY = mealOnly ? bTop + 18 : barTop - circleR;
    const bar = mealOnly
      ? ""
      : `<rect x="${x(b.hour) - 4.5}" y="${barTop}" width="9" height="${Math.max(4, bBot - barTop)}" rx="1" fill="${b.delivered ? "#5B9FD4" : "#e0b84a"}"/>`;
    const units = mealOnly ? "" : `<text class="tiny" x="${x(b.hour) + 20}" y="${circleY + 4}" fill="#737476">${b.units} U</text>`;
    const note = mealOnly
      ? `${b.meal}, ${b.carbs} g. No bolus was recorded with this meal.`
      : `Bolus ${b.units} U with ${b.carbs} g carbohydrates.`;
    const circle = mealOnly
      ? `<circle cx="${x(b.hour)}" cy="${circleY}" r="${circleR}" fill="#FFE8CF" stroke="#C9A27A" stroke-width="1" aria-label="${note} Recorded. Not a medication recommendation."/>`
      : `<circle cx="${x(b.hour)}" cy="${circleY}" r="${circleR}" fill="${b.delivered ? "#fff" : "#f8e7b0"}" stroke="${b.delivered ? "#708FC2" : "#e0b84a"}" aria-label="${note} Recorded. Not a medication recommendation."/><text class="tiny" x="${x(b.hour)}" y="${circleY + 4}" text-anchor="middle" fill="#737476">${b.carbs}</text>`;
    return `${bar}${circle}${units}`;
  }).join("");
  const basal = [0.6, 0.8, 0.5, 0.9, 1.2, 0.85, 0.7, 0.95];
  const aTop = 392;
  const aBot = 492;
  const yA = (v) => aBot - (v / 2.2) * (aBot - aTop);
  let area = `M ${x(0)} ${aBot} `;
  basal.forEach((v, i) => { area += `L ${x((i / (basal.length - 1)) * 24)} ${yA(v)} `; });
  area += `L ${x(24)} ${aBot} Z`;
  $("#cx-chart").innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Sleep, exercise, glucose, bolus, carbohydrates, and basal for ${day.long}, ${day.phase}. Sleep, exercise, and stress are a recorded Oura sample for this cycle day. Carb meals have no bolus. This is not a diagnosis or a medication recommendation.">
      ${bands}
      ${hours}
      ${sleep}
      ${activity}
      <text class="tiny" x="${left}" y="${gTop - 8}">Glucose mg/dL</text>
      <rect x="${left}" y="${yG(180)}" width="${plotW}" height="${yG(70) - yG(180)}" fill="rgba(58,170,106,0.08)"/>
      ${guides}
      ${labels}
      <polyline points="${line}" fill="none" stroke="#3aaa6a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
      <text class="tiny" x="${left}" y="${bTop - 8}">Bolus U &amp; carbohydrates g</text>
      ${bolus}
      <text class="tiny" x="${left}" y="${aTop - 16}">Basal rates U/hr</text>
      <path d="${area}" fill="rgba(62,143,212,0.28)" stroke="#3d8fd4" stroke-width="1.4"/>
    </svg>
  `;
}

function renderWeek() {
  const root = $("#week-stack");
  if (!root) return;
  const days = ringDays().slice().reverse();
  const first = days[days.length - 1];
  const last = days[0];
  $("#week-range").textContent = `${first.label} – ${last.label}. Each chart is one day. Figures describe the recorded days. They are not a medication recommendation.`;
  const showTherapy = state.devices.tandem && state.layers.therapy;
  root.innerHTML = `
    ${showTherapy ? `<div class="therapy-strip week-therapy">${therapyStripMarkup(true, 44, state.weekWindow)}</div>` : ""}
    <div class="week-charts">
    ${days.map((day) => `
      <article class="chart-card week-day">
        <div class="chart-head">
          <h2>${day.long} <span class="quiet">${day.phaseName}${day.periodDay ? ` · period day ${day.periodDay}` : ""}</span></h2>
          <span class="quiet">${day.avg} mg/dL · ${day.tir}% in range · ${day.insulin.toFixed(1)} U</span>
        </div>
        <div class="chart-stage week-stage">
          <div data-week-date="${day.date}"></div>
          <div class="chart-shade chart-shade-start" hidden></div>
          <div class="chart-shade chart-shade-end" hidden></div>
        </div>
      </article>
    `).join("")}
    <div class="week-handles">
      <button class="chart-handle" type="button" data-edge="start" role="slider" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="24" aria-label="Left handle. Drag to show a smaller time window on November 12 through 17."></button>
      <button class="chart-handle" type="button" data-edge="end" role="slider" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="24" aria-label="Right handle. Drag to show a smaller time window on November 12 through 17."></button>
    </div>
    </div>
  `;
  days.forEach((day) => {
    const shown = applyOura(day);
    drawDailyChart(shown, root.querySelector(`[data-week-date="${day.date}"]`), { compact: true });
  });
  placeWeekHandles();
}

function render() {
  renderChrome();
  renderCycles();
  renderDay();
  renderCycleDaily();
  renderWeek();
  const visible = ringDays();
  if (!visible.some((day) => day.date === calendarDays[state.day].date)) visible.push(calendarDays[state.day]);
  ensureOura(visible);
  const live = state.ouraByDate[isoDate(calendarDays[state.day])];
  if (live && $("#status")) {
    $("#status").textContent = "Sleep stages, heart-rate variability, readiness, activity, resting heart rate, daytime stress, and tags on this day are from your Oura account. Glucose and insulin are still the sample. This is not a diagnosis or a medication recommendation.";
  }
}

readHash();
bind();
render();
window.addEventListener("resize", alignSummaryToRange);
loadOuraStatus().then(() => {
  paintOuraButton();
  if (state.ouraStatus.connected) render();
});
