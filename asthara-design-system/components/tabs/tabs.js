/* Asthara · Tabs behaviour: one selected tab per tablist.
   Behaviour only; in a framework, bind aria-selected to your state instead. */
document.addEventListener("click", function (e) {
  var tab = e.target.closest('[role="tab"]');
  if (!tab) return;
  var list = tab.closest('[role="tablist"]');
  list.querySelectorAll('[role="tab"]').forEach(function (t) {
    t.setAttribute("aria-selected", t === tab ? "true" : "false");
  });
});
