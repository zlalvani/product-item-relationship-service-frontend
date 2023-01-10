import { vi } from "vitest";
import { fireEvent, renderWithRouter, screen } from "../../../testing/test-utils";
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
  const { container } = renderWithRouter(<WelcomePage />);
  expect(container).toMatchSnapshot();
});

it("clicks the login button", () => {
  const { container } = renderWithRouter(<WelcomePage />);
  expect(container).toMatchSnapshot();

  const button = screen.getByRole("button", { name: /login/i });
  expect(button).toBeDefined();
  fireEvent.click(button);

  expect(login).toHaveBeenCalledTimes(1);
});
