import React from "react";

/**
 * Props for the ContactForm component
 * Extends HTML form element attributes for proper typing
 */
export interface ContactFormProps
  extends React.ComponentPropsWithoutRef<"form"> {
  /**
   * Optional callback function to execute after successful form submission
   */
  onSubmitSuccess?: () => void;
}
