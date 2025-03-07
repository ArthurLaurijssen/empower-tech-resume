import React from "react";
import { ExperienceCardProps } from "@/components/experiences/experience-card/types";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className = "",
  ...props
}: ExperienceCardProps) => {
  return <div className={`${className}`} {...props}></div>;
};
