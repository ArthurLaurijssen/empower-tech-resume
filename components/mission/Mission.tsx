import { FC } from "react";
import { MissionProps } from "@/components/mission/types";
import { BackgroundContainer } from "@/components/shared/background-container/BackgroundContainer";
import { DrawingIcon } from "@/components/shared/icons/drawing-icon/DrawingIcon";
import { FormattedText } from "@/components/shared/formatted-text/FormattedText";

/**
 * Mission Component
 *
 * This component displays a mission section with a title, description, and decorative elements.
 * It uses the BackgroundContainer for styling and layout, with a yellow indicator dot and a drawing icon.
 * The mission description can contain formatted text that will be rendered by the FormattedText component.
 *
 * @component
 */
export const Mission: FC<MissionProps> = ({
  mission, // The mission data object containing title and description
  className = "", // Optional CSS class name for additional styling
  ...props // All other HTML section element props
}: MissionProps) => {
  return (
    <BackgroundContainer
      intent="mission_gray" // Sets the background color scheme
      className={`py-10 px-6 relative ${className}`} // Padding and positioning, merges with provided className
      as="section" // Renders as a semantic section element
      {...props} // Forwards all other props like id, aria-* attributes, etc.
    >
      {/* Title container with yellow indicator dot */}
      <div className="flex gap-3 items-center border border-text-mission-gray w-fit px-6 py-2 rounded-3xl mb-6">
        {/* Yellow indicator dot */}
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        {/* Mission title */}
        <span className="text-2xl font-medium">{mission.title}</span>
      </div>

      {/* Decorative drawing icon, positioned absolutely */}
      <DrawingIcon className="absolute top-1 right-8 md:top-6 md:right-16 text-yellow-500" />

      {/* Mission description with formatted text support */}
      <FormattedText
        text={mission.description} // The mission description text
        className="text-text-mission-gray text-4xl w-full md:w-4/5" // Base styling for the text
        boldClassName="text-black font-semibold" // Styling for bold portions of the text
        as="p" // Renders as a paragraph element
      />
    </BackgroundContainer>
  );
};
