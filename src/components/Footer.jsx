import React from 'react';
import HomeIcon from '../assets/svgs/HomeIcon';
import Phone from '../assets/svgs/phone';
import Email from '../assets/svgs/Email';
import { ReactComponent as Facebook } from '../assets/svgs/Facebook.svg';
import { ReactComponent as Linkedin } from '../assets/svgs/Linkedin.svg';
import { ReactComponent as Instagram } from '../assets/svgs/Instagram.svg';
import { ReactComponent as Send } from '../assets/svgs/EmailSendIcon.svg';

const Footer = () => {
  return (
    <div className='footer-primary'>
      <div className='contact'>
        <div className='footer-logo'>
          <div className='logo'>
            <HomeIcon width={24} height={24} />
          </div>
          <h4>Rezilla</h4>
        </div>
        <h5>2728 Hickory StreetSalt Lake City, UT 84104</h5>
        <div className='phone'>
          <Phone fill='black' />
          <h5>+1 206-214-2298</h5>
        </div>
        <div className='email'>
          <Email fill='black' />
          <h5>support@rezilla.com</h5>
        </div>
      </div>
      <div className='quick-links'>
        <h4>Quick Links</h4>
        <div className='link'>
          <p>Home</p>
          <p>About</p>
          <p>Listing</p>
          <p>Services</p>
          <p>Blogs</p>
          <p>Become a Agent</p>
        </div>
      </div>
      <div className='discovery'>
        <h4>Discovery</h4>
        <div className='link'>
          <p>Canada</p>
          <p>United States</p>
          <p>Germany</p>
          <p>Africa</p>
          <p>India</p>
        </div>
      </div>

      <div className='newsletter'>
        <h4>Subscribe to our Newsletter!</h4>
        <div className='input-container'>
          <input
            type='email'
            placeholder='Email Address'
            className='email-input'
          />
          <div className='send-icon'>
            <Send />
          </div>
        </div>
        <h4>Follow Us on</h4>
        <div className='media-icons'>
          <Linkedin />
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
