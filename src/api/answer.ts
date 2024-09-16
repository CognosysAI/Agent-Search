import { Config } from "../config";
import {
  AnswerRequest,
  AdvancedSearchRequest,
  AnswerResponse,
  AdvancedSearchResponse,
} from "../types";
import { makeRequest } from "../utils/http";

export class Answer {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async get(params: AnswerRequest): Promise<AnswerResponse> {
    return makeRequest<AnswerResponse>(this.config, "POST", "/answer", params);
  }

  async searchAdvanced(
    params: AdvancedSearchRequest
  ): Promise<AdvancedSearchResponse> {
    return makeRequest<AdvancedSearchResponse>(
      this.config,
      "POST",
      "/answer/advanced-search",
      params
    );
  }
}
