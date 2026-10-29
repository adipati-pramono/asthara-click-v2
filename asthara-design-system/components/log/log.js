/* Asthara · Log behaviour: "Log note" turns on once the note has text.
   Behaviour only; saving the note and adding its entry is your app's job. */
document.addEventListener("input", function (e) {
  var input = e.target.closest(".as-log__input");
  if (!input) return;
  var button = input.closest(".as-log__compose").querySelector(".as-btn");
  button.disabled = input.value.trim() === "";
});
