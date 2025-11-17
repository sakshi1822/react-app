import React from "react";
import { Card } from "react-bootstrap";
import FaHeart from "../assets/icons/heart.svg";
import arrow from "../assets/icons/arrow.svg";
import "../styles/ProductCart.css";

const ProductCard = ({ product }) => {
  return (
    <Card className="border-0 shadow-sm rounded-2 p-2">
      <div className="d-flex justify-content-around align-items-center mb-2 mt-3">
        <span className="dicount-btn">Flat 20% Off</span>

        <img src={FaHeart} style={{ cursor: "pointer", height: "24px" }} />
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-3"
        style={{ borderRadius: "12px", height: "180px", objectFit: "contain" }}
      />

      {/* Brand Logo */}
      <img
        src={product.brandLogo}
        alt="brand"
        style={{ height: "50px", width: "70px" }}
        className="mb-2"
      />

      {/* Title */}
      <p className="fw-semibold text-muted small mb-1">{product.name}</p>

      {/* Price */}
      <h5 className="fw-bold mb-3">
        &#8377;{product.price}{" "}
        <span className="text-muted text-decoration-line-through small">
          &#8377;{product.oldPrice}
        </span>
      </h5>

      {/* Button */}
      <button className="view-btn ">
        <span>View Details</span>
        <img src={arrow} alt="arrow" className="btn-arrow" />
      </button>
    </Card>
  );
};

export default ProductCard;
