import { GreetingContainerProps } from "@/components/greeting-container/types";
import React from "react";
import { HandIcon } from "@/components/icons/hand-icon/HandIcon";

export const GreetingContainer: React.FC<GreetingContainerProps> = ({
  greeting,
  className,
  ...props
}: GreetingContainerProps) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur px-4 py-2 rounded-full ${className || ""}`}
      {...props}
    >
      {/* Greeting Title */}
      <div className="flex items-center gap-2">
        <HandIcon className="wave" />
        <h1>{greeting.title}</h1>
      </div>
      {/* Greeting Message starting on md screen */}
      <p className="hidden md:block">{greeting.message}</p>
    </div>
  );
};
