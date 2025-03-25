import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { CloseIcon } from "@/components/shared/icons/close-icon/CloseIcon";
import { PlusIcon } from "@/components/shared/icons/plus-icon/PlusIcon";
import { ProjectsToggleButtonProps } from "@/components/developer-skills/developer-skill/projects-toggle-button/types";
import React from "react";

/**
 * ProjectsToggleButton component displays a button that toggles the visibility
 * of projects within a DeveloperSkillContainer.
 *
 * It shows either a "+" icon to expand or an "x" icon to collapse,
 * along with appropriate text that is visible on larger screens.
 */
export const ProjectsToggleButton: React.FC<ProjectsToggleButtonProps> = ({
  isExpanded, // Whether the associated projects section is currently expanded
}) => {
  return (
    <div className="flex gap-4 items-center justify-between">
      {/* Text label shown only on larger screens */}
      <span className="hidden lg:block text-text-gray text-3xl font-normal">
        {isExpanded ? "LESS PROJECTS" : "SEE PROJECTS"}
      </span>

      {/* Circular button with appropriate icon based on expanded state */}
      <CircleEffect
        intent={isExpanded ? "primary" : "secondary"}
        size="custom"
        customSize="w-8 h-8 sm:w-12 sm:h-12"
      >
        {isExpanded ? (
          <CloseIcon className="w-4 h-4 sm:w-8 sm:h-8" />
        ) : (
          <PlusIcon className="text-white w-4 h-4 sm:w-8 sm:h-8" />
        )}
      </CircleEffect>
    </div>
  );
};
