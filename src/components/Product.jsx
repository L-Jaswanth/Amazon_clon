import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import Band from "./Band";
import Echo from "./Echo";
import Ipad from "./Ipad";
import Tv from "./Tv";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Band />
      </div>

      <div class="product_row d-flex">
        <Echo />
        <Ipad />
      </div>

      <div class="product_row d-flex">
        <Tv />
      </div>
    </div>
  );
}

export default Product;
