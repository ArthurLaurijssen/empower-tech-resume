import { HTMLAttributes, ReactElement } from "react";

export interface SwiperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  slideWidth?: number;
  slideGap?: number;
  children: ReactElement | ReactElement[];
}
