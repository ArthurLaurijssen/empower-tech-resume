import React, { useCallback } from "react";
import { SmoothScrollOptions } from "@/hooks/use-smooth-scroll/types";

/**
 * Custom hook for smooth scrolling to element IDs
 * @param options Configuration options for smooth scrolling
 * @returns A callback function that handles smooth scrolling
 */
export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { offset = 20 } = options;

  /**
   * Smoothly scrolls to a target element by ID
   * @param targetId ID of the element to scroll to (without the # character)
   * @param e Optional event to prevent default behavior
   * @returns void
   */
  const scrollToElement = useCallback(
    (targetId: string, e?: React.MouseEvent): void => {
      // Prevent default behavior if event is provided
      if (e) {
        e.preventDefault();
      }

      const element = document.getElementById(targetId);

      if (element) {
        // Calculate the scroll position with specified offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        // Smoothly scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [offset],
  );

  /**
   * Handles click events on hash links
   * @param e React mouse event
   * @param href The href attribute to check for hash links
   */
  const handleHashLinkClick = useCallback(
    (e: React.MouseEvent, href: string): void => {
      // Only intercept hash links (links starting with #)
      if (href.startsWith("#")) {
        e.preventDefault();
        // Extract the ID from the href (remove the # character)
        const targetId = href.substring(1);
        scrollToElement(targetId);
      }
    },
    [scrollToElement],
  );

  return {
    scrollToElement,
    handleHashLinkClick,
  };
};
