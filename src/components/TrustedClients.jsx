import React from 'react';
import { ReactComponent as Google } from '../assets/svgs/google.svg';
import { ReactComponent as Amazon } from '../assets/svgs/amazon.svg';
import { ReactComponent as LogiTech } from '../assets/svgs/logitech.svg';
import { ReactComponent as Spotify } from '../assets/svgs/spotify.svg';
import { ReactComponent as Samsung } from '../assets/svgs/samsung.svg';
import { ReactComponent as Netflix } from '../assets/svgs/netflix.svg';

const TrustedClients = () => {
  return (
    <div className='clients-main'>
      <div className='ellipse'></div>
      <h5>Trusted by 100+ Companies across the globe! </h5>
      <div className='clients-logo'>
        <div className='logo-wrapper blend-mode'>
          <Google />
        </div>
        <div className='logo-wrapper blend-mode'>
          <Amazon />
        </div>
        <div className='logo-wrapper blend-mode'>
          <LogiTech />
        </div>
        <div className='logo-wrapper blend-mode'>
          <Spotify />
        </div>
        <div className='logo-wrapper blend-mode'>
          <Samsung />
        </div>
        <div className='logo-wrapper blend-mode'>
          <Netflix />
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
