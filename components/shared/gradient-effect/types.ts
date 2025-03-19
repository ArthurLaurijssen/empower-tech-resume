import React, { HTMLAttributes } from "react";

/**
 * Available gradient styles for the GradientEffect component
 *
 * - yellow: Yellow to transparent gradient from bottom to top
 *
 * Note: Can be expanded with additional gradient options as needed
 */
export type GradientIntent = "yellow";

/**
 * Props interface for the GradientEffect component
 * Extends HTML div element attributes
 */
export interface GradientEffectProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style of gradient to apply
   * Controls colors and direction of the gradient
   */
  intent: GradientIntent;

  /**
   * Content to display with the gradient effect
   * Will be rendered inside the gradient container
   */
  children: React.ReactNode;
}
