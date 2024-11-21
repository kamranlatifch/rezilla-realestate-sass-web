//
import React from 'react';
import imgAgent from '../assets/images/agent.png';

const Agent = () => {
  return (
    <div className='main-agent-section'>
      <div className='agent-sub-section'>
        <img src={imgAgent} alt='agent.png' />
        <div className='details'>
          <div className='title'>
            <h2>Become a Agent.</h2>
            <p>
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.
            </p>
          </div>
          <button className='button'>
            <h5>Register Now</h5>
          </button>
        </div>

        <div className='ellipse'></div>

        <div className='ellipse1'></div>
      </div>
    </div>
  );
};

export default Agent;
