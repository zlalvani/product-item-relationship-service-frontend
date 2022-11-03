import { JobsDemoDataSuccess } from "../../../../services/api/__test__/jobs.exampleData";
import { render } from "../../../../testing/test-utils";
import { IrsJobDetails } from "../IrsJobDetails";

it("renders the tombstone information", () => {
  const { container } = render(<IrsJobDetails job={JobsDemoDataSuccess.job} />);
  expect(container).toMatchSnapshot();
});
