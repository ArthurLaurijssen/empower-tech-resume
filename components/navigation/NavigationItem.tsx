import React from "react";
import { NavigationItemProps } from "@/components/navigation/types";
import Link from "next/link";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
}: NavigationItemProps) => {
  return <Link href={item.href}>{item.label}</Link>;
};
