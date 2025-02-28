import React, { HTMLAttributes } from "react";

export type GradientIntent = "yellow";

export interface GradientEffectProps extends HTMLAttributes<HTMLDivElement> {
  intent: GradientIntent;
  children: React.ReactNode;
}
