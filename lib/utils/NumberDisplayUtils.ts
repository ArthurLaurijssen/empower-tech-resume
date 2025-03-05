/**
 * Utility class for formatting numbers for display purposes
 */
export class NumberDisplayUtils {
  /**
   * Formats a number into a zero-padded string with the specified padding length.
   * For example, 1 becomes "01", 2 becomes "02", etc.
   *
   * @param value - The number to format
   * @param padLength - The desired length of the resulting string (default: 2)
   * @returns A zero-padded string representation of the number
   */
  static formatNumberWithZeroPadding(
    value: number,
    padLength: number = 2,
  ): string {
    return value.toString().padStart(padLength, "0");
  }

  /**
   * Formats an index (0-based) into a zero-padded string with the specified padding length.
   * For example, index 0 becomes "01", 1 becomes "02", etc.
   *
   * @param index - The zero-based index to format
   * @param padLength - The desired length of the resulting string (default: 2)
   * @returns A zero-padded string representation of the index + 1
   */
  static formatIndexToDisplayNumber(
    index: number,
    padLength: number = 2,
  ): string {
    return this.formatNumberWithZeroPadding(index + 1, padLength);
  }

  /**
   * Formats a sequence of indices (0-based) into zero-padded strings
   * Useful for batch processing of array indices
   *
   * @param indices - Array of indices to format
   * @param padLength - The desired length of the resulting strings (default: 2)
   * @returns Array of zero-padded string representations
   */
  static formatIndicesArray(
    indices: number[],
    padLength: number = 2,
  ): string[] {
    return indices.map((index) =>
      this.formatIndexToDisplayNumber(index, padLength),
    );
  }
}
