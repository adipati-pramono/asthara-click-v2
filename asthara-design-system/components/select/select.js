/* Asthara · Select: plain browser build of Select.jsx (the same component, compiled).
   Load React 18 and ReactDOM 18 first; this exposes window.Asthara.Select.
   Edit Select.jsx, not this file. */
var __as_Select = (() => {
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

  // Select.jsx
  var Select_exports = {};
  __export(Select_exports, {
    Select: () => Select,
    default: () => Select_default
  });

  // React comes from the page (window.React)
  var R = window.React;
  var react_shim_default = R;
  var { useState, useRef, useEffect, useMemo, useCallback, useId, useLayoutEffect, Fragment } = R;

  // Select.jsx
  var ASDS_STYLE_ID = "asds-select-styles";
  var ASDS_CSS = `
.asds-sel { position: relative; font-family: var(--as-font-body); width: 100%; }
/* Sizes include padding and border whatever the page sets, so the search field fits inside the menu */
.asds-sel, .asds-sel *, .asds-sel *::before, .asds-sel *::after { box-sizing: border-box; }
.asds-sel__label {
  display: block; margin-bottom: 6px;
  font: 700 10px/1 var(--as-font-body);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--as-ink-soft);
}
.asds-sel__req { color: var(--as-gold-deep); margin-left: 2px; }

.asds-sel__trigger {
  width: 100%; min-height: 40px; padding: 0 12px;
  display: flex; align-items: center; gap: 8px;
  background: #fff; color: var(--as-ink);
  border: 1px solid var(--as-line-strong); border-radius: var(--as-radius-3);
  font: 400 13px/1.4 var(--as-font-body); text-align: left; cursor: pointer;
  transition: border-color var(--as-dur-micro) var(--as-ease-out),
              box-shadow var(--as-dur-micro) var(--as-ease-out);
}
.asds-sel--sm .asds-sel__trigger { min-height: 32px; font-size: 12px; padding: 0 10px; border-radius: var(--as-radius-2); }
.asds-sel__trigger:hover { border-color: var(--as-ink-faint); }
.asds-sel__trigger:focus-visible,
.asds-sel--open .asds-sel__trigger {
  outline: none; border-color: var(--as-gold); box-shadow: var(--as-focus-ring);
}
.asds-sel--disabled .asds-sel__trigger {
  background: var(--as-bg-alt); color: var(--as-ink-faint);
  cursor: not-allowed; border-color: var(--as-line);
}

.asds-sel__value { flex: 1 1 auto; min-width: 0; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding: 5px 0; }
.asds-sel__placeholder { color: var(--as-ink-faint); }
.asds-sel__single { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.asds-sel__chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 2px 6px 2px 9px; max-width: 100%;
  background: var(--as-gold-tint); color: var(--as-gold-deep);
  border: 1px solid var(--as-gold-soft); border-radius: var(--as-radius-full);
  font: 600 11px/1.4 var(--as-font-body);
}
.asds-sel__chip-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.asds-sel__chip-x {
  display: inline-flex; align-items: center; justify-content: center;
  width: 14px; height: 14px; border-radius: 50%; cursor: pointer;
  color: var(--as-gold-deep); flex: none;
  transition: background var(--as-dur-micro) var(--as-ease-out);
}
.asds-sel__chip-x:hover { background: rgba(145, 80, 15, 0.16); }
.asds-sel__chip-x svg { width: 9px; height: 9px; stroke-width: 2.5; }

.asds-sel__count {
  flex: none; font: 700 10px/1 var(--as-font-body);
  color: var(--as-ink-soft); background: var(--as-bg-alt);
  border: 1px solid var(--as-line); border-radius: var(--as-radius-full);
  padding: 3px 7px;
}
.asds-sel__caret { flex: none; color: var(--as-ink-soft); transition: transform var(--as-dur-standard) var(--as-ease-out); }
.asds-sel--open .asds-sel__caret { transform: rotate(180deg); }
.asds-sel__caret svg { width: 16px; height: 16px; stroke-width: 1.75; display: block; }

.asds-sel__pop {
  position: absolute; z-index: 60; top: calc(100% + 6px); left: 0; right: 0;
  background: var(--as-card); border: 1px solid var(--as-line);
  border-radius: var(--as-radius-3); box-shadow: var(--as-e2);
  padding: 5px; overflow: hidden;
  transform-origin: top center;
  animation: asds-pop var(--as-dur-standard) var(--as-ease-out);
}
@keyframes asds-pop { from { opacity: 0; transform: translateY(-4px) scale(0.985); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .asds-sel__pop { animation: none; } }

.asds-sel__search {
  width: 100%; height: 34px; padding: 0 10px; margin-bottom: 4px;
  border: 1px solid var(--as-line); border-radius: var(--as-radius-2);
  font: 400 12px/1 var(--as-font-body); color: var(--as-ink); outline: none;
}
.asds-sel__search:focus { border-color: var(--as-gold-soft); }

.asds-sel__list { max-height: 248px; overflow-y: auto; margin: 0; padding: 0; list-style: none; }
.asds-sel__opt {
  display: flex; align-items: center; gap: 9px;
  padding: 8px 9px; border-radius: var(--as-radius-2); cursor: pointer;
  font: 500 13px/1.3 var(--as-font-body); color: var(--as-ink);
  transition: background var(--as-dur-micro) var(--as-ease-out);
}
.asds-sel__opt:hover, .asds-sel__opt--active { background: var(--as-bg-alt); }
.asds-sel__opt--selected { color: var(--as-gold-deep); font-weight: 600; }
.asds-sel__opt--disabled { color: var(--as-ink-faint); cursor: not-allowed; }
.asds-sel__opt--disabled:hover { background: transparent; }
.asds-sel__opt-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.asds-sel__opt-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.asds-sel__opt-hint { font: 400 11px/1.3 var(--as-font-body); color: var(--as-ink-faint); }

.asds-sel__box {
  flex: none; width: 16px; height: 16px; border-radius: 4px;
  border: 1.5px solid var(--as-line-strong); background: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--as-dur-micro), border-color var(--as-dur-micro);
}
.asds-sel__opt--selected .asds-sel__box { background: var(--as-gold); border-color: var(--as-gold); }
.asds-sel__box svg { width: 11px; height: 11px; stroke: #fff; stroke-width: 3; opacity: 0; }
.asds-sel__opt--selected .asds-sel__box svg { opacity: 1; }

.asds-sel__tick { flex: none; width: 16px; color: var(--as-gold); opacity: 0; }
.asds-sel__opt--selected .asds-sel__tick { opacity: 1; }
.asds-sel__tick svg { width: 16px; height: 16px; stroke-width: 2.25; display: block; }

.asds-sel__empty { padding: 14px 9px; text-align: center; font: 400 12px/1.4 var(--as-font-body); color: var(--as-ink-faint); }

.asds-sel__foot {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px; padding: 6px 4px 2px; margin-top: 3px; border-top: 1px solid var(--as-line);
}
.asds-sel__foot-info { font: 600 11px/1 var(--as-font-body); color: var(--as-ink-soft); }
.asds-sel__foot-clear {
  font: 700 11px/1 var(--as-font-body); color: var(--as-gold-deep);
  background: none; border: none; cursor: pointer; padding: 4px 6px; border-radius: var(--as-radius-1);
}
.asds-sel__foot-clear:hover { background: var(--as-bg-alt); }
`;
  function useInjectStyles() {
    useEffect(() => {
      if (typeof document === "undefined") return;
      if (document.getElementById(ASDS_STYLE_ID)) return;
      const el = document.createElement("style");
      el.id = ASDS_STYLE_ID;
      el.textContent = ASDS_CSS;
      document.head.appendChild(el);
    }, []);
  }
  var Caret = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("path", { d: "m6 9 6 6 6-6" }));
  var Check = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("path", { d: "M20 6 9 17l-5-5" }));
  var XMark = () => /* @__PURE__ */ react_shim_default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ react_shim_default.createElement("path", { d: "M18 6 6 18M6 6l12 12" }));
  function normalize(options) {
    return (options || []).map(
      (o) => typeof o === "string" || typeof o === "number" ? { value: o, label: String(o) } : { value: o.value, label: o.label != null ? o.label : String(o.value), hint: o.hint, disabled: !!o.disabled }
    );
  }
  function Select({
    options = [],
    value,
    defaultValue,
    onChange,
    multi = false,
    placeholder = multi ? "Select options…" : "Select an option…",
    label,
    required = false,
    disabled = false,
    size = "md",
    searchable,
    closeOnSelect,
    clearable = true,
    maxTags = 3,
    id
  }) {
    useInjectStyles();
    const opts = useMemo(() => normalize(options), [options]);
    const autoId = useId();
    const rootId = id || autoId;
    const isControlled = value !== void 0;
    const initial = defaultValue !== void 0 ? defaultValue : multi ? [] : null;
    const [inner, setInner] = useState(initial);
    const current = isControlled ? value : inner;
    const selected = useMemo(() => {
      if (multi) return Array.isArray(current) ? current : current == null ? [] : [current];
      return current;
    }, [current, multi]);
    const isSel = useCallback(
      (v) => multi ? selected.includes(v) : selected === v,
      [multi, selected]
    );
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIdx, setActiveIdx] = useState(-1);
    const rootRef = useRef(null);
    const searchRef = useRef(null);
    const doSearch = searchable === void 0 ? opts.length > 7 : searchable;
    const autoClose = closeOnSelect === void 0 ? !multi : closeOnSelect;
    const filtered = useMemo(() => {
      if (!doSearch || !query.trim()) return opts;
      const q = query.trim().toLowerCase();
      return opts.filter((o) => o.label.toLowerCase().includes(q));
    }, [opts, query, doSearch]);
    const commit = useCallback(
      (next) => {
        if (!isControlled) setInner(next);
        if (onChange) onChange(next);
      },
      [isControlled, onChange]
    );
    const pick = useCallback(
      (opt) => {
        if (opt.disabled) return;
        if (multi) {
          const set = Array.isArray(selected) ? selected : [];
          const next = set.includes(opt.value) ? set.filter((v) => v !== opt.value) : [...set, opt.value];
          commit(next);
        } else {
          commit(opt.value);
        }
        if (autoClose) {
          setOpen(false);
          setQuery("");
        }
      },
      [multi, selected, commit, autoClose]
    );
    const removeTag = useCallback(
      (v, e) => {
        if (e) e.stopPropagation();
        commit((Array.isArray(selected) ? selected : []).filter((x) => x !== v));
      },
      [selected, commit]
    );
    const clearAll = useCallback(
      (e) => {
        if (e) e.stopPropagation();
        commit(multi ? [] : null);
      },
      [commit, multi]
    );
    useEffect(() => {
      if (!open) return;
      const onDoc = (e) => {
        if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
      };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);
    useEffect(() => {
      if (open) {
        setActiveIdx(-1);
        if (doSearch) {
          const t = setTimeout(() => searchRef.current && searchRef.current.focus(), 20);
          return () => clearTimeout(t);
        }
      } else {
        setQuery("");
      }
    }, [open, doSearch]);
    const onKeyDown = useCallback(
      (e) => {
        if (disabled) return;
        if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setOpen(true);
          return;
        }
        if (!open) return;
        if (e.key === "Escape") {
          e.preventDefault();
          setOpen(false);
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && activeIdx >= 0 && filtered[activeIdx]) {
          e.preventDefault();
          pick(filtered[activeIdx]);
        }
      },
      [disabled, open, filtered, activeIdx, pick]
    );
    const labelFor = useCallback((v) => {
      const o = opts.find((x) => x.value === v);
      return o ? o.label : v;
    }, [opts]);
    const selArr = multi ? Array.isArray(selected) ? selected : [] : [];
    const hasValue = multi ? selArr.length > 0 : selected != null && selected !== "";
    return /* @__PURE__ */ react_shim_default.createElement(
      "div",
      {
        ref: rootRef,
        id: rootId,
        className: [
          "asds-sel",
          `asds-sel--${size}`,
          open ? "asds-sel--open" : "",
          disabled ? "asds-sel--disabled" : "",
          multi ? "asds-sel--multi" : "asds-sel--single"
        ].join(" ").trim()
      },
      label && /* @__PURE__ */ react_shim_default.createElement("label", { className: "asds-sel__label", htmlFor: `${rootId}-trigger` }, label, required && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__req" }, "*")),
      /* @__PURE__ */ react_shim_default.createElement(
        "button",
        {
          type: "button",
          id: `${rootId}-trigger`,
          className: "asds-sel__trigger",
          "aria-haspopup": "listbox",
          "aria-expanded": open,
          disabled,
          onClick: () => !disabled && setOpen((o) => !o),
          onKeyDown
        },
        /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__value" }, !hasValue && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__placeholder" }, placeholder), hasValue && !multi && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__single" }, labelFor(selected)), hasValue && multi && selArr.slice(0, maxTags).map((v) => /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__chip", key: v }, /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__chip-label" }, labelFor(v)), /* @__PURE__ */ react_shim_default.createElement(
          "span",
          {
            className: "asds-sel__chip-x",
            role: "button",
            "aria-label": `Remove ${labelFor(v)}`,
            onClick: (e) => removeTag(v, e)
          },
          /* @__PURE__ */ react_shim_default.createElement(XMark, null)
        ))), hasValue && multi && selArr.length > maxTags && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__count" }, "+", selArr.length - maxTags)),
        /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__caret" }, /* @__PURE__ */ react_shim_default.createElement(Caret, null))
      ),
      open && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-sel__pop", role: "listbox", "aria-multiselectable": multi }, doSearch && /* @__PURE__ */ react_shim_default.createElement(
        "input",
        {
          ref: searchRef,
          className: "asds-sel__search",
          placeholder: "Search…",
          value: query,
          onChange: (e) => {
            setQuery(e.target.value);
            setActiveIdx(-1);
          },
          onKeyDown
        }
      ), /* @__PURE__ */ react_shim_default.createElement("ul", { className: "asds-sel__list" }, filtered.length === 0 && /* @__PURE__ */ react_shim_default.createElement("li", { className: "asds-sel__empty" }, "No matches"), filtered.map((o, i) => {
        const sel = isSel(o.value);
        return /* @__PURE__ */ react_shim_default.createElement(
          "li",
          {
            key: o.value,
            role: "option",
            "aria-selected": sel,
            className: [
              "asds-sel__opt",
              sel ? "asds-sel__opt--selected" : "",
              o.disabled ? "asds-sel__opt--disabled" : "",
              i === activeIdx ? "asds-sel__opt--active" : ""
            ].join(" ").trim(),
            onMouseEnter: () => setActiveIdx(i),
            onClick: () => pick(o)
          },
          multi && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__box" }, /* @__PURE__ */ react_shim_default.createElement(Check, null)),
          /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__opt-main" }, /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__opt-label" }, o.label), o.hint && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__opt-hint" }, o.hint)),
          !multi && /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__tick" }, /* @__PURE__ */ react_shim_default.createElement(Check, null))
        );
      })), multi && clearable && /* @__PURE__ */ react_shim_default.createElement("div", { className: "asds-sel__foot" }, /* @__PURE__ */ react_shim_default.createElement("span", { className: "asds-sel__foot-info" }, selArr.length, " selected"), /* @__PURE__ */ react_shim_default.createElement("button", { type: "button", className: "asds-sel__foot-clear", onClick: clearAll, disabled: selArr.length === 0 }, "Clear all")))
    );
  }
  var Select_default = Select;
  return __toCommonJS(Select_exports);
})();
window.Asthara = Object.assign(window.Asthara || {}, { Select: __as_Select.Select });
