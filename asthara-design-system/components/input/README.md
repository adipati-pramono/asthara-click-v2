# Inputs

Text field, textarea, checkbox and toggle. 40px fields, 8px radius, uppercase caption labels.

**Files:** `input.css` · `input.js` (toggle behaviour) · demo `input.html`

## Markup

```html
<div class="as-field">
  <label class="as-field__label" for="plate">Vehicle plate *</label>
  <input class="as-input" id="plate" type="text">
</div>

<label class="as-check"><input type="checkbox" class="as-check__box"> Keep me signed in</label>

<button type="button" class="as-toggle" role="switch" aria-checked="false" aria-label="Two-factor auth"></button>
```

| Class | What |
|---|---|
| `as-field` | Label above control, 6px gap |
| `as-field__label` | Raleway 700 10px, uppercase, 0.08em tracking, `--as-ink-soft` |
| `as-input` | 40px, `--as-line-strong` border; focus: gold border + `--as-focus-ring` |
| `as-textarea` | 64px, 10px/12px padding, no resize |
| `as-check` + `as-check__box` | 16px box, gold with a white tick when checked |
| `as-toggle` | 32×18 switch; gold when `aria-checked="true"` |

## Rules

- Mark required fields with `*` in the label.
- `input.js` only flips `aria-checked` on toggles. In React/Vue/Angular, bind `aria-checked` to your state and drop the script.
- For dropdowns use **Select**; for dates use **Date picker**. Both match these fields (40px, same label, same focus ring).
