import { expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "../../../../../../testing/test-utils";
import { IRSCancelJobButton } from "../IRSCancelJobButton";
const mockFn = vi.fn();
vi.mock("../../../../../../services/queries/jobs", () => ({
  useCancelJobs: () => ({
    mutate: (jobId: string) => {
      mockFn();
    },
  }),
}));

it("renders the cancel button", async () => {
  const testJobId = "testJobId";

  render(<IRSCancelJobButton jobId={testJobId} />);
  const button = screen.getByRole("button");
  expect(button).toBeDefined();
  fireEvent.click(button);

  expect(mockFn).toBeCalledTimes(1);
});
