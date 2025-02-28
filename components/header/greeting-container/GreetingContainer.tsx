import { GreetingContainerProps } from "@/components/header/greeting-container/types";
import React from "react";
import { HandIcon } from "@/components/shared/icons/hand-icon/HandIcon";

export const GreetingContainer: React.FC<GreetingContainerProps> = ({
  greeting,
  className,
  ...props
}: GreetingContainerProps) => {
  return (
    <div
      className={`bg-darker-gray backdrop-blur-xl md:bg-white/50 px-4 py-2 rounded-2xl w-fit md:max-w-md ${className || ""}`}
      {...props}
    >
      {/* Greeting Title */}
      <div className="flex items-center gap-2">
        <HandIcon className="wave" />
        <h1 className="font-bold">{greeting.title}</h1>
      </div>

      {/* Greeting Message - constrained to title width */}
      <p className="hidden md:block break-words">{greeting.message}</p>
    </div>
  );
};
