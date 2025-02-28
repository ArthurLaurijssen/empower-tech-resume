/**
 * Utility class for formatting date-related information for display purposes
 */
export class DateDisplayUtils {
  /**
   * Converts a date string or Date object to a proper Date instance
   * @param date Date string in ISO format or Date object
   * @returns Date object
   */
  static ensureDate(date: string | Date): Date {
    if (date instanceof Date) {
      return date;
    }
    return new Date(date);
  }

  /**
   * Calculate the difference in years between a date and now
   * @param fromDate Starting date (string in ISO format or Date object)
   * @param minValue Minimum value to return (defaults to 1)
   * @returns Years as a decimal number (e.g., 9.7)
   */
  static getYearsSince(fromDate: string | Date, minValue = 1): number {
    const startDate = this.ensureDate(fromDate);
    const now = new Date();
    const diffTime = now.getTime() - startDate.getTime();
    const years = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    return Math.max(years, minValue);
  }

  /**
   * Format a number for display with padding
   * @param value The numeric value to format
   * @param options Formatting options
   * @returns Formatted string
   */
  static formatNumber(
    value: number,
    options: {
      minValue?: number;
      roundUp?: boolean;
      padZero?: boolean;
      minLength?: number;
    } = {},
  ): string {
    const {
      minValue = 1,
      roundUp = true,
      padZero = true,
      minLength = 2,
    } = options;

    // Apply minimum value
    let result = Math.max(value, minValue);

    // Round up if requested
    if (roundUp) {
      result = Math.ceil(result);
    }

    // Convert to string
    let formatted = String(result);

    // Add zero padding if needed
    if (padZero && formatted.length < minLength) {
      formatted = formatted.padStart(minLength, "0");
    }

    return formatted;
  }

  /**
   * Get formatted years since a date for display
   * @param fromDate The starting date (string in ISO format or Date object)
   * @returns Formatted years string (e.g., "01", "10")
   */
  static getFormattedYears(fromDate: string | Date): string {
    const years = this.getYearsSince(fromDate);
    return this.formatNumber(years);
  }

  /**
   * Get a display object with years value and label
   * @param fromDate The starting date (string in ISO format or Date object)
   * @param labelSingular Label for 1 year case (default: "Year")
   * @param labelPlural Label for multiple years case (default: "Years")
   * @returns Object with value and appropriate label
   */
  static getYearsDisplay(
    fromDate: string | Date,
    labelSingular = "Year",
    labelPlural = "Years",
  ): { value: string; label: string } {
    const years = this.getYearsSince(fromDate);
    const formattedYears = this.formatNumber(years);

    // Use correct plural form based on the value
    const label = Math.ceil(years) === 1 ? labelSingular : labelPlural;

    return {
      value: formattedYears,
      label,
    };
  }

  /**
   * Get a combined display for time periods
   * @param data Configuration for each time period to display
   * @returns Array of formatted display objects
   */
  static getTimeDisplay(
    data: Array<{
      date: string | Date;
      title: string;
      labelSingular?: string;
      labelPlural?: string;
    }>,
  ): Array<{ value: string; label: string; title: string }> {
    return data.map((item) => ({
      ...this.getYearsDisplay(item.date, item.labelSingular, item.labelPlural),
      title: item.title,
    }));
  }
}
