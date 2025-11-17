import React from "react";
import person1 from "../assets/icons/photo (1).webp";
import person2 from "../assets/icons/photo (2).webp";
import "../styles/Customer.css";
import quote1 from "../assets/images/quote (1).svg";
import quote2 from "../assets/images/quote (2).svg";
import leftArrow from "../assets/icons/left-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";
import { useRef } from "react";

const Customer = () => {
  const testimonials = [
    {
      name: "Issabella",
      category: "Kitchenware",
      image: person1,
      text: "I have a great experience in Desai.mu as they have stunning customer support with the brilliant design team. Over all Desai.mu will reach its apex",
    },
    {
      name: "Markus",
      category: "Kitchenware",
      image: person2,
      text: "I have a great experience in Desai.mu as they have stunning customer support with the brilliant design team. Over all Desai.mu will reach its apex",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-100 py-5" style={{ backgroundColor: "#f7faef" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-2">What Our Customer Says</h2>
        <p className="text-muted mb-5">
          Discover the art of culinary excellence with our premium selection of
          kitchenware essentials.
        </p>
        <div className="customer-wrapper">
          <img
            src={leftArrow}
            alt="prev"
            className="arrow-btn left-a"
            onClick={scrollLeft}
          />

          <div className="horizontal" ref={scrollRef}>
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="card p-4 rounded-1"
                style={{ width: "450px" }}
              >
                <div className="person-wrapper mb-2">
                  <img src={quote2} className="quote-left" alt="quote left" />
                  <img
                    src={item.image}
                    className="person-img"
                    width="80"
                    height="80"
                    alt={item.name}
                  />
                  <img src={quote1} className="quote-right" alt="quote left" />
                </div>

                <h5 className="fw-semibold text-center">
                  {item.name}{" "}
                  <span className="text-success">| {item.category}</span>
                </h5>

                <p className="text-muted mt-3 text-center">{item.text}</p>
              </div>
            ))}
          </div>
          <img
            src={rightArrow}
            alt="next"
            className="arrow-btn right-a"
            onClick={scrollRight}
          />
        </div>
        <button className="btn  mt-5 px-5 py-2 ">View All</button>
      </div>
    </div>
  );
};

export default Customer;
