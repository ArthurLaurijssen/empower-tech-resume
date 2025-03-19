import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Available visual styles for buttons
 *
 * - primary: Black background with white text and rounded corners
 * - secondary: Light border with gray text and rounded corners
 * - filter: Toggle-style button for filters that changes appearance when active
 * - orange: Yellow background with black text and rounded corners
 */
export type ButtonIntent = "primary" | "secondary" | "filter" | "orange";

/**
 * Available size variants for buttons
 *
 * - sm: Small buttons for compact UIs
 * - md: Medium buttons for standard use (default)
 * - lg: Large buttons for emphasis
 * - xl: Extra large buttons for major actions
 * - xxl: Extra extra large for hero sections
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "xxl";

/**
 * Props interface for the Button component
 * Extends HTML button element attributes
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style to apply to the button
   * @default "primary"
   */
  intent?: ButtonIntent;

  /**
   * Size variant of the button
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Whether the button is in active/selected state
   * Used primarily for filter buttons
   */
  isActive?: boolean;

  /**
   * Content to display inside the button
   */
  children: ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
