import wordpressIcon from "../assets/wordpress-icon.svg";
import phpIcon from "../assets/php-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import woocommerceIcon from "../assets/woocommerce-icon.svg";
import elementorIcon from "../assets/elementor-icon.svg";
import laravelIcon from "../assets/laravel-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import gsapIcon from "../assets/gsap-icon.svg";
// import AnimatedHR from "./AnimatedHR";
import Copy from './Copy';

const TechStack = () => {
	return (
		<section id="tech-stack" className="tech-stack">
			<div className="container">
				<Copy><h2 className="font-playfair text-4xl font-clash-regular line-height-base split-text"><span className="text-4xl font-clash-bold accent-100">T</span>ECH STACK</h2></Copy>
				<div className="tech-stack-list">
					<div className="tech-stack-item">
						<div className="tech-stack-item-icons">
							<img src={wordpressIcon} alt="WordPress" width="30" height="30" />
							<img src={phpIcon} alt="PHP" width="40" height="30" />
							<img src={htmlIcon} alt="HTML" width="30" height="30" />
							<img src={cssIcon} alt="CSS" width="30" height="30" />
							<img src={jsIcon} alt="JavaScript" width="30" height="30" />
						</div>
						<h3 className="text-base font-clash-medium">WordPress</h3>
						<p className="font-clash-regular">Strong</p>
					</div>
					<div className="tech-stack-item">
						<div className="tech-stack-item-icons">
							<img src={woocommerceIcon} alt="WooCommerce" width="40" height="30" />
							<img src={elementorIcon} alt="Elementor" width="30" height="30" />
						</div>
						<h3 className="text-base font-clash-medium">WooCommerce, Elementor</h3>
						<p className="font-clash-regular">Strong</p>
					</div>
					<div className="tech-stack-item">
						<div className="tech-stack-item-icons">
							<img src={laravelIcon} alt="Laravel" width="30" height="30" />
							<img src={reactIcon} alt="React" width="30" height="30" />
							<img src={gsapIcon} alt="React" width="30" height="30" />
						</div>
						<h3 className="text-base font-clash-medium">
							Laravel, React, GSAP
						</h3>
						<p className="font-clash-regular">Basic</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
