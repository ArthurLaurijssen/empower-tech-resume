import { Project } from "@/models/entities/Project";
import { HTMLAttributes } from "react";

export interface ProjectsContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  projects: Project[];
}
