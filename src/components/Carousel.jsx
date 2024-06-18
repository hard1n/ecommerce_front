import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { PropTypes } from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import useWindowWith from "../hooks/useWindowWith";

const Carousel = ({ children: slides }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const windowWidth = useWindowWith();

  slides.map((slide) => console.log("Clases: ", slide.props.className));

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
      <section className="w-full">
        <figure className="relative overflow-hidden md:h-auto md:rounded-xl no-scrollbar">
          <div
            {...handlers}
            className="flex bg-grayish-blue transition-transform ease-in-out duration-300"
            style={{
              // overflowBehaviorX: "contain",
              // scrollSnapType: "x mandatory",
              transform: `translateX(${-100 * imgIndex}%)`,
            }}
          >
            {slides}
          </div>

          {/*** Render next & prev buttons on desktop ***/}
          {windowWidth >= 768 && (
            <div>
              <button
                className="absolute p-2 inset-y-0 align-middle"
                onClick={prevSlide}
              >
                <div className="rounded-full p-2 bg-orange-pale">
                  <FaChevronLeft size={20} />
                </div>
              </button>
              <button
                className="absolute p-2 inset-y-0 align-middle right-0"
                onClick={nextSlide}
              >
                <div className="rounded-full p-2 bg-orange-pale">
                  <FaChevronRight size={20} />
                </div>
              </button>
            </div>
          )}
        </figure>

        {/**** Slide tracker ****/}
        <div className="mt-4 md:-bottom-12 inset-x-0 ">
          <div className="flex md:h-20 items-center justify-center md:justify-between gap-4">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`flex rounded-full relative transition-all w-3 h-3 md:rounded-lg md:overflow-hidden hover:cursor-pointer md:h-20 md:w-20 drop-shadow-2xlx ${
                  imgIndex === i
                    ? "bg-orange border-bg-dark-grayish-blue md:p-0 md:border-2 md:border-orange"
                    : "bg-grayish-blue"
                }`}
                onClick={() => goToSlide(i)}
                // style={{
                //   backgroundImage: `url(${slide})`,
                // }}
              >
                {windowWidth >= 768 && (
                  <>
                    {slide}
                    {imgIndex === i && (
                      <div className="absolute inset-0 bg-white opacity-60" />
                    )}
                  </>
                )}
              </div>
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
