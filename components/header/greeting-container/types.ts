import { Greeting } from "@/models/value-objects/Greeting";
import { HTMLAttributes } from "react";

/**
 * Props interface for the GreetingContainer component
 * Extends standard HTML div element attributes with custom greeting data
 */
export interface GreetingContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The greeting data to be displayed in the container
   * Contains title and message properties from the Greeting value object
   */
  greeting: Greeting;
}
