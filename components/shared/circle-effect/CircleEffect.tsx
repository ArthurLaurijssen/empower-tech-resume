import React from "react";
import {
  CircleEffectProps,
  CircleEffectIntent,
  CircleEffectSize,
} from "./types";

/**
 * Base styles applied to all circle effects
 * Creates a perfect circle with centered content
 */
const baseStyles =
  "aspect-square rounded-[50%] flex items-center justify-center";

/**
 * Retrieves the appropriate styles based on the intent
 *
 * @param intent - The visual style to apply to the circle
 * @returns String of Tailwind CSS classes for the intent
 */
const getIntentStyles = (intent: CircleEffectIntent): string => {
  const styles = {
    primary: "bg-yellow-500 text-black", // Yellow background with black text
    secondary: "bg-background-gray", // Gray background with default text color
    secondary_white: "bg-background-gray text-white", // Gray background with white text
    black: "bg-black text-white", // Black background with white text
  };

  return styles[intent];
};

/**
 * Retrieves the appropriate size styles based on the size prop
 *
 * @param size - The size variant for the circle
 * @returns String of Tailwind CSS classes for the size
 */
const getSizeStyles = (size: CircleEffectSize): string => {
  const styles = {
    sm: "w-8 h-8", // Small fixed size (32px)
    md: "w-10 h-10", // Medium fixed size (40px)
    lg: "w-12 h-12", // Large fixed size (48px)
    auto: "p-2", // Flexible size with padding
    custom: "", // Empty string, will use customSize instead
  };

  return styles[size];
};

/**
 * CircleEffect component creates a circular container with different
 * colors, sizes, and content.
 *
 * It's typically used for circular icons, buttons, or decorative elements
 * with consistent styling across the application.
 */
export const CircleEffect: React.FC<CircleEffectProps> = ({
  children, // Content to display inside the circle
  intent, // Visual style to apply (primary, secondary, etc.)
  size = "auto", // Size variant (sm, md, lg, auto, custom)
  customSize = "", // Custom size Tailwind classes for responsive sizing
  className, // Additional CSS classes
  ...props // All other HTML div attributes
}) => {
  // Get the appropriate styles based on props
  const intentStyle = getIntentStyles(intent);

  // Determine which size style to use
  const sizeStyle = size === "custom" ? customSize : getSizeStyles(size);

  return (
    <div
      className={`${baseStyles} ${intentStyle} ${sizeStyle} ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
