export const getEnvNames = () => {
  const envLabels = Object.keys(import.meta.env).filter(
    (val) => val.startsWith("VITE_SERVER") && val.endsWith("LABEL"),
  );
  const envNames = envLabels.map((val) => val.split("VITE_SERVER_")[1].split("_")[0]);
  return envNames;
};

const readServerConfigFromEnv = () => {
  const envNames = getEnvNames();

  const output: Record<string, { label: string; value: string; authServerUrl: string }> = {};
  envNames.forEach((val) => {
    output[val] = {
      label: import.meta.env[`VITE_SERVER_${val}_LABEL`],
      value: import.meta.env[`VITE_SERVER_${val}_BASE_URL`],
      authServerUrl: import.meta.env[`VITE_SERVER_${val}_KEYCLOAK_URL`],
    };
  });

  return output;
};

export const serverConfig = (serverEnv: string) => {
  const allServerConfig = readServerConfigFromEnv();
  return allServerConfig[serverEnv];
};

export type ServerEnvironment = keyof typeof serverConfig;

export const isServerEnvironment = (val: string): val is ServerEnvironment => {
  return getEnvNames().includes(val);
};
