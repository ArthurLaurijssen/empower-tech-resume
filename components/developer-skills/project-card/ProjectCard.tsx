import React from "react";
import { ProjectCardProps } from "@/components/developer-skills/project-card/types";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className,
  ...props
}: ProjectCardProps) => {
  return (
    <div className={`${className}`} {...props}>
      <div className="relative w-[400px] h-[250px] mb-6">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded-2xl"
          sizes="400px"
        />
      </div>
      <h2 className="font-sora font-semibold text-2xl text-white mb-2">
        {project.title}
      </h2>
      <p className="font-inter font-normal text-lg text-text-light-gray">
        {project.description}
      </p>
    </div>
  );
};
