import React, { useState } from 'react';

import image1 from '../assets/images/rezillaImage1.jpeg';
import image2 from '../assets/images/rezillaimage2.jpeg';
import image3 from '../assets/images/rezillaimage3.jpeg';
import image4 from '../assets/images/rezillaimage4.jpeg';

const GallarySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='gallery-slider'>
      <button className='gallery-button left' onClick={handlePrev}>
        ‹
      </button>
      <div className='gallery-image'>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className='gallery-button right' onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

export default GallarySlider;
