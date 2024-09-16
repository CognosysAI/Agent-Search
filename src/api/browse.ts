import { Config } from "../config";
import { BrowseRequest, BrowseResponse } from "../types";
import { makeRequest } from "../utils/http";

export class Browse {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async explore(params: BrowseRequest): Promise<BrowseResponse> {
    return makeRequest<BrowseResponse>(
      this.config,
      "POST",
      "/browse/browse",
      params
    );
  }
}
