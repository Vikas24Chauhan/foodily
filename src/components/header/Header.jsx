import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import HeroImage1 from "../../assets/images/home/header_img_1.png";
import HeroImage2 from "../../assets/images/home/header_img_2.png";
import HeroImage3 from "../../assets/images/home/header_img_3.png";
import BottomPattern2 from "../../assets/images/home/bottom_pattern_2.png";

function Header() {
  const slides = [
    {
      id: 1,
      image: HeroImage1,
      color: "#beb996",
      title: "Healthy Smoothie",
      desc: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      className: "header-container-1",
    },
    {
      id: 2,
      image: HeroImage2,
      color: "#a79bac",
      title: "Healthy Smoothie",
      desc: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      className: "header-container-2",
    },
    {
      id: 3,
      image: HeroImage3,
      color: "#dd9871",
      title: "Healthy Smoothie",
      desc: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      className: "header-container-3",
    },
  ];

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [animateSlide, setAnimateSlide] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger animation on slide change
  useEffect(() => {
    setAnimateSlide(false);
    const timer = setTimeout(() => {
      setAnimateSlide(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex >= extendedSlides.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedSlides.length - 2);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`header-section ${
        isVisible && animateSlide ? "animate-in" : ""
      }`}
      style={{ backgroundColor: extendedSlides[currentIndex].color }}
    >
      <main className="header-main">
        <div
          className="header-slider"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            display: "flex",
            width: "100%",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className={slide.className}>
              <div className={`header-contant-${slide.id}`}>
                <div className={`header-text-${slide.id}`}>
                  <h1>
                    {slide.title.split(" ")[0]}
                    <br />
                    {slide.title.split(" ")[1]}
                  </h1>
                  <p>{slide.desc}</p>
                  <button>Buy Now</button>
                </div>
                <div className={`header-image-${slide.id}`}>
                  <img src={slide.image} alt="Smoothie" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="header-nav-button header-prev-button"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <button
          className="header-nav-button header-next-button"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </main>
      <img className="header-bottom-image" src={BottomPattern2} alt="" />
    </section>
  );
}

export default Header;
