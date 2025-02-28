import React from "react";
import {
  navigationItems,
  NavigationProps,
} from "@/components/header/navigation/types";
import { NavigationItem } from "@/components/header/navigation/NavigationItem";
import { NavigationLogo } from "@/components/header/navigation/NavigationLogo";
import { Button } from "@/components/shared/button/Button";

export const Navigation: React.FC<NavigationProps> = ({
  // Destructure className and gather remaining props
  className = "", // Provide default empty string for className
  ...props // Collect all other props
}: NavigationProps) => {
  return (
    <nav
      className={`hidden md:flex justify-between items-center bg-white/70 p-3 rounded-3xl ${className}`.trim()}
      {...props}
    >
      <NavigationLogo />
      <ul className="flex gap-4">
        {navigationItems.map((item, index) => (
          <li key={index}>
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>
      <Button intent="secondary">Contact me</Button>
    </nav>
  );
};
