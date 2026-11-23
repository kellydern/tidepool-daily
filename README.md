# Tidepool Daily

A desktop prototype of Tidepool’s Daily view, restyled in the Cycle Insights visual system. It shows a recorded sample day, the week of Nov 12–17, and three cycles from Oct 21, 2025 to Jan 16, 2026.

The sample person is Lupita Lionfish. Glucose and insulin on these screens are a recorded sample. Oura sleep, activity, and tags appear when a ring is connected. Figures describe the record. They are not a recommendation to change a dose, a method, or what to eat.

The same screens are in Figma on the discovery board: [Daily, 7 day, and Cycle Insights](https://www.figma.com/design/ae4O74howmad6XvUu6zIVA?node-id=9835-1160).

## Live demo

https://kellydern.github.io/tidepool-daily/

The hosted page is the sample only. Connect Oura from a local run if you want a live ring.

![Tour of Daily, the week, Cycle Insights, and Cycle Insights 2](gifs/tour.gif)

## Set it up locally

You need [Node.js 18](https://nodejs.org/) or newer. There is nothing to install with npm.

```bash
git clone https://github.com/kellydern/tidepool-daily.git
cd tidepool-daily
node oura-server.mjs
```

Open http://localhost:8787/

The server prints `Prototype at http://127.0.0.1:8787/#daily` when it is ready. Leave that terminal running. Stop it with Control-C.

Glucose, insulin, carbs, and the cycle charts are the built-in sample. They show up with no account and no `.env` file. Use the tabs along the top, or open a screen directly:

| Screen | Address |
| --- | --- |
| Daily | http://localhost:8787/#daily |
| Nov 12–17 | http://localhost:8787/#week |
| Cycle Insights | http://localhost:8787/#cycle-3 |
| Cycle Insights 2 | http://localhost:8787/#cycle-insights-2 |
| Daily with the cycle strip | http://localhost:8787/#daily-cycle |

The same files also live in the Calypso app repo at `prototypes/tidepool-daily`. From that folder, the start command is the same: `node oura-server.mjs`.

### Add an Oura ring

This part is optional. Skip it if the sample wearable data is enough.

1. Create an application at [cloud.ouraring.com/oauth/applications](https://cloud.ouraring.com/oauth/applications).
2. Set the redirect URI to `http://localhost:8787/auth/oura/callback`. It has to match that address exactly.
3. In the project folder, copy the example env file and add the application’s client id and secret:

```bash
cp .env.example .env
```

```
OURA_CLIENT_ID=your-client-id
OURA_CLIENT_SECRET=your-client-secret
```

4. Stop the server and start it again with `node oura-server.mjs`. It reads `.env` only at startup.
5. Open http://localhost:8787/#daily and click **Connect Oura**. Approve the request. Oura asks for daily, heart rate, workout, tag, and personal access so the prototype can read sleep, activity, and tags.
6. Come back to Daily. The side panel fills with the ring’s recorded days where the sample week asks for them.

If the button says **Add Oura app**, the `.env` file is missing a value or the server was not restarted after it was saved.

`.env` and `.oura-session.json` stay on this machine. Both are ignored by git.

## Daily

Saturday, Nov 14 is the sample day. The heart-rate, glucose, carb, bolus, and basal lanes are tall enough to read the swings and still fit a desktop window. The plot runs the full width of the chart. The Time in Range card lines up with the 70–180 mg/dL band.

This day stays outside that band more than the earlier sample: lows near 51 and 56 mg/dL, and highs that sit at the top of the glucose lane. The recorded insulin total stays 38.4 U. Carb meals stay on the chart. The side panel shows the Oura day when a ring is connected, and the therapy table lists the recorded t:slim X2 settings.

![Hovering the daily chart and moving between nearby days](gifs/daily.gif)

![Saturday Nov 14 daily view, with a taller glucose lane, carb meals, and the Time in Range card beside the chart](screenshots/daily.png)

## Nov 12–17

One chart per day, newest first, with a shared pair of resize handles. Saturday is the higher-variation sample: 164 mg/dL average, 51% in range, 38.4 U.

![Week of Nov 12–17, one chart per day](screenshots/week.png)

## Cycle Insights

Last 3 Cycles is the default span. The plot has no grey fill and runs the full width of the container. Axis numbers sit on the left and right edges. Period days are outlines. A mark on Dec 20 records a method change from combined pill to hormonal IUD.

Three cards compare cycle days 1–4 with the last 3 days before the next period: glucose, time in range, and insulin. Carbs are one gold bar per day. Drag a handle inward to read a shorter span.

![Three cycles from Oct 21 2025 to Jan 16 2026, with glucose range, daily insulin, exercise, carbs, and setting marks](screenshots/cycle.png)

## Cycle Insights 2

The same three cycles, with carbohydrate intake drawn three ways under the exercise row:

- **Shade.** One cell per day. Darker gold is more grams.
- **By phase.** A phase average while the full span is in view. Zoom in and each day gets its own bar and gram label.
- **Vs average.** A line of daily grams against a dashed line for the average of the cycles on screen.

Drag either handle, or circle a span, to move from the phase summary to the daily grams. Exercise names and setting text appear once the window is narrow enough.

![Dragging a Cycle Insights 2 handle to zoom into daily carb detail, then resetting to the full cycle](gifs/cycle-insights-2-zoom.gif)

![Cycle Insights 2 with the carb shade, phase bars, and average line stacked under exercise](screenshots/cycle-insights-2.png)
