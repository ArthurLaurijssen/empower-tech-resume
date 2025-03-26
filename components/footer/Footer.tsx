import React from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { SocialMediaLinks } from "@/components/footer/social-media-links/SocialMediaLinks";
import { DrawingIcon } from "@/components/shared/icons/drawing-icon/DrawingIcon";
import { FooterProps } from "@/components/footer/types";
import { ContactForm } from "@/components/footer/contact-form/ContactForm";

/**
 * Footer component that displays a CTA, copyright information, and social media links
 * Uses a dark theme with decorative elements and responsive layout
 */
export const Footer: React.FC<FooterProps> = ({
  developer, // Developer entity containing name and social media links
  className = "", // Optional CSS classes for styling
  ...props // Additional HTML attributes
}) => {
  // Get current year for copyright notice
  const year = new Date().getFullYear();

  return (
    <BackgroundContainer
      as="footer" // Renders as a footer element for semantic HTML
      intent="secondary_black" // Dark theme color scheme
      className={`relative p-10 ${className}`}
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      {/* Call to action heading - centered on mobile, left-aligned on desktop */}
      <div className="my-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold text-center">
          Contact me
        </h1>
        <p className="text-text-gray text-base text-center">
          Looking for a qualified developer? Fill out the form below and
          I&#39;ll get back to you!
        </p>
      </div>
      {/* Decorative drawing icon - only visible on large screens */}
      <DrawingIcon className="absolute scale-[0.4] sm:scale-50 md:scale-75 lg:scale-100 top-1 right-1 lg:top-4 lg:right-10 text-yellow-500" />

      <ContactForm />

      {/* Divider line - thin horizontal rule */}
      <div className="w-full h-px bg-gray-800 my-6" aria-hidden="true" />

      {/* Footer bottom section with copyright and social media - stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Copyright notice with developer name and current year */}
        <div className="mb-4 md:mb-0">
          <p className="text-footer-gray font-inter font-normal text-lg">
            © {developer.name} {year}
          </p>
        </div>

        {/* Social media links component */}
        <SocialMediaLinks socialMediaLinks={developer.socialMediaLinks} />
      </div>
    </BackgroundContainer>
  );
};
