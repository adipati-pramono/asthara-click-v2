# Button

Actions. One gold primary per surface; everything else is secondary or ghost.

**Files:** `button.css` · demo `button.html`

## Markup

```html
<button type="button" class="as-btn as-btn--primary">New request</button>
<button type="button" class="as-btn as-btn--secondary as-btn--sm">Export</button>
```

| Class | What |
|---|---|
| `as-btn` | Base: 40px high, 16px side padding, 8px radius, Raleway 600 13px |
| `as-btn--primary` | Gold fill, white label; hover `--as-gold-deep` |
| `as-btn--secondary` | White, ink label, `--as-line-strong` border |
| `as-btn--ghost` | Transparent; hover `--as-bg-alt` |
| `as-btn--success` · `as-btn--danger` | Approve / reject actions |
| `as-btn--sm` · `as-btn--lg` | 32px (12px text, 6px radius) · 48px (14px text) |
| `disabled` attribute or `as-btn--disabled` | `--as-line` fill, `--as-ink-faint` label |

Icons: 14px Lucide icons (1.75 stroke) placed before or after the label as inline SVG with `stroke="currentColor"`.

## Rules

- Sentence case, and name the destination: "Open the request", "See the masterplan". No "Click here" or "Learn more".
- Press: no scale; the colour shifts to the deeper tone. Keyboard focus shows the 3px gold ring (`--as-focus-ring`).
- Contrast note: the white label on gold is 3.1:1, under the WCAG 4.5:1 text target. It is the brand's colour pair.
