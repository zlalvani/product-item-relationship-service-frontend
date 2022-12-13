import { RouterProvider } from "react-router-dom";
import { KeyCloakProvider } from "./lib/keycloak";
import { router } from "./pages/Router";

function App() {
  return (
    <KeyCloakProvider>
      <RouterProvider router={router} />
    </KeyCloakProvider>
  );
}

export default App;
