import React from "react";
import { SocialMediaLinksProps } from "@/components/footer/social-media-links/types";
import { SocialMediaNetwork } from "@/models/enums/SocialMediaNetwork";
import { FacebookIcon } from "@/components/shared/icons/facebook-icon/FacebookIcon";
import { XIcon } from "@/components/shared/icons/x-icon/XIcon";
import { InstagramIcon } from "@/components/shared/icons/instagram-icon/InstagramIcon";
import { LinkedInIcon } from "@/components/shared/icons/linkedin-icon/LinkedInIcon";
import { GithubIcon } from "@/components/shared/icons/github-icon/GithubIcon";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { GitlabIcon } from "@/components/shared/icons/gitlab-icon/GitlabIcon";
import { WhatsappIcon } from "@/components/shared/icons/whatsapp-icon/WhatsappIcon";

/**
 * Component that renders a row of social media link icons.
 * Each icon is wrapped in a circular container and links to the respective platform.
 */
export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  socialMediaLinks, // Array of social media links to display
}: SocialMediaLinksProps) => {
  /**
   * Helper function that returns the appropriate icon component based on network type
   * All icons are rendered with consistent size for visual uniformity
   */
  const getSocialMediaIcon = (network: SocialMediaNetwork) => {
    switch (network) {
      case SocialMediaNetwork.Facebook:
        return <FacebookIcon size={16} />;
      case SocialMediaNetwork.X:
        return <XIcon size={16} />;
      case SocialMediaNetwork.Instagram:
        return <InstagramIcon size={16} />;
      case SocialMediaNetwork.LinkedIn:
        return <LinkedInIcon size={16} />;
      case SocialMediaNetwork.WhatsApp:
        return <WhatsappIcon size={16} />;
      case SocialMediaNetwork.Github:
        return <GithubIcon size={16} />;
      case SocialMediaNetwork.GitLab:
        return <GitlabIcon size={16} />;
      default:
        return null; // Fallback if an unsupported network type is provided
    }
  };

  return (
    <div className="flex gap-1">
      {/* Map through each social media link and create icon buttons */}
      {socialMediaLinks.map((link) => (
        <a
          key={link.id}
          href={link.socialMediaUrl}
          target="_blank"
          rel="noopener noreferrer" // Security best practice for external links
          aria-label={`Visit my ${SocialMediaNetwork[link.network]} page`} // Accessibility enhancement
        >
          {/* Circular container with white background */}
          <CircleEffect intent="secondary_white" size="md">
            {getSocialMediaIcon(link.network)}
          </CircleEffect>
        </a>
      ))}
    </div>
  );
};
