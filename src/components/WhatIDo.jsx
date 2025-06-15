import websiteDevelopmentIcon from '../assets/website-development-icon.svg';
import bugFixesIcon from '../assets/bug-fixes-icon.svg';
import websiteMaintenanceIcon from '../assets/website-maintenance-icon.svg';
import uiUxDesignIcon from '../assets/ui-ux-design-icon.svg';
import consultationIcon from '../assets/consultation-icon.svg';
import AnimatedTitle from './AnimatedTitle';
import AnimatedHR from './AnimatedHR';

const WhatIDo = () => {

  return (
    <section id="what-i-do" className="what-i-do">
        <div className="container">
            <AnimatedTitle>WHAT I DO</AnimatedTitle>
            <AnimatedHR />
            <div className="what-i-do-list">
                <div className="what-i-do-item">
                    <img src={ websiteDevelopmentIcon } alt="WordPress" width="30" height="30" />
                    <h3 className="text-base font-clash-medium">Website Development</h3>
                    <p className="font-clash-regular">Custom WordPress websites or React websites tailored to your brand and goals.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ bugFixesIcon } alt="Bug" width="30" height="30" />
                    <h3 className="text-base font-clash-medium">Bug Fixes</h3>
                    <p className="font-clash-regular">Quick and efficient bug fixes to keep your website running smoothly.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ websiteMaintenanceIcon } alt="Maintenance" width="30" height="30" />
                    <h3 className="text-base font-clash-medium">Website Maintenance</h3>
                    <p className="font-clash-regular">Regular updates and maintenance to keep your website running smoothly.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ uiUxDesignIcon } alt="Design" width="30" height="30" />
                    <h3 className="text-base font-clash-medium">UI/UX Design (Figma)</h3>
                    <p className="font-clash-regular">Custom UI/UX design for your website to enhance user experience.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ consultationIcon } alt="Consultation" width="30" height="30" />
                    <h3 className="text-base font-clash-medium">Consultation</h3>
                    <p className="font-clash-regular">Consultation to help you understand your needs and help you create a website that meets your
                        goals.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatIDo