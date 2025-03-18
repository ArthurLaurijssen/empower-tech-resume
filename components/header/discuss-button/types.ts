import { ButtonHTMLAttributes } from "react";

/**
 * Props interface for the HeaderDiscussButton component
 * Extends standard HTML button attributes while omitting children
 * since the component manages its own content structure
 */
export interface HeaderDiscussButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * Additional CSS classes to apply to the button
   * Allows for custom styling beyond the default appearance
   */
  className?: string;

  /**
   * Custom text to display on the button
   * @default "Discuss your project"
   */
  text?: string;
}
