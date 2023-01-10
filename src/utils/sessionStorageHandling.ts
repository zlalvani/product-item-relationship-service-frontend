import { ServerEnvironment } from "../constants/serverConfig";

const SESSION_STORAGE_ENV_KEY = "serverEnv";

export const getCurrentEnvironment = (): ServerEnvironment => {
  return (window.sessionStorage.getItem(SESSION_STORAGE_ENV_KEY) ?? "DEV") as ServerEnvironment;
};

export const setCurrentEnvironment = (value: ServerEnvironment) => {
  window.sessionStorage.setItem(SESSION_STORAGE_ENV_KEY, value);
};
