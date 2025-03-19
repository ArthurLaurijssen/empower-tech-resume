import React, { useMemo } from "react";
import { ExperienceFiltersProps } from "@/components/experiences/filter/types";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { ExperienceFilterItem } from "@/components/experiences/filter/item/ExperienceFilterItem";

/**
 * ExperienceFilters component displays a list of filter buttons for different experience types.
 * It allows users to toggle filters for filtering experience items by their type.
 */
export const ExperienceFilters: React.FC<ExperienceFiltersProps> = ({
  experiences, // Array of experience objects used to generate filter types
  activeFilters, // Currently selected filters
  onFilterChange, // Callback function for when filters change
  className = "", // Optional CSS class for additional styling
  ...props // All other HTML div element props
}: ExperienceFiltersProps) => {
  /**
   * Extract unique experience types from the experiences array using Set
   * to avoid duplicate filter buttons
   */
  const uniqueExperienceTypes: ExperienceType[] =
    useMemo((): ExperienceType[] => {
      const types = experiences.map((exp) => exp.experienceType);
      return [...new Set(types)];
    }, [experiences]);

  /**
   * Handles filter item click by toggling its active state
   * @param type - Experience type to toggle
   */
  const handleFilterClick = (type: ExperienceType) => {
    if (activeFilters.includes(type)) {
      // If already active, remove it from active filters
      onFilterChange(activeFilters.filter((filter) => filter !== type));
    } else {
      // If not active, add it to active filters
      onFilterChange([...activeFilters, type]);
    }
  };

  return (
    <div className={`flex gap-2 flex-wrap mt-4 ${className}`} {...props}>
      {uniqueExperienceTypes.map((type) => (
        <ExperienceFilterItem
          experienceType={type} // The filter type (Work, Education, etc.)
          key={type} // Use the type enum value as the unique key
          isActive={activeFilters.includes(type)} // Whether this filter is currently selected
          onClick={() => handleFilterClick(type)} // Handle click event for this filter
        />
      ))}
    </div>
  );
};
