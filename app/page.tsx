import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { BackgroundContainer } from "@/components/background-container/BackgroundContainer";
import { Header } from "@/components/header/Header";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();

  return (
    <>
      <Header developer={developer} />
      <BackgroundContainer as="section" intent="black">
        <h1 className="text-white text-4xl font-semibold">
          Languages & experiences
        </h1>
      </BackgroundContainer>
    </>
  );
}
