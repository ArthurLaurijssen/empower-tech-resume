import React from "react";

/**
 * Props interface for the ExperienceContainer component
 * Inherits all the normal <div> props except ref
 * and adds our custom experience fields.
 */
export interface ExperienceContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
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
