import React from 'react'
import wordpressIcon from '../assets/wordpress-icon.svg';
import phpIcon from '../assets/php-icon.svg';
import htmlIcon from '../assets/html-icon.svg';
import cssIcon from '../assets/css-icon.svg';
import jsIcon from '../assets/js-icon.svg';
import woocommerceIcon from '../assets/woocommerce-icon.svg';
import laravelIcon from '../assets/laravel-icon.svg';
import reactIcon from '../assets/react-icon.svg';

const TechStack = () => {
  return (
    <section id="tech" className="tech-stack">
        <div className="container">
            <h2 className="text-4xl font-clash-regular split-text line-height-base"><span className="text-4xl font-clash-bold accent-100 line-height-base">T</span>ECH STACK</h2>
            <hr />
            <div className="tech-stack-list">
                <div className="tech-stack-item">
                    <div className="tech-stack-item-icons">
                        <img src={ wordpressIcon } alt="WordPress" width="30" height="30" />
                        <img src={ phpIcon } alt="PHP" width="40" height="30" />
                        <img src={ htmlIcon } alt="HTML" width="30" height="30" />
                        <img src={ cssIcon } alt="CSS" width="30" height="30" />
                        <img src={ jsIcon } alt="JavaScript" width="30" height="30" />
                    </div>
                    <h3 className="text-base font-clash font-clash-medium">WordPress</h3>
                    <p className="font-clash-extralight font-clash">Strong</p>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-item-icons">
                        <img src={ woocommerceIcon } alt="WooCommerce" width="30" height="30" />
                    </div>
                    <h3 className="text-base font-clash font-clash-medium">WooCommerce</h3>
                    <p className="font-clash-extralight font-clash">Strong</p>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-item-icons">
                        <img src={ laravelIcon } alt="Laravel" width="30" height="30" />
                        <img src={ reactIcon } alt="React" width="30" height="30" />
                    </div>
                    <h3 className="text-base font-clash font-clash-medium">Laravel,React</h3>
                    <p className="font-clash-extralight font-clash">Basic</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechStack