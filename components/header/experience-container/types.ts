import { HTMLAttributes } from "react";

/**
 * Props interface for the ExperienceContainer component
 * Extends standard HTML div element attributes with experience-specific data
 */
export interface ExperienceContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * The start date of the experience in string format
   * Used to calculate years of experience
   */
  startDate: string;

  /**
   * The title of the experience to be displayed
   * Describes the type of experience (e.g. "Web Development")
   */
  title: string;
}
