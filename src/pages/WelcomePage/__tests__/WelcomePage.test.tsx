import { vi } from "vitest";
import { renderWithRouter } from "../../../testing/test-utils";
import { WelcomePage } from "../WelcomePage";

vi.mock("@react-keycloak/web", () => {
  return {
    useKeycloak: vi.fn(),
  };
});

it("renders the welcome page", () => {
  const { container } = renderWithRouter(<WelcomePage />);
  expect(container).toMatchSnapshot();
});
