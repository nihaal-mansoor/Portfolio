import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import WhatIDo from '../components/WhatIDo';
import Work from '../components/Work';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {

  return (
    <div>
        <Header />
        <Hero />
        <About />
        <TechStack />
        <WhatIDo />
        <Work />
        <Blog />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home