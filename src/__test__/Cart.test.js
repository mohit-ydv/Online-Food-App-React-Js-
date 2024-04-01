import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { Header } from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

beforeEach(async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Test for restaurant menu page", () => {
  it("SHould load restaurant menu component", async () => {
    const accordionHeader = screen.getByText("Fries & Sides (6)");
    fireEvent.click(accordionHeader);
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(6);
  });
});
describe("Test for cart page", () => {
  it("SHould show cart items", async () => {
    const addButton = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addButton[0]);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("foodItems");
    expect(cartItems.length).toBe(13);
  });
  it("SHould empty cart items when click on CLear Cart", async () => {
    const clearCart = screen.getByRole("button", { name: "Clear cart" });
    fireEvent.click(clearCart);
    expect(
      screen.getByText("Please add some items to cart!!")
    ).toBeInTheDocument();
  });
});
