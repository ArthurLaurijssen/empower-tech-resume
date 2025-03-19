"use client";
import React, { useRef, useEffect, useState } from "react";
import { DeveloperSkillContainerProps } from "@/components/developer-skills/developer-skill/types";
import { SkillHeader } from "@/components/developer-skills/developer-skill/skill-header/SkillHeader";
import { ProjectsToggleButton } from "@/components/developer-skills/developer-skill/projects-toggle-button/ProjectsToggleButton";
import { ProjectsContainer } from "@/components/developer-skills/projects/ProjectsContainer";

/**
 * DeveloperSkillContainer component displays a single developer skill with its projects
 * in an expandable/collapsible section. It includes a header with skill information
 * and a toggle button to show/hide the projects.
 *
 * This component uses the "use client" directive for client-side interactivity.
 */
export const DeveloperSkillContainer: React.FC<
  DeveloperSkillContainerProps
> = ({
  developerSkill, // The skill data object containing name, level, and projects
  skillIndex, // Position of this skill in the parent's array (for numbering)
  isLast, // Whether this is the last skill item (to control bottom border)
  className = "", // Optional additional CSS classes
  ...props // All other HTML div element props except children and onClick
}: DeveloperSkillContainerProps) => {
  // State to track if the projects section is expanded or collapsed
  // The first skill (index 0) is expanded by default
  const [isExpanded, setIsExpanded] = React.useState<boolean>(skillIndex == 0);

  // Ref to measure the height of the content for smooth animations
  const contentRef = useRef<HTMLDivElement>(null);

  // State to store the current height of the content
  const [contentHeight, setContentHeight] = useState<number>(0);

  /**
   * Effect to update content height when expanded state changes
   * or when projects array changes
   */
  useEffect(() => {
    // Get and set the content height when expanded
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, developerSkill.projects]);

  /**
   * Toggle the expanded state of the projects section
   */
  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div
      {...props}
      className={`py-6 ${className} ${!isLast ? "border-b border-b-text-gray/40" : ""}`}
    >
      {/* Header section with click handler for expanding/collapsing */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpand}
      >
        <SkillHeader skillIndex={skillIndex} skill={developerSkill} />
        <ProjectsToggleButton isExpanded={isExpanded} />
      </div>

      {/* Projects content with smooth height transition */}
      <div
        className="overflow-hidden transition-all duration-1000 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <div ref={contentRef} className="pt-4">
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
