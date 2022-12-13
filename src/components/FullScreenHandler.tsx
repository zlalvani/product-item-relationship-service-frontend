import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { FullscreenExitIcon, FullscreenIcon } from "../lib";

const stylesFullScreen: React.CSSProperties = {
  position: "fixed",
  zIndex: 1000,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  height: "100%",
  backgroundColor: "white",
  backgroundImage: `-webkit-repeating-radial-gradient(top center,
      rgba(0, 0, 0, 0.2), 
      rgba(0, 0, 0, 0.2) 1px, 
      transparent 0,
      transparent 100%)`,
  backgroundSize: "20px 20px",
};

export const FullScreenButton: React.FC<{ active: boolean; setActive: (x: boolean) => void }> = ({
  active,
  setActive,
}) => (
  <IconButton color="secondary" size="medium" style={{ alignSelf: "right" }} onClick={() => setActive(!active)}>
    {active ? <FullscreenExitIcon /> : <FullscreenIcon />}
  </IconButton>
);

export const FullScreen: React.FC<{ children: React.ReactNode; active: boolean }> = ({ children, active }) => {
  return <Box style={active ? stylesFullScreen : undefined}>{children}</Box>;
};

export const useFullScreen = () => {
  const [active, setActive] = useState<boolean>(false);

  return {
    FullScreenButton: () => <FullScreenButton active={active} setActive={setActive} />,
    FullScreen: ({ children }: { children: React.ReactNode }) => <FullScreen active={active}>{children}</FullScreen>,
    fullScreenActive: active,
  };
};
