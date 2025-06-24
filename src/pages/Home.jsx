import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import WhatIDo from '../components/WhatIDo';
import Work from '../components/Work';
import Blog from '../components/Blog';
import { ReactLenis } from 'lenis/react';

const Home = () => {

   return (
      <div>
         <ReactLenis root>
         <Header />
         <Hero />
         <WhatIDo />
         <About />
         <Work />
         <TechStack />
         <Blog />
         <Footer />
         </ReactLenis>
      </div>
   )
}

export default Home