import React from "react";
import { StarRatingProps } from "@/components/shared/star-rating/types";
import { StarIcon } from "@/components/shared/icons/star-icon/StarIcon";
import { HalfStarIcon } from "@/components/shared/icons/half-star-icon/HalfStarIcon";
import { EmptyStarIcon } from "@/components/shared/icons/empty-star-icon/EmptyStarIcon";

/**
 * StarRating component displays a star rating visualization based on a percentage value.
 * Uses Tailwind's responsive classes to handle small screens - showing stars on larger screens
 * and numeric representation on smaller screens.
 *
 * Example usage:
 * ```tsx
 * <StarRating rating={75} /> // Shows 3.75 out of 5 stars (75%)
 * <StarRating rating={80} maxStars={10} /> // Shows 8 out of 10 stars (80%)
 * <StarRating rating={75} showNumeric={true} /> // Shows both stars and numeric
 * ```
 */
export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 24,
  colorClass = "text-black",
  emptyColorClass = "text-black",
  className = "",
  showEmpty = true,
  showNumeric = false,
}) => {
  /**
   * Convert percentage rating (0-100) to star rating (0-maxStars scale)
   * For example: 80% with maxStars=5 becomes 4 stars
   */
  const normalizedRating = (rating / 100) * maxStars;
  const ratingValue = parseFloat(normalizedRating.toFixed(1));

  /**
   * Calculate the number of full, half, and empty stars to display
   * - fullStars: Number of completely filled stars
   * - hasHalfStar: Whether to display a half star
   * - emptyStars: Number of empty stars
   */
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {/* Numeric representation (always visible on xs screens, optional on larger screens) */}
      <div
        className={`${showNumeric ? "" : "sm:hidden"} font-semibold ${colorClass} mr-1`}
      >
        {ratingValue.toFixed(1)}
        <span className="text-sm">&nbsp;/&nbsp;{maxStars}</span>
      </div>

      {/* Star representation (hidden on xs screens, visible on sm and up) */}
      <div className="hidden sm:flex items-center gap-1">
        {/* Render full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={`full-${index}`} className={colorClass}>
            <StarIcon size={size} />
          </span>
        ))}

        {/* Render half star if applicable */}
        {hasHalfStar && (
          <span className={colorClass}>
            <HalfStarIcon size={size} />
          </span>
        )}

        {/* Render empty stars if showEmpty is true */}
        {showEmpty &&
          Array.from({ length: emptyStars }).map((_, index) => (
            <span key={`empty-${index}`} className={emptyColorClass}>
              <EmptyStarIcon size={size} />
            </span>
          ))}
      </div>
    </div>
  );
};
