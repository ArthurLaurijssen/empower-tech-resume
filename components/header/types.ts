import React from "react";
import { Developer } from "@/models/entities/Developer";

/**
 * Props for the Header component
 * Extends HTML header element props while requiring necessary developer data
 * Explicitly does not accept children props
 */
export interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /**
   * Developer entity containing all profile information
   * Includes personal details, experience dates, greeting, and image URL
   */
  developer: Developer;
}
