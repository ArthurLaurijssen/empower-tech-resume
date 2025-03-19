import {
  GradientEffectProps,
  GradientIntent,
} from "@/components/shared/gradient-effect/types";
import React from "react";

/**
 * GradientEffect component applies a gradient background effect to its children
 *
 * This component is used to create visually appealing gradient backgrounds
 * with different color variations based on the selected intent.
 */
export const GradientEffect: React.FC<GradientEffectProps> = ({
  intent, // Visual style of the gradient to apply
  className, // Additional CSS classes
  children, // Content to display with the gradient effect
}: GradientEffectProps) => {
  return (
    <div className={`${getSpotlightStyles(intent)} ${className || ""}`}>
      {children}
    </div>
  );
};

/**
 * Helper function to generate the appropriate CSS classes for the gradient effect
 *
 * @param intent - The visual style of gradient to apply
 * @returns String of CSS classes to be applied to the container
 */
const getSpotlightStyles = (intent: GradientIntent): string => {
  // Base styles that will be shared across all spotlight effects
  const baseStyles = "z-30";

  // Specific styles for different spotlight intents
  const styles = {
    // Yellow gradient fading from bottom to top
    yellow: `bg-gradient-to-t from-yellow-500 to-transparent
    `,
  };

  // Combine base and intent-specific styles
  return `${baseStyles} ${styles[intent]}`;
};
