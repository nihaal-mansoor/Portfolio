import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
          <h1 className="text-6xl font-clash font-clash-extralight split-text">
              HI, I'M <span className="text-6xl font-clash font-clash-semibold split-text">NIHAAL</span>
          </h1>
          <div className="d-flex">
              <h2 className="text-5xl font-playfair font-clash-light sub-heading_1 split-text">Front-End 
                <span className="text-5xl font-playfair font-clash-bold sub-heading_1 hover_effect split-text">WordPress</span>
              </h2>
              <h2 className="text-5xl font-playfair font-clash-light split-text">Developer</h2>
          </div>
      </div>
      <div className="ticker-wrapper">
          <p className="ticker-text">Crafting clean, functional websites with 5+ years of experience.</p>
      </div>
    </section>
  )
}

export default Hero