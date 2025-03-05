import React from "react";
import { ProjectsContainerProps } from "@/components/developer-skills/projects/types";
import { ProjectCard } from "@/components/developer-skills/project-card/ProjectCard";
import { Swiper } from "@/components/shared/swiper/Swiper";

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  projects,
  className = "",
  ...props
}: ProjectsContainerProps) => {
  return (
    <div className={`pt-6 ${className}`} {...props}>
      <Swiper slideWidth={400}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} className="w-[4OOpx]" />
        ))}
      </Swiper>
    </div>
  );
};
