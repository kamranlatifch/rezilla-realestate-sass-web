import React from 'react';

import { ReactComponent as NextIcon } from '../assets/svgs/BlogNext.svg';

const BlogCard = ({ image, title, description, date }) => {
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={image} alt={title} className='listing-image' />
        <div className={`date-tag`}>
          <h4>{date?.date}</h4>
          <p>{date?.day}</p>
        </div>
      </div>
      <div className='details'>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
      </div>
      <div className='button'>
        <NextIcon />
      </div>
    </div>
  );
};

export default BlogCard;
