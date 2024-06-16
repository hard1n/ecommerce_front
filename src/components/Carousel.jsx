import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { PropTypes } from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Carousel = ({ children: slides }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const prevSlide = () => {
    setImgIndex(imgIndex === 0 ? slides.length - 1 : imgIndex - 1);
  };

  const nextSlide = () => {
    setImgIndex(imgIndex === slides.length - 1 ? 0 : imgIndex + 1);
  };

  const goToSlide = (index) => {
    setImgIndex(index);
  };

  // useEffect(), [];
  return (
    <>
      <section className="relative w-full overflow-hidden no-scrollbar">
        <figure
          {...handlers}
          className="flex bg-grayish-blue transition-transform ease-in-out duration-300"
          style={{
            // overflowBehaviorX: "contain",
            // scrollSnapType: "x mandatory",
            transform: `translateX(${-100 * imgIndex}%)`,
          }}
        >
          {slides}
        </figure>
        {/* <button className="absolute inset-y-0 align-middle" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button
          className="absolute inset-y-0 align-middle right-0"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button> */}
        <div className="absolute bottom-4 inset-x-0 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all w-3 h-3 bg-white drop-shadow-2xl ${
                  imgIndex === i ? "p-2" : "bg-opacity-50"
                }`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Carousel;
