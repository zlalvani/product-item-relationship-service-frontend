import { getCentralIdp, getClientId } from "../assets/auth/EnvironmentService";

export const keycloakConfig: Keycloak.KeycloakConfig = {
  url: getCentralIdp(),
  realm: "CX-Central",
  clientId: getClientId(),
};
