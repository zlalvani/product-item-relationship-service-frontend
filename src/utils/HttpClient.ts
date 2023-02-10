import { Api } from "../generated/jobsApi";
import { keycloak, localAuthToken } from "../lib/keycloak";
import { serverConfig } from "./serverConfig";
import { getCurrentEnvironment } from "./sessionStorageHandling";

export const getBaseURL = () => {
  const serverEnv = getCurrentEnvironment();
  return serverConfig(serverEnv).value;
};

export const getHeaders = () => {
  let token;
  const serverEnv = getCurrentEnvironment();

  if (serverEnv === "LOCAL") {
    token = localAuthToken;
  } else {
    token = keycloak.token;
  }

  return {
    authorization: `Bearer ${token}`,
  };
};

export const getJobsApi = () => {
  const api = new Api({
    baseUrl: getBaseURL(),
    baseApiParams: {
      headers: getHeaders(),
    },
  });
  return api.irs;
};
