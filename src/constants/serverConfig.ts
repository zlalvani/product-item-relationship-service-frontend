export const serverConfig = {
  DEMO: {
    id: 0,
    value: "localhost",
    label: "Demo Data",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
  DEV: {
    id: 1,
    value: "https://irs.dev.demo.catena-x.net/irs/",
    label: "Development Environment",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
  INT: {
    id: 2,
    value: "https://irs.int.demo.catena-x.net/irs/",
    label: "Integration Environment",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
  PROD: {
    id: 3,
    value: "https://irs.int.demo.catena-x.net/irs/", // TODO: Real link for prod envi
    label: "Production Environment",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
} as const;

export type ServerEnvironment = keyof typeof serverConfig;

const SESSION_STORAGE_ENV_KEY = "serverEnv";

export const getCurrentEnvironment = (): ServerEnvironment => {
  return (window.sessionStorage.getItem(SESSION_STORAGE_ENV_KEY) ?? "DEV") as ServerEnvironment;
};

export const setCurrentEnvironment = (value: ServerEnvironment) => {
  window.sessionStorage.setItem(SESSION_STORAGE_ENV_KEY, value);
};
