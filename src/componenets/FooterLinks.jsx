import React from "react";
import message from "../assets/icons/messaage.svg";
import phone from "../assets/icons/call.svg";
import mail from "../assets/icons/mail.svg";
import "../styles/FooterLinks.css";

const FooterLinks = () => {
  return (
    <>
      <div className="footer-links-section py-5">
        <div className="my-container">
          <div className="row g-4 justify-content-center align-items-start">
            <div className="col-12 col-md-4">
              <h6 className="fw-bold mb-3">DESAI.MU</h6>
              <ul className="list-unstyled row row-cols-2 g-2">
                <li>About Us</li>
                <li>Register as Reseller</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <h6 className="fw-bold mb-3">SHOP</h6>
              <ul className="list-unstyled row row-cols-2 g-2">
                <li>Kitchenware</li>
                <li>Cookware</li>
                <li>Electric Appliances</li>
                <li>Pressure Cookers</li>
                <li>Gas Appliances</li>
                <li>Ceiling Fans</li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <h6 className="fw-bold mb-3">CONTACT US</h6>

              <div className="d-flex flex-column">
                {/* ICONS ROW */}
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={mail} alt="mail" width="24" height="24" />
                  <img src={phone} alt="phone" width="24" height="24" />
                  <img src={message} alt="message" width="24" height="24" />
                </div>

                <span className="d-block">
                  Temp Address, Near West <br />
                  Express Highway, Mumbai <br />
                  400101
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div
        class="footer-bottom text-white py-3"
        style={{ backgroundColor: "#393737ff" }}
      >
        <div class="container">
          <div class="row align-items-center text-center text-md-start">
            <div class="col-12 col-md-8 mb-2 mb-md-0">
              <p class="mb-0 small">
                2025 Desai.mu. All Rights Reserved Design and Developed by
                Innovins.
              </p>
            </div>

            <div class="col-12 col-md-4">
              <div class="d-flex justify-content-center justify-content-md-end gap-3">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
