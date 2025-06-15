import { useState, useEffect, useRef, useCallback } from "react";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => setIsActive(prev => !prev);

  // lenis
  // 1. Hold the Lenis instance
  const lenisRef = useRef(null);

  // 2. Create & start Lenis once after mount
  useEffect(() => {
    lenisRef.current = new Lenis({ duration: 1.2, smooth: true });

    // Kick off the rAF loop that Lenis needs
    const raf = (time) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => lenisRef.current?.destroy();
  }, []);

  // 3. Helper for buttons/links—safe, memoised
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el);
    }
  }, []);

  return (
    <header>
        <nav className="navbar border-bottom">
            <div className="nav-logo d-flex">
                <p className="text-xs font-clash-regular">Based in <br/>Dubai, UAE</p>
                <p className="text-xs font-clash-regular">Say Hi, <br/>nihaal@dexaisolutions.com</p>
            </div>
            <div className="nav-toggle" onClick={toggleNav} id="navToggle">&#9776;</div>
            <ul className={`nav-links d-flex ${isActive ? 'active' : ''}`} id="navLinks">
                <li className="text-sm font-clash-regular"><a onClick={() => scrollToSection('about')}>About</a></li>
                <li className="text-sm font-clash-regular"><a onClick={() => scrollToSection('what-i-do')} >Services</a></li>
                <li className="text-sm font-clash-regular"><a onClick={() => scrollToSection('work')} >Work</a></li>
                <li className="text-sm font-clash-regular"><a onClick={() => scrollToSection('tech')} >Blog</a></li>
                <li className="text-sm font-clash-regular hire-button"><a onClick={() => scrollToSection('contact')} >Hire Me</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;