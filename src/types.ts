export interface AnswerRequest {
  query: string;
  additionalInstructions?: string;
  dateFilter?: DateFilter;
}
export interface AdvancedSearchRequest {
  query: string;
  additionalInstructions?: string;
}
export interface GenerateQueriesRequest {
  query: string;
}
export type DateFilter = "hour" | "day" | "week" | "month" | "year";
export interface BrowseRequest {
  url: string;
  scrapeOptions?: ScrapeParams;
  crawlOptions?: CrawlOptions;
  extractorOptions?: ExtractorOptions;
  mergeDocuments?: boolean;
  query?: string;
  singlePage?: boolean;
}
export interface CrawlRequest {
  url: string;
  crawlOptions?: CrawlOptions;
}
export interface ScrapeRequest {
  url: string;
  scrapeOptions?: ScrapeParams;
}
export interface SearchRequest {
  q: string;
  type?: "search" | "news" | "images" | "places";
  num?: number;
  tbs?: string;
  dateFilter?: DateFilter;
}
export interface LinkedInSearchRequest {
  query: string;
  page?: number;
  resultsPerPage?: number;
  serperOptions?: {
    query?: string;
    location?: string;
    countryCode?: string;
  };
}
export interface RerankRequest {
  query: string;
}
export interface ScrapeParams {
  formats: (
    | "markdown"
    | "html"
    | "rawHtml"
    | "content"
    | "links"
    | "screenshot"
    | "extract"
    | "full@screenshot"
  )[];
  headers?: Record<string, string>;
  includeTags?: string[];
  excludeTags?: string[];
  onlyMainContent?: boolean;
  extract?: {
    prompt?: string;
    schema?: any;
    systemPrompt?: string;
  };
  waitFor?: number;
  timeout?: number;
}
export interface CrawlOptions {
  includePaths?: string[];
  excludePaths?: string[];
  maxDepth?: number;
  limit?: number;
  allowBackwardLinks?: boolean;
  allowExternalLinks?: boolean;
  ignoreSitemap?: boolean;
  scrapeOptions?: ScrapeParams;
  webhook?: string;
}
export interface ExtractorOptions {
  mode?: "llm-extraction";
  extractionPrompt?: string;
  extractionSchema: Record<string, any>;
}
