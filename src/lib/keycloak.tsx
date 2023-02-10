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
export let localAuthToken = "";

/**
 * This is a custom keycloak handler that is used to circumvent communication with
 * @returns
 */
export const useCustomKeycloak = () => {
  const { serverEnv } = useServerEnv();
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  if (["DEMO", "LOCAL"].includes(serverEnv)) {
    return {
      authenticated: customAuthStatus,
      logout: () => {
        customAuthStatus = false;
        localAuthToken = "";
      },
      login: async () => {
        customAuthStatus = true;
        if (serverEnv === "LOCAL") {
          customAuthStatus = await localGetTokenRequest();
        }
        if (customAuthStatus) navigate(`${serverEnv}/dashboard`);
      },
    };
  }
  return { authenticated: keycloak.authenticated, logout: keycloak.logout, login: keycloak.login };
};

/**
 * This is used to retrieve a auth token in a local environment.
 * This should not be used for any other serverEnvironment
 *
 * @returns
 */
const localGetTokenRequest = async () => {
  const url = import.meta.env[`VITE_SERVER_LOCAL_KEYCLOAK_URL`];
  try {
    //TODO: Add actual authentication headers here
    const response = await fetch(url, {
      method: "POST",
    });
    localAuthToken = await response.json();
    return true;
  } catch (e) {
    return false;
  }
};
