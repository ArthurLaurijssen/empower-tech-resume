import { HTMLAttributes } from "react";

export interface ExperienceContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  startDate: string;
  title: string;
}
