import { KeyCloakProvider } from "../../../lib/keycloak";
import { renderWithProviders } from "../../../testing/test-utils";
import { PrivateHeader } from "../Header/PrivateHeader";
import { PublicHeader } from "../Header/PublicHeader";

it("renders a public header", () => {
  const { container } = renderWithProviders(
    <KeyCloakProvider>
      <PrivateHeader />
    </KeyCloakProvider>,
  );
  expect(container).toMatchSnapshot();
});

it("renders a private header", () => {
  const { container } = renderWithProviders(<PublicHeader />);
  expect(container).toMatchSnapshot();
});
