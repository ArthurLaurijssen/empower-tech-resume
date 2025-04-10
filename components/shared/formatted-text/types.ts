// src/components/shared/formatted-text/types.ts (or wherever it's defined)
import React from "react";

// TextElement remains the same
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
 * Props for the FormattedText component using a more generic base type.
 */
export interface FormattedTextProps
  // Extend from common HTML attributes, omitting 'children'
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /**
   * The text to format, potentially containing **bold** markers
   */
  text: string;

  /**
   * Optional class name to apply to the container element
   */
  className?: string;

  /**
   * Optional class name to apply to bold text segments
   * @default "text-black font-semibold"
   */
  boldClassName?: string;

  /**
   * HTML element type to render as
   * @default "span"
   */
  as?: TextElement; // Type remains TextElement, but props don't dynamically check against it
}
