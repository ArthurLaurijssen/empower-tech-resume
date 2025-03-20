"use client";

import React from "react";
import { Button } from "@/components/shared/button/Button";
import { NavigationContactButtonProps } from "@/components/header/navigation/types";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll/UseSmoothScroll";

/**
 * Contact button used in navigation that scrolls to a target element (typically footer)
 * Uses secondary styling with smooth scrolling behavior
 */
export const NavigationContactButton: React.FC<
  NavigationContactButtonProps
> = ({
  className = "",
  text = "Contact me",
  targetId = "footer",
  scrollOffset = 20,
}) => {
  const { scrollToElement } = useSmoothScroll({ offset: scrollOffset });

  const handleClick = () => {
    scrollToElement(targetId);
  };

  return (
    <Button
      intent="secondary"
      className={className}
      onClick={handleClick}
      aria-label="Contact me"
    >
      {text}
    </Button>
  );
};
