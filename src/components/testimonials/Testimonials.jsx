import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import Divider from "../../assets/images/home/divider_img.png";
import MainImage from "../../assets/images/home/testimonial_image.jpg";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: MainImage,
      text: "This service has transformed our business operations. The team is professional, responsive, and truly understands our needs. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      image: MainImage,
      text: "Outstanding quality and attention to detail. Working with this team has been an absolute pleasure. They exceeded all our expectations!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: MainImage,
      text: "Incredible experience from start to finish. Their expertise and dedication made all the difference. We've seen remarkable results!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h5>Testimonials</h5>
        <h1>
          What <span>People Say</span>
        </h1>
        <img src={Divider} alt="" />
      </div>

      <div className="testimonials-slider">
        <button
          className="nav-button prev-button"
          onClick={handlePrevious}
          aria-label="Previous testimonial"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="testimonial-image"
            />
          </div>
          <p className="testimonial-text">
            "{testimonials[currentIndex].text}"
          </p>
          <h3 className="testimonial-name">
            {testimonials[currentIndex].name}
          </h3>
          <p className="testimonial-role">{testimonials[currentIndex].role}</p>
        </div>

        <button
          className="nav-button next-button"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "dot-active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
