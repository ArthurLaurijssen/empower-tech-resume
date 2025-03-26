import React from "react";
import { FormLabelProps } from "./types";

/**
 * FormLabel Component
 *
 * A consistent label component for form fields with optional required indicator.
 *
 */
export const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  children,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-white mb-2 font-medium ${className}`.trim()}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1 text-red-500" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
};
