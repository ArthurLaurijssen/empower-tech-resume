import { Experience } from "@/models/entities/Experience";
import { HTMLAttributes } from "react";

/**
 * Props interface for the ExperienceCard component
 * Extends HTML div element attributes while excluding the children prop
 */
export interface ExperienceCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Experience data object containing details like title, dates, location, and description
   * to be displayed in the card
   */
  experience: Experience;
}
