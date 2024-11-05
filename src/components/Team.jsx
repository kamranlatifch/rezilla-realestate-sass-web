import React from 'react';
import imgBrandon from '../assets/images/Tbrandon.png';
import imgJodi from '../assets/images/TJodi.png';
import imgJustin from '../assets/images/TJustin.png';
import imgSusan from '../assets/images/TSusan.png';
import TeamCard from './TeamCard';
const Team = () => {
  return (
    <div className='team'>
      <div className='titles'>
        <h6 className='.h5-md'>Introduce yourself to </h6>
        <h2>Our Team of Experts</h2>
      </div>
      <div className='team-members'>
        <TeamCard
          image={imgBrandon}
          name='Brandon M'
          designation='CEO & Founder'
        />
        <TeamCard
          image={imgJodi}
          name='Jodi J. Appleby'
          designation='Real Estate Developer'
        />
        <TeamCard
          image={imgJustin}
          name='Justin S. Meza'
          designation='Listing Agent'
        />
        <TeamCard
          image={imgSusan}
          name='Susan T. Smith'
          designation="Buyer's Agent"
        />
      </div>
    </div>
  );
};

export default Team;
