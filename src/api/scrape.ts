import { Config } from "../config";
import { ScrapeRequest } from "../types";
import { makeRequest } from "../utils/http";

export class Scrape {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async extract(params: ScrapeRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/scrape", params);
  }
}
