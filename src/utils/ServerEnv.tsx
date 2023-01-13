import React, { useContext, useState } from "react";
import { isServerEnvironment, ServerEnvironment } from "../constants/serverConfig";
import { setCurrentEnvironment } from "./sessionStorageHandling";

export const ServerEnvContext = React.createContext<{
  serverEnv: ServerEnvironment;
  setServerEnv: (serverEnv: string) => void;
} | null>(null);

export const ServerEnvProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [serverEnv, update] = useState<ServerEnvironment>("DEMO");

  const setServerEnv = (serverEnv: string) => {
    if (isServerEnvironment(serverEnv)) {
      update(serverEnv);
      setCurrentEnvironment(serverEnv);
    } else {
      throw new Error(`Invalid server environment value: ${serverEnv}`);
    }
  };

  return (
    <ServerEnvContext.Provider
      value={{
        serverEnv,
        setServerEnv,
      }}
    >
      {children}
    </ServerEnvContext.Provider>
  );
};

export const useServerEnv = () => {
  const contextValues = useContext(ServerEnvContext);
  if (contextValues === null) {
    throw new Error(`Invalid server environment context value`);
  }
  const { serverEnv, setServerEnv } = contextValues;
  return { serverEnv, setServerEnv };
};
