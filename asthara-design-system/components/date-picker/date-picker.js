/* Asthara · DatePicker: plain browser build of DatePicker.jsx (the same component, compiled).
   Load React 18 and ReactDOM 18 first; this exposes window.Asthara.DatePicker.
   Edit DatePicker.jsx, not this file. */
var __as_DatePicker = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // DatePicker.jsx
  var DatePicker_exports = {};
  __export(DatePicker_exports, {
    DatePicker: () => DatePicker,
    default: () => DatePicker_default
  });

  // React comes from the page (window.React)
  var R = window.React;
  var react_shim_default = R;
  var { useState, useRef, useEffect, useMemo, useCallback, useId, useLayoutEffect, Fragment } = R;

  // DatePicker.jsx
  var ASDS_DP_STYLE_ID = "asds-datepicker-styles";
  var ASDS_DP_CSS = `
.asds-dp { position: relative; font-family: var(--as-font-body); width: 100%; }
/* Sizes include padding and border whatever the page sets */
.asds-dp, .asds-dp *, .asds-dp *::before, .asds-dp *::after { box-sizing: border-box; }
.asds-dp__label {
  display: block; margin-bottom: 6px;
  font: 700 10px/1 var(--as-font-body);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--as-ink-soft);
}
.asds-dp__req { color: var(--as-gold-deep); margin-left: 2px; }

.asds-dp__trigger {
  width: 100%; min-height: 40px; padding: 0 10px 0 12px;
  display: flex; align-items: center; gap: 8px;
  background: #fff; color: var(--as-ink);
  border: 1px solid var(--as-line-strong); border-radius: var(--as-radius-3);
  font: 400 13px/1.4 var(--as-font-body); text-align: left; cursor: pointer;
  transition: border-color var(--as-dur-micro) var(--as-ease-out),
              box-shadow var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp--sm .asds-dp__trigger { min-height: 32px; font-size: 12px; padding: 0 8px 0 10px; border-radius: var(--as-radius-2); }
.asds-dp__trigger:hover { border-color: var(--as-ink-faint); }
.asds-dp__trigger:focus-visible,
.asds-dp--open .asds-dp__trigger {
  outline: none; border-color: var(--as-gold); box-shadow: var(--as-focus-ring);
}
.asds-dp--disabled .asds-dp__trigger {
  background: var(--as-bg-alt); color: var(--as-ink-faint);
  cursor: not-allowed; border-color: var(--as-line);
}

.asds-dp__cal-ic { flex: none; color: var(--as-ink-soft); display: inline-flex; }
.asds-dp__cal-ic svg { width: 16px; height: 16px; stroke-width: 1.75; display: block; }
.asds-dp--open .asds-dp__cal-ic, .asds-dp__trigger:hover .asds-dp__cal-ic { color: var(--as-gold-deep); }

.asds-dp__value { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 5px 0; }
.asds-dp__placeholder { color: var(--as-ink-faint); }
.asds-dp__value time { font-variant-numeric: tabular-nums lining-nums; }
.asds-dp__value .asds-dp__tsep { color: var(--as-ink-faint); margin: 0 6px; }

.asds-dp__clear {
  flex: none; display: inline-flex; align-items: center; justify-content: center;
  width: 18px; height: 18px; border-radius: 50%; border: none; padding: 0; cursor: pointer;
  background: none; color: var(--as-ink-faint);
  transition: background var(--as-dur-micro) var(--as-ease-out), color var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__clear:hover { background: var(--as-bg-alt); color: var(--as-ink); }
.asds-dp__clear svg { width: 11px; height: 11px; stroke-width: 2.5; display: block; }

.asds-dp__pop {
  position: absolute; z-index: 60; top: calc(100% + 6px); left: 0;
  width: 268px; max-width: calc(100vw - 24px);
  background: var(--as-card); border: 1px solid var(--as-line);
  border-radius: var(--as-radius-3); box-shadow: var(--as-e2);
  padding: 10px; overflow: hidden;
  transform-origin: top left;
  animation: asds-dp-pop var(--as-dur-standard) var(--as-ease-out);
}
.asds-dp--align-right .asds-dp__pop { left: auto; right: 0; transform-origin: top right; }
@keyframes asds-dp-pop { from { opacity: 0; transform: translateY(-4px) scale(0.985); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .asds-dp__pop { animation: none; } }

.asds-dp__head { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.asds-dp__title {
  flex: 1 1 auto; text-align: center;
  font: 700 13px/1 var(--as-font-display); color: var(--as-ink);
  border: none; background: none; cursor: pointer; padding: 7px 8px;
  border-radius: var(--as-radius-2);
  transition: background var(--as-dur-micro) var(--as-ease-out), color var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__title:hover { background: var(--as-bg-alt); color: var(--as-gold-deep); }
.asds-dp__title:focus-visible { outline: none; box-shadow: var(--as-focus-ring); }
.asds-dp__nav {
  flex: none; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid var(--as-line); border-radius: var(--as-radius-2); background: #fff; cursor: pointer;
  color: var(--as-ink-soft);
  transition: background var(--as-dur-micro) var(--as-ease-out), border-color var(--as-dur-micro) var(--as-ease-out), color var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__nav:hover { background: var(--as-bg-alt); border-color: var(--as-line-strong); color: var(--as-gold-deep); }
.asds-dp__nav svg { width: 15px; height: 15px; stroke-width: 2; display: block; }

.asds-dp__dow { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 4px; }
.asds-dp__dow span {
  text-align: center; font: 700 9px/1 var(--as-font-body);
  text-transform: uppercase; letter-spacing: 0.06em; color: var(--as-ink-faint); padding: 4px 0;
}

.asds-dp__grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
.asds-dp__day {
  aspect-ratio: 1 / 1; min-height: 30px; display: inline-flex; align-items: center; justify-content: center;
  border: none; background: none; cursor: pointer; padding: 0;
  border-radius: var(--as-radius-2);
  font: 500 12px/1 var(--as-font-body); color: var(--as-ink);
  font-variant-numeric: tabular-nums lining-nums; position: relative;
  transition: background var(--as-dur-micro) var(--as-ease-out), color var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__day:hover { background: var(--as-bg-alt); }
.asds-dp__day--out { color: var(--as-ink-faint); opacity: 0.55; }
.asds-dp__day--today { font-weight: 700; color: var(--as-gold-deep); }
.asds-dp__day--today::after {
  content: ""; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
  width: 3px; height: 3px; border-radius: 50%; background: var(--as-gold);
}
.asds-dp__day--active { outline: 2px solid var(--as-gold-soft); outline-offset: -2px; }
.asds-dp__day--sel, .asds-dp__day--sel:hover {
  background: var(--as-gold); color: #fff; font-weight: 700;
}
.asds-dp__day--sel.asds-dp__day--today { color: #fff; }
.asds-dp__day--sel.asds-dp__day--today::after { background: #fff; }
.asds-dp__day--disabled { color: var(--as-ink-faint); opacity: 0.4; cursor: not-allowed; }
.asds-dp__day--disabled:hover { background: none; }

.asds-dp__cells { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; padding: 6px 0 2px; }
.asds-dp__cell {
  height: 48px; display: inline-flex; align-items: center; justify-content: center;
  border: none; background: none; cursor: pointer; padding: 0;
  border-radius: var(--as-radius-2);
  font: 600 12px/1 var(--as-font-body); color: var(--as-ink);
  font-variant-numeric: tabular-nums lining-nums;
  transition: background var(--as-dur-micro) var(--as-ease-out), color var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__cell:hover { background: var(--as-bg-alt); }
.asds-dp__cell--cur { color: var(--as-gold-deep); font-weight: 700; }
.asds-dp__cell--sel, .asds-dp__cell--sel:hover { background: var(--as-gold); color: #fff; font-weight: 700; }
.asds-dp__cell--disabled { color: var(--as-ink-faint); opacity: 0.4; cursor: not-allowed; }
.asds-dp__cell--disabled:hover { background: none; }

.asds-dp__time {
  display: flex; align-items: center; gap: 8px;
  margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--as-line);
}
.asds-dp__time-ic { flex: none; color: var(--as-ink-soft); display: inline-flex; }
.asds-dp__time-ic svg { width: 15px; height: 15px; stroke-width: 1.75; display: block; }
.asds-dp__time-fields { flex: 1 1 auto; display: flex; align-items: center; gap: 3px; }
.asds-dp__spin {
  width: 44px; height: 32px; text-align: center;
  border: 1px solid var(--as-line-strong); border-radius: var(--as-radius-2);
  font: 600 13px/1 var(--as-font-body); color: var(--as-ink); background: #fff;
  font-variant-numeric: tabular-nums lining-nums; outline: none;
  -moz-appearance: textfield;
}
.asds-dp__spin::-webkit-outer-spin-button, .asds-dp__spin::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.asds-dp__spin:focus { border-color: var(--as-gold); box-shadow: var(--as-focus-ring); }
.asds-dp__colon { font: 700 13px/1 var(--as-font-body); color: var(--as-ink-faint); }
.asds-dp__mer {
  display: inline-flex; margin-left: 4px;
  border: 1px solid var(--as-line-strong); border-radius: var(--as-radius-2); overflow: hidden;
}
.asds-dp__mer button {
  border: none; background: #fff; cursor: pointer; padding: 0 9px; height: 32px;
  font: 700 10px/1 var(--as-font-body); color: var(--as-ink-soft); letter-spacing: 0.04em;
  transition: background var(--as-dur-micro) var(--as-ease-out), color var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__mer button + button { border-left: 1px solid var(--as-line); }
.asds-dp__mer button[aria-pressed="true"] { background: var(--as-gold-tint); color: var(--as-gold-deep); }

.asds-dp__foot {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  margin-top: 10px; padding-top: 9px; border-top: 1px solid var(--as-line);
}
.asds-dp__today-btn, .asds-dp__done-btn {
  font: 700 11px/1 var(--as-font-body); cursor: pointer; padding: 6px 10px;
  border-radius: var(--as-radius-2); transition: background var(--as-dur-micro) var(--as-ease-out);
}
.asds-dp__today-btn { color: var(--as-gold-deep); background: none; border: none; }
.asds-dp__today-btn:hover { background: var(--as-bg-alt); }
.asds-dp__done-btn { color: #fff; background: var(--as-gold); border: 1px solid var(--as-gold); }
.asds-dp__done-btn:hover { background: var(--as-gold-deep); border-color: var(--as-gold-deep); }
`;
  function useInjectDpStyles() {
    useEffect(() => {
      if (typeof document === "undefined") return;
      if (document.getElementById(ASDS_DP_STYLE_ID)) return;
      const el = document.createElement("style");
      el.id = ASDS_DP_STYLE_ID;
      el.textContent = ASDS_DP_CSS;
      document.head.appendChild(el);
    }, []);
  }
  var IconCal = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("rect", { x: "3", y: "4.5", width: "18", height: "16", rx: "2" }), /* @__PURE__ */ react_shim_default.createElement("path", { d: "M3 9h18M8 2.5v4M16 2.5v4" }));
  var IconClock = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ react_shim_default.createElement("path", { d: "M12 7.5V12l3 2" }));
  var IconChevL = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("path", { d: "m15 6-6 6 6 6" }));
  var IconChevR = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("path", { d: "m9 6 6 6-6 6" }));
  var IconX = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("path", { d: "M18 6 6 18M6 6l12 12" }));
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var DOW_FULL = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var toDate = (v) => {
    if (v == null || v === "") return null;
    if (v instanceof Date) return isNaN(v) ? null : new Date(v);
    const d = new Date(v);
    return isNaN(d) ? null : d;
  };
  var sameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  var startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  var addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
  var pad2 = (n) => String(n).padStart(2, "0");
  var clampDay = (d, min, max) => {
    const t = startOfDay(d).getTime();
    if (min && t < startOfDay(min).getTime()) return true;
    if (max && t > startOfDay(max).getTime()) return true;
    return false;
  };
  function defaultFormat(d, withTime, hour12) {
    if (!d) return "";
    const datePart = `${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    if (!withTime) return datePart;
    let h = d.getHours();
    const m = pad2(d.getMinutes());
    if (hour12) {
      const mer = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      return `${datePart} · ${h}:${m} ${mer}`;
    }
    return `${datePart} · ${pad2(h)}:${m}`;
  }
  function DatePicker({
    mode = "date",
    value,
    defaultValue,
    onChange,
    placeholder,
    label,
    required = false,
    disabled = false,
    size = "md",
    min,
    max,
    weekStartsOn = 0,
    hour12 = true,
    minuteStep = 5,
    clearable = true,
    align = "left",
    format,
    id
  }) {
    useInjectDpStyles();
    const withTime = mode === "datetime";
    const autoId = useId();
    const rootId = id || autoId;
    const minD = useMemo(() => toDate(min), [min]);
    const maxD = useMemo(() => toDate(max), [max]);
    const isControlled = value !== void 0;
    const [inner, setInner] = useState(() => toDate(defaultValue) || null);
    const selected = isControlled ? toDate(value) : inner;
    const [open, setOpen] = useState(false);
    const [view, setView] = useState(() => startOfDay(selected || toDate(defaultValue) || /* @__PURE__ */ new Date()));
    const [activeDay, setActiveDay] = useState(null);
    const [panel, setPanel] = useState("days");
    const rootRef = useRef(null);
    const ph = placeholder || (withTime ? "Select date & time…" : "Select a date…");
    const commit = useCallback(
      (next) => {
        if (!isControlled) setInner(next);
        if (onChange) onChange(next);
      },
      [isControlled, onChange]
    );
    useEffect(() => {
      if (open) {
        setView(startOfDay(selected || /* @__PURE__ */ new Date()));
        setActiveDay(selected ? startOfDay(selected) : startOfDay(/* @__PURE__ */ new Date()));
        setPanel("days");
      }
    }, [open]);
    useEffect(() => {
      if (!open) return;
      const onDoc = (e) => {
        if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
      };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);
    const weeks = useMemo(() => {
      const first = new Date(view.getFullYear(), view.getMonth(), 1);
      const offset = (first.getDay() - weekStartsOn + 7) % 7;
      const start = new Date(first);
      start.setDate(first.getDate() - offset);
      const cells = [];
      for (let i = 0; i < 42; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        cells.push(d);
      }
      const rows = [];
      for (let i = 0; i < 6; i++) rows.push(cells.slice(i * 7, i * 7 + 7));
      return rows;
    }, [view, weekStartsOn]);
    const dow = useMemo(() => {
      const arr = [];
      for (let i = 0; i < 7; i++) arr.push(DOW_FULL[(i + weekStartsOn) % 7]);
      return arr;
    }, [weekStartsOn]);
    const applyTimeFrom = useCallback(
      (base) => {
        const d = new Date(base);
        if (withTime && selected) {
          d.setHours(selected.getHours(), selected.getMinutes(), 0, 0);
        } else if (withTime) {
          const now = /* @__PURE__ */ new Date();
          d.setHours(now.getHours(), now.getMinutes(), 0, 0);
        }
        return d;
      },
      [withTime, selected]
    );
    const pickDay = useCallback(
      (d) => {
        if (clampDay(d, minD, maxD)) return;
        const next = applyTimeFrom(d);
        commit(next);
        setActiveDay(startOfDay(d));
        if (!withTime) setOpen(false);
      },
      [minD, maxD, applyTimeFrom, commit, withTime]
    );
    const bumpTime = useCallback(
      (part, val) => {
        const base = selected || applyTimeFrom(startOfDay(/* @__PURE__ */ new Date()));
        const d = new Date(base);
        if (part === "h") d.setHours(val);
        else if (part === "m") d.setMinutes(val);
        else if (part === "mer") {
          const h = d.getHours();
          if (val === "AM" && h >= 12) d.setHours(h - 12);
          if (val === "PM" && h < 12) d.setHours(h + 12);
        }
        d.setSeconds(0, 0);
        commit(d);
      },
      [selected, applyTimeFrom, commit]
    );
    const onTriggerKey = useCallback(
      (e) => {
        if (disabled) return;
        if (!open && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
          e.preventDefault();
          setOpen(true);
        }
      },
      [disabled, open]
    );
    const onGridKey = useCallback(
      (e) => {
        if (!open) return;
        if (e.key === "Escape") {
          e.preventDefault();
          setOpen(false);
          return;
        }
        if (panel !== "days") return;
        const base = activeDay || startOfDay(selected || /* @__PURE__ */ new Date());
        let next = null;
        if (e.key === "ArrowLeft") next = new Date(base.getFullYear(), base.getMonth(), base.getDate() - 1);
        else if (e.key === "ArrowRight") next = new Date(base.getFullYear(), base.getMonth(), base.getDate() + 1);
        else if (e.key === "ArrowUp") next = new Date(base.getFullYear(), base.getMonth(), base.getDate() - 7);
        else if (e.key === "ArrowDown") next = new Date(base.getFullYear(), base.getMonth(), base.getDate() + 7);
        else if (e.key === "Enter" && activeDay) {
          e.preventDefault();
          pickDay(activeDay);
          return;
        }
        if (next) {
          e.preventDefault();
          setActiveDay(next);
          if (next.getMonth() !== view.getMonth() || next.getFullYear() !== view.getFullYear()) setView(startOfDay(new Date(next.getFullYear(), next.getMonth(), 1)));
        }
      },
      [open, panel, activeDay, selected, view, pickDay]
    );
    const stepHeader = useCallback(
      (dir) => {
        setView((v) => {
          if (panel === "days") return addMonths(v, dir);
          if (panel === "months") return new Date(v.getFullYear() + dir, v.getMonth(), 1);
          return new Date(v.getFullYear() + dir * 12, v.getMonth(), 1);
        });
      },
      [panel]
    );
    const monthDisabled = useCallback(
      (y, m) => {
        const start = new Date(y, m, 1);
        const end = new Date(y, m + 1, 0);
        if (minD && end < startOfDay(minD)) return true;
        if (maxD && start > startOfDay(maxD)) return true;
        return false;
      },
      [minD, maxD]
    );
    const yearDisabled = useCallback(
      (y) => {
        if (minD && y < minD.getFullYear()) return true;
        if (maxD && y > maxD.getFullYear()) return true;
        return false;
      },
      [minD, maxD]
    );
    const fmt = format || ((d) => defaultFormat(d, withTime, hour12));
    const today = /* @__PURE__ */ new Date();
    const yearPageStart = view.getFullYear() - view.getFullYear() % 12;
    const stepLabel = panel === "days" ? "month" : panel === "months" ? "year" : "years";
    const titleText = panel === "days" ? `${MONTHS[view.getMonth()]} ${view.getFullYear()}` : panel === "months" ? String(view.getFullYear()) : `${yearPageStart} – ${yearPageStart + 11}`;
    let dispH = "", dispM = "", mer = "AM";
    if (withTime) {
      const t = selected || /* @__PURE__ */ new Date();
      mer = t.getHours() >= 12 ? "PM" : "AM";
      dispH = hour12 ? t.getHours() % 12 || 12 : t.getHours();
      dispM = t.getMinutes();
    }
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        ref: rootRef,
        id: rootId,
        className: [
          "asds-dp",
          `asds-dp--${size}`,
          open ? "asds-dp--open" : "",
          disabled ? "asds-dp--disabled" : "",
          align === "right" ? "asds-dp--align-right" : "",
          withTime ? "asds-dp--datetime" : "asds-dp--date"
        ].join(" ").trim()
      },
      label && /* @__PURE__ */ react_shim_default.createElement("label", { className: "asds-dp__label", htmlFor: `${rootId}-trigger` }, label, required && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-dp__req" }, "*")),
      /* @__PURE__ */ react_shim_default.createElement(
        "button",
        {
          type: "button",
          id: `${rootId}-trigger`,
          className: "asds-dp__trigger",
          "aria-haspopup": "dialog",
          "aria-expanded": open,
          disabled,
          onClick: () => !disabled && setOpen((o) => !o),
          onKeyDown: onTriggerKey
        },
        /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-dp__cal-ic" }, withTime ? /* @__PURE__ */ react_shim_default.createElement(IconClock, null) : /* @__PURE__ */ react_shim_default.createElement(IconCal, null)),
        /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-dp__value" }, selected ? /* @__PURE__ */ react_shim_default.createElement("time", { dateTime: selected.toISOString() }, fmt(selected)) : /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-dp__placeholder" }, ph)),
        clearable && selected && !disabled && /* @__PURE__ */ react_shim_default.createElement(
          "span",
          {
            className: "asds-dp__clear",
            role: "button",
            "aria-label": "Clear date",
            onClick: (e) => {
              e.stopPropagation();
              commit(null);
            }
          },
          /* @__PURE__ */ react_shim_default.createElement(IconX, null)
        )
      ),
      open && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__pop", role: "dialog", "aria-label": label || "Choose date", onKeyDown: onGridKey }, /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__head" }, /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", className: "asds-dp__nav", "aria-label": `Previous ${stepLabel}`, onClick: () => stepHeader(-1) }, /* @__PURE__ */ react_shim_default.createElement(IconChevL, null)), /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", className: "asds-dp__title", "aria-label": "Switch calendar view", onClick: () => setPanel((p) => p === "days" ? "months" : "years") }, titleText), /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", className: "asds-dp__nav", "aria-label": `Next ${stepLabel}`, onClick: () => stepHeader(1) }, /* @__PURE__ */ react_shim_default.createElement(IconChevR, null))), panel === "days" && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__dow" }, dow.map((d, i) => /* @__PURE__ */ react_shim_default.createElement("span", { key: i }, d))), panel === "days" && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__grid", role: "grid" }, weeks.map(
        (row, ri) => row.map((d, ci) => {
          const out = d.getMonth() !== view.getMonth();
          const isSel = sameDay(d, selected);
          const isToday = sameDay(d, today);
          const isActive = sameDay(d, activeDay);
          const isDisabled = clampDay(d, minD, maxD);
          return /* @__PURE__ */ react_shim_default.createElement(
            "button",
            {
              type: "button",
              key: `${ri}-${ci}`,
              role: "gridcell",
              "aria-selected": isSel,
              "aria-current": isToday ? "date" : void 0,
              disabled: isDisabled,
              tabIndex: isActive ? 0 : -1,
              className: [
                "asds-dp__day",
                out ? "asds-dp__day--out" : "",
                isToday ? "asds-dp__day--today" : "",
                isActive && !isSel ? "asds-dp__day--active" : "",
                isSel ? "asds-dp__day--sel" : "",
                isDisabled ? "asds-dp__day--disabled" : ""
              ].join(" ").trim(),
              onClick: () => pickDay(d),
              onMouseEnter: () => setActiveDay(startOfDay(d))
            },
            d.getDate()
          );
        })
      )), panel === "months" && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__cells asds-dp__cells--month" }, MONTHS_SHORT.map((m, i) => {
        const isSel = selected && selected.getFullYear() === view.getFullYear() && selected.getMonth() === i;
        const isCur = today.getFullYear() === view.getFullYear() && today.getMonth() === i;
        const dis = monthDisabled(view.getFullYear(), i);
        return /* @__PURE__ */ react_shim_default.createElement(
          "button",
          {
            type: "button",
            key: m,
            disabled: dis,
            className: ["asds-dp__cell", isCur ? "asds-dp__cell--cur" : "", isSel ? "asds-dp__cell--sel" : "", dis ? "asds-dp__cell--disabled" : ""].join(" ").trim(),
            onClick: () => {
              setView(new Date(view.getFullYear(), i, 1));
              setPanel("days");
            }
          },
          m
        );
      })), panel === "years" && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__cells asds-dp__cells--year" }, Array.from({ length: 12 }, (_, k) => yearPageStart + k).map((y) => {
        const isSel = selected && selected.getFullYear() === y;
        const isCur = today.getFullYear() === y;
        const dis = yearDisabled(y);
        return /* @__PURE__ */ react_shim_default.createElement(
          "button",
          {
            type: "button",
            key: y,
            disabled: dis,
            className: ["asds-dp__cell", isCur ? "asds-dp__cell--cur" : "", isSel ? "asds-dp__cell--sel" : "", dis ? "asds-dp__cell--disabled" : ""].join(" ").trim(),
            onClick: () => {
              setView(new Date(y, view.getMonth(), 1));
              setPanel("months");
            }
          },
          y
        );
      })), panel === "days" && withTime && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__time" }, /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-dp__time-ic" }, /* @__PURE__ */ react_shim_default.createElement(IconClock, null)), /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__time-fields" }, /* @__PURE__ */ react_shim_default.createElement(
        "input",
        {
          className: "asds-dp__spin",
          type: "number",
          "aria-label": "Hour",
          min: hour12 ? 1 : 0,
          max: hour12 ? 12 : 23,
          value: pad2(dispH),
          onChange: (e) => {
            let n = parseInt(e.target.value, 10);
            if (isNaN(n)) return;
            if (hour12) {
              n = Math.max(1, Math.min(12, n));
              const h24 = mer === "PM" ? n % 12 + 12 : n % 12;
              bumpTime("h", h24);
            } else {
              n = Math.max(0, Math.min(23, n));
              bumpTime("h", n);
            }
          }
        }
      ), /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-dp__colon" }, ":"), /* @__PURE__ */ react_shim_default.createElement(
        "input",
        {
          className: "asds-dp__spin",
          type: "number",
          "aria-label": "Minute",
          min: 0,
          max: 59,
          step: minuteStep,
          value: pad2(dispM),
          onChange: (e) => {
            let n = parseInt(e.target.value, 10);
            if (isNaN(n)) return;
            bumpTime("m", Math.max(0, Math.min(59, n)));
          }
        }
      ), hour12 && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__mer", role: "group", "aria-label": "AM or PM" }, /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", "aria-pressed": mer === "AM", onClick: () => bumpTime("mer", "AM") }, "AM"), /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", "aria-pressed": mer === "PM", onClick: () => bumpTime("mer", "PM") }, "PM")))), panel === "days" && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-dp__foot" }, /* @__PURE__ */ react_shim_default.createElement(
        "button",
        {
          type: "button",
          className: "asds-dp__today-btn",
          onClick: () => {
            const base = applyTimeFrom(startOfDay(/* @__PURE__ */ new Date()));
            if (!clampDay(base, minD, maxD)) {
              commit(base);
              setView(startOfDay(base));
              setActiveDay(startOfDay(base));
              if (!withTime) setOpen(false);
            }
          }
        },
        withTime ? "Now" : "Today"
      ), withTime && /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", className: "asds-dp__done-btn", onClick: () => setOpen(false) }, "Done")))
    );
  }
  var DatePicker_default = DatePicker;
  return __toCommonJS(DatePicker_exports);
})();
window.Asthara = Object.assign(window.Asthara || {}, { DatePicker: __as_DatePicker.DatePicker });
