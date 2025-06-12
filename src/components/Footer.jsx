import React from 'react'
import gitHubIcon from '../assets/github-icon.svg';
import linkedInIcon from '../assets/linkedin-icon.svg';

const Footer = () => {
  return (
        <footer className='border-top d-flex'>
        <div className="social-links d-flex">
            <a
            href="https://www.linkedin.com/in/nihaal-khan-1b1b1b1b1b/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img 
                src={linkedInIcon}
                alt="LinkedIn" 
                width="25" 
                height="25"
            />
            </a>
            <a 
            href="https://github.com/nihaal-khan"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img 
                src={gitHubIcon} 
                alt="Github"
                width="25"
                height="25"
            />
            </a>
        </div>
        <p className="font-clash text-sm font-clash-extralight">Nihaal © 2024. All rights reserved.</p>
       
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
        <script src="https://unpkg.com/lenis@1.3.4/dist/lenis.min.js"></script>
        <script src="script.js"></script> 
    </footer>
  )
}

export default Footer