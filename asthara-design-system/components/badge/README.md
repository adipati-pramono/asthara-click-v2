# Badges

Status badges, priority tags and neutral tags.

**Files:** `badge.css` · demo `badge.html`

## Markup

```html
<span class="as-badge as-badge--approved"><span class="as-badge__dot"></span>Approved</span>
<span class="as-priority as-priority--urgent">Urgent</span>
<span class="as-tag">Last 7 days</span>
```

## Status → class

| Status | Class |
|---|---|
| Draft | `as-badge--draft` |
| Submitted | `as-badge--submitted` |
| In Review | `as-badge--in-review` |
| Revision | `as-badge--revision` |
| Approved | `as-badge--approved` |
| Rejected | `as-badge--rejected` |
| Checked In | `as-badge--checked-in` |
| Loading | `as-badge--checked-in` (same tone, as in the Loadify app) |
| Checked Out | `as-badge--approved` (same tone) |
| Expired | `as-badge--draft` (same tone) |

Priority: `as-priority--regular`, `--urgent`, `--emergency` (Emergency carries the 10px flame icon).

## Rules

- A status always shows its word; the colour never carries the meaning alone.
- Tags are neutral: filters and categories.
