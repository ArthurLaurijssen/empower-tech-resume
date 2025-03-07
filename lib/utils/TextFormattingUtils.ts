/**
 * Enum representing the different types of text segments
 */
export enum TextSegmentType {
  PLAIN = "plain",
  BOLD = "bold",
}

/**
 * Interface for a text segment after parsing
 */
export interface TextSegment {
  type: TextSegmentType;
  content: string;
}

/**
 * Utility functions for text formatting
 */
export class TextFormattingUtils {
  /**
   * Parses text with **bold** markers and returns a structured representation
   * @param text The input text with optional **bold** markers
   * @returns An array of typed TextSegment objects
   */
  static parseTextWithBoldMarkers(text: string): TextSegment[] {
    if (!text) return [];

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return {
          type: TextSegmentType.BOLD,
          content: part.slice(2, -2),
        };
      }

      return {
        type: TextSegmentType.PLAIN,
        content: part,
      };
    });
  }
}
