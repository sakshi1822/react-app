import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-section text-white position-relative">
      <div className="footer-overlay">
        <div className="container text-center">
          <h1 className="title">Stay connected with us!</h1>
          <p className="sub-title">
            Dont miss out on exciting news, product launches and special
            promotions! <br />
            Sign up now and be part of out culinary journey.
          </p>
        </div>
        <div className="div footer-wrapper">
          <div className="footer-form">
            <input
              type="email"
              placeholder="Enter your email ID"
              className="footer-input"
            />
            <button className="footer-btn">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
