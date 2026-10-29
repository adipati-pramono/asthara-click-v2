# Tabs

Underline tabs for page-level sections (with counts); pill tabs for filters.

**Files:** `tabs.css` · `tabs.js` (selection behaviour) · demo `tabs.html`

## Markup

```html
<div class="as-tabs" role="tablist" aria-label="Requests">
  <button type="button" class="as-tab" role="tab" aria-selected="true">All <span class="as-tab__count">28</span></button>
  <button type="button" class="as-tab" role="tab" aria-selected="false">Approved <span class="as-tab__count">12</span></button>
</div>

<div class="as-pills" role="tablist" aria-label="Project type">
  <button type="button" class="as-pill" role="tab" aria-selected="true">All</button>
  <button type="button" class="as-pill" role="tab" aria-selected="false">Mall</button>
</div>
```

The selected tab is the one with `aria-selected="true"`: underline tabs turn `--as-gold-deep` with a 2px gold underline and a gold-tint count; the selected pill turns white with a soft shadow.

## Rules

- `tabs.js` only moves `aria-selected` inside a tablist. Connect each tab to its panel (`aria-controls`) in your app, or bind the state in your framework and drop the script.
