import { HTMLAttributes } from "react";

export interface BackgroundContainerProps extends HTMLAttributes<HTMLElement> {
  intent: BackgroundIntent;
  as?: SemanticElement;
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
