import { renderWithProviders } from "../../../../../testing/test-utils";
import { UserMenuButton } from "../UserMenuButton";

it("renders a public header", () => {
  const { container } = renderWithProviders(<UserMenuButton />);
  expect(container).toMatchSnapshot();
});
