import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const StyledBox = styled(Box)`
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 24px;
  overflow: hidden;
`;

export const StyledBoxContent = styled(Box)`
  width: auto;
  margin: 0 25px;
`;

export const StyledBoxHeader = styled(Box)`
  background-color: #f9f9f9;
  min-height: 100px;
  padding: 8px 32px;
  width: inherit;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0;
  width: 100%;
`;

export const StyledBoxTitle = styled.h5`
  font-family: "LibreFranklin-SemiBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 800;
  font-size: 18px;
  line-height: 1.5555555555555556;
  color: #111111;
  letter-spacing: 0;
`;
