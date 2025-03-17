import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { Header } from "@/components/header/Header";
import BreakPointIndicator from "@/components/shared/break-point-indicator/BreakPointIndicator";
import { DeveloperSkillsContainer } from "@/components/developer-skills/DeveloperSkillsContainer";
import { Mission } from "@/components/mission/Mission";
import { Experiences } from "@/components/experiences/Experiences";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();
  return (
    <>
      <BreakPointIndicator></BreakPointIndicator>
      <Header developer={developer} />

      <DeveloperSkillsContainer
        developerSkills={developer.developerProficiencies}
      ></DeveloperSkillsContainer>
      <Mission mission={developer.mission}></Mission>
      <Experiences experiences={developer.experiences}></Experiences>
    </>
  );
}
