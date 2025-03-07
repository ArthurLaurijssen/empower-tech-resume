import React from "react";
import {
  TextFormattingUtils,
  TextSegment,
  TextSegmentType,
} from "@/lib/utils/TextFormattingUtils";
import { FormattedTextProps } from "@/components/shared/formatted-text/types";

/**
 * A component that renders text with support for **bold** formatting markers
 * Can be rendered as different semantic elements (p, h1, span, etc.)
 */
export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className = "",
  boldClassName = "text-black font-semibold",
  as = "span",
  ...props
}) => {
  // Parse the text into segments
  const segments: TextSegment[] =
    TextFormattingUtils.parseTextWithBoldMarkers(text);

  // Use the specified element type
  const Element = as;

  return (
    <Element className={className} {...props}>
      {segments.map((segment, index) => {
        switch (segment.type) {
          case TextSegmentType.BOLD:
            return (
              <strong key={index} className={boldClassName}>
                {segment.content}
              </strong>
            );
          case TextSegmentType.PLAIN:
          default:
            return (
              <React.Fragment key={index}>{segment.content}</React.Fragment>
            );
        }
      })}
    </Element>
  );
};
