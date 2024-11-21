import React from 'react';

import { ReactComponent as MapPin } from '../assets/svgs/MapPin.svg';
import { ReactComponent as Phone } from '../assets/svgs/Phone.svg';
import { ReactComponent as Email } from '../assets/svgs/Email.svg';

const InfoBar = () => {
  return (
    <div className='info-bar'>
      <div className='address'>
        <MapPin class />

        <div className='small-paragraph'>Rezilla, 18 Grattan St, Brooklyn</div>
      </div>
      <div className='info-details'>
        <div className='contact'>
          <Phone />
          <div className='small-paragraph'> +1 206-214-2298</div>
        </div>
        <div className='contact'>
          <Email />
          <div className='small-paragraph'>support@rezilla.com</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
