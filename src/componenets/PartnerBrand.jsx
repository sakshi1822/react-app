import React from "react";
import leftArrow from "../assets/icons/left-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";
import { useState, useRef } from "react";
import videoImage from "../assets/images/video.webp";
import "../styles/PartnerBrand.css";

const PartnerBrand = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const items = [
    {
      videoImage: videoImage,
    },
  ];

  return (
    <section
      className="py-5 text-center position-relative"
      style={{
        background: "linear-gradient(to bottom, #faf7f7ff 50%, #f7faef 50%)",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          position: "relative",
          alignContent: "center",
        }}
      >
        <h2 className="fw-bold">Discover Our Partner Brands</h2>
        <p className="text-muted mb-5">
          Discover the art of culinary excellence with our premium selection of
          kitchenware essentials.
        </p>

        <div
          className="position-relative d-flex align-items-center"
          style={{ width: "100%" }}
        >
          {/* LEFT ARROW */}
          <img
            src={leftArrow}
            alt="left"
            onClick={scrollLeft}
            className="left-arr"
          />

          <div
            ref={scrollRef}
            className="d-flex gap-4 overflow-auto px-3 scroll-track"
            style={{
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              position: "relative",
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-2xl shadow p-4 flex-shrink-0 card-item"
                style={{
                  margin: "0 auto",
                  borderRadius: "40px",
                  height: "480px",
                  background:
                    "linear-gradient(to bottom, #fefbfbed 50%, #e1ccccff 50%)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="relative "
                  style={{
                    width: "1020px",
                    height: "340px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.videoImage}
                    alt="video"
                    style={{
                      width: "80%",
                      maxWidth: "800px",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
                <div
                  className="d-flex justify-content-center gap-2 mt-3"
                  style={{
                    width: "100%",
                    padding: "20px 0",
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
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
                      style={{
                        height: "4px",
                        width: "60px",
                        backgroundColor:
                          activeIndex === index ? "#8BC34A" : "#ddd",
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <img
            src={rightArrow}
            alt="right"
            onClick={scrollRight}
            className="right-arr"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerBrand;
