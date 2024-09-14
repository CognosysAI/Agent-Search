import { Config } from "@/config";
import {
  SearchRequest,
  LinkedInSearchRequest,
  RerankRequest,
  GenerateQueriesRequest,
} from "@/types";
import { makeRequest } from "@/utils/http";

export class Search {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async serperSearch(params: SearchRequest | SearchRequest[]): Promise<any> {
    return makeRequest(this.config, "POST", "/search/serper", params);
  }

  async searchLinkedIn(params: LinkedInSearchRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/search/linkedin", params);
  }

  async rerank(params: RerankRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/search/rerank", params);
  }

  async generateQueries(params: GenerateQueriesRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/search/generate-queries", params);
  }
}
