import React from 'react';

const FooterInfoBar = () => {
  return (
    <div className='footer-info-bar'>
      <div className='copy-rights'>
        <div className='small-paragraph'>© Rezilla – All rights reserved</div>
      </div>
      <div className='info-details'>
        <div className='terms'>
          <div className='small-paragraph'> Terms and Conditions</div>
        </div>
        <div className='terms'>
          <div className='small-paragraph'>Privacy Policy</div>
        </div>
        <div className='terms'>
          <div className='small-paragraph'>Disclaimer</div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfoBar;
