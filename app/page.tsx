import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { Header } from "@/components/header/Header";
import BreakPointIndicator from "@/components/shared/break-point-indicator/BreakPointIndicator";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();
  return (
    <>
      <BreakPointIndicator></BreakPointIndicator>
      <Header developer={developer} />

      <BackgroundContainer as="section" intent="secondary_black">
        <h1 className="text-white text-4xl font-semibold">
          Languages & experiences
        </h1>
      </BackgroundContainer>
    </>
  );
}
