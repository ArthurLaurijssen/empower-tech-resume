import { DeveloperService } from "@/lib/services/developer/DeveloperService";
import { Header } from "@/components/header/Header";
import { DeveloperSkillsContainer } from "@/components/developer-skills/DeveloperSkillsContainer";
import { Mission } from "@/components/mission/Mission";
import { Experiences } from "@/components/experiences/Experiences";
import { Footer } from "@/components/footer/Footer";
import BreakpointIndicator from "@/components/shared/break-point-indicator/BreakPointIndicator";

/**
 * Home page component that serves as the main entry point for the developer portfolio.
 *
 * This is a Next.js Server Component that fetches developer data and renders
 * the complete portfolio page with all its sections in a structured layout.
 *
 * The component is structured as follows:
 * - Header: Developer introduction and navigation
 * - Main content:
 *   - Skills & Projects: Technical skills and project showcase
 *   - Mission: Developer's professional mission statement
 *   - Experiences: Work history and education
 * - Footer: Contact information and additional links
 *
 * @returns The rendered Home page component
 */
export default async function Home() {
  // Fetch developer data from the API service
  // This is executed server-side before the page is rendered
  const developer = await DeveloperService.getDeveloper();

  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <>
      {/* Development-only breakpoint indicator */}
      {isDevelopment && <BreakpointIndicator />}

      {/* Header section with developer profile information */}
      <Header developer={developer} id="header" />
      <main>
        {/* Skills and projects section */}
        <DeveloperSkillsContainer
          id="projects"
          developerSkills={developer.developerProficiencies}
        />

        {/* Mission statement section */}
        <Mission mission={developer.mission} id="mission" />

        {/* Work and education experiences section */}
        <Experiences experiences={developer.experiences} id="experiences" />
      </main>

      {/* Footer with contact details */}
      <Footer developer={developer} id="footer" />
    </>
  );
}
