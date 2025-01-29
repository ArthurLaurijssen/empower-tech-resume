export abstract class BaseApiService {
  protected static readonly DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  protected static async makeRequest<T>(
    url: string,
    options: RequestInit = {},
  ): Promise<T | null> {
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        ...this.DEFAULT_HEADERS,
        ...options.headers,
      },
      cache: "no-store",
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        console.error(`API error: ${response.status}`, await response.text());
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  }
}
