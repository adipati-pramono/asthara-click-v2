# Loaders

Four loaders, all gold, one per surface. Pair a loader with a status string after about 400 ms.

**Files:** `loader.css` · `asthara-mark.png` (for the mark loader) · demo `loader.html`

| Loader | Class | Use | Loop |
|---|---|---|---|
| Eightcellent loop | `as-loader-eight` (8 empty `<i>`) | Signature: full page, drawer, modal | 2.4 s |
| Linear | `as-loader-linear` | Top edge of a sheet, table or panel | 1.8 s |
| Mark | `as-loader-mark` (with the mark `<img>`) | Splash, app boot | 1.6 s spin, 2.6 s breath |
| Inline trio | `as-loader-trio` (3 empty `<i>`) | Inside buttons, chips, table cells | 1.2 s |

## Rules

- All animations stop under `prefers-reduced-motion: reduce`.
- No coloured loaders outside gold; no bouncing, overshooting or spinning the whole mark.
- Give each loader `role="status"` and an `aria-label`.
