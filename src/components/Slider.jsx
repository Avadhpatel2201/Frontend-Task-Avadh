import React from 'react';
import { useState } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of image data (replace with your actual images)
  const slides = [
    {
      src: 'src/assets/slider01.webp', // Update with your image paths
      alt: 'Bicycle Servicing',
      caption: 'Ride without limits High Performance Electric Bicycles',
      description: 'Performance built to handle any terrain and riding style',
    },
    {
      src: 'src/assets/slider02.webp', // Update with your image paths
      alt: 'Bicycle Servicing',
      caption: "California's Premier Electric Bicycle Superstore",
      description: 'Performance built to handle any terrain and riding style',
    },
    {
      src: 'src/assets/slider03.webp', // Update with your image paths
      alt: 'Bicycle Servicing',
      caption: 'On-Site Skilled Bike Mechanics',
      description: 'Performance built to handle any terrain and riding style',
    }
    // Add more slide objects here
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={activeIndex === index ? 'active' : ''}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            <div className="carousel-text d-none d-md-block">
              <h2 className='width-75'>{slide.caption}</h2>
              <h5 className='py-2 width-55'>{slide.description}</h5>
              <button>Get in Touch
              <i aria-hidden="true" class="slide-button-align-icon-left fas fa-long-arrow-alt-right px-3"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev width_slider_button"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next width_slider_button"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default Slider
