import Body from "../components/Body";
import { screen, render, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// Define a reusable function to render the Body component
beforeEach(async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});

// global.fetch will give us a mock fetch data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with search button", async () => {
  //   Now we have rendered the body Component, we can now asssert the things up
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeInTheDocument();
});

it("Should render all restaurant cards in the body component", async () => {
  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(20);
});

it("Should return all the relevant restaurant cards when restaurant is searched", async () => {
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "ice cream" } });
  fireEvent.click(searchButton);

  // screen should load 3 restaurant cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

it("Should filter restaurants if we click on Top Rated Restaurant button", async () => {
  const topRestaurants = screen.getByText("Top Rated Restaurants");
  fireEvent.click(topRestaurants);
  const filteredCards = screen.getAllByTestId("resCard");
  expect(filteredCards.length).toBe(8);
});
