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
        title="Welcome to IRS Debugging"
        subTitle="Lorem Ipsum"
        background="LinearGradient1"
        imagePath="./img/home-stage-desktop.png"
      >
        <IRSSelectServerEnv />
        <Button
          onClick={async () => {
            navigate("/dashboard");
            await keycloak.login();
          }}
        >
          {"Login"}
        </Button>
      </MainHeader>
    </div>
  );
};
