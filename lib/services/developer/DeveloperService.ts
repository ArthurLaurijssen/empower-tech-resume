import { BaseApiService } from "@/lib/services/api/BaseApiService";
import { Developer } from "@/models/entities/Developer";
import { ApiResponse } from "@/lib/services/types/ApiResponse";

export class DeveloperService extends BaseApiService {
  static async getDeveloper(): Promise<Developer> {
    const apiUrl = process.env.DEVELOPER_API_URL;
    if (!apiUrl) {
      throw new Error("Developer API URL required");
    }
    const response = await this.makeRequest<ApiResponse<Developer>>(apiUrl);

    if (!response || !response.success || !response.data) {
      throw new Error("Failed to retrieve developer");
    }

    return response.data as Developer;
  }
}
