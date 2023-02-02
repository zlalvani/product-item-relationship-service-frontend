import { Api } from "../generated/jobsApi";
import { keycloak } from "../lib/keycloak";
import { serverConfig } from "./serverConfig";
import { getCurrentEnvironment } from "./sessionStorageHandling";

export const getBaseURL = () => {
  const serverEnv = getCurrentEnvironment();
  return serverConfig(serverEnv).value;
};

export const getHeaders = () => ({
  authorization: `Bearer ${keycloak.token}`,
});

export const getJobsApi = () => {
  const api = new Api({
    baseUrl: getBaseURL(),
    baseApiParams: {
      headers: getHeaders(),
    },
  });
  return api.irs;
};
