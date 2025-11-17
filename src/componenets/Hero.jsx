import React from "react";
import "../styles/Hero.css";
import logo1 from "../assets/images/logo (1).png";
import logo2 from "../assets/images/logo (2).png";
import logo3 from "../assets/images/logo (3).png";
import logo4 from "../assets/images/logo (4).png";
import logo5 from "../assets/images/logo (5).png";
import logo6 from "../assets/images/logo (6).png";
import flotterBg from "../assets/icons/main.webp";
import leftArrow from "../assets/icons/left-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";
const Hero = () => {
  return (
    <>
      <div className="hero-section text-white position-relative">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Your Dream Kitchen Starts Here!</h1>
            <p className="hero-subtitle">
              Explore premium kitchenware and appliances at unbeatable prices.
            </p>
            <button className="hero-btn mt-3">Shop Now</button>
          </div>

          <div className="hero-image">
            <img src={flotterBg} alt="Kitchen Items" />
          </div>
        </div>
      </div>

      <div
        className="position-relative start-50 translate-middle-x w-50 bg-white p-3 d-flex align-items-center shadow rounded mb-2"
        style={{
          transform: "translateX(-50%)",
          marginTop: "-50px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.35)",
          zIndex: 10,
        }}
      >
        {/* Left arrow */}
        <img
          src={leftArrow}
          alt="Left"
          style={{ cursor: "pointer", height: "40px" }}
          onClick={() =>
            document
              .getElementById("logoScroll")
              .scrollBy({ left: -150, behavior: "smooth" })
          }
        />

        <div
          id="logoScroll"
          className="d-flex gap-3 overflow-auto flex-grow-1"
          style={{
            scrollBehavior: "smooth",
            overflowY: "hidden",
            scrollbarWidth: "none",
          }}
        >
          <img
            src={logo1}
            alt="Logo 1"
            className="flex-shrink-0"
            style={{ height: "60px" }}
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="flex-shrink-0"
            style={{ height: "60px" }}
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="flex-shrink-0"
            style={{ height: "60px" }}
          />
          <img
            src={logo4}
            alt="Logo 4"
            className="flex-shrink-0"
            style={{ height: "60px" }}
          />
          <img
            src={logo5}
            alt="Logo 5"
            className="flex-shrink-0"
            style={{ height: "60px" }}
          />
          <img
            src={logo6}
            alt="Logo 6"
            className="flex-shrink-0"
            style={{ height: "60px" }}
          />
        </div>

        {/* Right arrow */}
        <img
          src={rightArrow}
          alt="Right"
          style={{ cursor: "pointer", height: "40px" }}
          onClick={() =>
            document
              .getElementById("logoScroll")
              .scrollBy({ left: 150, behavior: "smooth" })
          }
        />
      </div>
    </>
  );
};

export default Hero;
