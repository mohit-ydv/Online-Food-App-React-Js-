import { sum } from "./sum";

test("Sum should calculate the sum of 2 nums", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);
});
