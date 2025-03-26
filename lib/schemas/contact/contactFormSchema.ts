import { z } from "zod";

/**
 * Zod schema for validating contact form data.
 */
export const contactFormSchema = z.object({
  /** Sender's name (2-50 characters) */
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  /** Sender's email address */
  email: z.string().email("Please enter a valid email address"),

  /** Sender's message (10-500 characters) */
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

/**
 * TypeScript type for contact form data.
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
