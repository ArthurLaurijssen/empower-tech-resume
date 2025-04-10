import React from "react";

/**
 * Props interface for the HeaderGetInTouchButton component
 * Extends standard button HTML attributes
 */
export interface HeaderGetInTouchButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Optional CSS class name for custom styling
   */
  className?: string;

  /**
   * Click event handler
   */
  onClick?: () => void;

  /**
   * Text to display on the button
   * @default "Get in touch"
   */
  text?: string;

  /**
   * Target element ID to scroll to when clicked
   * @default "footer"
   */
  targetId?: string;

  /**
   * Offset in pixels from the target element when scrolling
   * @default 20
   */
  scrollOffset?: number;
}
