import { GreetingContainerProps } from "@/components/header/greeting-container/types";
import React from "react";
import { HandIcon } from "@/components/shared/icons/hand-icon/HandIcon";

/**
 * A component that displays a greeting with a waving hand icon.
 * Responsive design: shows full greeting on medium screens, only title on mobile.
 *
 */
export const GreetingContainer: React.FC<GreetingContainerProps> = ({
  greeting, // Object containing title and message for the greeting
  className, // Optional CSS class to extend styling
  ...props // Any additional HTML div attributes
}: GreetingContainerProps) => {
  return (
    <div
      // Container with different background styling based on screen size
      // Uses backdrop blur on mobile, semi-transparent white on desktop
      className={`bg-darker-gray backdrop-blur-xl md:bg-white/50 px-4 py-2 rounded-2xl w-fit md:max-w-md ${className || ""}`}
      {...props}
    >
      {/* Greeting Title with animated waving hand icon */}
      <div className="flex items-center gap-2">
        <HandIcon className="wave" />
        <h1 className="font-bold">{greeting.title}</h1>
      </div>

      {/* Greeting Message - only visible on medium screens and above */}
      {/* Uses break-words to handle potential text overflow */}
      <p className="hidden md:block break-words">{greeting.message}</p>
    </div>
  );
};
