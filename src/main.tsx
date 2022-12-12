import { SharedCssBaseline, SharedThemeProvider } from "cx-portal-shared-components";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.scss";
import { I18nService } from "./lib/react-18next";
import { ReactQueryClientProvider } from "./lib/react-query";
import { persistor, store } from "./store/store";

I18nService.init();

// TODO: Add React.Strict, currently it is removed as this causes an infinite loop in combination with keycloak-js
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SharedCssBaseline />
      <ReactQueryClientProvider>
        <SharedThemeProvider children={<App />} />
      </ReactQueryClientProvider>
    </PersistGate>
  </Provider>,
);
