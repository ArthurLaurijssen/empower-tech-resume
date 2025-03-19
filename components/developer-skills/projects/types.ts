import { Project } from "@/models/entities/Project";
import { HTMLAttributes } from "react";

/**
 * Props interface for the ProjectsContainer component
 * Extends HTML div element attributes while excluding the children prop
 * as children are generated from the projects array
 */
export interface ProjectsContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Array of project objects to be displayed in the container
   * Each project will be rendered as a ProjectCard within the Swiper
   */
  projects: Project[];
}
