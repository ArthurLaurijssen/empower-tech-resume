import React from "react";
import { FormFeedbackProps } from "@/components/shared/forms/feedback/types";
import { XIcon } from "@/components/shared/icons/x-icon/XIcon";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { CheckIcon } from "@/components/shared/icons/check-icon/CheckIcon";

/**
 * FormFeedback Component
 *
 * A unified component to display both success and error feedback for forms.
 * Handles both validation errors and server/submission errors.
 *
 */
export const FormFeedback: React.FC<FormFeedbackProps> = ({
  successMessage,
  errors = [],
  errorMessage,
  className = "",
  ...props
}) => {
  // If there's no feedback to display, return null to avoid rendering empty elements
  if (!successMessage && errors.length === 0 && !errorMessage) {
    return null;
  }

  // Render success feedback when there's a success message
  if (successMessage) {
    return (
      <div
        className={`rounded-md bg-green-50 p-4 mb-6 ${className}`}
        role="alert" // Accessibility: Identifies the element as an alert
        aria-live="polite" // Screen readers will announce this content when it changes
        {...props}
      >
        <div className="flex">
          <div className="shrink-0">
            <CircleEffect intent="green" size="custom">
              <CheckIcon className="h-5 w-5 text-white"></CheckIcon>
            </CircleEffect>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              {successMessage}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render error feedback for validation errors or general error messages
  return (
    <div
      className={`rounded-md bg-red-50 p-4 mb-6 ${className}`}
      role="alert" // Accessibility: Identifies the element as an alert
      aria-live="assertive" // Screen readers will interrupt and announce this content immediately
      {...props}
    >
      <div className="flex">
        <div className="shrink-0">
          <CircleEffect intent="red" size="custom">
            <XIcon className="h-5 w-5 text-white"></XIcon>
          </CircleEffect>
        </div>
        <div className="ml-3">
          {/* Display general error message if provided */}
          {errorMessage && (
            <h3 className="text-sm font-medium text-red-800">{errorMessage}</h3>
          )}

          {/* Display validation errors if there are any */}
          {errors.length > 0 && (
            <>
              <h3 className="text-sm font-medium text-red-800">
                There {errors.length === 1 ? "was" : "were"} {errors.length}{" "}
                error
                {errors.length === 1 ? "" : "s"} with your submission
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul role="list" className="list-disc space-y-1 pl-5">
                  {errors.map((error, index) => (
                    <li key={`${error.path.join("-")}-${index}`}>
                      {error.message}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
