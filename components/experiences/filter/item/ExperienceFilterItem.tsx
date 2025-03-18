import React from "react";
import { ExperienceFilterItemProps } from "@/components/experiences/filter/item/types";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { EducationIcon } from "@/components/shared/icons/education-icon/EducationIcon";
import { CertificationIcon } from "@/components/shared/icons/certification-icon/CertificationIcon";
import { WorkIcon } from "@/components/shared/icons/work-icon/WorkIcon";
import { Button } from "@/components/shared/button/Button";

const experienceTypeIcons = {
  [ExperienceType.Work]: WorkIcon,
  [ExperienceType.Education]: EducationIcon,
  [ExperienceType.Certification]: CertificationIcon,
  [ExperienceType.Internship]: WorkIcon,
};

export const ExperienceFilterItem: React.FC<ExperienceFilterItemProps> = ({
  experienceType,
  isActive = false,
  onClick,
  className = "",
  ...props
}) => {
  const IconComponent = experienceTypeIcons[experienceType];

  return (
    <Button
      type="button"
      onClick={onClick}
      isActive={isActive}
      intent="filter"
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
