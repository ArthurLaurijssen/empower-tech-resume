"use client";

import React, {
  Children,
  useEffect,
  useRef,
  useState,
  TouchEvent,
  useCallback,
  useMemo,
} from "react";
import { SwiperProps } from "@/components/shared/swiper/types";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowLeftIcon } from "@/components/shared/icons/arrow-left-icon/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/shared/icons/arrow-right-icon/ArrowRightIcon";

/**
 * Swiper Component
 *
 * A responsive, touch-enabled carousel/slider component that allows users to navigate
 * through a collection of slides with touch gestures or navigation buttons.
 *
 * Features:
 * - Responsive design that adapts to container width
 * - Support for both fixed width slides and auto-width (responsive) slides
 * - Touch swipe support with elastic boundaries
 * - Automatic detection of whether navigation buttons are needed
 * - Smooth animations and transitions
 */
export const Swiper: React.FC<SwiperProps> = ({
  className = "", // Additional CSS classes to apply to the component
  slideWidth, // Width of each slide in pixels (optional)
  slideGap = 16, // Gap between slides in pixels
  children, // Child elements to render as slides
  mode = "fixed", // Mode: "fixed" or "auto"
  ...props // Additional props to pass to the root element
}: SwiperProps) => {
  // References to DOM elements
  const swiperRef = useRef<HTMLDivElement>(null); // Reference to the sliding container
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the outer container
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]); // References to individual slides

  // State for slider behavior and calculations
  const [requireButtons, setRequireButtons] = useState<boolean>(false); // Whether navigation buttons should be displayed
  const [position, setPosition] = useState(0); // Current slide position index
  const [containerWidth, setContainerWidth] = useState(0); // Width of the container element
  const [slideWidths, setSlideWidths] = useState<number[]>([]); // Widths of individual slides for auto mode

  // State for touch handling
  const [touchStart, setTouchStart] = useState<number | null>(null); // Starting X position of touch
  const [isSwiping, setIsSwiping] = useState(false); // Whether user is currently swiping
  const [initialTransform, setInitialTransform] = useState(0); // Initial transform value when swipe starts
  const [currentTransform, setCurrentTransform] = useState(0); // Current transform value during swipe

  // Constants
  const minSwipeDistance = 50; // Minimum swipe distance to trigger slide change (pixels)
  const totalChildren = Children.count(children); // Total number of child slides
  const isAutoMode = mode === "auto";

  // Setup slide refs for auto mode
  useEffect(() => {
    // Reset and recreate slide refs array when children change
    slideRefs.current = Array(totalChildren).fill(null);
  }, [totalChildren]);

  // Calculate and memoize cumulative slide positions
  // This is used for determining position during autoMode
  const slidePositions = useMemo(() => {
    const positions: number[] = [0]; // Start with 0 for the first slide

    if (isAutoMode && slideWidths.length === totalChildren) {
      // For auto mode, calculate positions based on actual measured widths
      let accumulatedWidth = 0;

      for (let i = 0; i < totalChildren - 1; i++) {
        accumulatedWidth += slideWidths[i] + slideGap;
        positions.push(accumulatedWidth);
      }
    } else if (!isAutoMode && slideWidth) {
      // For fixed mode, calculate based on fixed slideWidth
      for (let i = 1; i < totalChildren; i++) {
        positions.push(i * (slideWidth + slideGap));
      }
    }

    return positions;
  }, [isAutoMode, slideWidths, totalChildren, slideGap, slideWidth]);

  // Calculate total content width (all slides + gaps)
  const totalContentWidth = useMemo(() => {
    if (isAutoMode && slideWidths.length === totalChildren) {
      // For auto mode, sum the actual measured widths
      return (
        slideWidths.reduce((sum, width) => sum + width, 0) +
        (totalChildren - 1) * slideGap
      );
    } else if (!isAutoMode && slideWidth) {
      // For fixed mode, use the fixed slideWidth
      return totalChildren * slideWidth + (totalChildren - 1) * slideGap;
    }
    return 0;
  }, [isAutoMode, slideWidths, totalChildren, slideGap, slideWidth]);

  /**
   * Measure widths of all slide elements in auto mode
   */
  const measureSlideWidths = useCallback(() => {
    if (!isAutoMode) return;

    const widths: number[] = [];
    slideRefs.current.forEach((slideRef) => {
      if (slideRef) {
        widths.push(slideRef.offsetWidth);
      }
    });

    if (widths.length === totalChildren) {
      setSlideWidths(widths);
    }
  }, [isAutoMode, totalChildren]);

  /**
   * Calculate and update visible slides and button requirements
   * Also handles window resize events
   */
  useEffect(() => {
    // Calculate if navigation buttons are needed
    const calculateButtonsRequired = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(width);

        // In auto mode, first measure slide widths
        if (isAutoMode) {
          measureSlideWidths();
        }

        setRequireButtons(width < totalContentWidth);
      }
    };

    // Initial calculation
    calculateButtonsRequired();

    // Recalculate on window resize
    const handleResize = () => {
      calculateButtonsRequired();
    };

    // Setup and cleanup resize event listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    children,
    slideWidth,
    slideGap,
    totalContentWidth,
    isAutoMode,
    measureSlideWidths,
  ]);

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
      const translateXValue = isAutoMode
        ? -slidePositions[position] // For auto mode, use precalculated positions
        : -(position * slideGap + position * (slideWidth || 0)); // For fixed mode

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
    isAutoMode,
    slidePositions,
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
  const handleNext = useCallback(() => {
    if (position + 1 < totalChildren) {
      setPosition(position + 1);
    }
  }, [position, totalChildren]);

  /**
   * Navigate to the previous slide if possible
   */
  const handlePrevious = useCallback(() => {
    if (position > 0) {
      setPosition(position - 1);
    }
  }, [position]);

  /**
   * Handle the start of a touch interaction
   *
   * @param {TouchEvent<HTMLDivElement>} e - The touch event
   */
  const onTouchStart = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      // Store initial touch position and current transform
      setTouchStart(e.targetTouches[0].clientX);
      setIsSwiping(true);
      setInitialTransform(currentTransform);

      // Remove transition for immediate response during swipe
      if (swiperRef.current) {
        swiperRef.current.style.transition = "none";
      }
    },
    [currentTransform],
  );

  /**
   * Handle touch movement during swipe
   * Applies elastic resistance when nearing boundaries
   *
   * @param {TouchEvent<HTMLDivElement>} e - The touch event
   */
  const onTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
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
    },
    [touchStart, isSwiping, initialTransform, getMinTranslate, getMaxTranslate],
  );

  /**
   * Handle the end of a touch interaction
   * Determines if swipe should change slides or snap back to boundaries
   *
   * @param {TouchEvent<HTMLDivElement>} e - The touch event
   */
  const onTouchEnd = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
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
        if (diff > 0 && position > 0) {
          // Swiped right - go to previous slide
          handlePrevious();
        } else if (diff < 0 && position < totalChildren - 1) {
          // Swiped left - go to next slide
          handleNext();
        }
      } else {
        // For small swipes in auto mode, find the closest slide position
        if (isAutoMode && slidePositions.length === totalChildren) {
          const currentPos = -currentTransform;
          let closestIndex = 0;
          let minDistance = Math.abs(slidePositions[0] - currentPos);

          for (let i = 1; i < slidePositions.length; i++) {
            const distance = Math.abs(slidePositions[i] - currentPos);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = i;
            }
          }

          setPosition(closestIndex);
        } else if (!isAutoMode && slideWidth) {
          // For fixed width mode
          const slideUnit = slideWidth + slideGap;
          const closestSlidePosition = Math.round(
            -currentTransform / slideUnit,
          );
          setPosition(
            Math.max(0, Math.min(totalChildren - 1, closestSlidePosition)),
          );
        }
      }

      // Reset touch tracking states
      setTouchStart(null);
      setIsSwiping(false);
    },
    [
      touchStart,
      isSwiping,
      currentTransform,
      getMinTranslate,
      getMaxTranslate,
      position,
      totalChildren,
      isAutoMode,
      slidePositions,
      slideWidth,
      slideGap,
      handlePrevious,
      handleNext,
    ],
  );

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
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                key={index}
                className="flex-shrink-0"
                style={{
                  width: isAutoMode ? "auto" : `${slideWidth}px`,
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
                size="custom"
                customSize="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                className="absolute left-1 top-1/4 md:top-1/3 cursor-pointer z-10"
                onClick={handlePrevious}
              >
                <ArrowLeftIcon className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </CircleEffect>
            )}
            {/* Next button - only shown when more slides are available */}
            {position < totalChildren - 1 && (
              <CircleEffect
                intent="secondary"
                size="custom"
                customSize="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                className="absolute right-1 top-1/4 md:top-1/3 cursor-pointer z-10"
                onClick={handleNext}
              >
                <ArrowRightIcon className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </CircleEffect>
            )}
          </>
        )}
      </div>
    </>
  );
};
