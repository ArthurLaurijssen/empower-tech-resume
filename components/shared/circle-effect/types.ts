import { ReactNode, HTMLAttributes } from "react";

/**
 * Available visual styles for the CircleEffect component
 *
 * - primary: Yellow background with black text
 * - secondary: Gray background with default text color
 * - secondary_white: Gray background with white text
 * - black: Black background with white text
 */
export type CircleEffectIntent =
  | "primary"
  | "secondary"
  | "secondary_white"
  | "black";

/**
 * Available size variants for the CircleEffect component
 *
 * - sm: Small fixed size (32px × 32px)
 * - md: Medium fixed size (40px × 40px)
 * - lg: Large fixed size (48px × 48px)
 * - auto: Flexible size that adapts to content with padding
 */
export type CircleEffectSize = "sm" | "md" | "lg" | "auto";

/**
 * Props interface for the CircleEffect component
 * Extends HTML div element attributes
 */
export interface CircleEffectProps extends HTMLAttributes<HTMLDivElement> {
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
}
