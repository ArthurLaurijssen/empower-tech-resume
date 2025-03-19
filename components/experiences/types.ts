import { Experience } from "@/models/entities/Experience";
import React from "react";

/**
 * Props for the Experiences component
 *
 * This interface defines the required properties for the Experiences component.
 * It extends standard HTML section element attributes while requiring an array of Experience objects
 * and explicitly does not accept children props.
 *
 * @interface ExperiencesProps
 * @extends {Omit<React.HTMLAttributes<HTMLElement>, "children">}
 */
export interface ExperiencesProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /**
   * Array of Experience objects to be displayed and filtered
   * @type {Experience[]}
   * @required
   */
  experiences: Experience[];
}
