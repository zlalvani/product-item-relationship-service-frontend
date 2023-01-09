import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { MainHeader, Typography } from "cx-portal-shared-components";
import { PublicHeader } from "../../components/layout/Header";
import { IRSSelectServerEnv } from "../ItemRelationshipService/features/SelectEnvironment/IRSSelectServerEnv";
import { LoginButton } from "./components/LoginButton";

/**
 * This page is the first page that is going to be loaded.
 * @returns React.Node
 */
export const WelcomePage: React.FC = () => {
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
        <LoginButton />
      </MainHeader>
    </div>
  );
};

const PaddingBottom = styled.div`
  margin-bottom: 1.5rem;
`;
