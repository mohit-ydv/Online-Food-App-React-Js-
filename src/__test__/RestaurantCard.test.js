import { screen, render } from "@testing-library/react";
import RestaurantCard, { withPromtedLabel } from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label", () => {
  render(withPromtedLabel(RestaurantCard)({ resData: MOCK_DATA }));
  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});
