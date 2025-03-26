import { ZodSchema } from "zod";

/**
 * Configuration interface for the useFormSubmission hook
 * Defines the complete setup for handling form submissions including validation,
 * data transformation, submission handling, and success/error messaging
 *
 * @template T - The type of data being submitted
 */
export interface UseFormSubmissionConfig<T> {
  /** Zod schema for validating form data */
  schema: ZodSchema;

  /**
   * Function to transform raw FormData into the expected data type
   * @param formData - Raw form data from the form submission event
   * @returns Transformed data of type T
   */
  transformData: (formData: FormData) => T;

  /**
   * Function that handles the actual form submission
   * @param data - Transformed and validated form data
   * @returns Promise resolving to a success status and optional message
   */
  onSubmit: (data: T) => Promise<{ success: boolean; message?: string }>;

  /** Optional callback function to execute after successful submission */
  onSuccess?: () => void;

  /** Custom success message to display after successful submission */
  successMessage?: string;

  /** Custom error message to display if submission fails */
  errorMessage?: string;
}
