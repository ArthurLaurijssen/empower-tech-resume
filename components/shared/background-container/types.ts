import { HTMLAttributes } from "react";

/**
 * Props interface for the BackgroundContainer component
 * Extends HTML element attributes to support various semantic elements
 */
export interface BackgroundContainerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Visual style to apply to the container
   * Controls background color and appearance
   */
  intent: BackgroundIntent;

  /**
   * HTML semantic element to render as
   * Allows for proper document structure and accessibility
   * @default "div"
   */
  as?: SemanticElement;
}

/**
 * Available background styles for the container
 * - primary_gray: Gradient background
 * - secondary_black: Solid black background
 * - mission_gray: Mission section specific background
 * - white: White background
 */
export type BackgroundIntent =
  | "primary_gray"
  | "secondary_black"
  | "mission_gray"
  | "white";

/**
 * Semantic HTML elements that the container can render as
 * Enables proper document structure and accessibility
 */
export type SemanticElement =
  | "div"
  | "section"
  | "article"
  | "header"
  | "main"
  | "aside"
  | "footer";
