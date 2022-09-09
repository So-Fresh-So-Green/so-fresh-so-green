import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const PlantShop = () => {
  return (
    <div className="container">
      {/* @IAN these are broken right now from DB */}
      <CategoryMenu />
      <ProductList />

      {/* Works fine */}
      <Cart />
    </div>
  );
};

export default PlantShop;
