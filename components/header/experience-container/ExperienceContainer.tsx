import React from "react";
import { DateDisplayUtils } from "@/lib/utils/DateDisplayUtils";
import { ExperienceContainerProps } from "@/components/header/experience-container/types";

/**
 * A component that displays years of experience with a title.
 * Calculates and visually highlights the duration of experience.
 *
 */
export const ExperienceContainer: React.FC<ExperienceContainerProps> = ({
  startDate, // String representing when the experience began
  title, // Description of the experience type
  className, // Optional CSS class for custom styling
  ...props // Additional HTML div attributes
}: ExperienceContainerProps) => {
  // Calculate years of experience from the start date
  const experienceInYears = DateDisplayUtils.getFormattedYears(startDate);

  return (
    <div
      // Semi-transparent container with blur effect and rounded corners
      className={`bg-white/50 backdrop-blur-xl w-fit py-2 px-4 rounded-3xl ${className || ""}`}
      {...props}
    >
      <div className="flex gap-4 items-center">
        {/* Large yellow number displaying years of experience */}
        <span className="font-semibold text-5xl text-yellow-500">
          {experienceInYears}
        </span>

        <div>
          {/* "Years" label above the experience title */}
          <span className="text-xl font-normal text-text-gray">Years</span>

          {/* Title of the experience category */}
          <h3 className="text-black font-semibold text-lg sm:text:xl md:text-2xl whitespace-nowrap">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
