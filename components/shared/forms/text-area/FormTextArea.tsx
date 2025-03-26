import React, { forwardRef } from "react";
import { FormTextareaProps } from "./types";

/**
 * FormTextarea Component
 *
 * A reusable textarea component for forms with consistent styling and error handling.
 * Uses forwardRef to allow parent components to access the textarea element directly.
 */
export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ id, rows = 4, className = "", defaultValue, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        defaultValue={defaultValue || ""}
        // Apply conditional styling based on error state
        className={`block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white ring-1 ring-inset ring-gray-700 placeholder:text-text-mission-gray focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm/6 focus:outline-none ${
          error ? "ring-red-500" : ""
        } ${className}`}
        aria-invalid={error ? "true" : "false"} // Accessibility: Indicates if textarea has an error
        {...props}
      />
    );
  },
);

FormTextarea.displayName = "FormTextarea";
