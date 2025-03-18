import React from "react";
import {
  navigationItems,
  NavigationProps,
} from "@/components/header/navigation/types";
import { NavigationItem } from "@/components/header/navigation/NavigationItem";
import { NavigationLogo } from "@/components/header/navigation/NavigationLogo";
import { Button } from "@/components/shared/button/Button";

/**
 * Navigation component that renders the main navigation bar.
 * Displays logo, navigation items, and a contact button.
 * Only visible on medium screens and above (hidden on mobile).
 */
export const Navigation: React.FC<NavigationProps> = ({
  // Destructure className and gather remaining props
  className = "", // Provide default empty string for className
  ...props // Collect all other props
}: NavigationProps) => {
  return (
    // Main navigation container
    <nav
      // Apply base styles, show only on md breakpoint and above, with additional custom className
      className={`hidden md:flex justify-between items-center bg-white/70 p-3 rounded-3xl ${className}`.trim()}
      {...props}
    >
      {/* Logo component in the left section */}
      <NavigationLogo />

      {/* Navigation items displayed in the center */}
      <ul className="flex gap-4">
        {/* Map through navigation items and render each one */}
        {navigationItems.map((item, index) => (
          <li key={index}>
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>

      {/* Contact button in the right section */}
      <Button intent="secondary">Contact me</Button>
    </nav>
  );
};
