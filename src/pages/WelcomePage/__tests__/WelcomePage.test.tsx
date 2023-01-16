import { vi } from "vitest";
import { renderWithRouter } from "../../../testing/test-utils";
import { ServerEnvProvider } from "../../../utils/ServerEnv";
import { WelcomePage } from "../WelcomePage";

const login = vi.fn();

vi.mock("@react-keycloak/web", () => {
  return {
    useKeycloak: () => ({
      keycloak: {
        login: () => {
          login();
        },
      },
    }),
  };
});

it("renders the welcome page", () => {
  const { container } = renderWithRouter(
    <ServerEnvProvider>
      <WelcomePage />
    </ServerEnvProvider>,
  );
  expect(container).toMatchSnapshot();
});
