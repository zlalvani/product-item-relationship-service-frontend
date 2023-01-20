import { Box } from "@mui/material";

/**
 * Logo for the IRS service
 * @returns React component
 */
export const LogoIRS: React.FC = () => (
  <Box
    component="img"
    src="/img/cx-logo-text.svg"
    sx={{
      display: "inline-block",
      height: "40px",
      width: "170px",
    }}
  />
);
