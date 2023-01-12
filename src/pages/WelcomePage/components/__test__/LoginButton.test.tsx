import { vi } from "vitest";
import { fireEvent, renderWithRouter, screen } from "../../../../testing/test-utils";
import { LoginButton } from "../LoginButton";
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

it("clicks the login button", () => {
  const { container } = renderWithRouter(<LoginButton />);
  expect(container).toMatchSnapshot();

  const button = screen.getByRole("button", { name: /login/i });
  expect(button).toBeDefined();
  fireEvent.click(button);

  expect(login).toHaveBeenCalledTimes(1);
});
