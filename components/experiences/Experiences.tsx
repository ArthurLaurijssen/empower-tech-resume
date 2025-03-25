"use client";
import { ExperiencesProps } from "@/components/experiences/types";
import React, { useMemo, useState } from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { ExperienceFilters } from "@/components/experiences/filter/ExperienceFilters";
import { ExperienceType } from "@/models/enums/ExperienceType";
import { ExperienceCard } from "@/components/experiences/experience-card/ExperienceCard";
import { LineIcon } from "@/components/shared/icons/line-icon/LineIcon";

/**
 * Experiences Component
 *
 * Displays a filterable grid of work experiences and diplomas.
 * This component allows users to filter experiences by type and displays them in a responsive grid layout.
 * It includes decorative elements (CircleIcon and LineIcon) for visual appeal.
 *
 * Uses the "use client" directive to indicate this is a client-side component in Next.js.
 *
 * @component
 */
export const Experiences: React.FC<ExperiencesProps> = ({
  experiences, // Array of experience objects to display
  className = "", // Optional CSS class name for additional styling
  ...props // All other HTML section element props
}: ExperiencesProps) => {
  // State to track active filters (which experience types are currently selected)
  const [activeFilters, setActiveFilters] = useState<ExperienceType[]>([]);

  /**
   * Memoized filtered experiences based on active filters
   * Recalculates only when experiences array or activeFilters change
   */
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
      as="section" // Renders as a semantic section element
      intent="primary_gray" // Sets the background color scheme
      className={`relative p-10 ${className}`} // Padding and positioning, merges with provided className
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      {/* Main heading - responsive font size */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-semibold text-black text-center md:text-left">
        Work experiences & studies
      </h1>

      {/* Filter component for selecting experience types */}
      <ExperienceFilters
        experiences={experiences} // All experiences for generating filter options
        activeFilters={activeFilters} // Currently selected filters
        onFilterChange={setActiveFilters} // Handler for filter changes
        className="mt-5 mx-auto" // Margin and centering
      />

      {/* Decorative icon - positioned absolutely */}
      <LineIcon className="block absolute -top-16 right-0 text-black/90 " />

      {/* Responsive grid layout - single column on mobile, two columns on xl screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        {/* Map through filtered experiences to render experience cards */}
        {filteredExperiences.map((experience) => (
          <ExperienceCard
            key={
              experience.id ||
              `${experience.title}-${experience.experienceType}` // Fallback key if id is not available
            }
            experience={experience} // Pass the experience data to the card
          />
        ))}
      </div>
    </BackgroundContainer>
  );
};
