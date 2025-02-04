import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { Navigation } from "@/components/navigation/Navigation";
import { BackgroundContainer } from "@/components/background-container/BackgroundContainer";
import Image from "next/image";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();

  return (
    <>
      <BackgroundContainer as="header" intent="light_gray">
        <Navigation></Navigation>
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
      <BackgroundContainer as="section" intent="black">
        <h1 className="text-white text-4xl font-semibold">
          Languages & experiences
        </h1>
      </BackgroundContainer>
    </>
  );
}
