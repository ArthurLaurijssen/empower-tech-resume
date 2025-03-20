import { HeaderProps } from "@/components/header/types";
import React from "react";
import { Navigation } from "@/components/header/navigation/Navigation";
import Image from "next/image";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { GreetingContainer } from "@/components/header/greeting-container/GreetingContainer";
import { GradientEffect } from "@/components/shared/gradient-effect/GradientEffect";
import { ExperienceContainer } from "@/components/header/experience-container/ExperienceContainer";
import { UnionIcon } from "@/components/shared/icons/union-icon/UnionIcon";
import { DrawnStarIcon } from "@/components/shared/icons/drawn-star-icon/DrawnStarIcon";
import { LineIcon } from "@/components/shared/icons/line-icon/LineIcon";
import { CircleIcon } from "@/components/shared/icons/circle-icon/CircleIcon";
import { HeaderGetInTouchButton } from "@/components/header/get-in-touch-button/HeaderGetInTouchButton";

/**
 * Main header component that displays developer information, portfolio greeting,
 * experience details, and call-to-action button.
 */
export const Header: React.FC<HeaderProps> = ({
  developer, // Developer entity containing all profile information
  className = "", // Optional CSS classes
  ...props // Additional HTML attributes
}) => {
  return (
    <BackgroundContainer
      as="header"
      intent="primary_gray"
      className={`relative overflow-x-hidden overflow-y-hidden ${className}`}
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      {/* Navigation bar - only visible on medium screens and above */}
      <Navigation className="m-6" />

      {/* Decorative icons positioned absolutely for visual interest */}
      <UnionIcon className="absolute -left-10 -bottom-10 md:bottom-0 md:left-1 text-text-gray/30" />
      <DrawnStarIcon className="absolute top-28 -right-2 md:right-5 text-text-gray/20" />
      <LineIcon className="absolute bottom-1/4 right-0 text-black/90" />
      <CircleIcon className="absolute top-4 md:top-28 left-10 text-black/90" />

      {/* Greeting container - responsive positioning across breakpoints */}
      <GreetingContainer
        greeting={developer.greeting}
        className="mx-auto my-5 md:absolute md:bottom-1/2 md:w-1/3 md:translate-y-1/2 md:left-1 lg:bottom-1/4 lg:w-1/4 lg:left-10 xl:-translate-x-2/3 xl:left-1/4"
      />

      {/* Yellow gradient background for title and profile area */}
      <GradientEffect intent="yellow">
        <div className="relative md:mt-16">
          {/* Stack Engineer title - responsive text size with complex scaling */}
          <h1 className="text-[15vw] md:mt-5 md:text-[10.7vw] md:transform md:scale-[1.2] xl:scale-[1.15] 2xl:scale-[1.1] md:translate-x-[-2%] font-bold text-center leading-none whitespace-normal md:whitespace-nowrap mb-2 relative z-10">
            Stack Engineer
          </h1>

          {/* Developer image container with absolute positioning for experience indicators */}
          <div className="relative w-full z-20 h-[500px] md:-mt-16">
            {/* Developer profile image - optimized with Next.js Image */}
            <Image
              src={developer.imageUrl}
              alt={`${developer.name} - Web Developer`}
              fill
              priority // Loads with high priority for page LCP
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing for performance
              quality={90}
            />

            {/* Experience containers - centered on mobile, right-aligned on desktop */}
            <div className="flex flex-col items-center space-y-4 absolute right-1/2 translate-x-1/2 bottom-[23%] w-fit md:translate-x-1/2 md:right-1/4">
              {/* Work experience indicator */}
              <ExperienceContainer
                startDate={developer.workExperienceStartDate}
                title="Work Experience"
                className="md:mb-8"
              />

              {/* IT experience indicator - offset slightly for visual balance */}
              <ExperienceContainer
                startDate={developer.itExperienceStartDate}
                title="IT Experience"
                className="md:ml-8"
              />
            </div>

            {/* CTA button - centered at bottom of container */}
            <HeaderGetInTouchButton className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-fit" />
          </div>
        </div>
      </GradientEffect>
    </BackgroundContainer>
  );
};
