import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Category_page/Dec/D24582943_IN_WL_Category-Page_Stripe_mob_final.gif"
        />

        <div>
          <h2 className="checkout__title">Your Shoping Basket</h2>

          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
