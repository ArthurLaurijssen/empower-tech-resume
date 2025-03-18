import { ReactNode, HTMLAttributes } from "react";

export type CircleEffectIntent =
  | "primary"
  | "secondary"
  | "secondary_white"
  | "black";

export type CircleEffectSize = "sm" | "md" | "lg" | "auto";

export interface CircleEffectProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intent: CircleEffectIntent;
  size?: CircleEffectSize;
}
