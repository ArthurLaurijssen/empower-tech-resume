import { HeaderProps } from "@/components/header/types";
import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import Image from "next/image";
import { BackgroundContainer } from "@/components/background-container/BackgroundContainer";
import { GreetingContainer } from "@/components/greeting-container/GreetingContainer";

export const Header: React.FC<HeaderProps> = ({ developer }) => {
  return (
    <BackgroundContainer as="header" intent="light_gray" className="pb-0">
      <Navigation></Navigation>
      <GreetingContainer greeting={developer.greeting}></GreetingContainer>
      <div className="relative h-[500px] md:h-[700px] w-full">
        <Image
          src={developer.imageUrl}
          alt={`${developer.name} - Web Developer`}
          fill
          priority
          className="object-cover md:object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </div>
    </BackgroundContainer>
  );
};
