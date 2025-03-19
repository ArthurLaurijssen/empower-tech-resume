import React from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { DeveloperSkillsContainerProps } from "@/components/developer-skills/types";
import { PlusDrawingIcon } from "@/components/shared/icons/plus-drawing-icon/PlusDrawingIcon";
import { DeveloperSkillContainer } from "@/components/developer-skills/developer-skill/DeveloperSkillContainer";

export const DeveloperSkillsContainer: React.FC<
  DeveloperSkillsContainerProps
> = ({
  developerSkills,
  className = "",
  ...props
}: DeveloperSkillsContainerProps) => {
  return (
    <BackgroundContainer
      as="section"
      intent="secondary_black"
      className={`relative p-10 ${className}`}
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      <div className="w-4/5 md:w-full mx-auto">
        <h1 className="text-white text-5xl lg:text-6xl font-semibold text-center md:text-left">
          Languages & experiences
        </h1>
      </div>
      <PlusDrawingIcon className="text-white absolute top-1 right-2 sm:top-3 sm:right-6 lg:right-16 lg:top-6" />

      {/*Projects and skills*/}
      {developerSkills.map((skill, i) => (
        <DeveloperSkillContainer
          developerSkill={skill}
          skillIndex={i}
          key={i}
          isLast={developerSkills.length === i + 1}
        />
      ))}
    </BackgroundContainer>
  );
};
