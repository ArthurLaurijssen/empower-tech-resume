import { DeveloperSkill } from "@/models/entities/DeveloperSkill";
import { HTMLAttributes } from "react";

export interface DeveloperSkillContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onClick"> {
  developerSkill: DeveloperSkill;
  skillIndex: number;
  isLast: boolean;
}
