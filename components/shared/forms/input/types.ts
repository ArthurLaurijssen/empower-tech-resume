import React from "react";

/**
 * Form input props extending HTML input attributes
 */
export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error message to display
   */
  error?: string;
}
