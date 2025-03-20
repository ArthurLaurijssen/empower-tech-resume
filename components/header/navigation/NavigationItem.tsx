"use client";

import React from "react";
import { NavigationItemProps } from "@/components/header/navigation/types";
import Link from "next/link";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll/UseSmoothScroll";

/**
 * Navigation item component with smooth scrolling behavior for hash links
 */
export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
}: NavigationItemProps) => {
  const { handleHashLinkClick } = useSmoothScroll();

  return (
    <Link
      href={item.href}
      className="text-text-gray font-normal hover:text-black transition-colors"
      onClick={(e) => handleHashLinkClick(e, item.href)}
      aria-label={`Navigate to ${item.label} section`}
    >
      {item.label}
    </Link>
  );
};
