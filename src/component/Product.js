import React from "react";
import "../css/Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
    </div>
  );
}
