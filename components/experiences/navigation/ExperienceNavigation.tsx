import React, { useMemo } from "react";
import { ExperienceNavigationProps } from "@/components/experiences/navigation/types";
import { type } from "node:os";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { ExperienceNavigationItem } from "@/components/experiences/navigation/item/ExperienceNavigationItem";

export const ExperienceNavigation: React.FC<ExperienceNavigationProps> = ({
  experiences,
  className = "",
  ...props
}: ExperienceNavigationProps) => {
  const uniqueExperienceTypes: ExperienceType[] =
    useMemo((): ExperienceType[] => {
      const types = experiences.map((exp) => exp.experienceType);
      return [...new Set(types)];
    }, [experiences]);

  return (
    <nav className={`flex ${className}`} {...props}>
      {uniqueExperienceTypes.map((type) => (
        <ExperienceNavigationItem
          experienceType={type}
          key={type}
        ></ExperienceNavigationItem>
      ))}
    </nav>
  );
};
