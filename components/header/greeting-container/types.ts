import { Greeting } from "@/models/value-objects/Greeting";
import { HTMLAttributes } from "react";

export interface GreetingContainerProps extends HTMLAttributes<HTMLDivElement> {
  greeting: Greeting;
}
