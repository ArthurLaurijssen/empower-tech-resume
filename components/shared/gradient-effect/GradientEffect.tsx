import {
  GradientEffectProps,
  GradientIntent,
} from "@/components/shared/gradient-effect/types";
import React from "react";

export const GradientEffect: React.FC<GradientEffectProps> = ({
  intent,
  className,
  children,
}: GradientEffectProps) => {
  return (
    <div className={`${getSpotlightStyles(intent)} ${className || ""}`}>
      {children}
    </div>
  );
};

const getSpotlightStyles = (intent: GradientIntent): string => {
  // Base styles that will be shared across all spotlight effects
  const baseStyles = "z-30";

  // Specific styles for different spotlight intents
  const styles = {
    yellow: `bg-gradient-to-t from-yellow-500 to-transparent
    `,
  };

  // Combine base and intent-specific styles
  return `${baseStyles} ${styles[intent]}`;
};
