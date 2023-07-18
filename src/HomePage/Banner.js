import React from 'react';
import video from '../videos/adcomingsoon.mp4';

function Banner() {
  return (
    <div className='text-center'>
      <video  autoPlay muted loop playsInline>
      <source src={video} type="video/mp4"
      />
    </video>
    </div>
    
  )
}

export default Banner