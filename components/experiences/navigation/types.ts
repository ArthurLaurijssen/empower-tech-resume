import { HTMLAttributes } from "react";
import { Experience } from "@/models/entities/Experience";

export interface ExperienceNavigationProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  experiences: Experience[];
}
