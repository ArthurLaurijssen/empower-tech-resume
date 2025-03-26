import { UseFormSubmissionConfig } from "@/hooks/use-form-submission/types";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useZodValidation } from "@/hooks/use-zod-validation/useZodValidation";

export function useFormSubmission<T>({
  schema,
  transformData,
  onSubmit,
  onSuccess,
  successMessage = "Operation completed successfully",
  errorMessage = "Operation failed",
}: UseFormSubmissionConfig<T>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // Remove toast dependency
  // const { showToast } = useToast();
  const { errors, validateData } = useZodValidation(schema);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{
    success?: string;
    error?: string;
  }>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage({}); // Clear previous messages

    try {
      const formData = new FormData(event.currentTarget);
      const data = transformData(formData);

      if (validateData(data)) {
        startTransition(async () => {
          const result = await onSubmit(data);
          if (result.success) {
            // Set success message instead of showing toast
            setFeedbackMessage({
              success: result.message || successMessage,
            });
            router.refresh();
            onSuccess?.();
          } else {
            // Set error message instead of showing toast
            setFeedbackMessage({
              error: result.message || errorMessage,
            });
          }
        });
      }
    } catch (error) {
      setFeedbackMessage({
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    isPending,
    isSubmitting,
    errors,
    feedbackMessage, // Return messages for display in the form
    handleSubmit,
  };
}
