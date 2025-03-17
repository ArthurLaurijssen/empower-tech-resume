import { ExperienceType } from "@/models/enums/ExperienceType";
import { HTMLAttributes } from "react";

export interface ExperienceNavigationItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  experienceType: ExperienceType;
}
