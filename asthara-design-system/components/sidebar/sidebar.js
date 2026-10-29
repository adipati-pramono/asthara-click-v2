/* Asthara · Sidebar behaviour.
   - A section header opens and closes its section.
   - A clicked link becomes the current page (aria-current="page"); Soon items stay inactive.
   - Example links (href="#") stay on the page instead of jumping to the top.
   Behaviour only; in your app, set aria-current from the route and aria-expanded from your state. */
document.addEventListener("click", function (e) {
  var head = e.target.closest(".as-sidebar__section-head");
  if (head) {
    head.setAttribute("aria-expanded", head.getAttribute("aria-expanded") === "true" ? "false" : "true");
    return;
  }
  var link = e.target.closest(".as-sidebar__link, .as-sidebar__sublink");
  if (!link || link.getAttribute("aria-disabled") === "true") return;
  if (link.getAttribute("href") === "#") e.preventDefault();
  var sidebar = link.closest(".as-sidebar");
  sidebar.querySelectorAll('[aria-current="page"]').forEach(function (el) { el.removeAttribute("aria-current"); });
  link.setAttribute("aria-current", "page");
});
