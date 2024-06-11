import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Carousel = ({ children: slides }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const prevSlide = () => {
    setImgIndex(imgIndex === 0 ? slides.length - 1 : imgIndex - 1);
  };

  const nextSlide = () => {
    setImgIndex(imgIndex === slides.length - 1 ? 0 : imgIndex + 1);
  };
  return (
    <>
      <section className="flex relative ">
        <figure
          className="flex relative transition-transform ease-in-out overflow-x-scroll no-scrollbar"
          style={{
            overflowBehaviorX: "contain",
            scrollSnapType: "x mandatory",
            transform: `translateX(${-100 * imgIndex}%)`,
          }}
        >
          {slides}
          <button
            className="absolute inset-y-0 align-middle"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute inset-y-0 align-middle right-0"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </figure>
        <div className="absolute bottom-4 inset-x-0 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all w-3 h-3 bg-white ${
                  imgIndex === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
        {/* <div className="absolute flex justify-between inset-0">
          
        </div> */}
      </section>
    </>
  );
};

export default Carousel;
