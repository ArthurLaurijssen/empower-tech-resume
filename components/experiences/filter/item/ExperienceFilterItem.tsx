import React from "react";
import { ExperienceFilterItemProps } from "@/components/experiences/filter/item/types";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { EducationIcon } from "@/components/shared/icons/education-icon/EducationIcon";
import { CertificationIcon } from "@/components/shared/icons/certification-icon/CertificationIcon";
import { WorkIcon } from "@/components/shared/icons/work-icon/WorkIcon";
import { Button } from "@/components/shared/button/Button";

/**
 * Mapping of experience types to their corresponding icon components
 * Uses the same WorkIcon for both Work and Internship experience types
 */
const experienceTypeIcons = {
  [ExperienceType.Work]: WorkIcon,
  [ExperienceType.Education]: EducationIcon,
  [ExperienceType.Certification]: CertificationIcon,
  [ExperienceType.Internship]: WorkIcon,
};

/**
 * ExperienceFilterItem component renders a single filter button with an icon
 * representing a specific experience type (Work, Education, etc.)
 */
export const ExperienceFilterItem: React.FC<ExperienceFilterItemProps> = ({
  experienceType, // The type of experience this filter represents
  isActive = false, // Whether this filter is currently selected
  onClick, // Handler for when this filter button is clicked
  className = "", // Optional CSS class for additional styling
  ...props // All other button props
}) => {
  // Get the appropriate icon component for this experience type
  const IconComponent = experienceTypeIcons[experienceType];

  return (
    <Button
      type="button"
      onClick={onClick}
      isActive={isActive} // Controls the active/selected visual state
      intent="filter" // Applies filter-specific styling
      className={`flex items-center gap-2 ${className}`}
      {...props}
    >
      {IconComponent && <IconComponent />}
      <span className="text-black font-semibold text-2xl">
        {experienceType}
      </span>
    </Button>
  );
};
