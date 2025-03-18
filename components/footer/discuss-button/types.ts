import { ButtonHTMLAttributes } from "react";

export interface HeaderDiscussButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Custom text to display (optional)
   * @default "Discuss your project"
   */
  text?: string;
}
