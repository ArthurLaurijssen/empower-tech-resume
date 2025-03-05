import { Project } from "@/models/entities/Project";
import { HTMLAttributes } from "react";

export interface ProjectCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  project: Project;
}
