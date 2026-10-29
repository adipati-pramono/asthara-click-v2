# App boot

The screen an app shows while it starts: the Mark loader at 104px with the app's name and a one-line description, centred on the canvas.

**Files:** `app-boot.css` · `asthara-mark.png` · demo `app-boot.html`. It uses the Mark loader, so load `../loader/loader.css` too.

## Markup

```html
<div class="as-boot" role="status" aria-label="Loading ORBIT">
  <div class="as-loader-mark as-loader-mark--lg" aria-hidden="true">
    <img src="asthara-mark.png" alt="">
  </div>
  <p class="as-boot__name">ORBIT</p>
  <p class="as-boot__desc">Operations, Reporting &amp; Billing</p>
</div>
```

| Part | What |
|---|---|
| `as-boot` | Full viewport (`min-height: 100vh`), `--as-bg` canvas, content centred |
| `as-loader-mark--lg` | The Mark loader at 104px, with a 62px mark |
| `as-boot__name` | App name: DM Sans 700 16px, uppercase, tracked 0.18em, `--as-ink` |
| `as-boot__desc` | One line on what the app does: Raleway 13.5px, `--as-ink-soft` |

## Rules

- ORBIT and its description are placeholders: use your app's name and a short line about it.
- One loader on the screen. The animation stops under `prefers-reduced-motion` (from the Loader CSS).
