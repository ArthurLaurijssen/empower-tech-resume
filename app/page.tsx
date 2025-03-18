import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { Header } from "@/components/header/Header";
import { DeveloperSkillsContainer } from "@/components/developer-skills/DeveloperSkillsContainer";
import { Mission } from "@/components/mission/Mission";
import { Experiences } from "@/components/experiences/Experiences";
import { Footer } from "@/components/footer/Footer";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();
  return (
    <>
      <Header developer={developer} id="header" />
      <main>
        <DeveloperSkillsContainer
          id="projects"
          developerSkills={developer.developerProficiencies}
        />

        <Mission mission={developer.mission} id="mission" />

        <Experiences experiences={developer.experiences} id="experiences" />
      </main>
      <Footer developer={developer} id="footer" />
    </>
  );
}
