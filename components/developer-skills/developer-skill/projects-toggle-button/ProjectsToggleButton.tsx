import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { CloseIcon } from "@/components/shared/icons/close-icon/CloseIcon";
import { PlusIcon } from "@/components/shared/icons/plus-icon/PlusIcon";
import { ProjectsToggleButtonProps } from "@/components/developer-skills/developer-skill/projects-toggle-button/types";
import React from "react";

export const ProjectsToggleButton: React.FC<ProjectsToggleButtonProps> = ({
  isExpanded,
}) => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <span className="hidden lg:block text-text-gray text-3xl font-normal">
        {isExpanded ? "LESS PROJECTS" : "SEE PROJECTS"}
      </span>
      <CircleEffect intent={isExpanded ? "primary" : "secondary"} size="md">
        {isExpanded ? <CloseIcon /> : <PlusIcon className="text-white" />}
      </CircleEffect>
    </div>
  );
};
