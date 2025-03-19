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
 *
 * Example usage:
 * ```tsx
 * <FormattedText text="This is **bold** text" as="p" />
 * ```
 */
export const FormattedText: React.FC<FormattedTextProps> = ({
  text, // The text to format, potentially containing **bold** markers
  className = "", // CSS classes for the container element
  boldClassName = "text-black font-semibold", // CSS classes for bold text segments
  as = "span", // HTML element type to render as
  ...props // All other HTML attributes
}) => {
  /**
   * Parse the text into segments of plain and bold text
   * This converts a string like "Hello **world**" into structured segments
   */
  const segments: TextSegment[] =
    TextFormattingUtils.parseTextWithBoldMarkers(text);

  // Use the specified element type (p, span, h1, etc.)
  const Element = as;

  return (
    <Element className={className} {...props}>
      {segments.map((segment, index) => {
        switch (segment.type) {
          case TextSegmentType.BOLD:
            // Render bold segments with <strong> and custom classes
            return (
              <strong key={index} className={boldClassName}>
                {segment.content}
              </strong>
            );
          case TextSegmentType.PLAIN:
          default:
            // Render plain text segments with a fragment
            return (
              <React.Fragment key={index}>{segment.content}</React.Fragment>
            );
        }
      })}
    </Element>
  );
};
