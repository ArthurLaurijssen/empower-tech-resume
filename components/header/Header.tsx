import { HeaderProps } from "@/components/header/types";
import React from "react";
import { Navigation } from "@/components/header/navigation/Navigation";
import Image from "next/image";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { GreetingContainer } from "@/components/header/greeting-container/GreetingContainer";
import { GradientEffect } from "@/components/shared/gradient-effect/GradientEffect";
import { DiscussButton } from "@/components/header/discuss-button/DiscussButton";
import { ExperienceContainer } from "@/components/header/experience-container/ExperienceContainer";
import { UnionIcon } from "@/components/shared/icons/union-icon/UnionIcon";
import { StarIcon } from "@/components/shared/icons/star-icon/StarIcon";
import { LineIcon } from "@/components/shared/icons/line-icon/LineIcon";
import { CircleIcon } from "@/components/shared/icons/circle-icon/CircleIcon";

export const Header: React.FC<HeaderProps> = ({ developer }) => {
  return (
    <BackgroundContainer
      as="header"
      intent="primary_gray"
      className="relative overflow-x-hidden overflow-y-hidden"
    >
      {/* Navigation */}
      <Navigation className="m-6"> </Navigation>
      <UnionIcon className="absolute  -left-10 -bottom-10 md:bottom-0 md:left-1 text-text-gray/30"></UnionIcon>
      <StarIcon className="absolute top-28 -right-2 md:right-5 text-text-gray/20"></StarIcon>
      <LineIcon className="absolute bottom-1/4 right-0 text-black/90"></LineIcon>
      <CircleIcon className="absolute top-4 md:top-28 left-10 text-black/90"></CircleIcon>
      {/* Greeting container */}
      <GreetingContainer
        greeting={developer.greeting}
        className="mx-auto my-5 md:absolute md:bottom-1/2  md:w-1/3 md:translate-y-1/2 md:left-1 lg:bottom-1/4 lg:w-1/4 lg:left-10 xl:-translate-x-2/3 xl:left-1/4"
      ></GreetingContainer>

      <GradientEffect intent="yellow">
        <div className="relative md:mt-16">
          {/* Stack Engineer title */}
          <h1 className="text-[15vw] md:mt-5 md:text-[10.7vw] md:transform md:scale-[1.2] xl:scale-[1.15] 2xl:scale-[1.1] md:translate-x-[-2%] font-bold text-center leading-none whitespace-normal md:whitespace-nowrap mb-2 relative z-10">
            Stack Engineer
          </h1>
          {/* Image positioned in front */}
          <div className="relative w-full z-20 h-[500px] md:-mt-16  ">
            <Image
              src={developer.imageUrl}
              alt={`${developer.name} - Web Developer`}
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
            <div className="flex flex-col items-center space-y-4 absolute left-1/2 -translate-x-1/2 bottom-[23%] w-fit md:translate-x-1/2 md:left-auto md:right-1/4">
              <ExperienceContainer
                startDate={developer.workExperienceStartDate}
                title="Work Experience"
                className="md:mb-8"
              />
              <ExperienceContainer
                startDate={developer.itExperienceStartDate}
                title="IT Experience"
                className="md:ml-8"
              />
            </div>
            <DiscussButton className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-fit"></DiscussButton>
          </div>
        </div>
      </GradientEffect>
    </BackgroundContainer>
  );
};
