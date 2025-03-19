import { DeveloperSkill } from "@/models/entities/DeveloperSkill";

/**
 * Props interface for the SkillHeader component
 */
export interface SkillHeaderProps {
  /**
   * Zero-based index position of this skill in the parent component's skills array
   * Used for displaying a formatted number (e.g., "01", "02")
   */
  skillIndex: number;

  /**
   * Developer skill data object containing the technology name and proficiency level
   * to be displayed in the header
   */
  skill: DeveloperSkill;
}
