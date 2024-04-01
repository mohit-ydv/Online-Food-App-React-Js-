import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("Should load button inside contact us component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  const button2 = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
});
describe("Input box test cases", () => {
  it("Should find the input fields inside contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });
  it("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
