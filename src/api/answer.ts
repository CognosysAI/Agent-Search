import { Config } from "@/config";
import { AnswerRequest, AdvancedSearchRequest } from "@/types";
import { makeRequest } from "@/utils/http";

export class Answer {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async get(params: AnswerRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/answer", params);
  }

  async searchAdvanced(params: AdvancedSearchRequest): Promise<any> {
    return makeRequest(this.config, "POST", "/answer/advanced-search", params);
  }
}
