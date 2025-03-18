import React from "react";

/**
 * Defines the possible visual intents for buttons
 * Provides a set of predefined style variations
 */
export type ButtonIntent = "primary" | "secondary" | "filter" | "orange";

/**
 * Defines the possible sizes for buttons
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "xxl";

/**
 * Properties for Button Component
 *
 * Extends native button attributes with additional styling and content options
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content to be rendered
   */
  children: React.ReactNode;

  /**
   * Visual style intent of the button
   * @default "primary"
   */
  intent?: ButtonIntent;

  /**
   * Size variant of the button
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Whether the button is in active state
   * Used primarily for filter buttons
   * @default false
   */
  isActive?: boolean;
}
