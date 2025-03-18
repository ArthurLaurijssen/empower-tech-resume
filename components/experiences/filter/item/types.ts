import { ExperienceType } from "@/models/enums/ExperienceType";
import { ButtonHTMLAttributes } from "react";

export interface ExperienceFilterItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  experienceType: ExperienceType;
  isActive?: boolean;
}
