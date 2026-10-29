/* Asthara · Toggle behaviour: flips aria-checked on click.
   Behaviour only; in a framework, bind aria-checked to your state instead. */
document.addEventListener("click", function (e) {
  var t = e.target.closest(".as-toggle");
  if (!t || t.disabled) return;
  t.setAttribute("aria-checked", t.getAttribute("aria-checked") === "true" ? "false" : "true");
});
