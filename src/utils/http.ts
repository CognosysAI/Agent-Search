import axios, { AxiosRequestConfig, Method } from "axios";
import { Config } from "../config";
import { WebOracleError } from "./error";

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
    if (error.response) {
      throw new WebOracleError(
        error.response.data.error || "Unknown error",
        error.response.status
      );
    } else if (error.request) {
      throw new WebOracleError("No response received from the server", 500);
    } else {
      throw new WebOracleError("Error setting up the request", 500);
    }
  }
}
