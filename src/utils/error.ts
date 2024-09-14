export class WebOracleError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "WebOracleError";
    this.status = status;
  }
}
