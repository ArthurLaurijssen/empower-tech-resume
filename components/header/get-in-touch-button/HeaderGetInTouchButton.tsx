"use client";

import React from "react";
import { Button } from "@/components/shared/button/Button";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowUpIcon } from "@/components/shared/icons/arrow-up-icon/ArrowUpIcon";
import { HeaderGetInTouchButtonProps } from "./types";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll/UseSmoothScroll";

/**
 * A specialized button for header "Get in Touch" CTAs
 * Uses primary styling (black background, white text) with an arrow icon
 * Wraps the base Button component with specific styling and content
 */
export const HeaderGetInTouchButton: React.FC<HeaderGetInTouchButtonProps> = ({
  className, // Optional CSS class for extending styles
  onClick, // Click handler function
  text = "Get in touch", // Button text with default value
  targetId = "footer", // Default target is footer
  scrollOffset = 20, // Default scroll offset
  ...props // Additional HTML button attributes
}) => {
  const { scrollToElement } = useSmoothScroll({ offset: scrollOffset });

  // Handle button click with smooth scrolling
  const handleClick = () => {
    // Call the provided onClick if it exists
    if (onClick) {
      onClick();
    }

    // Scroll to the target element
    scrollToElement(targetId);
  };

  return (
    <Button
      intent="primary" // Uses the primary color scheme
      size="custom" // Extra large size variant
      customSize="px-4 py-2 md:px-8 md:py-4"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {/* Content container with flex layout */}
      <div className="flex items-center justify-center gap-6">
        {/* Button text with no-wrap to prevent breaking */}
        <span className="whitespace-nowrap text-2xl md:text-5xl font-bold inline-block">
          {text}
        </span>

        {/* Circular container with arrow icon */}
        <CircleEffect
          intent="primary"
          size="custom"
          customSize="w-8 h-8 md:w-12 md:h-12"
        >
          <ArrowUpIcon className="w-4 h-4 md:w-8 md:h-8" />
        </CircleEffect>
      </div>
    </Button>
  );
};
