import { BaseApiService } from "@/lib/services/api/BaseApiService";
import { Developer } from "@/models/entities/Developer";
import { ApiResponse } from "@/lib/services/types/ApiResponse";

/**
 * Service class for handling developer-related API operations.
 *
 * Extends BaseApiService to leverage common HTTP request functionality
 * while providing specific methods for developer data retrieval.
 */
export class DeveloperService extends BaseApiService {
  /**
   * Fetches the developer profile data from the API.
   *
   * @returns A Promise resolving to the Developer object
   * @throws Error if the API URL is not configured
   * @throws Error if the API request fails or returns invalid data
   */
  static async getDeveloper(): Promise<Developer> {
    // Get API URL from environment variables
    const apiUrl = process.env.DEVELOPER_API_URL;

    // Validate API URL configuration
    if (!apiUrl) {
      throw new Error("Developer API URL required");
    }

    // Make API request using the base service's makeRequest method
    const response = await this.makeRequest<ApiResponse<Developer>>(apiUrl);

    // Validate response and extract developer data
    if (!response || !response.success || !response.data) {
      throw new Error("Failed to retrieve developer");
    }

    return response.data as Developer;
  }
}
