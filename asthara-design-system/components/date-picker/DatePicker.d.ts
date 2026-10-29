import * as React from "react";

/** Anything accepted for an incoming date: a `Date`, an ISO/parseable string, a ms timestamp, or null. */
export type DateInput = Date | string | number | null;

export interface DatePickerProps {
  /**
   * Picker mode:
   * - `"date"`      → calendar only (default)
   * - `"datetime"`  → calendar + time strip (hh:mm, with AM/PM when `hour12`)
   */
  mode?: "date" | "datetime";
  /** Controlled value. Omit to run uncontrolled (see `defaultValue`). */
  value?: DateInput;
  /** Initial value when uncontrolled. */
  defaultValue?: DateInput;
  /** Fires with the next value as a `Date` (or `null` when cleared). */
  onChange?: (value: Date | null) => void;
  /** Empty-state text in the trigger. Defaults per mode. */
  placeholder?: string;
  /** Uppercase caption label above the field. */
  label?: string;
  /** Show the required asterisk on the label. */
  required?: boolean;
  /** Disable the whole control. */
  disabled?: boolean;
  /** Trigger height: `"md"` (40px, default) or `"sm"` (32px). */
  size?: "md" | "sm";
  /** Earliest selectable day (inclusive). Days before are disabled. */
  min?: DateInput;
  /** Latest selectable day (inclusive). Days after are disabled. */
  max?: DateInput;
  /** First column of the calendar: 0 = Sunday (default), 1 = Monday. */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** 12-hour time with AM/PM toggle (default true). False = 24-hour. Datetime only. */
  hour12?: boolean;
  /** Minute input step (default 5). Datetime only. */
  minuteStep?: number;
  /** Show the inline clear (✕) button when a value is set. Default true. */
  clearable?: boolean;
  /** Popover horizontal anchor: `"left"` (default) or `"right"`. */
  align?: "left" | "right";
  /** Custom formatter for the trigger label. Receives the selected `Date`. */
  format?: (value: Date) => string;
  /** Root element id (also derives trigger/label ids). */
  id?: string;
}

/**
 * Asthara DatePicker — date and date-time picker.
 *
 * Built on the `--as-*` tokens (Raleway product voice, 40px trigger, gold focus
 * ring, gold day selection, e2 popover calendar). One component, two modes via
 * `mode`. Controlled or uncontrolled; emits a `Date` (or `null`) via `onChange`.
 * Fully keyboard-navigable (arrows move the day cursor, Enter commits, Esc closes).
 * Click the header title to drill up: day grid → month grid → year grid, so
 * jumping years takes one click instead of paging month-by-month.
 *
 * @example Date
 * <DatePicker label="Move-in date" min={new Date()} onChange={setDate} />
 *
 * @example Date & time
 * <DatePicker mode="datetime" label="Inspection slot" hour12 minuteStep={15} onChange={setWhen} />
 */
export function DatePicker(props: DatePickerProps): React.JSX.Element;
export default DatePicker;
