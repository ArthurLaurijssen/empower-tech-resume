/**
 * Represents the response from the submitContactFormAction.
 */
export type ContactFormResponse = {
  /** Indicates whether the submission was successful. */
  success: boolean;

  /** A message describing the result of the operation. */
  message: string;
};
