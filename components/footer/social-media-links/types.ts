import { SocialMediaLink } from "@/models/entities/SocialMediaLink";

/**
 * Props interface for the SocialMediaLinks component
 */
export interface SocialMediaLinksProps {
  /**
   * Array of social media link entities to be displayed
   * Each link contains network type, URL, and identifier information
   */
  socialMediaLinks: SocialMediaLink[];
}
