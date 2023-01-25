import { Tombstone } from "../../../../generated/jobsApi";
import { JobsDemoDataSuccess } from "../../../../services/api/__test__/jobs.exampleData";
import { render } from "../../../../testing/test-utils";
import { IRSJobTombstones } from "../IRSJobTombstones";

it("renders the tombstone information", () => {
  const tombstones = JobsDemoDataSuccess.tombstones as Tombstone[];
  const { container } = render(<IRSJobTombstones tombstones={tombstones} />);
  expect(container).toMatchSnapshot();
});
