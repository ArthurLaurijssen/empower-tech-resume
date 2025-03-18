"use client";
import { ExperiencesProps } from "@/components/experiences/types";
import React, { useMemo, useState } from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { ExperienceFilters } from "@/components/experiences/filter/ExperienceFilters";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { ExperienceCard } from "@/components/experiences/experience-card/ExperienceCard";
import { CircleIcon } from "@/components/shared/icons/circle-icon/CircleIcon";
import { LineIcon } from "@/components/shared/icons/line-icon/LineIcon";

export const Experiences: React.FC<ExperiencesProps> = ({
  experiences,
  className = "",
  ...props
}: ExperiencesProps) => {
  // State to track active filters
  const [activeFilters, setActiveFilters] = useState<ExperienceType[]>([]);

  // Filter experiences based on active filters
  const filteredExperiences = useMemo(() => {
    // If no filters are active, show all experiences
    if (activeFilters.length === 0) {
      return experiences;
    }

    // Otherwise, show only experiences that match active filters
    return experiences.filter((experience) =>
      activeFilters.includes(experience.experienceType),
    );
  }, [experiences, activeFilters]);

  return (
    <BackgroundContainer
      as="section"
      intent="primary_gray"
      className={`relative p-10 ${className}`}
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold text-black text-center md:text-left">
        Work experiences & diploma's
      </h1>
      <ExperienceFilters
        experiences={experiences}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
        className="mt-5 mx-auto"
      />
      {/* Drawn icon */}
      <CircleIcon className="absolute top-16 md:top-56 left-5 lg:left-2 text-black/90" />
      <LineIcon className="hidden xl:block xl:absolute xl:-top-16 right-0 text-black/90" />
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        {filteredExperiences.map((experience) => (
          <ExperienceCard
            key={
              experience.id ||
              `${experience.title}-${experience.experienceType}`
            }
            experience={experience}
          />
        ))}
      </div>
    </BackgroundContainer>
  );
};
