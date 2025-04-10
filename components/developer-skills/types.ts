import { DeveloperSkill } from "@/models/entities/DeveloperSkill";
import React from "react";

/**
 * Props for the DeveloperSkillsContainer component
 * Extends HTML section element props while requiring developerSkills
 * Explicitly does not accept children props
 */
export interface DeveloperSkillsContainerProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  developerSkills: DeveloperSkill[];
}
