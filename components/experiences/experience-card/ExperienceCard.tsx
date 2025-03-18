import React from "react";
import { ExperienceCardProps } from "@/components/experiences/experience-card/types";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className = "",
  ...props
}: ExperienceCardProps) => {
  const experienceStartYear: string = new Date(experience.startDate)
    .getFullYear()
    .toString();
  const experienceEndYear: string = experience.endDate
    ? new Date(experience.endDate).getFullYear().toString()
    : "present";
  return (
    <BackgroundContainer
      as="div"
      intent="white"
      className={`${className} p-8`}
      {...props}
    >
      <div className="flex gap-3 items-center">
        <span className="text-text-gray text-2xl font-medium">
          {experienceStartYear} - {experienceEndYear}
        </span>
        <div className="rounded-full bg-dot-gray h-3 w-3"></div>
        <span className="text-text-gray text-2xl font-medium">
          {experience.locationName}
        </span>
      </div>
      <h3 className="text-black font-semibold text-3xl mt-4">
        {experience.title}
      </h3>
      <p className="text-text-gray font-normal text-xl font-inter mt-4">
        {experience.description}
      </p>
    </BackgroundContainer>
  );
};
