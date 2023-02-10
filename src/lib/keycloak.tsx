import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import Keycloak from "keycloak-js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { serverConfig } from "../utils/serverConfig";
import { useServerEnv } from "../utils/ServerEnv";

const keycloakConfig: Keycloak.KeycloakConfig = {
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

let customAuthStatus = false;

/**
 * This is a custom keycloak handler that is used to circumvent communication with
 * @returns
 */
export const useCustomKeycloak = () => {
  const { serverEnv } = useServerEnv();
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  if (serverEnv === "DEMO") {
    return {
      authenticated: customAuthStatus,
      logout: () => {
        customAuthStatus = false;
      },
      login: () => {
        //TODO: Add Handling of Post Request
        customAuthStatus = true;
        navigate(`${serverEnv}/dashboard`);
      },
    };
  }
  return { authenticated: keycloak.authenticated, logout: keycloak.logout, login: keycloak.login };
};
