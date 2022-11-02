import { MemoryRouter } from "react-router-dom";
import { JobStatusResultSuccess } from "../../../../../../services/api/__test__/jobStatusResult.example";
import { render } from "../../../../../../testing/test-utils";
import { IRSJobTable } from "../IRSJobTable";

it("renders a empty job table", () => {
  const { container } = render(
    <MemoryRouter>
      <IRSJobTable isLoading={false} jobs={[]} />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});

it("renders a with job variants", () => {
  const { container } = render(
    <MemoryRouter>
      <IRSJobTable isLoading={false} jobs={JobStatusResultSuccess} />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
