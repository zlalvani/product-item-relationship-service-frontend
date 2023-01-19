import { useKeycloak } from "@react-keycloak/web";
import { IconButton } from "cx-portal-shared-components";
import { redirect } from "react-router-dom";
import { LogoutIcon } from "../../../../lib/icons";

/**
 * Header Log out Button
 * @returns React component
 */
export const LogOutButton: React.FC = () => {
  const { keycloak } = useKeycloak();

  return (
    <IconButton
      color="primary"
      size="medium"
      onClick={async () => {
        await keycloak.logout();
        redirect("/");
      }}
    >
      <LogoutIcon />
    </IconButton>
  );
};
