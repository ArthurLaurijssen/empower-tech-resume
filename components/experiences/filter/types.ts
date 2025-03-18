import { HTMLAttributes } from "react";
import { Experience } from "@/models/entities/Experience";
import { ExperienceType } from "@/models/enums/ExperienceType";

export interface ExperienceFiltersProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
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
   */
  onFilterChange: (newFilters: ExperienceType[]) => void;
}
