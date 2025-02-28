import React from "react";
import { Button } from "@/components/shared/button/Button";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowUpIcon } from "@/components/shared/icons/arrow-up-icon/ArrowUpIcon";
import { DiscussButtonProps } from "./types";

/**
 * A specialized button for project discussion CTAs
 * Displays "Discuss your project" text with an arrow icon in a circle
 */
export const DiscussButton: React.FC<DiscussButtonProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <Button
      intent="primary"
      size="xl"
      className={className}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-center gap-6">
        <span className="whitespace-nowrap text-3xl font-bold inline-block">
          Discuss your project
        </span>
        <CircleEffect intent="primary" size="md">
          <ArrowUpIcon />
        </CircleEffect>
      </div>
    </Button>
  );
};
