"use client";
import React from "react";
import { DeveloperSkillContainerProps } from "@/components/developer-skills/developer-skill/types";
import { SkillHeader } from "@/components/developer-skills/developer-skill/skill-header/SkillHeader";
import { ProjectsToggleButton } from "@/components/developer-skills/developer-skill/projects-button/ProjectsToggleButton";
import { ProjectsContainer } from "@/components/developer-skills/projects/ProjectsContainer";

export const DeveloperSkillContainer: React.FC<
  DeveloperSkillContainerProps
> = ({
  developerSkill,
  skillIndex,
  isLast,
  className = "",
  ...props
}: DeveloperSkillContainerProps) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(skillIndex == 0);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div
      {...props}
      className={`py-6 ${className} ${!isLast ? "border-b border-b-text-gray/40" : ""}`}
    >
      <div className="flex justify-between items-center">
        <SkillHeader skillIndex={skillIndex} skill={developerSkill} />
        <ProjectsToggleButton isExpanded={isExpanded} onClick={toggleExpand} />
      </div>

      {/* Projects content could go here when expanded */}
      {isExpanded && (
        <div>
          {developerSkill.projects.length > 0 ? (
            <ProjectsContainer
              projects={developerSkill.projects}
            ></ProjectsContainer>
          ) : (
            <p className="text-text-gray pt-4">No projects yet.</p>
          )}
        </div>
      )}
    </div>
  );
};
