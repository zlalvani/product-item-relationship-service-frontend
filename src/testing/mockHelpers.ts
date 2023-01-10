import { vi } from "vitest";

export const mockUseKeycloak = () => {
  const logout = vi.fn();
  const login = vi.fn();

  vi.mock("@react-keycloak/web", () => {
    return {
      useKeycloak: () => ({
        keycloak: {
          login: () => {
            login();
          },
          logout: () => {
            logout();
          },
        },
      }),
    };
  });

  return {
    logout,
    login,
  };
};
