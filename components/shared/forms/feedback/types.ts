import React from "react";
import { ZodIssue } from "zod";

/**
 * Props for the FormFeedback component
 * Extends HTMLDivElement attributes for proper typing of div props
 */
export interface FormFeedbackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Success message to display
   */
  successMessage?: string;

  /**
   * Array of Zod validation issues to display
   */
  errors?: ZodIssue[];

  /**
   * General error message (e.g., server/API errors)
   */
  errorMessage?: string;
}
