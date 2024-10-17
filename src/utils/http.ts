import axios, { AxiosRequestConfig, Method } from "axios";
import { Config } from "../config";
import { AgentSearchError } from "./error";

export async function makeRequest<T>(
  config: Config,
  method: Method,
  path: string,
  data?: any
): Promise<T> {
  const url = `${config.baseUrl}/${config.version}${path}`;
  const headers = {
    Authorization: `Bearer ${config.apiKey}`,
    "Content-Type": "application/json",
  };

  const axiosConfig: AxiosRequestConfig = {
    method,
    url,
    headers,
    data,
  };

  try {
    const response = await axios(axiosConfig);
    return response.data as T;
  } catch (error: any) {
    const errorMessage = error.stack || error.message || "Unknown error";

    if (error.response) {
      throw new AgentSearchError(
        `Error: ${error.response.data.error || "Unknown error"} - Status: ${
          error.response.status
        } - Stack: ${errorMessage}`,
        error.response.status
      );
    } else if (error.request) {
      throw new AgentSearchError(
        `No response received from the server. Request details: ${JSON.stringify(
          error.request
        )} - Stack: ${errorMessage}`,
        500
      );
    } else {
      throw new AgentSearchError(
        `Error setting up the request: ${errorMessage}`,
        500
      );
    }
  }
}
