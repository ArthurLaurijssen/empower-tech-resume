import React from "react";
import {
  BackgroundContainerProps,
  BackgroundIntent,
  SemanticElement,
} from "@/components/shared/background-container/types";

/**
 * BackgroundContainer is a versatile component that provides different background styles
 * with the ability to render as various semantic HTML elements.
 *
 * It serves as a consistent container for different sections of the application
 * with predefined background styles based on the intent.
 */
export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children, // Content to be displayed inside the container
  intent, // Visual style to apply (primary_gray, secondary_black, etc.)
  as = "div", // HTML element to render as (div, section, article, etc.)
  className = "", // Additional CSS classes
  ...props // All other HTML attributes
}) => {
  // Create the dynamic semantic element (div, section, article, etc.)
  const Element: SemanticElement = as;

  return (
    <Element
      className={`${getBackgroundStyles(intent)} ${className || ""}`}
      {...props}
    >
      {children}
    </Element>
  );
};

/**
 * Helper function to get the appropriate background styles based on intent
 *
 * @param intent - The visual style to apply
 * @returns String of CSS classes to apply
 */
const getBackgroundStyles = (intent: BackgroundIntent): string => {
  // Common styles applied to all background containers
  const baseStyles = "mt-8 rounded-3xl";

  // Intent-specific styles mapping
  const styles = {
    primary_gray: "bg-primary-gradient",
    secondary_black: "bg-black",
    mission_gray: "bg-mission-background",
    white: "bg-white",
  };

  return `${baseStyles} ${styles[intent]}`;
};
