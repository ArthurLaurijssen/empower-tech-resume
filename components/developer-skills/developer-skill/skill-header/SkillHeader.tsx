import React from "react";
import { NumberDisplayUtils } from "@/lib/utils/NumberDisplayUtils";
import { SkillHeaderProps } from "@/components/developer-skills/developer-skill/skill-header/types";

export const SkillHeader: React.FC<SkillHeaderProps> = ({
  skillIndex,
  skill,
}) => {
  return (
    <div className="flex gap-4">
      <span className="text-text-gray text-4xl md:text-6xl font-medium">
        {NumberDisplayUtils.formatIndexToDisplayNumber(skillIndex)}
      </span>
      <h2 className="text-white text-4xl md:text-6xl font-medium">
        {skill.technologyName}
      </h2>
      <div className="text-black font-semibold text-3xl md:text-4xl px-2 py-1 rounded-3xl my-auto bg-yellow-500">
        {skill.proficiencyLevel} %
      </div>
    </div>
  );
};
