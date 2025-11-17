import React, { useRef } from "react";
import leftArrow from "../assets/icons/left-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";
import kitchenware from "../assets/images/category (1).webp";
import electric from "../assets/images/category (2).webp";
import cookware from "../assets/images/category (4).webp";
import sink from "../assets/images/category (3).webp";
import "../styles/ProductCategories.css";
import { useState } from "react";

const ProductCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = 300 + 16;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, items.length - 1));
    }
  };

  const items = [
    {
      title: "Kitchenware",
      desc: "Explore our wide range of pots, pans, and skillets",
      image: kitchenware,
    },
    {
      title: "Electric Appliances",
      desc: "Elevate your cooking experience with innovative gadgets",
      image: electric,
    },
    {
      title: "Cookwares",
      desc: "From Refrigerators to Freeze Counters, cooling range",
      image: cookware,
    },
    {
      title: "Sinks",
      desc: "Discover our variety of stylish and functional sinks",
      image: sink,
    },
  ];

  return (
    <section className="product-categories-section">
      <h2 className="fw-bold">Product Categories</h2>
      <p className="text-muted mb-5">
        Discover the art of culinary excellence with our premium selection of
        kitchenware essentials.
      </p>
      <div className="categories-container">
        <div className="categories-scroll-wrapper" onScroll={handleScroll}>
          {/* LEFT ARROW */}
          <img
            src={leftArrow}
            alt="left"
            className="arrow-btnn left-arrow"
            onClick={scrollLeft}
          />

          <div ref={scrollRef} className="category-scroll">
            {items.map((item) => (
              <div key={item.title} className="category-card">
                <img src={item.image} alt={item.title} />
                <h4 className="category-title">{item.title}</h4>
                <p className="category-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <img
            src={rightArrow}
            alt="right"
            className="arrow-btnn right-arrow"
            onClick={scrollRight}
          />
        </div>
      </div>

      <div className="indicators-container">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                const itemWidth =
                  scrollRef.current.children[0].offsetWidth + 16;
                scrollRef.current.scrollBy({
                  left: (index - activeIndex) * itemWidth,
                  behavior: "smooth",
                });
                setActiveIndex(index);
              }
            }}
            className={`indicator-dot ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
