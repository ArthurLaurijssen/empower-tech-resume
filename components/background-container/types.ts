import React from "react";

export interface BackgroundContainerProps {
  children: React.ReactNode;
  intent: BackgroundIntent;
  as?: SemanticElement; // Default to 'div'
}

export type BackgroundIntent = "gray" | "black" | "light_green" | "light_gray";
export type SemanticElement =
  | "div"
  | "section"
  | "article"
  | "header"
  | "main"
  | "aside"
  | "footer";
