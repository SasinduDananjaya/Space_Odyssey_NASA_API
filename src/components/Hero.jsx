import React from 'react';
import videH from '../assets/SPACE4K.mp4';
import spaceMan from '../assets/spaceMan.png';
import Articles from './Article';


const Hero = () => {
  return (
    <section>
      <div className="background-video">
        <video autoPlay muted loop>
          <source src={videH} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={
            "flex justify-center items-center h-full translate-y-[-5%]"
          }
        >
          <div className="flex flex-col items-center lg:items-start" >
            <h3 className="text-[10vw] sm:text-[4rem] font-medium " >Space <span style={{ color: '#FF7800' }}>Odyssey</span></h3>
            <p className="text-[4vw] sm:text-[1.4rem] font-light items-center" >Let's learn about space!</p>
            <Articles/>
          </div>

          <div className="mb-6 lg:mb-0" >
              <img src={spaceMan} className="w-[20rem]" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

