import { GreetingContainerProps } from "@/components/greeting-container/types";
import React from "react";

export const GreetingContainer: React.FC<GreetingContainerProps> = ({
  greeting,
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 ${className || ""}`}
      {...props}
    >
      <span>👋</span>
      <p>{greeting.message}</p>
    </div>
  );
};
