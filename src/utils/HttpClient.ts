import axios, { AxiosRequestConfig } from "axios";
import { serverConfig } from "../constants/serverConfig";
import { keycloak } from "../lib/keycloak";
import { getCurrentEnvironment } from "./sessionStorageHandling";

const getBaseURL = () => {
  const serverEnv = getCurrentEnvironment();
  return serverConfig[serverEnv].value;
};

export const getHeaders = () => ({
  authorization: `Bearer ${keycloak.token}`,
});

export class HttpClient {
  static async request<T, D>(path: string, options: AxiosRequestConfig<D>): Promise<T> {
    try {
      const response = await axios.request({
        ...options,
        baseURL: getBaseURL(),
        url: path,
        headers: getHeaders(),
      });
      console.log({ response });
      return response.data;
    } catch (error) {
      // TODO: add 401 handling here
      console.log(error);
      throw error;
    }
  }

  static async get<T, D = Record<string, unknown>>(path: string, params: D = {} as D): Promise<T> {
    return HttpClient.request(path, { params, method: "GET" });
  }

  static async post<T, D = Record<string, unknown>>(path: string, data: D = {} as D): Promise<T> {
    return HttpClient.request<T, D>(path, { data, method: "POST" });
  }

  // static async put<T, D = Record<string, unknown>>(
  //   path: string,
  //   data: D = {} as D,
  //   serverEnv?: ServerEnvironment,
  // ): Promise<T> {
  //   return HttpClient.request<T, D>(path, { data, method: "PUT" }, serverEnv);
  // }

  // static async delete<T, D = Record<string, unknown>>(
  //   path: string,
  //   params: D = {} as D,
  //   serverEnv?: ServerEnvironment,
  // ): Promise<T> {
  //   return HttpClient.request(path, { params, method: "DELETE" }, serverEnv);
  // }
}
