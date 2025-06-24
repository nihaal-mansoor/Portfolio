import { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { useLenis } from 'lenis/react';

const Header = () => {

   const lenis = useLenis();
	const navbarRef = useRef(null);
   const [isNavActive, setIsNavActive] = useState(false);
   const handleNavToggle = () => { setIsNavActive(!isNavActive); };
   
   useEffect(() => {
      if (isNavActive) {
         document.body.style.overflow = styles.hidden;
      } else {
         document.body.style.overflow = '';
      }
      
      return () => {
         document.body.style.overflow = '';
      };
   }, [isNavActive]);
   
   document.addEventListener('click', (e) => {
      if (!navbarRef.current.contains(e.target) && navbarRef.current.classList.contains('nav-active')) {
         navbarRef.current.classList.remove('nav-active');
         document.body.style.overflow = '';
      }
   });

   useEffect(() => {
      function handleClickOutside(e) {
         if (
               isNavActive &&
               navbarRef.current &&
               !navbarRef.current.contains(e.target)
         ) {
               setIsNavActive(false);
         }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isNavActive]);

	return (
		<header>
			<nav
				ref={navbarRef}
				className={`${styles.navbar} ${isNavActive ? styles['nav-active'] : ''}`}
			>
				<div className="nav-logo d-flex">
					<p className="text-xs font-clash-regular">
						Based in <br />
						Dubai, UAE
					</p>
					<p className="text-xs font-clash-regular">
						Say Hi, <br />
						<a href="mailto:someone@example.com">nihaal.mansoor@outlook.com</a>
					</p>
				</div>
				
				<div className={styles['nav-toggle']} onClick={handleNavToggle}>
					<div className={styles['hamburger']}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div className={styles['nav-menu']}>
					<ul className={styles['nav-list']}>
						<li className={styles['nav-item']}>
							<a onClick={() => { lenis?.scrollTo("#what-i-do", { offset: -80, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3), }); setIsNavActive(false); }} className={styles['nav-link']}>Services</a>
						</li>
						<li className={styles['nav-item']}>
							<a onClick={() => { lenis?.scrollTo("#about", { offset: -80, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3), }); setIsNavActive(false); }} className={styles['nav-link']}>About</a>
						</li>
						<li className={styles['nav-item']}>
							<a onClick={() => { lenis?.scrollTo("#work", { offset: -80, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3), }); setIsNavActive(false); }} className={styles['nav-link']}>Work</a>
						</li>
                  <li className={styles['nav-item']}>
							<a onClick={() => { lenis?.scrollTo("#tech-stack", { offset: -80, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3), }); setIsNavActive(false); }} className={styles['nav-link']}>Tech Stack</a>
						</li>
						<li className={styles['nav-item']}>
							<a onClick={() => { lenis?.scrollTo("#blog", { offset: -80, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3), }); setIsNavActive(false); }} className={styles['nav-link']}>Blog</a>
						</li>
						<li className={styles['nav-item']}>
							<a onClick={() => { lenis?.scrollTo("#footer", { offset: -80, duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 3), }); setIsNavActive(false); }} className={`${styles['nav-link']} text-sm font-clash-regular hire-button`}>Hire Me</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
