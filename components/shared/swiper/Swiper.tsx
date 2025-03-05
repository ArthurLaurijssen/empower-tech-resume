"use client";

import React, { Children, useEffect, useRef, useState } from "react";
import { SwiperProps } from "@/components/shared/swiper/types";
import { Button } from "@/components/shared/button/Button";
import { CircleEffect } from "@/components/shared/circle-effect/CircleEffect";
import { ArrowLeftIcon } from "@/components/shared/icons/arrow-left-icon/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/shared/icons/arrow-right-icon/ArrowRightIcon";

export const Swiper: React.FC<SwiperProps> = ({
  className,
  slideWidth = 300,
  slideGap = 16,
  children,
  ...props
}: SwiperProps) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [requireButtons, setRequireButtons] = useState<boolean>(false);
  const [position, setPosition] = React.useState(0);
  const [fullyVisibleSlides, setFullyVisiblesSlides] = React.useState(0);

  //Get the total children
  const totalChildren = Children.count(children);
  //Get the Width of the content
  const totalContentWidth =
    totalChildren * slideWidth + (totalChildren - 1) * slideGap;

  useEffect(() => {
    const calculateVisbleSlidesAndButtonsRequired = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        setRequireButtons(containerWidth < totalContentWidth);

        //Check how many slides are shown
        const slideWidthWithGap = slideWidth + slideGap;
        const visibleSlides = Math.floor(containerWidth / slideWidthWithGap);
        setFullyVisiblesSlides(visibleSlides);
      }
    };

    //Initial check to see if the buttons are required
    calculateVisbleSlidesAndButtonsRequired();

    const handleResize = () => {
      calculateVisbleSlidesAndButtonsRequired();
    };

    //Add the event listener
    window.addEventListener("resize", handleResize);
    //Remove the event listener upon destroy
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children, slideWidth, slideGap, totalContentWidth]);

  useEffect(() => {
    if (swiperRef.current) {
      const translateXValue = -(position * slideGap + position * slideWidth);

      swiperRef.current.style.transform = `translateX(${translateXValue}px)`;
    }
  }, [position, slideGap, slideWidth]);
  const handleNext = () => {
    if (position + fullyVisibleSlides < totalChildren) {
      setPosition(position + 1);
    }
  };
  const handlePrevious = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <div className={`relative ${className}`} {...props} ref={containerRef}>
      <div className="overflow-x-hidden">
        <div
          ref={swiperRef}
          className="flex transition-transform duration-300 will-change-transform"
        >
          {Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${slideWidth}px`, marginRight: `${slideGap}px` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Navigation buttons */}
      {requireButtons && (
        <>
          {position > 0 && (
            <CircleEffect
              intent="secondary"
              className="absolute left-2 -translate-x-1/2 top-1/3"
              onClick={handlePrevious}
            >
              <ArrowLeftIcon className="text-white" size={64}></ArrowLeftIcon>
            </CircleEffect>
          )}
          {position + fullyVisibleSlides < totalChildren && (
            <CircleEffect
              intent="secondary"
              className="absolute right-2 translate-x-1/2 top-1/3"
              onClick={handleNext}
            >
              <ArrowRightIcon className="text-white" size={64}></ArrowRightIcon>
            </CircleEffect>
          )}
        </>
      )}
    </div>
  );
};
