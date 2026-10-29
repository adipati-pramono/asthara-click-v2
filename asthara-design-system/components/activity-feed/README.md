# Activity feed

A timeline of events: time, a coloured dot per event type, title and detail.

**Files:** `activity-feed.css` · demo `activity-feed.html`

## Markup

```html
<ol class="as-feed">
  <li class="as-feed__row">
    <span class="as-feed__time">09:24</span>
    <span class="as-feed__lane"><span class="as-feed__dot as-feed__dot--active"></span></span>
    <span class="as-feed__text">
      <span class="as-feed__title">B 4421 DSO checked in</span>
      <span class="as-feed__sub">Daiso Japan · Dock B-4 · Mall</span>
    </span>
  </li>
</ol>
```

| Event | Dot |
|---|---|
| Checked in, loading, live | `as-feed__dot--active` (teal) |
| Approved, done | `as-feed__dot--success` |
| Emergency, rejected | `as-feed__dot--danger` |
| Checked out, submitted, system | `as-feed__dot--info` |

Times are 24-hour `HH:mm` in JetBrains Mono with tabular figures. The connector line is drawn by CSS between rows; the last row has none.
