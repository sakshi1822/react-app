import React, { useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cookware from "../assets/icons/img (1).webp";
import utensils from "../assets/icons/img (2).webp";
import cutlery from "../assets//icons/img (3).webp";

import leftArrow from "../assets/icons/left-arrow.svg"; // use your arrow icons
import rightArrow from "../assets/icons/right-arrow.svg";

const Kitchenware = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const items = [
    { title: "Cookware", image: cookware },
    { title: "Kitchen Utensils", image: utensils },
    { title: "Cutlery", image: cutlery },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = 300 + 16;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, items.length - 1));
    }
  };

  return (
    <section
      className="py-5 text-center bg-light position-relative"
      style={{ overflow: "visible" }}
    >
      <style>{`
        #kitchenwareScroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Container>
        <h2 className="fw-bold mb-2 mt-5">Premium Kitchenware Essentials</h2>
        <p className="text-muted mb-5">
          Discover the art of culinary excellence with our premium selection of
          kitchenware essentials.
        </p>

        <div
          className="position-relative bg-white p-3 d-flex align-items-center shadow rounded mx-auto"
          style={{
            width: "90%",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.35)",
          }}
        >
          {/* Left arrow */}
          <img
            src={leftArrow}
            alt="Left"
            style={{ cursor: "pointer", height: "40px" }}
            onClick={() =>
              document
                .getElementById("kitchenwareScroll")
                .scrollBy({ left: -300, behavior: "smooth" })
            }
          />

          {/* Scrollable images */}
          <div
            id="kitchenwareScroll"
            ref={scrollRef}
            className="d-flex gap-4 overflow-auto flex-grow-1 px-3"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onScroll={handleScroll}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 position-relative"
                style={{ width: "300px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 text-white text-start p-2"
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    borderLeft: "5px solid #8BC34A",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <h5 className="mb-0">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <img
            src={rightArrow}
            alt="Right"
            style={{ cursor: "pointer", height: "40px" }}
            onClick={() =>
              document
                .getElementById("kitchenwareScroll")
                .scrollBy({ left: 300, behavior: "smooth" })
            }
          />
        </div>

        {/* lines below */}
        <div
          className="d-flex justify-content-center gap-3 mt-4"
          style={{ alignItems: "center" }}
        >
          {items.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const itemWidth = 300 + 16;
                  scrollRef.current.scrollBy({
                    left: (index - activeIndex) * itemWidth,
                    behavior: "smooth",
                  });
                  setActiveIndex(index);
                }
              }}
              style={{
                height: "4px",
                width: "60px",
                backgroundColor: activeIndex === index ? "#8BC34A" : "#ddd",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Kitchenware;
