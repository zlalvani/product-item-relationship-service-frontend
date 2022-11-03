import { JobsDemoDataSuccess } from "../../../../services/api/__test__/jobs.exampleData";
import { render } from "../../../../testing/test-utils";
import { IRSJobTombstones } from "../IRSJobTombstones";

it("renders the tombstone information", () => {
  const tombstones = JobsDemoDataSuccess.tombstones;
  const { container } = render(<IRSJobTombstones tombstones={tombstones} />);
  expect(container).toMatchSnapshot();
});
