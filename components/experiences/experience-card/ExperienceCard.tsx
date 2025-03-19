import React from "react";
import { ExperienceCardProps } from "@/components/experiences/experience-card/types";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";

/**
 * ExperienceCard component displays details of a single experience entry
 * including timeframe, location, title, and description
 */
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience, // The experience data object to display
  className = "", // Optional CSS class for additional styling
  ...props // All other HTML div element props
}: ExperienceCardProps) => {
  /**
   * Format start date to show only the year
   */
  const experienceStartYear: string = new Date(experience.startDate)
    .getFullYear()
    .toString();

  /**
   * Format end date to show only the year, or "present" if no end date is provided
   * indicating a current/ongoing experience
   */
  const experienceEndYear: string = experience.endDate
    ? new Date(experience.endDate).getFullYear().toString()
    : "present";

  return (
    <BackgroundContainer
      as="div"
      intent="white" // Applies white background styling
      className={`${className} p-8`}
      {...props}
    >
      {/* Timeframe and location section */}
      <div className="flex gap-3 items-center">
        <span className="text-text-gray text-2xl font-medium">
          {experienceStartYear} - {experienceEndYear}
        </span>
        {/* Decorative dot separator */}
        <div className="rounded-full bg-dot-gray h-3 w-3"></div>
        <span className="text-text-gray text-2xl font-medium">
          {experience.locationName}
        </span>
      </div>

      {/* Experience title */}
      <h3 className="text-black font-semibold text-3xl mt-4">
        {experience.title}
      </h3>

      {/* Experience description */}
      <p className="text-text-gray font-normal text-xl font-inter mt-4">
        {experience.description}
      </p>
    </BackgroundContainer>
  );
};
