# Tidepool motion

Tidepool Daily is a clinical record. Motion confirms an action or points at a value. It does not replay the glucose, insulin, or cycle ranges.

This is separate from Calypso. Do not use `CalypsoMotion`, glow, blush, or the slow ease-out durations in `docs/MOTION.md`.

## Mood

**Precise · quiet · readable**

A stroke draws the control that is working. The words on that control say what is happening. When the stroke finishes, the control returns to its resting label. Charts stay where they were drawn.

## Principles

1. **Numbers stay put.** Do not animate a trace, bar, or phase range the person is already reading. A refresh may replace data. It does not redraw the chart for effect.
2. **The control draws itself.** Loading uses a trim path on that control’s own outline. Do not add a separate spinner.
3. **The label tells the truth for the whole stroke.** Change the label when the stroke starts. Restore it when the stroke ends.
4. **One stroke at a time.** Ignore a second click until the first stroke finishes.
5. **No spring, bounce, or count-up.** Clinical values do not tick, overshoot, or ease into place.
6. **Reduce motion keeps the status and drops the travel.** The label still changes. The stroke does not draw.

## Tokens

Defined on `:root` in `styles.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--motion-draw` | **1150ms** | Trim path. Long enough to read “Loading insights.” |
| `--motion-draw-curve` | `cubic-bezier(0.4, 0, 0.2, 1)` | Steady draw. Starts and ends without a snap or a float. |
| `--motion-state` | **160ms** | Opacity only, when a reading card appears. |
| `--motion-state-curve` | `cubic-bezier(0.2, 0, 0, 1)` | Short settle. Not used to move data. |

Do not invent a duration under 160ms for a stroke, or over 1150ms for a control. Charts are not given a duration.

## Patterns

### Refresh — trim path

The reference is the Daily **Refresh** pill.

| | |
| --- | --- |
| Trigger | Click Refresh. |
| Label | “Loading insights” for the whole stroke, then “Refresh.” |
| Path | The pill outline. Rounded rect, 4px corner, inset 0.75px so the stroke sits on the border. |
| Stroke | Navy `#4f6a92`, 1.5px. |
| Trim | `pathLength` 100. Dash offset runs **100 → 0**. The stroke starts at the SVG rect origin and travels the outline once. |
| Duration | `--motion-draw` (1150ms) |
| Curve | `--motion-draw-curve` |
| Resting state | CSS border returns. The trim stroke opacity returns to 0. |
| Then | The view renders again. Status can read “Updated just now.” |
| Second click | Ignored until the label is “Refresh” again. |
| Reduce motion | Label still reads “Loading insights,” then “Refresh.” No traveling stroke. The border stays in its resting style. |

### Cycle line — reading

Hover on the glucose line in Cycle Insights.

| | |
| --- | --- |
| What moves | A 6px marker and a hairline on that day’s x. The card sits beside the point. |
| What does not move | The glucose line, insulin bars, phase ranges, and day numbers. |
| Card | Date, cycle day, one sentence about that day’s recorded glucose against the cycle average and the 70–180 guides, then daily mean glucose, time in range, and total daily dose. |
| Timing | The card appears with the point. Do not slide it in. If an opacity fade is added later, use `--motion-state` only. |
| Copy | Recorded values. Not a medication recommendation. Predicted ovulation is a timing marker, not a measured hormone. |

### Phase ranges

Menstrual, follicular, fertile, and luteal are static spans under the plot. They do not grow, wipe, or sequence on load.

### Statistics rail

Open and close are immediate. The main column uses the width it is given. Do not slide the rail.

## Figma notes

Annotate a motion with the token, not a one-off millisecond.

- **Refresh:** Draw · 1150ms · trim path on the pill · label “Loading insights” → “Refresh”
- **Cycle reading:** State · 0ms (or 160ms opacity) · marker only · chart unchanged
- **Charts, phases, rail:** No motion

## Reduce motion

`prefers-reduced-motion: reduce` removes the trim animation. Status text still changes, because the person needs to know the refresh is underway.
