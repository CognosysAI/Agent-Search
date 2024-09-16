import { Config } from "../config";
import { CrawlRequest, CrawlResponse } from "../types";
import { makeRequest } from "../utils/http";

export class Crawl {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async start(params: CrawlRequest): Promise<CrawlResponse> {
    return makeRequest<CrawlResponse>(this.config, "POST", "/crawl", params);
  }
}
