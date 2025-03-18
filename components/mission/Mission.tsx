import { FC } from "react";
import { MissionProps } from "@/components/mission/types";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { DrawingIcon } from "@/components/shared/icons/drawing-icon/DrawingIcon";
import { FormattedText } from "@/components/shared/formatted-text/FormattedText";

export const Mission: FC<MissionProps> = ({
  mission,
  className = "",
  ...props
}: MissionProps) => {
  return (
    <BackgroundContainer
      intent="mission_gray"
      className={`py-10 px-6 relative ${className}`}
      as="section"
      {...props} // Forward all other props like id, aria-* attributes, etc.
    >
      <div className="flex gap-3 items-center border border-text-mission-gray w-fit px-6 py-2 rounded-3xl mb-6">
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <span className="text-2xl font-medium">{mission.title}</span>
      </div>
      <DrawingIcon className="absolute top-1 right-8 md:top-6 md:right-16 text-yellow-500" />

      <FormattedText
        text={mission.description}
        className="text-text-mission-gray text-4xl w-full md:w-4/5"
        boldClassName="text-black font-semibold"
        as="p"
      />
    </BackgroundContainer>
  );
};
