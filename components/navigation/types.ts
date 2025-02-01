export interface NavigationItemProps {
  item: NavigationLinkItem;
}
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
