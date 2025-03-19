"use client";
import React, { useRef, useEffect, useState } from "react";
import { DeveloperSkillContainerProps } from "@/components/developer-skills/developer-skill/types";
import { SkillHeader } from "@/components/developer-skills/developer-skill/skill-header/SkillHeader";
import { ProjectsToggleButton } from "@/components/developer-skills/developer-skill/projects-toggle-button/ProjectsToggleButton";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    // Get and set the content height when expanded
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, developerSkill.projects]);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div
      {...props}
      className={`py-6 ${className} ${!isLast ? "border-b border-b-text-gray/40" : ""}`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpand}
      >
        <SkillHeader skillIndex={skillIndex} skill={developerSkill} />
        <ProjectsToggleButton isExpanded={isExpanded} />
      </div>

      {/* Projects content with smooth height transition */}
      <div
        className="transition-all duration-1000 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <div
          ref={contentRef}
          className={`pt-4 ${isExpanded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
        >
          {developerSkill.projects.length > 0 ? (
            <ProjectsContainer
              projects={developerSkill.projects}
            ></ProjectsContainer>
          ) : (
            <p className="text-text-gray">No projects yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
