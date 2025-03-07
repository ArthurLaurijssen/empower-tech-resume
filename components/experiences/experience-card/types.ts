import { Experience } from "@/models/entities/Experience";
import { HTMLAttributes } from "react";

export interface ExperienceCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  experience: Experience;
}
