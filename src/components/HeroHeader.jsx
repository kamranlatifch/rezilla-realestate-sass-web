import React from 'react';

import HomeIcon from '../assets/svgs/HomeIcon';
import { ReactComponent as UserIcon } from '../assets/svgs/User.svg';
import { ReactComponent as SearchFilters } from '../assets/svgs/SearchFilterts.svg';
import { ReactComponent as SearchIcon } from '../assets/svgs/SearchIcon.svg';
import Customer1 from '../assets/images/customer1.png';
import Customer2 from '../assets/images/customer2.png';
import Customer3 from '../assets/images/customer3.png';
import Customer4 from '../assets/images/customer4.png';
import Customer5 from '../assets/images/customer5.png';
import CustomerAdd from '../assets/images/customeradd.png';
import Property from '../assets/images/property.png';

import GallarySlider from './GallarySlider';

const HeroHeader = () => {
  return (
    <div className='main-hero-container'>
      <div className='ellipse'></div>

      <div className='main-header'>
        <div className='nav-buttons'>
          <button className='button'>Home</button>
          <button className='button'>About</button>
          <button className='button'>Listing</button>
          <button className='button'>Services</button>
          <button className='button'>Blogs</button>
        </div>
        <div className='nav-logo'>
          <div className='header-logo'>
            <HomeIcon width={24} height={24} />
          </div>
          <h4>Rezilla</h4>
        </div>

        <div className='header-buttons'>
          <div className='login'>
            <UserIcon />

            <h5>Login/Register</h5>
          </div>
          <button className='button add-property'>
            <HomeIcon width={20} height={20} />
            <h5 className='h5-buttons'>Add Listing</h5>
          </button>
        </div>
      </div>

      <div className='hero-section'>
        <div className='image-slider'>
          <h6 className='.h5-md'>REAL ESTATE</h6>
          <h1>Find a perfect home you love..!</h1>
          <p>
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>

          <GallarySlider />
        </div>

        <div className='form'>
          <div className='tabs'>
            <button className='h5-buttons'>For Sale</button>
            <button className='tab-button'>For Rent</button>
          </div>
          <input
            type='text'
            name=''
            id=''
            placeholder='New York, San Francisco, etc'
          />
          <input type='text' placeholder='Select Property Type' />
          <input type='text' placeholder='Select Rooms' />
          <div className='search-filters'>
            <SearchFilters />
            <p>Advance Search</p>
          </div>
          <button className='search-button'>
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
      <div className='hero-stats'>
        <div className='happy-customers'>
          <div className='icons'>
            <img src={Customer1} alt='customer' />
            <img src={Customer2} alt='customer' />
            <img src={Customer3} alt='customer' />
            <img src={Customer4} alt='customer' />
            <img src={Customer5} alt='customer' />
            <img src={CustomerAdd} alt='customer-add' />
          </div>
          <h4>72k+ Happy Customers</h4>
        </div>
        <div className='listing-stats'>
          <img src={Property} alt='property' />
          <h4>200+ New Listings Everyday!</h4>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
