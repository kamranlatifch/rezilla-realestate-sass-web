import React from 'react';
import { ReactComponent as Search } from '../assets/svgs/ServicesSearch.svg';
import { ReactComponent as Home } from '../assets/svgs/ServicesHome.svg';
import { ReactComponent as Bed } from '../assets/svgs/ServicesBed.svg';

const OurServices = () => {
  return (
    <div className='our-services'>
      <h5>OUR SERVICES</h5>
      <h2>Donec porttitor euismod dignissim</h2>

      <div className='services-cards'>
        <div className='card'>
          <div className='icon'>
            <Search />
          </div>
          <div className='details'>
            <h4>Buy a New Home</h4>
            <p>
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.{' '}
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='icon'>
            <Home />
          </div>
          <div className='details'>
            <h4>Sell a House</h4>
            <p>
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.{' '}
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='icon'>
            <Bed />
          </div>
          <div className='details'>
            <h4>Rent a House</h4>
            <p>
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
