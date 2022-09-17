import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const PlantShop = () => {
  return (
    <section class="text-gray-600 body-font">
      {/* <CategoryMenu /> */}
      <ProductList />
      <Cart />
    </section>
  );
};

export default PlantShop;
