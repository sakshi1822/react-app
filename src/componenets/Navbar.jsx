import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.svg";
import "../styles/navbar.css";
import searchIcon from "../assets/icons/search.svg";
import micIcon from "../assets/icons/mic.svg";
import userIcon from "../assets/icons/person.svg";
import heartIcon from "../assets/icons/heart.svg";
import shoppingBagIcon from "../assets/icons/shopping_bag.svg";

function Navbar() {
  return (
    <div className="navbar-container shadow-sm">
      <div className="container d-flex align-items-center justify-content-between py-3 gap-15">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="nav-logo me-2" />
        </div>

        <div className="search-bar d-flex align-items-center px-3">
          <img
            src={searchIcon}
            alt="search"
            className="me-2"
            style={{ width: "18px", height: "18px" }}
          />
          <input
            type="text"
            placeholder="Search"
            className="border-0 flex-grow-1 bg-transparent"
            style={{ outline: "none" }}
          />
          <img
            src={micIcon}
            alt="mic"
            style={{ width: "18px", height: "18px" }}
          />
        </div>

        <div className="d-flex align-items-center gap-3">
          <img src={userIcon} alt="User" className="icon-style" />
          <img src={heartIcon} alt="Wishlist" className="icon-style" />
          <img src={shoppingBagIcon} alt="Cart" className="icon-style" />

          <div className="language-dropdown">
            <select className="lang-select">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <div className="arrow-circle">
              <span className="arrow-down"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-bar py-2">
        <ul className="menu-items">
          <li>Kitchenware</li>
          <li>Cookware</li>
          <li>Pressure Cookers</li>
          <li>Electric Appliances</li>
          <li>Gas Appliances</li>
          <li>Sinks</li>
          <li>Ceiling Fans</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button className="reseller-btn">Register as a Reseller</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
