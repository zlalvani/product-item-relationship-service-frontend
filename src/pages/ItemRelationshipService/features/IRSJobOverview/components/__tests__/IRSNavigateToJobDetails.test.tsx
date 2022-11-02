import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, screen } from "../../../../../../testing/test-utils";
import { IRSNavigateToJobDetails } from "../IRSNavigateToJobDetails";

it("navigates to the right location", () => {
  const jobId = "testId";
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<IRSNavigateToJobDetails jobId={jobId} />} />
        <Route path="/jobs/:dev/:jobId" element={<p>{"Success"}</p>} />
      </Routes>
    </MemoryRouter>,
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const textElement = screen.getByText(/success/i);
  expect(textElement).toBeDefined();
});
