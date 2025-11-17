import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCart.jsx";
import product1 from "../assets/images/product (1).webp";
import product2 from "../assets/images/product (2).webp";
import product3 from "../assets/images/product (3).webp";
import product4 from "../assets/images/product (4).webp";
import brandLogo from "../assets/images/logo (2).png";

const products = [
  {
    image: product1,
    brandLogo: brandLogo,
    name: "Copper Plated Kitchen Cutlery Set",
    price: "29,999",
    oldPrice: "34,999",
  },
  {
    image: product2,
    brandLogo: brandLogo,
    name: "Designer Ceramic Plate Set",
    price: "29,999",
    oldPrice: "34,999",
  },
  {
    image: product3,
    brandLogo: brandLogo,
    name: "Premium Dinner Set",
    price: "29,999",
    oldPrice: "34,999",
  },
  {
    image: product4,
    brandLogo: brandLogo,
    name: "Elegant Cup & Saucer Set",
    price: "29,999",
    oldPrice: "34,999",
  },
];

const KitchenwareSection = () => {
  return (
    <section
      className="py-5 text-center"
      style={{ backgroundColor: "#e6e1e5ff" }}
    >
      <Container>
        <h2 className="fw-bold mb-2">Latest Kitchenware</h2>
        <p className="text-muted mb-5">
          Discover the art of culinary excellence with our premium selection of
          kitchenware essentials.
        </p>

        <Row className="g-3 justify-content-center">
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        <button
          className="btn  mt-5 px-5 py-2 "
          style={{
            color: "#84c225",
            borderColor: "#84c225",
          }}
        >
          View All
        </button>
      </Container>
    </section>
  );
};

export default KitchenwareSection;
