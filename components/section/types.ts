import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  color?: string;
  intent: SectionIntent;
}

export type SectionIntent = "light_gray" | "gray" | "black" | "light_green";
