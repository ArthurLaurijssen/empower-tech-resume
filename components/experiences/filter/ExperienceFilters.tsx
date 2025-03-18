import React, { useMemo } from "react";
import { ExperienceFiltersProps } from "@/components/experiences/filter/types";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { ExperienceFilterItem } from "@/components/experiences/filter/item/ExperienceFilterItem";

export const ExperienceFilters: React.FC<ExperienceFiltersProps> = ({
  experiences,
  activeFilters,
  onFilterChange,
  className = "",
  ...props
}: ExperienceFiltersProps) => {
  const uniqueExperienceTypes: ExperienceType[] =
    useMemo((): ExperienceType[] => {
      const types = experiences.map((exp) => exp.experienceType);
      return [...new Set(types)];
    }, [experiences]);

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
          experienceType={type}
          key={type}
          isActive={activeFilters.includes(type)}
          onClick={() => handleFilterClick(type)}
        />
      ))}
    </div>
  );
};
