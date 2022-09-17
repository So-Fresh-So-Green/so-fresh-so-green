import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div class="-m-4">
      {/* <div class="container px-5 py-24 mx-auto"> */}
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        {/* <div class="mt-4"> */}
        {/* <div className="card px-1 py-1"> */}
        <Link to={`/products/${_id}`}>
          <a class="block relative h-48 rounded overflow-hidden">
            <img
              class="object-cover object-center w-full h-full block"
              alt={name}
              src={image}
            />
          </a>

          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
          </div>
        </Link>
        {/* <div class="pb-3"> */}
        <div class="mt-1">${price}</div>
        {/* </div> */}
        <button
          onClick={addToCart}
          class="mt-1flex ml-auto text-white bg-green-400 border-0 py-1 px-6 focus:outline-none hover:bg-green-200 rounded"
        >
          Add to Cart
        </button>
        {/* <button class="mt-1" onClick={addToCart}>Add to cart</button> */}
      </div>
    </div>
    // </div>
  );
}

export default ProductItem;
