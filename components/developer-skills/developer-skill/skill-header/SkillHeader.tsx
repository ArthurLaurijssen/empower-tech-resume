import React from "react";
import { NumberDisplayUtils } from "@/lib/utils/NumberDisplayUtils";
import { SkillHeaderProps } from "@/components/developer-skills/developer-skill/skill-header/types";
import { StarRating } from "@/components/shared/star-rating/StarRating";

/**
 * SkillHeader component displays the header section of a developer skill item
 * including the number index, technology name, and proficiency level rating.
 */
export const SkillHeader: React.FC<SkillHeaderProps> = ({
  skillIndex, // Position of this skill in the parent's array (for numbering)
  skill, // The skill data object containing name and proficiency level
}) => {
  return (
    <div className="flex gap-4">
      {/* Formatted index number (e.g., converts 0 to "01") */}
      <span className="text-text-gray text-4xl md:text-6xl font-medium">
        {NumberDisplayUtils.formatIndexToDisplayNumber(skillIndex)}
      </span>

      {/* Technology name */}
      <h2 className="text-white text-4xl md:text-6xl font-medium">
        {skill.technologyName}
      </h2>

      {/* Proficiency level displayed as star rating */}
      <div className="text-black font-semibold text-3xl md:text-4xl px-2 py-1 rounded-3xl my-auto bg-yellow-500">
        <StarRating rating={skill.proficiencyLevel}></StarRating>
      </div>
    </div>
  );
};
