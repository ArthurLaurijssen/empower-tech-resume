import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { Navigation } from "@/components/navigation/Navigation";
import { Section } from "@/components/section/Section";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();

  return (
    <>
      <Section intent="light_gray">
        <Navigation></Navigation>
        <p>{developer.name}</p>
      </Section>
    </>
  );
}
