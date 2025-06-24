import { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import DDT from "./DDT"

const BlogHeader = () => {

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
					<DDT />
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
							<a className={styles['nav-link']} href="/">Home</a>
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

export default BlogHeader;
