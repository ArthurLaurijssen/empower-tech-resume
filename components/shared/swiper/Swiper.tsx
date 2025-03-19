"use client";

import React, {
  Children,
  useEffect,
  useRef,
  useState,
  TouchEvent,
  useCallback,
} from "react";
import { SwiperProps } from "@/components/shared/swiper/types";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowLeftIcon } from "@/components/shared/icons/arrow-left-icon/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/shared/icons/arrow-right-icon/ArrowRightIcon";

/**
 * Swiper Component
 *
 * A responsive, touch-enabled carousel/slider component that allows users to navigate
 * through a collection of slides with touch gestures or filter buttons.
 *
 * Features:
 * - Responsive design that adapts to container width
 * - Touch swipe support with elastic boundaries
 * - Automatic detection of whether filter buttons are needed
 * - Precise calculation of visible slides
 * - Smooth animations and transitions
 *
 */
export const Swiper: React.FC<SwiperProps> = ({
  className, // Additional CSS classes to apply to the component
  slideWidth = 300, // Width of each slide in pixels
  slideGap = 16, // Gap between slides in pixels
  children, // Child elements to render as slides
  ...props // Additional props to pass to the root element
}: SwiperProps) => {
  // References to DOM elements
  const swiperRef = useRef<HTMLDivElement>(null); // Reference to the sliding container
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the outer container

  // State for slider behavior and calculations
  const [requireButtons, setRequireButtons] = useState<boolean>(false); // Whether filter buttons should be displayed
  const [position, setPosition] = useState(0); // Current slide position index
  const [fullyVisibleSlides, setFullyVisibleSlides] = useState(0); // Number of fully visible slides
  const [containerWidth, setContainerWidth] = useState(0); // Width of the container element

  // State for touch handling
  const [touchStart, setTouchStart] = useState<number | null>(null); // Starting X position of touch
  const [isSwiping, setIsSwiping] = useState(false); // Whether user is currently swiping
  const [initialTransform, setInitialTransform] = useState(0); // Initial transform value when swipe starts
  const [currentTransform, setCurrentTransform] = useState(0); // Current transform value during swipe

  // Constants
  const minSwipeDistance = 50; // Minimum swipe distance to trigger slide change (pixels)
  const totalChildren = Children.count(children); // Total number of child slides

  // Calculate total content width (all slides + gaps)
  const totalContentWidth =
    totalChildren * slideWidth + (totalChildren - 1) * slideGap;

  /**
   * Calculate and update visible slides and button requirements
   * Also handles window resize events
   */
  useEffect(() => {
    // Calculate how many slides fit in the container and if buttons are needed
    const calculateVisibleSlidesAndButtonsRequired = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(width);
        setRequireButtons(width < totalContentWidth);

        // Calculate number of fully visible slides
        const slideWidthWithGap = slideWidth + slideGap;
        const visibleSlides = Math.floor(width / slideWidthWithGap);
        setFullyVisibleSlides(Math.max(1, visibleSlides)); // Ensure at least 1 slide is visible
      }
    };

    // Initial calculation
    calculateVisibleSlidesAndButtonsRequired();

    // Recalculate on window resize
    const handleResize = () => {
      calculateVisibleSlidesAndButtonsRequired();
    };

    // Setup and cleanup resize event listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children, slideWidth, slideGap, totalContentWidth]);

  /**
   * Returns the minimum translation value (leftmost boundary)
   * Memoized with useCallback to avoid recreating on every render
   *
   * @returns {number} The minimum allowed translation value (always 0)
   */
  const getMinTranslate = useCallback(() => {
    return 0; // First slide should align with left edge
  }, []);

  /**
   * Returns the maximum translation value (rightmost boundary)
   * Memoized with useCallback to avoid recreating on every render
   *
   * @returns {number} The maximum allowed translation value (negative number)
   */
  const getMaxTranslate = useCallback(() => {
    // If all content fits within container, no translation needed
    if (totalContentWidth <= containerWidth) {
      return 0;
    }
    // Otherwise, limit translation to show the last slide at the right edge
    return -(totalContentWidth - containerWidth);
  }, [totalContentWidth, containerWidth]);

  /**
   * Update transform when position changes
   * Ensures translation stays within defined boundaries
   */
  useEffect(() => {
    if (swiperRef.current) {
      // Calculate base translation value based on current position
      const translateXValue = -(position * slideGap + position * slideWidth);

      // Apply boundary constraints
      const boundedTranslate = Math.max(
        getMaxTranslate(),
        Math.min(getMinTranslate(), translateXValue),
      );

      // Update state and apply transform
      setCurrentTransform(boundedTranslate);
      swiperRef.current.style.transform = `translateX(${boundedTranslate}px)`;
    }
  }, [
    position,
    slideGap,
    slideWidth,
    containerWidth,
    getMaxTranslate,
    getMinTranslate,
  ]);

  /**
   * Apply transform changes during swipe interactions
   */
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.style.transform = `translateX(${currentTransform}px)`;
    }
  }, [currentTransform]);

  /**
   * Navigate to the next slide if possible
   */
  const handleNext = () => {
    if (position + fullyVisibleSlides < totalChildren) {
      setPosition(position + 1);
    }
  };

  /**
   * Navigate to the previous slide if possible
   */
  const handlePrevious = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  /**
   * Handle the start of a touch interaction
   *
   * @param {TouchEvent<HTMLDivElement>} e - The touch event
   */
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    // Store initial touch position and current transform
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    setInitialTransform(currentTransform);

    // Remove transition for immediate response during swipe
    if (swiperRef.current) {
      swiperRef.current.style.transition = "none";
    }
  };

  /**
   * Handle touch movement during swipe
   * Applies elastic resistance when nearing boundaries
   *
   * @param {TouchEvent<HTMLDivElement>} e - The touch event
   */
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!touchStart || !isSwiping) return;

    // Calculate finger movement distance
    const currentX = e.targetTouches[0].clientX;
    const diff = currentX - touchStart;

    // Calculate new transform with finger movement
    let newTransform = initialTransform + diff;

    // Apply elastic resistance when overscrolling boundaries
    if (newTransform > getMinTranslate()) {
      // Resistance when trying to scroll past the beginning (left edge)
      const overscroll = newTransform - getMinTranslate();
      newTransform = getMinTranslate() + overscroll * 0.3; // 30% movement for resistance
    } else if (newTransform < getMaxTranslate()) {
      // Resistance when trying to scroll past the end (right edge)
      const overscroll = getMaxTranslate() - newTransform;
      newTransform = getMaxTranslate() - overscroll * 0.3; // 30% movement for resistance
    }

    // Update the transform position
    setCurrentTransform(newTransform);

    // Prevent page scrolling while swiping
    e.preventDefault();
  };

  /**
   * Handle the end of a touch interaction
   * Determines if swipe should change slides or snap back to boundaries
   *
   * @param {TouchEvent<HTMLDivElement>} e - The touch event
   */
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!touchStart || !isSwiping) return;

    // Calculate total swipe distance
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStart;

    // Restore smooth transitions for animations
    if (swiperRef.current) {
      swiperRef.current.style.transition = "transform 300ms ease-in-out";
    }

    // Handle different end-of-swipe scenarios
    if (currentTransform > getMinTranslate()) {
      // Snap back to start if overscrolled left boundary
      setCurrentTransform(getMinTranslate());
    } else if (currentTransform < getMaxTranslate()) {
      // Snap back to end if overscrolled right boundary
      setCurrentTransform(getMaxTranslate());
    } else if (Math.abs(diff) > minSwipeDistance) {
      // Change slide if swipe distance exceeds threshold
      if (diff > 0) {
        // Swiped right - go to previous slide
        handlePrevious();
      } else {
        // Swiped left - go to next slide
        handleNext();
      }
    } else {
      // For small swipes, snap to closest slide
      const slideUnit = slideWidth + slideGap;
      const closestSlidePosition = Math.round(-currentTransform / slideUnit);
      setPosition(
        Math.max(
          0,
          Math.min(totalChildren - fullyVisibleSlides, closestSlidePosition),
        ),
      );
    }

    // Reset touch tracking states
    setTouchStart(null);
    setIsSwiping(false);
  };

  return (
    <>
      {/* Main container with positioning context */}
      <div className={`relative ${className}`} {...props} ref={containerRef}>
        {/* Viewport container with overflow hidden to create the "window" */}
        <div className="overflow-x-hidden">
          {/* Sliding container with all slide elements */}
          <div
            ref={swiperRef}
            className="flex transition-transform duration-300 will-change-transform"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Render each child as a slide */}
            {Children.map(children, (child, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `${slideWidth}px`,
                  marginRight:
                    index < totalChildren - 1 ? `${slideGap}px` : "0", // No margin on last slide
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons - only shown when needed */}
        {requireButtons && (
          <>
            {/* Previous button - only shown when not at first slide */}
            {position > 0 && (
              <CircleEffect
                intent="secondary"
                className="absolute left-1 top-1/3 cursor-pointer z-10"
                onClick={handlePrevious}
              >
                <ArrowLeftIcon className="text-white" size={64} />
              </CircleEffect>
            )}
            {/* Next button - only shown when more slides are available */}
            {position + fullyVisibleSlides < totalChildren && (
              <CircleEffect
                intent="secondary"
                className="absolute right-1 top-1/3 cursor-pointer z-10"
                onClick={handleNext}
              >
                <ArrowRightIcon className="text-white" size={64} />
              </CircleEffect>
            )}
          </>
        )}
      </div>
    </>
  );
};
