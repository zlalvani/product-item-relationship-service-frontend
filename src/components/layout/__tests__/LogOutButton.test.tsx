import { vi } from "vitest";
import { fireEvent, renderWithRouter, screen } from "../../../testing/test-utils";
import { LogOutButton } from "../Header/Buttons/LogOutButton";

const logout = vi.fn();

vi.mock("@react-keycloak/web", () => {
  return {
    useKeycloak: () => ({
      keycloak: {
        logout: () => {
          logout();
        },
      },
    }),
  };
});

it("renders the logout button", () => {
  const { container } = renderWithRouter(<LogOutButton />);
  expect(container).toMatchSnapshot();
});

it("clicks the logout button", () => {
  renderWithRouter(<LogOutButton />);
  const button = screen.getByRole("button");
  expect(button).toBeDefined();
  fireEvent.click(button);
  expect(logout).toHaveBeenCalledTimes(1);
});
