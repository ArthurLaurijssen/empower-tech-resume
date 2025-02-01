import React from "react";
import { navigationItems } from "@/components/navigation/types";
import { NavigationItem } from "@/components/navigation/NavigationItem";
import { NavigationLogo } from "@/components/navigation/NavigationLogo";
import { Button } from "@/components/button/button";

export const Navigation: React.FC = () => {
  return (
    <nav className="hidden sm:flex justify-between items-center bg-white/70 p-3 rounded-3xl">
      <NavigationLogo></NavigationLogo>
      <ul className="flex gap-4">
        {navigationItems.map((item, index) => (
          <li key={index}>
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>
      <Button intent={"white"}>Contact me</Button>
    </nav>
  );
};
