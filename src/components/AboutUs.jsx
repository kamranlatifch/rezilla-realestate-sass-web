import React from 'react';
import AboutImage1 from '../assets/images/aboutImage1.png';
import AboutImage2 from '../assets/images/aboutImage2.png';
import AboutImage3 from '../assets/images/aboutImage3.png';
import { ReactComponent as SVG1 } from '../assets/svgs/aboutCardSvg1.svg';
import { ReactComponent as SVG2 } from '../assets/svgs/aboutCardSvg2.svg';
import { ReactComponent as Stamp } from '../assets/svgs/stamp.svg';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='who-we-are'>
        <h6 className='.h5-md'>WHO ARE WE</h6>
        <h2>Assisting individuals in locating the appropriate real estate.</h2>
        <p>
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
          malesuada leo volutpat.
        </p>
        <div className='cards'>
          <div className='card'>
            <SVG1 />
            <div className='details'>
              <h6 className='.h5-md'>Donec porttitor euismod</h6>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
          <div className='card'>
            <SVG2 />
            <div className='details'>
              <h6 className='.h5-md'>Donec porttitor euismod</h6>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
        </div>
      </div>
      <div className='image-div'>
        <img className='main-image' src={AboutImage1} alt='' />

        <div className='div2'>
          <img src={AboutImage2} alt='' />
          <img src={AboutImage3} alt='' />
        </div>
        <div className='stamp'>
          <Stamp />
        </div>
        <div className='ellipse'></div>
      </div>
    </div>
  );
};

export default AboutUs;
