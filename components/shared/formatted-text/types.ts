import { HTMLAttributes } from "react";

/**
 * Defines the HTML element types that FormattedText can render as
 */
export type TextElement =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "li"
  | "strong"
  | "em"
  | "label";

/**
 * Props for the FormattedText component
 */
export interface FormattedTextProps extends HTMLAttributes<HTMLElement> {
  /** The text to format, potentially containing **bold** markers */
  text: string;

  /** Optional class name to apply to the container element */
  className?: string;

  /** Optional class name to apply to bold text segments */
  boldClassName?: string;

  /** HTML element type to render as (defaults to "span") */
  as?: TextElement;
}
