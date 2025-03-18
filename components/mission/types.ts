import { Mission } from "@/models/value-objects/Mission";
import React from "react";

/**
 * Props for the Mission component
 * Extends HTML section element props while requiring mission data
 * Explicitly does not accept children props
 */
export interface MissionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  mission: Mission;
}
