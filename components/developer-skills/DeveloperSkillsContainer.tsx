import React from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { DeveloperSkillsContainerProps } from "@/components/developer-skills/types";
import { PlusDrawingIcon } from "@/components/shared/icons/plus-drawing-icon/PlusDrawingIcon";
import { DeveloperSkillContainer } from "@/components/developer-skills/developer-skill/DeveloperSkillContainer";

export const DeveloperSkillsContainer: React.FC<
  DeveloperSkillsContainerProps
> = ({ developerSkills }: DeveloperSkillsContainerProps) => {
  return (
    <BackgroundContainer
      as="section"
      intent="secondary_black"
      className="relative p-10"
    >
      {/*Header */}
      <h1 className="text-white text-5xl md:text-6xl font-semibold">
        Languages & experiences
      </h1>
      <PlusDrawingIcon className="text-white absolute right-16 top-6"></PlusDrawingIcon>

      {/*Projects and skills*/}
      {developerSkills.map((skill, i) => (
        <DeveloperSkillContainer
          developerSkill={skill}
          skillIndex={i}
          key={i}
          isLast={developerSkills.length == i + 1}
        ></DeveloperSkillContainer>
      ))}
    </BackgroundContainer>
  );
};
