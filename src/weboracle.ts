import { Config } from "@/config";
import { Answer } from "@/api/answer";
import { Browse } from "@/api/browse";
import { Crawl } from "@/api/crawl";
import { Search } from "@/api/search";
import { Scrape } from "@/api/scrape";

class WebOracle {
  private config: Config;

  constructor(apiKey: string, options: Partial<Config> = {}) {
    this.config = new Config(apiKey, options);
  }

  answer(): Answer {
    return new Answer(this.config);
  }

  browse(): Browse {
    return new Browse(this.config);
  }

  crawl(): Crawl {
    return new Crawl(this.config);
  }

  search(): Search {
    return new Search(this.config);
  }

  scrape(): Scrape {
    return new Scrape(this.config);
  }
}

export default WebOracle;
