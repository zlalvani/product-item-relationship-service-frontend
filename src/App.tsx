import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { KeyCloakProvider } from "./lib/keycloak";
import { router } from "./pages/Router";
import { store } from "./store/store";

function App() {
  return (
    <KeyCloakProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </KeyCloakProvider>
  );
}

export default App;
