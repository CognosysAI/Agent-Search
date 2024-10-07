# AgentSearch TypeScript SDK

The official TypeScript SDK for interacting with the AgentSearch API. This SDK provides a simple and intuitive interface for making requests to various AgentSearch endpoints.

## Installation

Install the SDK using npm:

```bash
npm install agent-search
```

Or using yarn:

```bash
yarn add agent-search
```

## Usage

First, import and initialize the AgentSearch client:

```typescript
import { AgentSearch } from "agentsearch-sdk";

const agentSearch = new AgentSearch("your_api_key");
```

Now you can use the various API methods:

### Answer API

```typescript
// Get an answer
const answerResponse = await agentSearch.answer.get({
  query: "What is the capital of France?",
});

// Perform an advanced search
const advancedSearchResponse = await agentSearch.answer.searchAdvanced({
  query: "Latest developments in AI",
  additionalInstructions: "Focus on the last 6 months",
});
```

### Browse API

```typescript
const browseResult = await agentSearch.browse.explore({
  url: "https://example.com",
  singlePage: true,
});
```

### Crawl API

```typescript
const crawlResult = await agentSearch.crawl.start({
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
const searchResults = await agentSearch.search.serperSearch({
  q: "best restaurants in New York",
  num: 10,
});

// Perform a LinkedIn search
const linkedInResults = await agentSearch.search.linkedInSearch({
  query: "software engineers",
  page: 1,
  resultsPerPage: 20,
});

// Rerank search results
const rerankedResults = await agentSearch.search.rerank({
  query: "machine learning applications",
});

// Generate search queries
const generatedQueries = await agentSearch.search.generateQueries({
  query: "Electric vehicles market trends",
});
```

### Scrape API

```typescript
const scrapedContent = await agentSearch.scrape.extract({
  url: "https://example.com",
  scrapeOptions: {
    formats: ["markdown", "html"],
    onlyMainContent: true,
  },
});
```

## Error Handling

The SDK uses custom `AgentSearchError` for error handling. You can catch and handle these errors in your code:

```typescript
try {
  const result = await agentSearch.answer.getAnswer({ query: "Some query" });
  // Handle successful response
} catch (error) {
  if (error instanceof AgentSearchError) {
    console.error(`API Error: ${error.message}, Status: ${error.status}`);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## Documentation

For detailed information about each API endpoint and its parameters, please refer to the [API documentation](./docs/API.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
