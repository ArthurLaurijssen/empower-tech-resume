import { FC } from "react";
import { MissionProps } from "@/components/mission/types";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { MissionDrawingIcon } from "@/components/shared/icons/mission-drawing-icon/MissionDrawingIcon";
import { FormattedText } from "@/components/shared/formatted-text/FormattedText";

export const Mission: FC<MissionProps> = ({ mission }: MissionProps) => {
  return (
    <BackgroundContainer
      intent="mission_gray"
      className="py-10 px-6 relative"
      as="section"
    >
      <div className="flex gap-3 items-center border border-text-mission-gray w-fit px-6 py-2 rounded-3xl mb-6">
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <span className="text-2xl font-medium">{mission.title}</span>
      </div>
      <MissionDrawingIcon className="absolute top-6 right-16 text-yellow-500"></MissionDrawingIcon>

      <FormattedText
        text={mission.description}
        className="text-text-mission-gray text-4xl w-4/5"
        boldClassName="text-black font-semibold"
        as="p"
      />
    </BackgroundContainer>
  );
};
