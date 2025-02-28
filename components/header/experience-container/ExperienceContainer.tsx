import React from "react";
import { DateDisplayUtils } from "@/lib/utils/DateDisplayUtils";
import { ExperienceContainerProps } from "@/components/header/experience-container/types";

export const ExperienceContainer: React.FC<ExperienceContainerProps> = ({
  startDate,
  title,
  className,
  ...props
}: ExperienceContainerProps) => {
  const experienceInYears = DateDisplayUtils.getFormattedYears(startDate);

  return (
    <div
      className={`bg-white/50 backdrop-blur-xl w-fit py-2 px-4 rounded-3xl ${className || ""}`}
      {...props}
    >
      <div className="flex gap-4 items-center">
        <span className="font-semibold text-5xl text-yellow-500">
          {experienceInYears}
        </span>
        <div>
          <span className="text-xl font-normal text-text-gray">Years</span>
          <h3 className="text-black font-semibold text-2xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};
