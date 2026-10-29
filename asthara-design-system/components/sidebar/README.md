# Sidebar

The 248px ink navigation panel of the Asthara product apps (Loadify, Asthara Finance): brand and app switcher, top links, a company switcher, scrolling sections of grouped links, and the signed-in user.

> **Just an example.** Every part (switchers, sections, Settings, user card…) is optional: use only what your app needs.

**Files:** `sidebar.css` · `sidebar.js` (opens and closes sections, moves the current page on click) · `logo-mark-color.png` · demo `sidebar.html`. The user card uses the **Avatar** classes, so load `avatar.css` too.

## Anatomy

```html
<aside class="as-sidebar" aria-label="Asthara Finance">
  <div class="as-sidebar__brand">…mark, ASTHARA, product name, app switcher…</div>
  <nav class="as-sidebar__nav" aria-label="Main">
    <a class="as-sidebar__link" href="#"><!-- 16px icon --><span class="as-sidebar__label">Workspace</span><!-- chevron --></a>
  </nav>
  <button type="button" class="as-sidebar__context">…Company / PT. Bumi Bandara Indah…</button>

  <nav class="as-sidebar__scroll" aria-label="Modules">
    <div class="as-sidebar__section">
      <button type="button" class="as-sidebar__section-head" aria-expanded="true"><!-- icon --><span class="as-sidebar__label">Operations</span><!-- chevron --></button>
      <div class="as-sidebar__section-body">
        <div class="as-sidebar__group">Planning</div>
        <a class="as-sidebar__sublink" href="#">Projects</a>
        <a class="as-sidebar__sublink" href="#" aria-current="page">Milestones</a>
        <span class="as-sidebar__sublink" aria-disabled="true">Archive<span class="as-sidebar__soon">Soon</span></span>
      </div>
    </div>
  </nav>

  <div class="as-sidebar__divider"></div>
  <!-- a pinned section (Settings) -->
  <div class="as-sidebar__user">…avatar, name, role…</div>
</aside>
```

| Part | What |
|---|---|
| `as-sidebar` | 248px (`--as-sidebar`), full viewport height, sticky; ink gradient `#2E2F3B → #383947`; 18px top, 14px side padding; parts 12px apart |
| `__brand` | `assets/logo-mark-color.png` at 32px, ASTHARA in DM Sans 700 14px tracked 0.18em, the product name in Allura 18px `--as-gold-soft`; `__switch` is the app switcher |
| `__nav` · `__link` | Top-level links, grouped in `__nav` 2px apart: 30px rows, 16px icon, Raleway 500 12.5px at 78% white; optional `__count` or chevron |
| `__context` | Company or project switcher: 9px caption, DM Sans 600 12.5px name, chevron |
| `__scroll` | The only part that scrolls; thin gold-soft scrollbar |
| `__section-head` | 30px row, Raleway 700 10px uppercase, 0.12em; the chevron turns down when `aria-expanded="true"` |
| `__group` | 9px uppercase label inside a section, 35% white |
| `__sublink` | Bullet + Raleway 500 12px at 72% white, 30px rows 2px apart; indents one step further under a group label |
| `__soon` | Pill for modules not live yet, on an `aria-disabled="true"` sub-link (45% white) |
| `__user` | Signed-in user: 28px gold avatar, name in DM Sans 600 12px, role 10.5px |

## States

- **Current page:** `aria-current="page"`. A sub-link gets a 10% white fill, `--as-gold-soft` text and a 2px gold bar on the left; a top-level link gets the Loadify gold-tint gradient with white text and the same bar. One current page per sidebar.
- **Hover:** 6% white fill, white text. **Focus:** 2px `--as-gold-soft` outline.
- **Soon:** not a link (`<span aria-disabled="true">`), no hover, with the Soon pill.
- **Sections:** `aria-expanded` on the header.
- `sidebar.js` is for trying the example: it opens and closes sections and moves the current page to the link you click. In your app, set `aria-current` from the route and `aria-expanded` from your state, and drop the script.

## Rules

- The product name (Finance, Operations…) is the one place the script face appears in product UI.
- Icons are Lucide at 16px, 1.75 stroke.
- Group long modules into sections and label groups inside them; keep top-level links few.
