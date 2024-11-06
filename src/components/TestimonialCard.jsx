import React from 'react';
import { ReactComponent as Comma } from '../assets/svgs/TestimonialComma.svg';
import RatingStar from '../assets/svgs/RatingStar';

const TestimonialCard = ({ description, image, name, stars }) => {
  return (
    <div className='card'>
      <div className='description'>
        <Comma />
        <h4>{description}</h4>
      </div>
      <div className='footer'>
        <div className='image'>
          <img src={image} alt={name} />
          <h4>{name}</h4>
        </div>
        <div className='stars'>
          {Array.from({ length: 5 }, (_, index) => (
            <RatingStar
              key={index}
              fill={index < stars ? '#FFC700' : '#D4D4D4'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
