import React from 'react';
import { useSplitTextAnimation } from '../hooks/useGSAPAnimations.js';
import Copy from './Copy';

const Hero = () => {
  
//   const containerRef = useSplitTextAnimation();
  
  return (
    <section id="hero" className="hero">
      <div className="container">
          {/* <Copy><h1 className="text-6xl font-clash font-clash-extralight split-text">
              HI, I'M <span className="text-6xl font-clash font-clash-semibold split-text">NIHAAL</span>
          </h1></Copy> */}
          <Copy delay={0.5}><h1 className="text-6xl font-clash font-clash-extralight split-text">Hi, I am Nihaal <br/><span className="text-6xl font-clash font-clash-semibold split-text accent-100">Front-End Developer</span><br/> Focused on Creating Seamless Digital Experiences</h1></Copy>
          {/* <div className="d-flex"> */}
            {/* <Copy><h2 className="text-5xl font-playfair font-clash-light sub-heading_1 split-text">Front-End 
                <span className="text-5xl font-playfair font-clash-bold sub-heading_1 hover_effect split-text">WordPress</span>
              </h2>
            </Copy>
            <Copy>
               <h2 className="text-5xl font-playfair font-clash-light split-text">Developer</h2>
            </Copy> */}
          {/* </div> */}
      </div>
      <div className="ticker-wrapper">
         <Copy>
            <p className="ticker-text">Crafting clean, functional websites with 4+ years of experience.</p>
         </Copy>
      </div>
    </section>
  )
}

export default Hero