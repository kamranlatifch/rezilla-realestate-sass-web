import React, { useState } from 'react';
import ListingCard from './ListingCard';
import Listing1 from '../assets/images/Listing1.png';
import Listing2 from '../assets/images/Listing2.png';
import Listing3 from '../assets/images/Listing3.png';

const PropertyListing = () => {
  const [activeButton, setActiveButton] = useState('Sell');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const listingData = [
    {
      image: Listing1,
      tag: 'Popular',
      price: 5970,
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      bath: 3,
    },
    {
      image: Listing2,
      tag: 'New Listing',
      price: 1970,
      title: 'Serene Retreat by the Lake',
      address: '1964 Jehovah Drive, VA 22408',
      beds: 3,
      bath: 2,
    },
    {
      image: Listing3,
      tag: 'Discounted Price',
      price: 3450,
      title: 'Charming Cottage in the Meadow',
      address: '1508 Centennial Farm RoadHarlan, 51537',
      beds: 4,
      bath: 4,
    },
    {
      image: Listing1,
      tag: 'Popular',
      price: 5970,
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      bath: 3,
    },
    {
      image: Listing1,
      tag: 'Popular',
      price: 5970,
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      bath: 3,
    },
    {
      image: Listing1,
      tag: 'Popular',
      price: 5970,
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      bath: 3,
    },
  ];
  return (
    <div className='property-listings'>
      <div className='listing-headers'>
        <div className='listing-titles'>
          <h6 className='.h5-md'>CHECKOUT OUR NEW</h6>
          <h2>Latest Listed Properties</h2>
          <p>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>

        <div className='listing-buttons'>
          <button
            className={`button ${activeButton === 'All' ? 'active' : ''}`}
            onClick={() => handleButtonClick('All')}
          >
            All
          </button>
          <button
            className={`button ${activeButton === 'Sell' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Sell')}
          >
            Sell
          </button>
          <button
            className={`button ${activeButton === 'Rent' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Rent')}
          >
            Rent
          </button>
        </div>
      </div>
      <div className='listing-cards'>
        {listingData?.map((item, index) => {
          return (
            <ListingCard
              image={item?.image}
              tag={item?.tag}
              price={item?.price}
              title={item?.title}
              address={item?.address}
              beds={item?.beds}
              bath={item?.bath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyListing;
