export class AgentSearchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "AgentSearchError";
    this.status = status;
  }
}
