import { Button } from "cx-portal-shared-components";
import { Link, useNavigate } from "react-router-dom";

import { useKeycloak } from "@react-keycloak/web";
export const WelcomePage: React.FC = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <h1>{"Welcome to IRS Debugging"}</h1>
      <Link to="/dashboard">
        <Button
          onClick={async () => {
            await keycloak.login();
          }}
        >
          {"Login"}
        </Button>
      </Link>
    </div>
  );
};
