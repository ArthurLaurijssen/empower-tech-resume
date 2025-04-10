import React from "react";

/**
 * Form input props extending HTML input attributes
 */
export interface FormInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  /**
   * Error message to display
   */
  error?: string;
}
