import React from "react";
import { ProjectCardProps } from "@/components/developer-skills/project-card/types";
import Image from "next/image";

/**
 * ProjectCard component displays information about a single project
 * including an image, title, and description.
 *
 * This component is designed to be used within the ProjectsContainer
 * and displayed in a carousel/swiper layout.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project, // Project data object containing image, title, and description
  className, // Optional additional CSS classes
  ...props // All other HTML div element props
}: ProjectCardProps) => {
  return (
    <div className={`${className}`} {...props}>
      {/* Project image container with fixed dimensions */}
      <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[156.25px] sm:h-[187.5px] md:h-[250px] mb-6">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, 400px"
        />
      </div>

      {/* Project title */}
      <h2 className="font-sora font-semibold text-2xl text-white mb-2">
        {project.title}
      </h2>

      {/* Project description */}
      <p className="font-inter font-normal text-lg text-text-light-gray">
        {project.description}
      </p>
    </div>
  );
};
