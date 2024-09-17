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
  data: {
    searchParameters: SearchRequest;
    organic: OrganicResult[];
    places?: Place[];
    topStories?: TopStory[];
    knowledgeGraph?: KnowledgeGraph;
    relatedSearches: RelatedSearch[];
    answerBox?: AnswerBox;
    peopleAlsoAsk?: PeopleAlsoAskItem[];
  };
}

// Response types
export interface AnswerResponse {
  data: { answer: string; input: string; researchResults: ResearchResult[] };
}

export interface AdvancedSearchResponse {
  data: string;
}

export interface GenerateQueriesResponse {
  data: {
    result: {
      queries: string[];
    };
  };
}

export interface BrowseResponse {
  data: {
    url: string;
    answer?: string;
    linksCrawled?: string[];
    llmExtraction?: Record<string, unknown>;
  };
}

export interface CrawlResponse {
  data: CrawlStatusResponse[];
}

export interface ScrapeResponse {
  data: Document;
}

export interface LinkedInSearchResponse {
  data: {
    profiles: LinkedInProfile[];
    pagination: {
      currentPage: number;
      resultsPerPage: number;
      totalResultsOnPage: number;
      hasMoreResults: boolean;
    };
    queryInfo: {
      originalQuery: string;
      refinedQuery: string;
      location: string | null;
      countryCode: string | null;
    };
  };
}

export interface RerankResponse {
  data: {
    queries: string[];
    rerankedResults: ResearchResult[];
    researchResults: ResearchResult[];
  };
}

// Additional types
export interface ResearchResult {
  knowledgeGraph?: SerperResponse["data"]["knowledgeGraph"];
  answerBox?: SerperResponse["data"]["answerBox"];
  links: {
    title: string;
    snippet: string;
    url: string;
    index: number;
    markdown: string;
    date?: string;
    llmSummary?: string;
    relevanceScore?: number;
  }[];
}

export interface LinkedInProfile {
  title: string;
  link: string;
  snippet: string;
}

export interface DocumentMetadata {
  title?: string;
  description?: string;
  language?: string;
  keywords?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogAudio?: string;
  ogDeterminer?: string;
  ogLocale?: string;
  ogLocaleAlternate?: string[];
  ogSiteName?: string;
  ogVideo?: string;
  dctermsCreated?: string;
  dcDateCreated?: string;
  dcDate?: string;
  dctermsType?: string;
  dcType?: string;
  dctermsAudience?: string;
  dctermsSubject?: string;
  dcSubject?: string;
  dcDescription?: string;
  dctermsKeywords?: string;
  modifiedTime?: string;
  publishedTime?: string;
  articleTag?: string;
  articleSection?: string;
  sourceURL?: string;
  statusCode?: number;
  error?: string;
  [key: string]: any;
}

export interface Document {
  url?: string;
  markdown?: string;
  html?: string;
  rawHtml?: string;
  links?: string[];
  extract?: any;
  screenshot?: string;
  metadata?: DocumentMetadata;
}

export interface CrawlParams {
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

export interface CrawlResponse {
  id?: string;
  url?: string;
  success: true;
  error?: string;
}

export interface CrawlStatusResponse {
  success: true;
  status: "scraping" | "completed" | "failed" | "cancelled";
  completed: number;
  total: number;
  creditsUsed: number;
  expiresAt: Date;
  next?: string;
  data: Document[];
}

export interface MapParams {
  search?: string;
  ignoreSitemap?: boolean;
  includeSubdomains?: boolean;
  limit?: number;
}

export interface MapResponse {
  success: true;
  links?: string[];
  error?: string;
}
