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
  tbs?: string;
  location?: string;
  gl?: string;
  num?: number;
  page?: number;
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
  singlePage?: boolean;
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

interface Sitelink {
  title: string;
  link: string;
}

type Attributes = Record<string, string>;

export interface OrganicResult {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  position: number;
  sitelinks?: Sitelink[];
  rating?: number;
  ratingCount?: number;
  priceRange?: string;
  attributes?: Attributes;
  imageUrl?: string;
}

interface KnowledgeGraph {
  title: string;
  type: string;
  imageUrl: string;
  description: string;
  descriptionSource: string;
  descriptionLink: string;
  attributes: Record<string, string>;
}
interface Place {
  title: string;
  address: string;
  rating: number;
  ratingCount: number;
  cid: string;
}

interface TopStory {
  title: string;
  link: string;
  source: string;
  date: string;
  imageUrl: string;
}

interface RelatedSearch {
  query: string;
}

interface AnswerBox {
  snippet: string;
  snippetHighlighted: string[];
  title: string;
  link: string;
}

interface PeopleAlsoAskItem {
  question: string;
  snippet: string;
  title: string;
  link: string;
}

export interface SerperResponse {
  searchParameters: SearchRequest;
  organic: OrganicResult[];
  places?: Place[];
  topStories?: TopStory[];
  knowledgeGraph?: KnowledgeGraph;
  relatedSearches: RelatedSearch[];
  answerBox?: AnswerBox;
  peopleAlsoAsk?: PeopleAlsoAskItem[];
}
