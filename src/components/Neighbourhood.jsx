import React from 'react';
import imgNewYork from '../assets/images/NeighbouhoodNY.png';
import imgHouston from '../assets/images/NBHouston.png';
import imgSanDiago from '../assets/images/NBSiandeigo.png';
import imgPhilodelphia from '../assets/images/NBPhilodelphia.png';
import imgSanFrancisco from '../assets/images/NBSanFrancisco.png';

const Neighbourhood = () => {
  return (
    <div className='neighbourhood'>
      <div className='ellipse'></div>
      <div className='titles'>
        <h6 className='.h5-md'>AREAS ACROSS THE TOWN</h6>
        <h2>Neighborhood Properties</h2>
      </div>
      <div className='neighbourhood-images'>
        <div className='images'>
          <div className='new-york'>
            <img src={imgNewYork} alt='new-york' />
            <div className='image-tag'>
              <h1>216</h1>
              <h4>New York City, NY</h4>
            </div>
          </div>
          <div className='houston'>
            <img src={imgHouston} alt='houston' />
            <div className='image-tag'>
              <h1>141</h1>
              <h4>Houston, TX</h4>
            </div>
          </div>
          <div className='san-diago'>
            <img src={imgSanDiago} alt='san-diago' />
            <div className='image-tag'>
              <h1>212</h1>
              <h4>San Diego, CA</h4>
            </div>
          </div>
        </div>
        <div className='images'>
          <div className='philodelphia'>
            <img src={imgPhilodelphia} alt='philodelphia' />
            <div className='image-tag'>
              <h1>183</h1>
              <h4>Philadelphia, PA</h4>
            </div>
          </div>
          <div className='san-francisco'>
            <img src={imgSanFrancisco} alt='san-francisco' />
            <div className='image-tag'>
              <h1>112</h1>
              <h4>San Francisco, CA</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='ellipse1'></div>
    </div>
  );
};

export default Neighbourhood;
