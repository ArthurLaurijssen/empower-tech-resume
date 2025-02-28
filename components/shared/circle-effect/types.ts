import { ReactNode, HTMLAttributes } from "react";

export type CircleEffectIntent = "primary";

export type CircleEffectSize = "sm" | "md" | "lg";

export interface CircleEffectProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intent: CircleEffectIntent;
  size?: CircleEffectSize;
}
