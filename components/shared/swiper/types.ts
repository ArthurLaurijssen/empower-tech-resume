import { HTMLAttributes, ReactElement } from "react";

/**
 * Mode for the Swiper component
 * - 'fixed': All slides have the same fixed width specified by slideWidth
 * - 'auto': Slide widths are auto-determined from their content
 */
export type SwiperMode = "fixed" | "auto";

/**
 * Props for the Swiper component
 */
export interface SwiperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Width of each slide in pixels
   * Required for 'fixed' mode, ignored in 'auto' mode
   */
  slideWidth?: number;

  /** Gap between slides in pixels (default: 16) */
  slideGap?: number;

  /**
   * Mode of operation for the swiper
   * - 'fixed': All slides have the same fixed width
   * - 'auto': Slide widths are auto-determined from their content
   * (default: 'fixed')
   */
  mode?: SwiperMode;

  /** React elements to render as slides */
  children: ReactElement | ReactElement[];
}
