/**
 * Abstract base class for API services that handles common HTTP request functionality.
 *
 * This class provides a foundation for all API service implementations with standardized
 * request handling, error management, and response parsing.
 */
export abstract class BaseApiService {
  /**
   * Default HTTP headers to be included with all API requests
   * Sets JSON as the default content type and expected response format
   */
  protected static readonly DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  /**
   * Makes an HTTP request to the specified URL with the provided options.
   *
   * @template T - The expected response data type
   * @param url - The URL to make the request to
   * @param options - Request options (method, headers, body, etc.)
   * @returns A Promise resolving to the response data or null if the request failed
   */
  protected static async makeRequest<T>(
    url: string,
    options: RequestInit = {},
  ): Promise<T | null> {
    // Merge default headers with any provided headers
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        ...this.DEFAULT_HEADERS,
        ...options.headers,
      },
      // Use a reasonable revalidation period instead of no-store
      next: { revalidate: 1 }, // Revalidate every hour (3600 seconds)
    };

    try {
      // Make the HTTP request
      const response = await fetch(url, requestOptions);

      // Handle unsuccessful responses (non-2xx status codes)
      if (!response.ok) {
        console.error(`API error: ${response.status}`, await response.text());
        return null;
      }

      // Parse and return the JSON response
      return await response.json();
    } catch (error) {
      // Handle network errors or JSON parsing errors
      console.error("Failed to fetch data:", error);
      return null;
    }
  }
}
