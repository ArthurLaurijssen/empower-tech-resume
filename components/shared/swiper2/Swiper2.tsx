import React, { useState, useRef, useEffect, ReactNode } from "react";

interface SwiperProps {
  children: ReactNode[];
  slideWidth?: number;
  slideGap?: number;
  slidesPerView?: number;
  showArrows?: boolean;
  className?: string;
}

const Swiper2: React.FC<SwiperProps> = ({
  children,
  slideWidth = 300, // Default slide width
  slideGap = 16, // Default gap between slides
  slidesPerView = "auto", // 'auto' or a number
  showArrows = true,
  className = "",
}) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate max scroll position and update on resize
  useEffect(() => {
    setIsMounted(true);
    updateMaxPosition();

    const handleResize = () => {
      updateMaxPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children, slideWidth, slideGap]);

  // Component has been simplified - autoplay functionality removed

  const updateMaxPosition = () => {
    if (swiperRef.current) {
      const containerWidth = swiperRef.current.clientWidth;
      const totalContentWidth =
        children.length * (slideWidth + slideGap) - slideGap;
      const newMaxPosition = Math.max(0, totalContentWidth - containerWidth);
      setMaxPosition(newMaxPosition);
    }
  };

  const handlePrev = () => {
    const newPosition = Math.max(0, position - slideWidth - slideGap);
    setPosition(newPosition);
  };

  const handleNext = () => {
    const newPosition = Math.min(maxPosition, position + slideWidth + slideGap);
    setPosition(newPosition);
  };

  // Handle mouse down event for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - swiperRef.current!.offsetLeft);
    setScrollLeft(position);
  };

  // Handle touch start event for dragging on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - swiperRef.current!.offsetLeft);
    setScrollLeft(position);
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - swiperRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // * 2 for faster scrolling
    const newPosition = Math.max(0, Math.min(maxPosition, scrollLeft - walk));
    setPosition(newPosition);
  };

  // Handle touch move event for dragging on mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - swiperRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // * 2 for faster scrolling
    const newPosition = Math.max(0, Math.min(maxPosition, scrollLeft - walk));
    setPosition(newPosition);
  };

  // Handle end of drag
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Dynamic styles for container
  const containerStyle: React.CSSProperties = {
    transform: `translateX(-${position}px)`,
    transition: isDragging ? "none" : "transform 0.3s ease-out",
    gap: `${slideGap}px`,
  };

  // Dynamic slide width based on slidesPerView
  const slideStyle: React.CSSProperties =
    typeof slidesPerView === "number"
      ? {
          width: `calc((100% - ${(slidesPerView - 1) * slideGap}px) / ${slidesPerView})`,
        }
      : { width: `${slideWidth}px` };

  if (!isMounted) {
    return null; // Prevent server/client hydration mismatch
  }

  return (
    <div className={`relative group ${className}`}>
      <div ref={swiperRef} className="overflow-hidden">
        <div
          className="flex transition-transform"
          style={containerStyle}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          {children.map((child, index) => (
            <div key={index} className="flex-shrink-0" style={slideStyle}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && position > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/70 text-white flex items-center justify-center shadow-lg focus:outline-none z-10 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {showArrows && position < maxPosition && (
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/70 text-white flex items-center justify-center shadow-lg focus:outline-none z-10 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Swiper2;
