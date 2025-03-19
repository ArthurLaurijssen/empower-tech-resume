import { ExperienceType } from "@/models/enums/ExperienceType";
import { ButtonHTMLAttributes } from "react";

/**
 * Props for the ExperienceFilterItem component
 * Extends HTML button element props while excluding children prop
 */
export interface ExperienceFilterItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * The type of experience this filter represents (Work, Education, etc.)
   */
  experienceType: ExperienceType;

  /**
   * Whether this filter is currently selected/active
   * Default is false
   */
  isActive?: boolean;
}
