import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../features/cart/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="p-10 min-h-screen bg-base-100">

      <h1 className="text-4xl font-bold mb-10">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Cart is empty
        </div>
      ) : (
        <div className="space-y-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card lg:card-side bg-base-200 shadow-xl"
            >

              <figure className="p-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />
              </figure>

              <div className="card-body">

                <h2 className="card-title">
                  {item.title}
                </h2>

                <p className="text-primary font-bold">
                  ${item.price}
                </p>

                <div className="flex gap-4 items-center mt-4">

                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="btn btn-error"
                  >
                    -
                  </button>

                  <span className="text-xl">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="btn btn-success"
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="btn btn-outline btn-error"
                  >
                    Remove
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;