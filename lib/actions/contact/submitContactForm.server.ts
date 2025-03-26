"use server";

import { Resend } from "resend";
import { ContactFormResponse } from "@/lib/actions/contact/types";
import {
  ContactFormData,
  contactFormSchema,
} from "@/lib/schemas/contact/contactFormSchema";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Submits a contact form message and sends an email notification.
 *
 * This server action validates and processes contact form submissions,
 * then sends an email notification to the site owner.
 *
 * @param data - The contact form data to submit.
 * @returns A promise that resolves to a ContactFormResponse object.
 */
export async function submitContactFormAction(
  data: ContactFormData,
): Promise<ContactFormResponse> {
  try {
    // Validate the data with Zod schema
    const validatedData = contactFormSchema.parse(data);

    // Construct email content
    const { name, email, message } = validatedData;

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.TO_EMAIL || email,
      subject: `Contact Form: ${name}`,
      html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `,
    });
    // Check if the email was sent successfully
    if (emailResult.error) {
      console.error("Email sending failed:", emailResult.error);
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      };
    }

    // Return success response
    return {
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Return error response with more specific message for different error types
    if (error instanceof Error) {
      // You might want to sanitize error messages in production
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
