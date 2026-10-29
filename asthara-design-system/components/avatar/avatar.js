/* Asthara · Avatar helpers (from the Loadify kit's Avatar component).
   asAvatarTint(name) -> the tint modifier for that name, stable across sessions.
   asAvatarInitials(name) -> up to two initials. */

var AS_AVATAR_TINTS = ["gold", "teal", "info", "rose", "success", "purple"];

function asAvatarTint(name) {
  var h = 0;
  for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return "as-avatar--" + AS_AVATAR_TINTS[h % AS_AVATAR_TINTS.length];
}

function asAvatarInitials(name) {
  return name.split(" ").slice(0, 2).map(function (w) { return w[0] || ""; }).join("").toUpperCase();
}
