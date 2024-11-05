import React from 'react';
import { ReactComponent as PopularSvg } from '../assets/svgs/PopularIcon.svg';
import { ReactComponent as NewSvg } from '../assets/svgs/NewListing.svg';
import { ReactComponent as DiscountedSvg } from '../assets/svgs/DiscountedPrice.svg';
import { ReactComponent as BedSvg } from '../assets/svgs/Bed.svg';
import { ReactComponent as BathSvg } from '../assets/svgs/Bath.svg';

const ListingCard = ({ image, tag, price, title, address, beds, bath }) => {
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={image} alt={title} className='listing-image' />
        <div
          className={`tag ${
            tag === 'Popular'
              ? 'popular'
              : tag === 'New Listing'
              ? 'new-listing'
              : 'discounted'
          } `}
        >
          {tag === 'Popular' ? (
            <PopularSvg />
          ) : tag === 'New Listing' ? (
            <NewSvg />
          ) : (
            <DiscountedSvg />
          )}
          <h5
            className={`${
              tag === 'Popular'
                ? 'popular'
                : tag === 'New Listing'
                ? 'new-listing'
                : 'discounted'
            } `}
          >
            {tag}
          </h5>
        </div>
      </div>
      <div className='details'>
        <h3 className='price'>${price}</h3>
        <h4 className='title'>{title}</h4>
        <p className='address'>{address}</p>
        <div className='bed-bath'>
          <div className='beds'>
            <BedSvg />
            <p>{beds} Beds</p>
          </div>
          <div className='bath'>
            <BathSvg />
            <p>{bath} Bath</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
