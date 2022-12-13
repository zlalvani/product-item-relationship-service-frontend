import { KeyCloakProvider } from "../../../lib/keycloak";
import { renderWithProviders } from "../../../testing/test-utils";
import { Header, PublicHeader } from "../Header";

it("renders a public header", () => {
  const { container } = renderWithProviders(
    <KeyCloakProvider>
      <Header />
    </KeyCloakProvider>,
  );
  expect(container).toMatchSnapshot();
});

it("renders a private header", () => {
  const { container } = renderWithProviders(<PublicHeader />);
  expect(container).toMatchSnapshot();
});
