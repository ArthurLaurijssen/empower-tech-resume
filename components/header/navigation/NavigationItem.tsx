"use client";

import React from "react";
import { NavigationItemProps } from "@/components/header/navigation/types";
import Link from "next/link";

/**
 * Navigation item component with smooth scrolling behavior for hash links
 */
export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
}: NavigationItemProps) => {
  /**
   * Handles click events on navigation links
   * Provides smooth scrolling for hash links (e.g., #section-id)
   */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept hash links (links starting with #)
    if (item.href.startsWith("#")) {
      e.preventDefault(); // Prevent default jump behavior

      // Extract the ID from the href (remove the # character)
      const targetId = item.href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        // Calculate the scroll position with a small offset for better visual appearance
        const headerOffset = 20; // Pixels to offset from the exact top (adjust as needed)
        const elementPosition = element.getBoundingClientRect().top; // Element's position relative to viewport
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset; // Final scroll position

        // Smoothly scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // CSS smooth scrolling
        });
      }
    }
  };

  return (
    <Link
      href={item.href}
      className="text-text-gray font-normal hover:text-black transition-colors"
      onClick={handleClick} // Apply smooth scrolling on click
      aria-label={`Navigate to ${item.label} section`} // Accessibility enhancement
    >
      {item.label}
    </Link>
  );
};
