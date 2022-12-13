import { JobsDemoDataSuccess } from "../../../../../../../services/api/__test__/jobs.exampleData";
import { processJobForGraphDisplay } from "../processJobForGraphDisplay";

it("processes a job and sets positions for the display elements", () => {
  const job = JobsDemoDataSuccess;
  expect(processJobForGraphDisplay(job)).toMatchSnapshot();
});
