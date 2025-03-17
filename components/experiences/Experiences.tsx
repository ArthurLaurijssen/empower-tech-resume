import { ExperiencesProps } from "@/components/experiences/types";
import React from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { ExperienceNavigation } from "@/components/experiences/navigation/ExperienceNavigation";

export const Experiences: React.FC<ExperiencesProps> = ({
  experiences,
}: ExperiencesProps) => {
  return (
    <BackgroundContainer
      as="section"
      intent="primary_gray"
      className="relative p-10"
    >
      <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold text-black">
        Work experiences & diploma’s
      </h1>
      <ExperienceNavigation experiences={experiences}></ExperienceNavigation>
    </BackgroundContainer>
  );
};
