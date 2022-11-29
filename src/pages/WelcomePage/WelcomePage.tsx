import { useKeycloak } from "@react-keycloak/web";
import { Button, MainHeader } from "cx-portal-shared-components";
import { Link } from "react-router-dom";
import { PublicHeader } from "../../components/layout/Header";

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
        title="Welcome to IRS Debugging"
        subTitle="Lorem Ipsum"
        background="LinearGradient1"
        imagePath="./img/home-stage-desktop.png"
      >
        <Link to="/dashboard">
          <Button
            onClick={async () => {
              await keycloak.login();
            }}
          >
            {"Login"}
          </Button>
        </Link>
      </MainHeader>
    </div>
  );
};
