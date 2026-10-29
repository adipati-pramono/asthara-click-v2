# KPI card

A headline number with its label and a one-line change note.

**Files:** `kpi-card.css` · demo `kpi-card.html`

## Markup

```html
<div class="as-kpi-grid">
  <div class="as-kpi">
    <span class="as-kpi__label">Active loadings</span>
    <span class="as-kpi__value">47</span>
    <span class="as-kpi__delta as-kpi__delta--up">+12% vs last week</span>
  </div>
</div>
```

| Class | What |
|---|---|
| `as-kpi-grid` | 4 columns, 14px gap |
| `as-kpi` | White, 1px `--as-line` border, 12px radius, 14px/16px padding, no shadow |
| `as-kpi__label` | Raleway 700 10px uppercase, `--as-ink-soft` |
| `as-kpi__value` | DM Sans 700 30px, tabular figures |
| `as-kpi__delta--up` · `--warn` · `--mute` | Success green · warning amber · `--as-ink-soft` |

## Rules

- Numbers use tabular figures. Currency is written `Rp 1.284.000` (Rp, thin space, dot thousands).
- The grid is 4 across; on narrow screens, reflow it in your own layout.
