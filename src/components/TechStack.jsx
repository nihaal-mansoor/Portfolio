import wordpressIcon from '../assets/wordpress-icon.svg';
import phpIcon from '../assets/php-icon.svg';
import htmlIcon from '../assets/html-icon.svg';
import cssIcon from '../assets/css-icon.svg';
import jsIcon from '../assets/js-icon.svg';
import woocommerceIcon from '../assets/woocommerce-icon.svg';
import laravelIcon from '../assets/laravel-icon.svg';
import reactIcon from '../assets/react-icon.svg';
import AnimatedTitle from './AnimatedTitle';
import AnimatedHR from './AnimatedHR';

const TechStack = () => {

  return (
    <section id="tech" className="tech-stack">
        <div className="container">
            <AnimatedTitle>TECH STACK</AnimatedTitle>
            <AnimatedHR />
            <div className="tech-stack-list">
                <div className="tech-stack-item">
                    <div className="tech-stack-item-icons">
                        <img src={ wordpressIcon } alt="WordPress" width="30" height="30" />
                        <img src={ phpIcon } alt="PHP" width="40" height="30" />
                        <img src={ htmlIcon } alt="HTML" width="30" height="30" />
                        <img src={ cssIcon } alt="CSS" width="30" height="30" />
                        <img src={ jsIcon } alt="JavaScript" width="30" height="30" />
                    </div>
                    <h3 className="text-base font-clash-medium">WordPress</h3>
                    <p className="font-clash-regular">Strong</p>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-item-icons">
                        <img src={ woocommerceIcon } alt="WooCommerce" width="30" height="30" />
                    </div>
                    <h3 className="text-base font-clash-medium">WooCommerce</h3>
                    <p className="font-clash-regular">Strong</p>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-item-icons">
                        <img src={ laravelIcon } alt="Laravel" width="30" height="30" />
                        <img src={ reactIcon } alt="React" width="30" height="30" />
                    </div>
                    <h3 className="text-base font-clash-medium">Laravel,React</h3>
                    <p className="font-clash-regular">Basic</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechStack