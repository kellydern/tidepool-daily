# Tidepool Daily

A desktop prototype of Tidepool’s Daily view, restyled in the Cycle Insights visual system. It shows a recorded sample day, a 7-day view, and cycle context alongside glucose and insulin.

This is a wellness record, not a diagnostic tool. Figures describe recorded or sample data. They are not a recommendation to change a dose, a method, or what to eat.

## Run

```bash
node oura-server.mjs
```

Open http://127.0.0.1:8787/

Oura data is optional. Copy `.env.example` to `.env` and add an Oura application client id and secret. `.env` stays on this machine.
