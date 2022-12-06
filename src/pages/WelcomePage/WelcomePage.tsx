import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { Button, MainHeader, Typography } from "cx-portal-shared-components";
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
        background="LinearGradient1"
        headerHeight={window.innerHeight}
        imagePath="./img/home-stage-desktop.png"
      >
        <PaddingBottom>
          <Box
            component="img"
            src="/img/IRS_FE_Logo_long.png"
            sx={{
              display: "inline-block",
            }}
          />
        </PaddingBottom>

        <PaddingBottom>
          <Typography variant="body1">Insights into decentral stored Data Chains</Typography>
        </PaddingBottom>

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

const PaddingBottom = styled.div`
  margin-bottom: 1.5rem;
`;
