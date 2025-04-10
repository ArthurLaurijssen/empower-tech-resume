import React from "react";

/**
 * Form textarea props extending HTML textarea attributes
 */
export interface FormTextareaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  /**
   * Error message to display
   */
  error?: string;
}
