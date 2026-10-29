# Stepper

Progress through a multi-step flow (the request form: Request, Schedule, Vehicle, Documents, Review).

**Files:** `stepper.css` · demo `stepper.html`

## Markup

```html
<div class="as-stepper" aria-label="Request progress">
  <span class="as-step as-step--done"><span class="as-step__n"><!-- check icon --></span>Request</span>
  <span class="as-stepper__conn as-stepper__conn--done" aria-hidden="true"></span>
  <span class="as-step as-step--active" aria-current="step"><span class="as-step__n">3</span>Vehicle</span>
  <span class="as-stepper__conn" aria-hidden="true"></span>
  <span class="as-step"><span class="as-step__n">4</span>Documents</span>
</div>
```

| State | Look |
|---|---|
| Done (`as-step--done`) | Success-green disc with a white check; connector after it green |
| Active (`as-step--active`) | Gold disc with the number; label `--as-gold-deep`; mark it `aria-current="step"` |
| Upcoming | `--as-bg-alt` disc, `--as-line` border, `--as-ink-soft` label |

Connectors are 28px × 1px.
