import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className="navbar border-bottom">
            <div className="nav-logo d-flex">
                <p className="font-clash text-xs font-clash-extralight">Based in <br/>Dubai, UAE</p>
                <p className="font-clash text-xs font-clash-extralight">Say Hi, <br/>nihaal@dexaisolutions.com</p>
            </div>
            <div className="nav-toggle" id="navToggle">&#9776;</div>
            <ul className="nav-links d-flex" id="navLinks">
                <li className="font-clash text-sm font-clash-extralight"><a href="#about">About</a></li>
                <li className="font-clash text-sm font-clash-extralight"><a href="#services">Services</a></li>
                <li className="font-clash text-sm font-clash-extralight"><a href="#work">Work</a></li>
                <li className="font-clash text-sm font-clash-extralight"><a href="#tech">Blog</a></li>
                <li className="font-clash text-sm font-clash-extralight hire-button"><a href="#contact">Hire Me</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header