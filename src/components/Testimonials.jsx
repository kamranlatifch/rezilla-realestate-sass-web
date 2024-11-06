import React, { useState } from 'react';
import { ReactComponent as NextIcon } from '../assets/svgs/BlogNext.svg';
import { ReactComponent as PreviousIcon } from '../assets/svgs/BlogPrevious.svg';
import TestimonialCard from './TestimonialCard';
import jodi from '../assets/images/TJodi.png';
import susan from '../assets/images/TSusan.png';
import justin from '../assets/images/TJustin.png';

const Testimonials = () => {
  const testimonialsData = [
    {
      description:
        "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
      image: jodi,
      name: 'Barbara D. Smith',
      stars: 5,
    },
    {
      description:
        "I highly recommend Susan B. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",

      image: susan,
      name: 'Jane Smith',
      stars: 4,
    },
    {
      description:
        "I highly recommend Peter J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",

      image: justin,
      name: 'Michael Johnson',
      stars: 3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleSliderClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className='testimonials'>
      <div className='details'>
        <div className='titles'>
          <h6 className='.h5-md'>TESTIMONIALS</h6>
          <h2>Look What Our Customers Say!</h2>
          <p>
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.{' '}
          </p>
        </div>
        <div className='buttons'>
          <div className='previous' onClick={handlePrevious}>
            <PreviousIcon />
          </div>
          <div className='next' onClick={handleNext}>
            <NextIcon />
          </div>
        </div>
      </div>

      <div className='testimonails-cards'>
        <TestimonialCard
          description={testimonialsData[currentIndex]?.description}
          image={testimonialsData[currentIndex]?.image}
          name={testimonialsData[currentIndex]?.name}
          stars={testimonialsData[currentIndex]?.stars}
        />

        <div className='sliders'>
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className='slider'
              style={{
                backgroundColor: currentIndex === index ? '#808080' : '#D4D4D4',
              }}
              onClick={() => handleSliderClick(index)}
            ></div>
          ))}
        </div>

        <div className='ellipse'></div>
      </div>
    </div>
  );
};

export default Testimonials;
