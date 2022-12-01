import { Margin } from "@mui/icons-material";
import { useKeycloak } from "@react-keycloak/web";
import { Button, MainHeader } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { PublicHeader } from "../../components/layout/Header";
import { IRSSelectServerEnv } from "../ItemRelationshipService/features/SelectEnvironment/IRSSelectServerEnv";

/**
 * This page is the first page that is going to be loaded.
 * @returns React.Node
 */
export const WelcomePage: React.FC = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <PublicHeader />
      <MainHeader
        title="IRS Debugging View"
        subTitle="Insights into decentral stored Data Chains"
        background="LinearGradient1"
        headerHeight={window.innerHeight}
        imagePath="./img/home-stage-desktop.png"
      >
        <Link to="/dashboard">
          <Button
            onClick={async () => {
              await keycloak.login();
            }}
            style={{ marginTop: "75px" }}
          >
            {"Login"}
          </Button>
        </Link>
      </MainHeader>
    </div>
  );
};
