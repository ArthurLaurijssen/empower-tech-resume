import React from "react";
import { SectionIntent, SectionProps } from "@/components/section/types";

export const Section: React.FC<SectionProps> = ({
  children,
  intent,
}: SectionProps) => {
  return (
    <div className={getSectionStyles(intent)}>
      <div className="rounded-3xl"></div>
      {children}
    </div>
  );
};

const getSectionStyles = (intent: SectionIntent): string => {
  // Base styles applied to all buttons
  const baseStyles = "mt-8 p-6 rounded-3xl";

  // Specific styles for different button intents
  const styles = {
    gray: "bg-gradient-to-b from-primary-start to-primary-end",
    black: "",
    light_green: "bg-gradient-gray-green",
    light_gray: "bg-gradient-gray",
  };

  // Combine base and intent-specific styles
  return `${baseStyles} ${styles[intent]}`;
};
