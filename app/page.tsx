import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { Header } from "@/components/header/Header";
import BreakPointIndicator from "@/components/shared/break-point-indicator/BreakPointIndicator";
import { DeveloperSkillsContainer } from "@/components/developer-skills/DeveloperSkillsContainer";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();
  console.log(developer);
  return (
    <>
      <BreakPointIndicator></BreakPointIndicator>
      <Header developer={developer} />

      <DeveloperSkillsContainer
        developerSkills={developer.developerProficiencies}
      ></DeveloperSkillsContainer>
    </>
  );
}
