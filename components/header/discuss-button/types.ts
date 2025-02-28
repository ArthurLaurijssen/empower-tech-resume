import { ButtonHTMLAttributes } from "react";

export interface DiscussButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
