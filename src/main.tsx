import { SharedCssBaseline, SharedThemeProvider } from "cx-portal-shared-components";
import ReactDOM from "react-dom/client";
import App from "./App";

import { FontStyles } from "./lib/cx-portal-shared-components";
import { I18nService } from "./lib/react-18next";
import { ReactQueryClientProvider } from "./lib/react-query";

I18nService.init();

// TODO: Add React.Strict, currently it is removed as this causes an infinite loop in combination with keycloak-js
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <FontStyles />
    <SharedCssBaseline />
    <ReactQueryClientProvider>
      <SharedThemeProvider children={<App />} />
    </ReactQueryClientProvider>
  </>,
);
