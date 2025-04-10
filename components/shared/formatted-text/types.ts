import React from "react";

/**
 * Defines the HTML element types that FormattedText can render as
 * Provides type safety for the semantic element selection
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
 * Extends HTML attributes to support all standard element properties
 */
export interface FormattedTextProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The text to format, potentially containing **bold** markers
   * Example: "Hello **world**" would display "Hello" as plain text and "world" as bold
   */
  text: string;

  /**
   * Optional class name to apply to the container element
   * These classes will be applied to the main rendered element (p, span, etc.)
   */
  className?: string;

  /**
   * Optional class name to apply to bold text segments
   * These classes will be applied to the <strong> elements for bold text
   * @default "text-black font-semibold"
   */
  boldClassName?: string;

  /**
   * HTML element type to render as
   * Allows the component to adapt to different semantic contexts
   * @default "span"
   */
  as?: TextElement;
}
