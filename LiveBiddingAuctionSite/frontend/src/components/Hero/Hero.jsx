import React from 'react';
import HeroImage from '../../pages/images/HERO.png'


const Hero = () => {
  return (
    <div className='w-full h-full'>
      <img src={HeroImage} className='heroImg' />
    </div>
  );

}
export default Hero;
