import React from "react";

/**
 * Form label props extending HTML label attributes
 */
export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Whether the associated field is required
   */
  required?: boolean;
}
