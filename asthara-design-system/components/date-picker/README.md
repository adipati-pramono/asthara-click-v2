# Date picker

Date and date-time picker: one React component, two modes via `mode`. Calendar popover, gold day selection, 12/24-hour time strip, keyboard navigation (arrows, Enter, Esc). Click the month title to jump to month and year grids.

**Files**

| File | Use it when |
|---|---|
| `DatePicker.jsx` | Your app is React: copy this file in. |
| `DatePicker.d.ts` | Props and types. |
| `date-picker.js` | No build step: a plain browser script of the same component. Needs React 18 on the page; exposes `window.Asthara.DatePicker`. |
| `date-picker.css` | Porting to another framework: the exact CSS the component injects (class names `asds-dp__…`). |
| `date-picker.html` | Working demo. |

## Use (React)

```jsx
import { DatePicker } from "./DatePicker";

<DatePicker label="Move-in date" min={new Date()} value={date} onChange={setDate} />
<DatePicker mode="datetime" label="Inspection slot" hour12 minuteStep={15} onChange={setWhen} />
```

Load `foundation/asthara.css` on the page. The component injects its own styles once, so `date-picker.css` is not needed in a React app. `onChange` always gives a `Date` (or `null` when cleared).

## Props

- `mode`: `"date"` (default) or `"datetime"`.
- `value` + `onChange` (controlled) or `defaultValue`; dates may be a `Date`, a parseable string, a timestamp or `null`.
- `label`, `required`, `placeholder`, `disabled`, `id`; `size`: `"md"` (40px) or `"sm"` (32px).
- `min` / `max` (inclusive), `weekStartsOn` (0 = Sunday default, 1 = Monday).
- Datetime: `hour12` (default true), `minuteStep` (default 5).
- `clearable` (default true), `align` (`"left"` or `"right"` popover anchor), `format` (custom trigger label).

Leave room below the field for the calendar, or use `align="right"` near a right edge. Full types: `DatePicker.d.ts`.
