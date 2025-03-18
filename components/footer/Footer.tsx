import React from "react";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { FooterDiscussButton } from "@/components/footer/discuss-button/FooterDiscussButton";
import { SocialMediaLinks } from "@/components/footer/social-media-links/SocialMediaLinks";
import { DrawingIcon } from "@/components/shared/icons/drawing-icon/DrawingIcon";
import { FooterProps } from "@/components/footer/types";

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
      <h1 className="text-white text-6xl font-semibold my-6 text-center md:text-left">
        Lets Discuss your Project
      </h1>

      {/* CTA button component */}
      <FooterDiscussButton className="w-fit" />

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

      {/* Decorative drawing icon - only visible on large screens */}
      <DrawingIcon className="hidden lg:block absolute top-1/4 -translate-y-1/2 right-4 xl:right-16 2xl:right-32 text-yellow-500" />
    </BackgroundContainer>
  );
};
