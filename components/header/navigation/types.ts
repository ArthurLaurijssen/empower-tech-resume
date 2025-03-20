import { HTMLAttributes } from "react";

/**
 * Props for a navigation item component
 * @property {NavigationLinkItem} item - The navigation link data to display
 */
export interface NavigationItemProps {
  item: NavigationLinkItem;
}

/**
 * Props for the Navigation component
 * Extends HTML nav element attributes but with custom children handling
 */
export type NavigationProps = Omit<HTMLAttributes<HTMLElement>, "children">;

/**
 * Represents a single navigation link
 * @property {string} label - The text to display for the navigation link
 * @property {string} href - The URL or anchor the link points to
 */
export interface NavigationLinkItem {
  label: string;
  href: string;
}

/**
 * Array of navigation items to be displayed in the navigation bar
 * Each item contains a label and corresponding href
 */
export const navigationItems: NavigationLinkItem[] = [
  {
    label: "Projects",
    href: "#projects", // Anchor link to projects section
  },
  {
    label: "Mission",
    href: "#mission", // Anchor link to mission section
  },
  {
    label: "Experiences",
    href: "#experiences", // Anchor link to experiences section
  },
];

export interface NavigationContactButtonProps {
  /**
   * Optional CSS class name for extending styles
   */
  className?: string;

  /**
   * Button text
   * @default "Contact me"
   */
  text?: string;

  /**
   * Target element ID to scroll to when clicked
   * @default "footer"
   */
  targetId?: string;

  /**
   * Offset in pixels from the target element
   * @default 20
   */
  scrollOffset?: number;
}
