import React from "react";
import { ProjectsContainerProps } from "@/components/developer-skills/projects/types";
import { ProjectCard } from "@/components/developer-skills/project-card/ProjectCard";
import { Swiper } from "@/components/shared/swiper/Swiper";

/**
 * ProjectsContainer component displays a horizontal scrollable list of projects
 * using the Swiper component for a carousel-like experience.
 *
 * This component is typically used within a DeveloperSkill section to showcase
 * related projects.
 */
export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  projects, // Array of project objects to display
  className = "", // Optional additional CSS classes
  ...props // All other HTML div element props
}: ProjectsContainerProps) => {
  return (
    <div className={`pt-6 relative ${className}`} {...props}>
      {/* Swiper carousel with fixed slide width */}
      <Swiper mode="auto">
        {projects.map((project, index) => (
          <ProjectCard
            project={project} // Individual project data
            key={index} // React key for list rendering
            className="w-[250px] sm:w-[300px] md:w-[400px]" // Fixed width for consistent card sizing
          />
        ))}
      </Swiper>
    </div>
  );
};
