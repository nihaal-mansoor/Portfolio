import { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./header.module.css";


const Header = () => {

	// 1. Hold the Lenis instance
	const lenisRef = useRef(null);
	const navbarRef = useRef(null);

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

   // Elements
//    const navbar = document.querySelector('.navbar');
//    const navToggle = document.querySelector('.nav-toggle');
//    const dropdowns = document.querySelectorAll('.has-dropdown');

   // Mobile menu toggle with animation
   // navToggle.addEventListener('click', () => {
   //    navbar.classList.toggle('nav-active');
      
   //    // Prevent scrolling when menu is open
   //    if (navbar.classList.contains('nav-active')) {
   //       document.body.style.overflow = 'hidden';
   //    } else {
   //       document.body.style.overflow = '';
   //    }
   // });


   const [isNavActive, setIsNavActive] = useState(false);
   const handleNavToggle = () => {
      setIsNavActive(!isNavActive);
   };
   
   useEffect(() => {
      if (isNavActive) {
         document.body.style.overflow = styles.hidden;
      } else {
         document.body.style.overflow = '';
      }
      
      // Cleanup function to reset overflow when component unmounts
      return () => {
         document.body.style.overflow = '';
      };
   }, [isNavActive]);
   
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbarRef.current.contains(e.target) && navbarRef.current.classList.contains('nav-active')) {
            navbarRef.current.classList.remove('nav-active');
            document.body.style.overflow = '';
        }
    });

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);

        if (el && lenisRef.current) {
            lenisRef.current.scrollTo(el);
        }
    }, []);

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
						nihaal.mansoor@outlook.com
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
							<a onClick={() => scrollToSection("about")} className={styles['nav-link']}>About</a>
						</li>
						<li className={styles['nav-item']}>
							<a className={styles['nav-link']}>Services</a>
						</li>
						<li className={styles['nav-item']}>
							<a className={styles['nav-link']}>Work</a>
						</li>
						<li className={styles['nav-item']}>
							<a className={styles['nav-link']}>Blog</a>
						</li>
						<li className={styles['nav-item']}>
							<a className={`${styles['nav-link']} text-sm font-clash-regular hire-button`}>Hire Me</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
