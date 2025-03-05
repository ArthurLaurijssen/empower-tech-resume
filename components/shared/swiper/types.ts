import { HTMLAttributes, ReactElement } from "react";

/**
 * Props for the Swiper component
 */
export interface SwiperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Width of each slide in pixels (default: 300) */
  slideWidth?: number;

  /** Gap between slides in pixels (default: 16) */
  slideGap?: number;

  /** React elements to render as slides */
  children: ReactElement | ReactElement[];
}
