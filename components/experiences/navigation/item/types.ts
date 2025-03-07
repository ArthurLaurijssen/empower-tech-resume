import { ExperienceType } from "@/models/enums/ExperienceType";
import { HTMLAttributes } from "react";

export interface ExperienceNavigationItem
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  type: ExperienceType;
}
