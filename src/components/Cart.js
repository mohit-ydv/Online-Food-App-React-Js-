import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length !== 0 ? (
          <button
            className="bg-black p-2 m-2 rounded-lg text-white"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        ) : (
          <h2 className="my-4 font-serif">Please add some items to cart!!</h2>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
