import { HTMLAttributes } from "react";

export interface NavigationItemProps {
  item: NavigationLinkItem;
}

/**
 * Props for the Navigation component
 * Extends HTML nav element attributes but with custom children handling
 */
export type NavigationProps = Omit<HTMLAttributes<HTMLElement>, "children">;
export interface NavigationLinkItem {
  label: string;
  href: string;
}
export const navigationItems: NavigationLinkItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experiences",
    href: "#experiences",
  },
];
