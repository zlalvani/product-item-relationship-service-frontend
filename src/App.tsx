import { RouterProvider } from "react-router-dom";
import { KeyCloakProvider } from "./lib/keycloak";
import { router } from "./pages/Router";
import { ServerEnvProvider } from "./utils/ServerEnv";

function App() {
  return (
    <ServerEnvProvider>
      <KeyCloakProvider>
        <RouterProvider router={router} />
      </KeyCloakProvider>
    </ServerEnvProvider>
  );
}

export default App;
