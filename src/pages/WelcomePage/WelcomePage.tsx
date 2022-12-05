import { useKeycloak } from "@react-keycloak/web";
import { Button, MainHeader } from "cx-portal-shared-components";
import { useNavigate } from "react-router-dom";
import { PublicHeader } from "../../components/layout/Header";
import { IRSSelectServerEnv } from "../ItemRelationshipService/features/SelectEnvironment/IRSSelectServerEnv";

/**
 * This page is the first page that is going to be loaded.
 * @returns React.Node
 */
export const WelcomePage: React.FC = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

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
        <IRSSelectServerEnv />
        <Button
          onClick={async () => {
            navigate("/dashboard");
            await keycloak.login();
          }}
          style={{ marginTop: "75px" }}
        >
          {"Login"}
        </Button>
      </MainHeader>
    </div>
  );
};
