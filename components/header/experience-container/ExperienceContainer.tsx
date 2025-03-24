import React from "react";
import { DateDisplayUtils } from "@/lib/utils/DateDisplayUtils";
import { ExperienceContainerProps } from "@/components/header/experience-container/types";

/**
 * A component that displays years of experience with a title.
 * Calculates and visually highlights the duration of experience.
 * Responsive design optimized for mobile and larger screens.
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
      // Reduced padding on mobile, increased on larger screens
      className={`bg-white/50 backdrop-blur-xl w-fit py-1.5 px-3 sm:py-2 sm:px-4 rounded-3xl ${className || ""}`}
      {...props}
    >
      <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
        {/* Responsive year number - smaller on mobile, larger on desktop */}
        <span className="font-semibold text-3xl sm:text-4xl md:text-5xl text-yellow-500">
          {experienceInYears}
        </span>

        <div className="flex flex-col">
          {/* "Years" label with responsive text size */}
          <span className="text-sm sm:text-base md:text-xl font-normal text-text-gray">
            Years
          </span>

          {/* Title with responsive text size and ensuring no line breaks */}
          <span className="text-black font-semibold text-base sm:text-lg md:text-2xl whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};
