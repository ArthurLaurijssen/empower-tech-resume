import { Mission } from "@/models/value-objects/Mission";
import React from "react";

/**
 * Props for the Mission component
 *
 * This interface defines the required properties for the Mission component.
 * It extends standard HTML section element attributes while requiring mission data
 * and explicitly does not accept children props.
 *
 * @interface MissionProps
 */
export interface MissionProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * The mission data object that contains title and description
   * @type {Mission}
   * @required
   */
  mission: Mission;
}
