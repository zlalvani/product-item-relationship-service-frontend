import { MemoryRouter } from "react-router-dom";
import { render } from "../../../../../../testing/test-utils";
import { IRSJobTable } from "../IRSJobTable";

it("renders a with job variants", () => {
  const { container } = render(
    <MemoryRouter>
      <IRSJobTable isAutoRefreshEnabled={false} />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
