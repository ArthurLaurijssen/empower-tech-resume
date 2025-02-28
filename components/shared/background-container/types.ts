import { HTMLAttributes } from "react";

export interface BackgroundContainerProps extends HTMLAttributes<HTMLElement> {
  intent: BackgroundIntent;
  as?: SemanticElement;
}

export type BackgroundIntent = "primary_gray" | "secondary_black";
export type SemanticElement =
  | "div"
  | "section"
  | "article"
  | "header"
  | "main"
  | "aside"
  | "footer";
