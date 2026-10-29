# Avatar

Initials on a soft tint, sized 20 / 24 / 28 / 32 / 40.

**Files:** `avatar.css` · `avatar.js` (tint and initials from a name) · demo `avatar.html`

## Markup

```html
<span class="as-avatar as-avatar--28 as-avatar--teal" aria-label="Imam Maulana">IM</span>
```

- Size: `as-avatar--20`, `--24`, `--28`, `--32`, `--40` (font 9 / 10 / 11 / 12 / 14px).
- Tint: `--gold`, `--teal`, `--info`, `--rose`, `--success`, `--purple`, or `--solid` (gold fill, white initials).
- `avatar.js` gives the same tint for the same name every time: `asAvatarTint("Putri Anggraini")` returns the class, `asAvatarInitials(name)` the initials. Port these two small functions to keep tints consistent across platforms.
