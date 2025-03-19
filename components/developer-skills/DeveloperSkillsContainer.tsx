import React from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { DeveloperSkillsContainerProps } from "@/components/developer-skills/types";
import { PlusDrawingIcon } from "@/components/shared/icons/plus-drawing-icon/PlusDrawingIcon";
import { DeveloperSkillContainer } from "@/components/developer-skills/developer-skill/DeveloperSkillContainer";

/**
 * DeveloperSkillsContainer component displays a list of developer skills
 * with a themed background and header.
 *
 * This component serves as the main container for showcasing a developer's
 * languages and experiences.
 */
export const DeveloperSkillsContainer: React.FC<
  DeveloperSkillsContainerProps
> = ({
  developerSkills, // Array of developer skill objects to display
  className = "", // Optional additional CSS classes
  ...props // All other HTML section element props
}: DeveloperSkillsContainerProps) => {
  return (
    <BackgroundContainer
      as="section" // Render as a semantic section element
      intent="secondary_black" // Apply dark themed background
      className={`relative p-10 ${className}`}
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      {/* Header section */}
      <div className="w-4/5 md:w-full mx-auto">
        <h1 className="text-white text-5xl lg:text-6xl font-semibold text-center md:text-left">
          Languages & experiences
        </h1>
      </div>

      {/* Decorative plus icon in the corner */}
      <PlusDrawingIcon className="text-white absolute top-1 right-2 sm:top-3 sm:right-6 lg:right-16 lg:top-6" />

      {/* List of developer skills */}
      {developerSkills.map((skill, i) => (
        <DeveloperSkillContainer
          developerSkill={skill} // Individual skill data
          skillIndex={i} // Position in the skills array
          key={i} // React key for list rendering
          isLast={developerSkills.length === i + 1} // Flag to identify the last item
        />
      ))}
    </BackgroundContainer>
  );
};
