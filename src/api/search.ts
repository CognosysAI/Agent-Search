import { Config } from "../config";
import {
  SearchRequest,
  LinkedInSearchRequest,
  RerankRequest,
  GenerateQueriesRequest,
  RerankResponse,
  LinkedInSearchResponse,
  SerperResponse,
  GenerateQueriesResponse,
} from "../types";
import { makeRequest } from "../utils/http";

export class Search {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async serperSearch(
    params: SearchRequest | SearchRequest[]
  ): Promise<SerperResponse> {
    return makeRequest<SerperResponse>(
      this.config,
      "POST",
      "/search/serper",
      params
    );
  }

  async searchLinkedIn(
    params: LinkedInSearchRequest
  ): Promise<LinkedInSearchResponse> {
    return makeRequest<LinkedInSearchResponse>(
      this.config,
      "POST",
      "/search/linkedin",
      params
    );
  }

  async rerank(params: RerankRequest): Promise<RerankResponse> {
    return makeRequest<RerankResponse>(
      this.config,
      "POST",
      "/search/rerank",
      params
    );
  }

  async generateQueries(
    params: GenerateQueriesRequest
  ): Promise<GenerateQueriesResponse> {
    return makeRequest<GenerateQueriesResponse>(
      this.config,
      "POST",
      "/search/generate-queries",
      params
    );
  }
}
