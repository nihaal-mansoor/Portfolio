import Copy from './Copy';

const Hero = () => {
  
  return (
    <section id="hero" className="hero">
      <div className="container">
          <Copy delay={0.5}><h1 className="text-6xl font-clash font-clash-extralight">Hi, I am <span className="text-6xl font-playfair font-clash-regular accent-100">Nihaal</span> <br/><span className="text-6xl font-playfair font-clash-regular accent-100">Front-End Developer</span><br/> Focused on Creating Seamless Digital Experiences</h1></Copy>
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