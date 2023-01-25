export const serverConfig = {
  DEMO: {
    value: "localhost",
    label: "Demo Data",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
  DEV: {
    value: "https://irs.dev.demo.catena-x.net",
    label: "Development Environment",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
  INT: {
    value: "https://irs.int.demo.catena-x.net",
    label: "Integration Environment",
    authServerUrl: "https://centralidp.int.demo.catena-x.net/auth",
  },
  BETA: {
    value: "https://irs.beta.demo.catena-x.net",
    label: "Production Environment",
    authServerUrl: "https://centralidp.beta.demo.catena-x.net/auth",
  },
} as const;

export type ServerEnvironment = keyof typeof serverConfig;

export const isServerEnvironment = (val: string): val is ServerEnvironment => {
  return Object.keys(serverConfig).includes(val);
};
