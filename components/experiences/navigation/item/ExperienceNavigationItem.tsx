import React from "react";
import { ExperienceNavigationItemProps } from "@/components/experiences/navigation/item/types";

export const ExperienceNavigationItem: React.FC<
  ExperienceNavigationItemProps
> = ({
  experienceType,
  className = "",
  ...props
}: ExperienceNavigationItemProps) => {
  return <div>{experienceType}</div>;
};
