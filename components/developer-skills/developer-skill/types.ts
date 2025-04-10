import { DeveloperSkill } from "@/models/entities/DeveloperSkill";
import React from "react";

/**
 * Props interface for the DeveloperSkillContainer component
 * Extends HTML div element attributes while excluding the children and onClick props
 * as children are generated internally and onClick is used for toggling expansion
 */
export interface DeveloperSkillContainerProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children" | "onClick"> {
  /**
   * Developer skill data object containing technology name, proficiency level, and projects
   */
  developerSkill: DeveloperSkill;

  /**
   * Zero-based index position of this skill in the parent component's skills array
   * Used for numbering display and determining default expanded state
   */
  skillIndex: number;

  /**
   * Flag indicating if this is the last skill item in the list
   * Used to control the display of the bottom border
   */
  isLast: boolean;
}
