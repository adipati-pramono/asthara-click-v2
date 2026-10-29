# Log

A record's history, newest first and grouped by day: who changed what and when, status moves, and internal notes, with a composer for adding a note.

> **Where it goes.** At the bottom of the record's page, below its other sections.

**Files:** `log.css` · `log.js` (turns on "Log note" once there is text) · demo `log.html`. The composer uses the Inputs and Button CSS, so load `../input/input.css` and `../button/button.css` too.

## Markup

```html
<section class="as-log" aria-label="Log">
  <div class="as-log__composer">
    <span class="as-log__avatar" aria-hidden="true">AO</span>
    <div class="as-log__compose">
      <textarea class="as-textarea as-log__input" placeholder="Log an internal note" aria-label="Internal note"></textarea>
      <button type="button" class="as-btn as-btn--secondary as-btn--sm" disabled>Log note</button>
    </div>
  </div>

  <div class="as-log__day">28 Oct 2026</div>
  <ul class="as-log__entries">
    <li class="as-log__entry">
      <span class="as-log__avatar" aria-hidden="true">AO</span>
      <div class="as-log__body">
        <div class="as-log__head"><span class="as-log__name">Adrian Owen</span><time class="as-log__time">28 Oct 2026 · 14:04</time></div>
        <p class="as-log__message">Request approved</p>
        <ul class="as-log__changes">
          <li class="as-log__change"><span>Draft</span><!-- arrow-right icon --><span class="as-log__new">Approved</span><span class="as-log__field">(Status)</span></li>
        </ul>
      </div>
    </li>
    <li class="as-log__entry">
      <span class="as-log__avatar" aria-hidden="true">MP</span>
      <div class="as-log__body">
        <div class="as-log__head"><span class="as-log__name">Maya Putri</span><time class="as-log__time">28 Oct 2026 · 14:03</time><span class="as-log__tag">Note</span></div>
        <p class="as-log__message">The vendor will confirm the time slot tomorrow.</p>
      </div>
    </li>
  </ul>
</section>
```

| Part | What |
|---|---|
| `as-log__composer` | The signed-in user's avatar, an `as-textarea` (56px, resizable) and a small secondary "Log note" button, disabled (at 50%) until there is text |
| `as-log__day` | The date between two hairlines: Raleway 700 11px, `--as-ink-soft` |
| `as-log__entry` | 30px avatar (initials on `--as-gold-tint`), name in DM Sans 600 13px, time in 11px `--as-ink-faint`, then the message in Raleway 13px |
| `as-log__tag` | The kind of entry, such as Note: 9.5px uppercase on `--as-gold-tint` |
| `as-log__changes` | One row per changed field: old value in `--as-ink-faint` → new value in `--as-gold-deep`, then the field name in italics. An empty old value is `—` |
| `as-log__quote` | Optional remark that came with the change, italic 12px |

## Rules

- Newest first, with a day divider at the start of each day.
- The message says what happened ("Request approved", "Reset to draft — wrong dock"); the change rows carry the details.
- Dates `28 Oct 2026`, times 24-hour (`14:04`), money `Rp 45.000`.
- The names and values in the example are placeholders.
