import React from "react";

/**
 * Form textarea props extending HTML textarea attributes
 */
export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Error message to display
   */
  error?: string;
}
