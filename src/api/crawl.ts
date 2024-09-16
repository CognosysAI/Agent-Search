import { Config } from "../config";
import { CrawlRequest } from "../types";
import { makeRequest } from "../utils/http";

export class Crawl {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async start(params: CrawlRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/crawl", params);
  }
}
