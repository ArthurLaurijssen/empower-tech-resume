import React from "react";

/**
 * Form label props extending HTML label attributes
 */
export interface FormLabelProps
  extends React.ComponentPropsWithoutRef<"label"> {
  /**
   * Whether the associated field is required
   */
  required?: boolean;
}
