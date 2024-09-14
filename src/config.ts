export interface Config {
  apiKey: string;
  baseUrl: string;
  version: string;
}
export class Config implements Config {
  constructor(apiKey: string, options: Partial<Config> = {}) {
    this.apiKey = apiKey;
    this.baseUrl = options.baseUrl || "https://example.com/api";
    this.version = options.version || "v1";
  }
}
