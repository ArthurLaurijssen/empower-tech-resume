import React from "react";
import { StarRatingProps } from "@/components/shared/star-rating/types";
import { StarIcon } from "@/components/shared/icons/star-icon/StarIcon";
import { HalfStarIcon } from "@/components/shared/icons/half-star-icon/HalfStarIcon";
import { EmptyStarIcon } from "@/components/shared/icons/empty-star-icon/EmptyStarIcon";

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 24,
  colorClass = "text-black",
  emptyColorClass = "text-black",
  className = "",
  showEmpty = true,
}) => {
  // Convert percentage to star rating (0-maxStars scale)
  const normalizedRating = (rating / 100) * maxStars;

  // Calculate full, half, and empty stars
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <span key={`full-${index}`} className={colorClass}>
          <StarIcon size={size} />
        </span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className={colorClass}>
          <HalfStarIcon size={size} />
        </span>
      )}

      {/* Empty stars */}
      {showEmpty &&
        Array.from({ length: emptyStars }).map((_, index) => (
          <span key={`empty-${index}`} className={emptyColorClass}>
            <EmptyStarIcon size={size} />
          </span>
        ))}
    </div>
  );
};
