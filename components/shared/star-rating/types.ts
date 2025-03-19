export interface StarRatingProps {
  rating: number; // Rating value (percentage from 0-100)
  maxStars?: number; // Number of stars to display (default: 5)
  size?: number; // Size of the stars (default: 24)
  colorClass?: string; // Tailwind color class for filled stars (default: "text-yellow-500")
  emptyColorClass?: string; // Tailwind color class for empty stars (default: "text-gray-500")
  className?: string; // Additional class names
  showEmpty?: boolean; // Show empty stars (default: true)
}
