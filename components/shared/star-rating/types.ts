/**
 * Props interface for the StarRating component
 */
export interface StarRatingProps {
  /**
   * Rating value as a percentage from 0-100
   * This will be converted to stars based on the maxStars value
   * Example: rating=60 with maxStars=5 will display 3 stars (60% of 5)
   */
  rating: number;

  /**
   * Maximum number of stars to display
   * The rating percentage will be mapped to this scale
   * @default 5
   */
  maxStars?: number;

  /**
   * Size of each star icon in pixels
   * Controls the visual size of all star icons
   * @default 24
   */
  size?: number;

  /**
   * Tailwind CSS color class for filled and half-filled stars
   * Controls the color of the filled portion of the rating
   * @default "text-black"
   */
  colorClass?: string;

  /**
   * Tailwind CSS color class for empty stars
   * Controls the color of the unfilled portion of the rating
   * @default "text-black"
   */
  emptyColorClass?: string;

  /**
   * Additional CSS class names to apply to the container div
   * Useful for adding custom styling or layout adjustments
   */
  className?: string;

  /**
   * Whether to display empty stars or not
   * When false, only filled and half-filled stars will be shown
   * @default true
   */
  showEmpty?: boolean;

  /**
   * Whether to show numeric representation alongside stars
   * When true, numeric rating (e.g., "4.5/5") will be visible on all screen sizes
   * When false, numeric rating will only be visible on tiny screens (xs)
   * and stars will be visible on small screens (sm) and above
   * @default false
   */
  showNumeric?: boolean;
}
