import { expect, it, vi } from "vitest";
import * as jobApi from "../../../../../../services/api/jobs.api";
import { fireEvent, render, screen, waitFor } from "../../../../../../testing/test-utils";
import { IRSCancelJobButton } from "../IRSCancelJobButton";

it("renders the cancel button", async () => {
  // const testJobId = "testJobId";
  // const mockFn = vi.fn();
  // vi.spyOn(jobApi, "cancelJob").mockImplementation(async (jobId: string) => {
  //   mockFn(jobId);
  // });
  // render(<IRSCancelJobButton jobId={testJobId} />);
  // const button = screen.getByRole("button");
  // fireEvent.click(button);
  // await waitFor(() => {
  //   expect(mockFn).toHaveBeenLastCalledWith(testJobId);
  // });
});
