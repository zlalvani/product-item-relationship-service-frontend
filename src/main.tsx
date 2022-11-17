import { SharedCssBaseline, SharedThemeProvider } from "cx-portal-shared-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserService from "./assets/auth/UserService";
import "./index.scss";
import { I18nService } from "./lib/react-18next";
import { ReactQueryClientProvider } from "./lib/react-query";

I18nService.init();

UserService.init((user) => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <SharedCssBaseline />
      <ReactQueryClientProvider>
        <SharedThemeProvider>
          <App />
        </SharedThemeProvider>
      </ReactQueryClientProvider>
    </React.StrictMode>,
  );
});
