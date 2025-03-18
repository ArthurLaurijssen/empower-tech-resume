import { Experience } from "@/models/entities/Experience";
import React from "react";

/**
 * Props for the Experiences component
 * Extends HTML section element props while requiring experiences data
 * Explicitly does not accept children props
 */
export interface ExperiencesProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  experiences: Experience[];
}
