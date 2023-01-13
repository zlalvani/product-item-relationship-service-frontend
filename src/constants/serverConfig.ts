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
    authServerUrl: "xxx",
  },
  PROD: {
    id: 3,
    value: "https://irs.int.demo.catena-x.net/irs/", // TODO: Real link for prod envi
    label: "Production Environment",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
} as const;

export type ServerEnvironment = keyof typeof serverConfig;

export const isServerEnvironment = (val: string): val is ServerEnvironment => {
  return Object.keys(serverConfig).includes(val);
};
