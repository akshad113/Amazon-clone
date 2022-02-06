import React from "react";
import "../css/Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export default function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* logo */}
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option1">Hello Guest</span>
          <span className="header__option2">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Return</span>
          <span className="header__option2">order</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </div>
      </div>
      <div className="header__optionBasket">
        <ShoppingCartOutlinedIcon />
        <span className="header__option2 header__basketCount">0</span>
      </div>
    </div>
  );
}
