import { Developer } from "@/models/entities/Developer";
import React from "react";

/**
 * Props for the Footer component
 * Extends HTML footer element props while requiring developer data
 * Explicitly does not accept children props
 */
export interface FooterProps
  extends Omit<React.ComponentPropsWithoutRef<"footer">, "children"> {
  /**
   * Developer entity containing information needed for the footer
   * Used for displaying name in copyright and social media links
   */
  developer: Developer;
}
