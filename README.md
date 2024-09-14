# WebOracle TypeScript SDK

The official TypeScript SDK for interacting with the WebOracle API. This SDK provides a simple and intuitive interface for making requests to various WebOracle endpoints.

## Installation

Install the SDK using npm:

```bash
npm install web-oracle
```

Or using yarn:

```bash
yarn add web-oracle
```

## Usage

First, import and initialize the WebOracle client:

```typescript
import WebOracle from "weboracle-sdk";

const webOracle = new WebOracle("your_api_key");
```

Now you can use the various API methods:

### Answer API

```typescript
// Get an answer
const answerResponse = await webOracle.answer.getAnswer({
  query: "What is the capital of France?",
});

// Perform an advanced search
const advancedSearchResponse = await webOracle.answer.advancedSearch({
  query: "Latest developments in AI",
  additionalInstructions: "Focus on the last 6 months",
});

// Generate search queries
const generatedQueries = await webOracle.answer.generateQueries({
  query: "Electric vehicles market trends",
});
```

### Browse API

```typescript
const browseResult = await webOracle.browse.browse({
  url: "https://example.com",
  singlePage: true,
});
```

### Crawl API

```typescript
const crawlResult = await webOracle.crawl.crawl({
  url: "https://example.com",
  crawlOptions: {
    maxDepth: 3,
    limit: 100,
  },
});
```

### Search API

```typescript
// Perform a Serper search
const searchResults = await webOracle.search.serperSearch({
  q: "best restaurants in New York",
  num: 10,
});

// Perform a LinkedIn search
const linkedInResults = await webOracle.search.linkedInSearch({
  query: "software engineers",
  page: 1,
  resultsPerPage: 20,
});

// Rerank search results
const rerankedResults = await webOracle.search.rerank({
  query: "machine learning applications",
});
```

### Scrape API

```typescript
const scrapedContent = await webOracle.scrape.scrape({
  url: "https://example.com",
  scrapeOptions: {
    formats: ["markdown", "html"],
    onlyMainContent: true,
  },
});
```

## Error Handling

The SDK uses custom `WebOracleError` for error handling. You can catch and handle these errors in your code:

```typescript
try {
  const result = await webOracle.answer.getAnswer({ query: "Some query" });
  // Handle successful response
} catch (error) {
  if (error instanceof WebOracleError) {
    console.error(`API Error: ${error.message}, Status: ${error.status}`);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## Documentation

For detailed information about each API endpoint and its parameters, please refer to the [API documentation](./docs/API.md).
