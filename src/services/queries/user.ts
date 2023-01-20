import { useQuery } from "../../lib";
import { keycloak } from "../../lib/keycloak";

export const getUserInfo = () => {
  return useQuery(["userInfo"], async () => {
    return (await keycloak.loadUserInfo()) as { name: string; tenant: string };
  });
};
