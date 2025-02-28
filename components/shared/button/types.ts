import React from "react";

/**
 * Defines the possible visual intents for buttons
 * Provides a set of predefined style variations
 */
export type ButtonIntent = "primary" | "secondary";

/**
 * Defines the possible sizes for buttons
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl";

/**
 * Properties for CircleEffect Component
 *
 * Extends native button attributes with additional styling and content optionsc
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * CircleEffect content to be rendered
   */
  children: React.ReactNode;

  /**
   * Visual style intent of the button
   * Determines the button's color and appearance
   */
  intent: ButtonIntent;

  /**
   * Size variant of the button
   * @default "medium"
   */
  size?: ButtonSize;
}
