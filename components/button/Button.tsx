/**
 * GreetingContainer Component
 *
 * Provides a flexible, customizable button with various intent styles
 * Supports different visual variants while maintaining consistent base styling
 */
import React from "react";
import { ButtonProps, ButtonIntent } from "./types";

/**
 * Generate button styles based on specified intent
 * @param intent - Visual style of the button
 * @returns Tailwind CSS classes for the button
 */
const getButtonStyles = (intent: ButtonIntent): string => {
  // Base styles applied to all buttons
  const baseStyles = "rounded-3xl px-4 py-2";

  // Specific styles for different button intents
  const styles = {
    white: "border border-gray-300 hover:bg-white",
  };

  // Combine base and intent-specific styles
  return `${baseStyles} ${styles[intent]}`;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  intent,
  customClassNames,
  ...props
}) => {
  return (
    // Render button with dynamically generated styles
    <button
      className={`${getButtonStyles(intent)} ${customClassNames}`}
      {...props}
    >
      {children}
    </button>
  );
};
