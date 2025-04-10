import React from "react";
import { Experience } from "@/models/entities/Experience";
import { ExperienceType } from "@/models/enums/ExperienceType";

/**
 * Props interface for the ExperienceFilters component
 * Extends HTML div element attributes while excluding the children prop
 */
export interface ExperienceFiltersProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * List of all experiences to extract filter types from
   */
  experiences: Experience[];

  /**
   * Currently active filter types
   */
  activeFilters: ExperienceType[];

  /**
   * Callback function when filters change
   * @param newFilters - Updated array of active filter types
   */
  onFilterChange: (newFilters: ExperienceType[]) => void;
}
