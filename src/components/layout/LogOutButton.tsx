import { useKeycloak } from "@react-keycloak/web";
import { Button } from "cx-portal-shared-components";
import { redirect } from "react-router-dom";

export const LogOutButton: React.FC = () => {
  const { keycloak } = useKeycloak();
  return (
    <Button
      onClick={async () => {
        await keycloak.logout();
        redirect("/");
      }}
    >
      Log Out
    </Button>
  );
};
