import { SharedCssBaseline, SharedThemeProvider } from "cx-portal-shared-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { I18nService } from "./lib/react-18next";
import { ReactQueryClientProvider } from "./lib/react-query";

I18nService.init();

// TODO: Add React.Strict, currently it is removed as this causes an infinite loop in combination with keycloak-js
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <SharedCssBaseline />
    <ReactQueryClientProvider>
      <SharedThemeProvider children={<App />} />
    </ReactQueryClientProvider>
  </>,
);
