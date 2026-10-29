import * as React from "react";

/** A single option. Plain strings/numbers are also accepted in `options`. */
export interface SelectOption {
  /** Stable value committed via onChange. */
  value: string | number;
  /** Visible label. Falls back to String(value). */
  label?: string;
  /** Secondary muted line under the label. */
  hint?: string;
  /** Render the row as non-selectable. */
  disabled?: boolean;
}

export interface SelectProps {
  /** Options as objects or bare strings/numbers. */
  options: Array<SelectOption | string | number>;
  /**
   * Controlled value. Single mode: one value (or null). Multi mode: array of values.
   * Omit to run uncontrolled (see `defaultValue`).
   */
  value?: string | number | null | Array<string | number>;
  /** Initial value when uncontrolled. */
  defaultValue?: string | number | null | Array<string | number>;
  /** Fires with the next value (single: value|null, multi: value[]). */
  onChange?: (value: string | number | null | Array<string | number>) => void;
  /** Multi-select with removable chips + checkboxes. Default false (single). */
  multi?: boolean;
  /** Empty-state text in the trigger. */
  placeholder?: string;
  /** Uppercase caption label above the field. */
  label?: string;
  /** Show the required asterisk on the label. */
  required?: boolean;
  /** Disable the whole control. */
  disabled?: boolean;
  /** Trigger height: "md" (40px, default) or "sm" (32px). */
  size?: "md" | "sm";
  /** Show the in-menu search box. Defaults to true when options.length > 7. */
  searchable?: boolean;
  /** Close the menu after a pick. Defaults: single = true, multi = false. */
  closeOnSelect?: boolean;
  /** Show the "Clear all" footer in multi mode. Default true. */
  clearable?: boolean;
  /** Max chips shown before collapsing to a "+N" pill (multi). Default 3. */
  maxTags?: number;
  /** Root element id (also derives trigger/label ids). */
  id?: string;
}

/**
 * Asthara Select — single- and multi-select dropdown.
 *
 * Built on the `--as-*` tokens (Raleway product voice, 40px trigger, gold focus
 * ring and selection mark, e2 popover). One component, two modes via `multi`.
 *
 * @example Single
 * <Select label="Region" options={["Jakarta","Tangerang","Bekasi"]} defaultValue="Jakarta" />
 *
 * @example Multi
 * <Select multi label="Zones" options={zones} defaultValue={["a","b"]} onChange={setZones} />
 */
export function Select(props: SelectProps): React.JSX.Element;
export default Select;
