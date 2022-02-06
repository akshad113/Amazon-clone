import React from "react";
import "../css/Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Northen Farm"
            image="https://m.media-amazon.com/images/I/5139RPK39ZL._AC_UY218_.jpg"
            price={299}
            rating={4}
          />
          <Product
            title="OnePlus Nord 2 5G"
            image="https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UL320_.jpg"
            price={299}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}
