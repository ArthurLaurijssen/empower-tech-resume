import React from "react";
import { Button } from "@/components/shared/button/Button";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowUpIcon } from "@/components/shared/icons/arrow-up-icon/ArrowUpIcon";
import { HeaderDiscussButtonProps } from "./types";

/**
 * A specialized button for header project discussion CTAs
 * Uses primary styling (black background, white text) with an arrow icon
 * Wraps the base Button component with specific styling and content
 *
 */
export const HeaderDiscussButton: React.FC<HeaderDiscussButtonProps> = ({
  className, // Optional CSS class for extending styles
  onClick, // Click handler function
  text = "Discuss your project", // Button text with default value
  ...props // Additional HTML button attributes
}) => {
  return (
    <Button
      intent="primary" // Uses the primary color scheme
      size="xl" // Extra large size variant
      className={className}
      onClick={onClick}
      {...props}
    >
      {/* Content container with flex layout */}
      <div className="flex items-center justify-center gap-6">
        {/* Button text with no-wrap to prevent breaking */}
        <span className="whitespace-nowrap text-3xl font-bold inline-block">
          {text}
        </span>

        {/* Circular container with arrow icon */}
        <CircleEffect intent="primary" size="md">
          <ArrowUpIcon />
        </CircleEffect>
      </div>
    </Button>
  );
};
