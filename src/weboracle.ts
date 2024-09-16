import { Config } from "@/config";
import { Answer } from "@/api/answer";
import { Browse } from "@/api/browse";
import { Crawl } from "@/api/crawl";
import { Search } from "@/api/search";
import { Scrape } from "@/api/scrape";

class WebOracle {
  private config: Config;
  public answer: Answer;
  public browse: Browse;
  public crawl: Crawl;
  public search: Search;
  public scrape: Scrape;

  constructor(apiKey: string, options: Partial<Config> = {}) {
    this.config = new Config(apiKey, options);
    this.answer = new Answer(this.config);
    this.browse = new Browse(this.config);
    this.crawl = new Crawl(this.config);
    this.search = new Search(this.config);
    this.scrape = new Scrape(this.config);
  }
}

export default WebOracle;
