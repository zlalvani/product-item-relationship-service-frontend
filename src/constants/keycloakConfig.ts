export const getCentralIdp = () => {
  const { hostname } = window.location;
  // TODO: replace this example with actual deployment
  if (hostname === "portal.int.demo.catena-x.net") return "https://centralidp.int.demo.catena-x.net/auth";

  return "https://centralidp.int.demo.catena-x.net/auth";
};

const CLIENT_ID = "Cl2-CX-Portal";

export const keycloakConfig: Keycloak.KeycloakConfig = {
  url: getCentralIdp(),
  realm: "CX-Central",
  clientId: CLIENT_ID,
};
