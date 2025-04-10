import { Project } from "@/models/entities/Project";
import React from "react";

/**
 * Props interface for the ProjectCard component
 * Extends HTML div element attributes while excluding the children prop
 * as content is generated from the project data
 */
export interface ProjectCardProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * Project data object containing details like title, description, and imageUrl
   * to be displayed in the card
   */
  project: Project;
}
