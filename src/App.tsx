import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { KeyCloakProvider } from "./lib/keycloak";
import { router } from "./pages/Router";
import { persistor, store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <KeyCloakProvider>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </KeyCloakProvider>
    </Provider>
  );
}

export default App;
