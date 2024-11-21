import React from 'react';
const TeamCard = ({ image, name, designation }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} className='listing-image' />

      <div className='details'>
        <h3 className='name'>{name}</h3>
        <h5 className='designation'>{designation}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
