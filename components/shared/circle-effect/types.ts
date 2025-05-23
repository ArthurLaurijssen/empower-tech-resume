import React, { ReactNode } from "react";

/**
 * Available visual styles for the CircleEffect component
 *
 * - primary: Yellow background with black text
 * - secondary: Gray background with default text color
 * - secondary_white: Gray background with white text
 * - black: Black background with white text
 * - red: Red background
 * - green: Green background
 */
export type CircleEffectIntent =
  | "primary"
  | "secondary"
  | "secondary_white"
  | "black"
  | "red"
  | "green";

/**
 * Available size variants for the CircleEffect component
 *
 * - sm: Small fixed size (32px × 32px)
 * - md: Medium fixed size (40px × 40px)
 * - lg: Large fixed size (48px × 48px)
 * - auto: Flexible size that adapts to content with padding
 * - custom: Size defined through customSize prop using Tailwind classes
 */
export type CircleEffectSize = "sm" | "md" | "lg" | "auto" | "custom";

/**
 * Props interface for the CircleEffect component
 * Extends HTML div element attributes
 */
export interface CircleEffectProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Content to display inside the circle
   * Typically an icon or small text element
   */
  children: ReactNode;

  /**
   * Visual style to apply to the circle
   * Controls background color and text color
   */
  intent: CircleEffectIntent;

  /**
   * Size variant of the circle
   * Controls width and height dimensions
   * @default "auto"
   */
  size?: CircleEffectSize;

  /**
   * Custom size using Tailwind CSS classes
   * Only applied when size is set to "custom"
   * Can include responsive classes (e.g., "w-6 h-6 md:w-12 md:h-12")
   */
  customSize?: string;
}
