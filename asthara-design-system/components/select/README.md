# Select

Single- and multi-select dropdown: one React component, two modes via `multi`. Searchable, chips in multi mode, gold selection mark, `e2` popover.

**Files**

| File | Use it when |
|---|---|
| `Select.jsx` | Your app is React: copy this file in. |
| `Select.d.ts` | Props and types (TypeScript or as documentation). |
| `select.js` | No build step: a plain browser script of the same component. Needs React 18 on the page; exposes `window.Asthara.Select`. |
| `select.css` | Porting to another framework: the exact CSS the component injects (class names `asds-sel__…`). |
| `select.html` | Working demo. |

## Use (React)

```jsx
import { Select } from "./Select";

<Select label="Service region" options={["Jakarta Pusat", "Tangerang", "Bekasi"]} defaultValue="Tangerang" />
<Select multi label="Active zones" options={zones} value={selected} onChange={setSelected} />
```

Load `foundation/asthara.css` on the page: the component reads the `--as-*` variables. It injects its own styles once (`<style id="asds-select-styles">`), so `select.css` is not needed in a React app.

## Props

- `options` (required): `{ value, label?, hint?, disabled? }` objects or bare strings / numbers.
- `value` + `onChange` (controlled) or `defaultValue` (uncontrolled). Single mode gives one value or `null`; `multi` gives an array.
- `label`, `required`, `placeholder`, `disabled`, `id`; `size`: `"md"` (40px, default) or `"sm"` (32px).
- `searchable` (on by default above 7 options), `closeOnSelect` (single: true, multi: false).
- Multi only: `clearable` ("Clear all" footer, default on), `maxTags` (chips before "+N", default 3).

The control fills its container's width. Full types: `Select.d.ts`.
