# Asthara components

Copy-ready code for the components of the Asthara Design System (Asthara Skyfront City and the Loadify platform). Each component sits in its own folder, so you can take only what you need and copy it into your project, or translate it to your framework.

## Start here

| File | What it is |
|---|---|
| `Asthara Design System.html` | The brand and design reference: colours, type, spacing, components and an applied screen. Read this first. |
| `index.html` | Every component live with its code beside it. Copy from here. |
| `favicon/` | The Asthara icons for your app's `<head>`. The snippet in `favicon/README.txt` uses root paths (`/favicon.ico`), so copy the files to your site's root or adjust the paths. |

## Quick start

```html
<!-- 1. once per page -->
<link rel="stylesheet" href="foundation/asthara.css">

<!-- 2. each component you use -->
<link rel="stylesheet" href="components/button/button.css">

<button type="button" class="as-btn as-btn--primary">New request</button>
```

## What's inside

| Component | Folder | Built as |
|---|---|---|
| Button | `components/button/` | HTML + CSS |
| Inputs (field, textarea, checkbox, toggle) | `components/input/` | HTML + CSS, small JS for the toggle |
| Select | `components/select/` | React component + plain-script build + CSS for porting |
| Date picker | `components/date-picker/` | React component + plain-script build + CSS for porting |
| Badges (status, priority, tag) | `components/badge/` | HTML + CSS |
| Tabs (underline, pill) | `components/tabs/` | HTML + CSS, small JS for selection |
| KPI card | `components/kpi-card/` | HTML + CSS |
| Avatar | `components/avatar/` | HTML + CSS, small JS for tint and initials |
| Stepper | `components/stepper/` | HTML + CSS |
| Activity feed | `components/activity-feed/` | HTML + CSS |
| Log | `components/log/` | HTML + CSS, small JS for the note button (uses the Inputs and Button CSS) |
| Loaders | `components/loader/` | HTML + CSS |
| App boot | `components/app-boot/` | HTML + CSS (uses the Loader CSS) |
| Sidebar | `components/sidebar/` | HTML + CSS, small JS for opening sections (uses the Avatar CSS) |

Every folder has a `README.md` (classes, variants, states, rules) and a page of its own (`<component>.html`) whose markup is the code to copy.

## Foundation

Colours, type, spacing, radii and shadows are not components; read them here:

- `foundation/asthara.css`: every value as a CSS variable (`--as-gold`, `--as-space-4`, `--as-radius-3`, `--as-e2` …), the Loadify aliases (`--ld-primary` …) and the text classes (`.as-h1`, `.as-body`, `.as-caption` …). Load it before any component CSS.
- `foundation/tokens.json`: the same values as data, for other platforms (Flutter, Android, iOS) or a token build tool.

Fonts load from Google Fonts: DM Sans (stands in for the licensed Contax Sans), Raleway, JetBrains Mono, and Allura (stands in for Winter Wind, brand moments only).

## Conventions

- Every class starts with `as-`, so nothing clashes with your own CSS. Parts use `__` (`as-kpi__value`), variants use `--` (`as-btn--sm`).
- State lives in standard attributes: `disabled`, `aria-checked` (toggle), `aria-selected` (tabs), `aria-current="step"` (stepper). Bind them to your app's state; the small `.js` files only show the behaviour and can be dropped.
- Icons are Lucide (24×24, 1.75 stroke, round caps and joins), inlined as SVG with `stroke="currentColor"`. No emoji or Unicode symbols as icons.
- Select and Date picker are React 18 components. In a React app copy the `.jsx` (and `.d.ts`). Without a build step, load React 18 and the plain `.js` build. For another framework, port the `.jsx` logic and use the extracted `.css`, which is exactly what the component renders with.

## Not included

Page layouts (the Loadify topbar, requests table and drawer; the marketing site sections) and the SSO login page are not split here. The Asthara Design System is the source of truth; this kit is an export of it.
