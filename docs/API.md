# AgentSearch API Reference

This document provides detailed information about the AgentSearch API endpoints and their usage through the TypeScript SDK.

## Table of Contents

1. [Answer API](#answer-api)
2. [Browse API](#browse-api)
3. [Crawl API](#crawl-api)
4. [Search API](#search-api)
5. [Scrape API](#scrape-api)

## Answer API

The Answer API provides methods for getting answers and performing advanced searches.

### get

Get an answer to a specific query.

```typescript
agentSearch.answer.get(params: AnswerRequest): Promise<any>
```

Parameters:

- `query` (string, required): The question or query to answer.
- `additionalInstructions` (string, optional): Additional instructions for processing the query.
- `dateFilter` (DateFilter, optional): Filter results by date ('hour' | 'day' | 'week' | 'month' | 'year').

### advancedSearch

Perform an advanced search with more complex parameters.

```typescript
agentSearch.answer.advancedSearch(params: AdvancedSearchRequest): Promise<any>
```

Parameters:

- `query` (string, required): The search query.
- `additionalInstructions` (string, optional): Additional instructions for the search.

## Browse API

The Browse API allows you to browse and extract information from web pages.

### browse

Browse a web page and extract information.

```typescript
agentSearch.browse.explode(params: BrowseRequest): Promise<any>
```

Parameters:

- `url` (string, required): The URL of the web page to browse.
- `scrapeOptions` (ScrapeParams, optional): Options for scraping the page.
- `crawlOptions` (CrawlOptions, optional): Options for crawling the page.
- `extractorOptions` (ExtractorOptions, optional): Options for extracting information.
- `mergeDocuments` (boolean, optional): Whether to merge multiple documents into one.
- `query` (string, optional): A query to filter the browsed content.
- `singlePage` (boolean, optional): Whether to browse only a single page or follow links.

## Crawl API

The Crawl API provides functionality to crawl websites.

### crawl

Crawl a website starting from a given URL.

```typescript
agentSearch.crawl.start(params: CrawlRequest): Promise<any>
```

Parameters:

- `url` (string, required): The starting URL for the crawl.
- `crawlOptions` (CrawlOptions, optional): Options for the crawl operation.

## Search API

The Search API offers various search capabilities, including Serper search, LinkedIn search, result reranking, and query generation.

### serperSearch

Perform a search using the Serper search engine.

```typescript
agentSearch.search.serperSearch(params: SearchRequest | SearchRequest[]): Promise<any>
```

Parameters:

- `q` (string, required): The search query.
- `type` (string, optional): The type of search ('search' | 'news' | 'images' | 'places').
- `num` (number, optional): The number of results to return.
- `tbs` (string, optional): Time-based search parameter.
- `dateFilter` (DateFilter, optional): Filter results by date.

### linkedInSearch

Perform a LinkedIn-specific search.

```typescript
agentSearch.search.linkedInSearch(params: LinkedInSearchRequest): Promise<any>
```

Parameters:

- `query` (string, required): The LinkedIn search query.
- `page` (number, optional): The page number of results to retrieve.
- `resultsPerPage` (number, optional): The number of results per page.
- `serperOptions` (object, optional): Additional options for the Serper search engine.

### rerank

Rerank search results based on relevance.

```typescript
agentSearch.search.rerank(params: RerankRequest): Promise<any>
```

Parameters:

- `query` (string, required): The query to use for reranking.

### generateQueries

Generate optimized search queries based on an initial query.

```typescript
agentSearch.search.generateQueries(params: GenerateQueriesRequest): Promise<any>
```

Parameters:

- `query` (string, required): The initial query to generate optimized queries from.

## Scrape API

The Scrape API allows you to extract content from web pages.

### scrape

Scrape content from a specific URL.

```typescript
agentSearch.scrape.extract(params: ScrapeRequest): Promise<any>
```

Parameters:

- `url` (string, required): The URL to scrape.
- `scrapeOptions` (ScrapeParams, optional): Options for the scrape operation.

For more detailed information about the types and interfaces used in these methods, please refer to the `types.ts` file in the SDK source code.
