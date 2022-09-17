import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const PlantShop = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        {/* <div className="container"> */}
        {/* <CategoryMenu /> */}
        <ProductList />
        <Cart />
      </div>
    </section>
  );
};

export default PlantShop;
