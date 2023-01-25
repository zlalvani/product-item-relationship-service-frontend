import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";
import React from "react";
import { serverConfig } from "../utils/serverConfig";
import { useServerEnv } from "../utils/ServerEnv";

const keycloakConfig: Keycloak.KeycloakConfig = {
  url: "https://centralidp.int.demo.catena-x.net/auth",
  realm: "CX-Central",
  clientId: "Cl2-CX-Portal",
};

export let keycloak = new Keycloak(keycloakConfig);

export const KeyCloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { serverEnv } = useServerEnv();
  //NOTE: This is needed as authURL is only for the login page, and not for the token auth provider
  keycloak = new Keycloak({ ...keycloakConfig, url: serverConfig(serverEnv).authServerUrl });
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ pkceMethod: "S256" }}>
      {children}
    </ReactKeycloakProvider>
  );
};
