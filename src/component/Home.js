import React from "react";
import "../css/Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg "
        />
        <div className="home__row">
          <Product />
          {/* product */}
        </div>

        <div className="home__row">
          {/* product */}
          {/* product */}
          {/* product */}
        </div>

        <div className="home__row">{/* product */}</div>
      </div>
    </div>
  );
}
