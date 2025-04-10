import { ZodIssue } from "zod";

/**
 * Return type interface for the useZodValidation hook
 * Provides validation errors and a function to validate data against a schema
 *
 * @template T - The type of data being validated
 */
export interface UseZodValidationReturn<T> {
  /** Array of validation issues found during schema validation */
  errors: ZodIssue[];

  /**
   * Function to validate data against the schema
   * @param data - The data to validate
   */
  validateData: (data: T) => boolean;
}
