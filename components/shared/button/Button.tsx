import React from "react";
import { ButtonProps, ButtonIntent, ButtonSize } from "./types";

/**
 * Generate button styles based on specified intent and size
 * @param intent - Visual style of the button
 * @param size - Size variant of the button
 * @param isActive - Whether the button is in active state (for filter buttons)
 * @returns Tailwind CSS classes for the button
 */
const getButtonStyles = (
  intent: ButtonIntent,
  size: ButtonSize,
  isActive?: boolean,
): string => {
  // Base styles applied to all buttons
  const baseStyles = "transition-all duration-200 font-medium";

  // Size-specific styles
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
    xxl: "px-4 py-6 text-xl",
  };

  // Intent-specific styles
  const intentStyles = {
    primary: "bg-black text-white rounded-full hover:shadow-lg",
    secondary:
      "border border-gray-300 text-gray-800 hover:bg-white hover:shadow-sm rounded-3xl",
    filter: isActive
      ? "bg-yellow-500 rounded-3xl"
      : "border border-gray-300 rounded-3xl",
    orange: "bg-yellow-500 rounded-full text-black",
  };

  // Combine all styles
  return `${baseStyles} ${sizeStyles[size]} ${intentStyles[intent]}`;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  intent = "primary",
  size = "md",
  isActive,
  className,
  ...props
}) => {
  return (
    <button
      className={`${getButtonStyles(intent, size, isActive)} ${className || ""}`}
      aria-pressed={isActive}
      {...props}
    >
      {children}
    </button>
  );
};
