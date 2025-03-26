import React, { forwardRef } from "react";
import { FormInputProps } from "./types";

/**
 * FormInput Component
 *
 * A reusable input component for forms with consistent styling and error handling.
 * Uses forwardRef to allow parent components to access the input element directly.
 */
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { id, type = "text", className = "", defaultValue, error, ...props },
    ref,
  ) => {
    // Format default value based on input type
    // Handles conversion of Date objects to ISO strings for date inputs
    const formattedValue = (() => {
      if (!defaultValue) return "";
      return String(defaultValue);
    })();

    return (
      <input
        ref={ref}
        id={id}
        type={type}
        defaultValue={formattedValue}
        // Apply conditional styling based on error state
        className={`block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white ring-1 ring-inset ring-gray-700 placeholder:text-text-mission-gray focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm/6 focus:outline-none ${
          error ? "ring-red-500" : ""
        } ${className}`}
        aria-invalid={error ? "true" : "false"} // Accessibility: Indicates if input has an error
        {...props}
      />
    );
  },
);
FormInput.displayName = "FormInput";
