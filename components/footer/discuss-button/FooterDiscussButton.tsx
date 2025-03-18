import React from "react";
import { Button } from "@/components/shared/button/Button";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowUpIcon } from "@/components/shared/icons/arrow-up-icon/ArrowUpIcon";
import { HeaderDiscussButtonProps } from "./types";

/**
 * A specialized button for project discussion CTAs
 * Displays customizable text with an arrow icon in a circle
 * Supports different visual styles through its own intent system
 */

/**
 * A specialized button for header project discussion CTAs
 * Uses primary styling (black background, white text)
 */
export const FooterDiscussButton: React.FC<HeaderDiscussButtonProps> = ({
  className,
  onClick,
  text = "Discuss your project",
  ...props
}) => {
  return (
    <Button
      intent="orange"
      size="xxl"
      className={className}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-center gap-6">
        <span className="whitespace-nowrap text-4xl font-bold inline-block">
          {text}
        </span>
        <CircleEffect intent="black" size="md">
          <ArrowUpIcon />
        </CircleEffect>
      </div>
    </Button>
  );
};
