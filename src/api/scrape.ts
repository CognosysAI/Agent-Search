import { Config } from "../config";
import { ScrapeRequest, ScrapeResponse } from "../types";
import { makeRequest } from "../utils/http";

export class Scrape {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async extract(params: ScrapeRequest): Promise<ScrapeResponse> {
    return makeRequest<ScrapeResponse>(this.config, "POST", "/scrape", params);
  }
}
