import { Config } from "../config";
import { BrowseRequest } from "../types";
import { makeRequest } from "../utils/http";

export class Browse {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async explore(params: BrowseRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/browse/browse", params);
  }
}
