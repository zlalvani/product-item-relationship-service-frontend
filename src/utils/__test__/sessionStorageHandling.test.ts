import { getCurrentEnvironment, setCurrentEnvironment } from "../sessionStorageHandling";

it("returns the session stored", () => {
  setCurrentEnvironment("DEMO");
  expect(getCurrentEnvironment()).toBe("DEMO");
});

it("fails to set the session", () => {
  expect(() => setCurrentEnvironment("NOT_A_SERVICE")).toThrow();
});
