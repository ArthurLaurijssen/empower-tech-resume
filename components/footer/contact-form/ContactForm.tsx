"use client";

import React from "react";
import { ZodIssue } from "zod";
import { contactFormSchema } from "@/lib/schemas/contact/contactFormSchema";
import { ContactFormProps } from "@/components/footer/contact-form/types";
import { useFormSubmission } from "@/hooks/use-form-submission/useFormSubmission";
import { submitContactFormAction } from "@/lib/actions/contact/submitContactForm.server";
import { FormFeedback } from "@/components/shared/forms/feedback/FormFeedback";
import { FormLabel } from "@/components/shared/forms/label/FormLabel";
import { FormInput } from "@/components/shared/forms/input/FormInput";
import { FormTextarea } from "@/components/shared/forms/text-area/FormTextArea";
import { Button } from "@/components/shared/button/Button";

/**
 * ContactForm Component
 *
 * A form component that allows users to send contact messages.
 * Uses the useFormSubmission hook for form handling, validation, and submission.
 *
 */
export function ContactForm({
  onSubmitSuccess,
  className = "",
  ...formProps
}: ContactFormProps) {
  // Use the form submission hook to handle form state, validation, and submission
  const { handleSubmit, errors, isSubmitting, isPending, feedbackMessage } =
    useFormSubmission({
      schema: contactFormSchema, // Zod schema for form validation

      // Transform form data for validation and submission
      transformData: (formData) => ({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      }),

      // Server action to submit the form data
      onSubmit: submitContactFormAction,

      // Default messages for success and error states
      successMessage:
        "Your message has been sent successfully! We'll get back to you soon.",
      errorMessage: "Failed to send your message. Please try again.",

      // Success callback
      onSuccess: onSubmitSuccess,
    });

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full ${className}`}
      noValidate // Disable browser validation in favor of custom validation
      aria-live="polite" // Accessibility: Announces changes to form status
      {...formProps}
    >
      {/* Name Field */}
      <div className="mb-6">
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          id="name"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          aria-required="true"
        />
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          autoComplete="email"
          aria-required="true"
        />
      </div>

      {/* Message Field */}
      <div className="mb-8">
        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormTextarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message here..."
          aria-required="true"
        />
      </div>

      {/* Feedback display component for errors and success messages */}
      <FormFeedback
        successMessage={feedbackMessage.success}
        errorMessage={feedbackMessage.error}
        errors={errors as ZodIssue[]}
      />

      {/* Submit Button with loading state */}
      <Button
        type="submit"
        intent="orange"
        size="lg"
        disabled={isSubmitting || isPending}
        aria-busy={isSubmitting || isPending ? "true" : "false"}
      >
        {isSubmitting || isPending ? "Sending..." : <>Get in touch</>}
      </Button>
    </form>
  );
}
