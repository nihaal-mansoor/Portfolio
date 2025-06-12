import React from 'react'
import websiteDevelopmentIcon from '../assets/website-development-icon.svg';
import bugFixesIcon from '../assets/bug-fixes-icon.svg';
import websiteMaintenanceIcon from '../assets/website-maintenance-icon.svg';
import uiUxDesignIcon from '../assets/ui-ux-design-icon.svg';
import consultationIcon from '../assets/consultation-icon.svg';


const WhatIDo = () => {
  return (
    <section id="what-i-do" className="what-i-do">
        <div className="container">
            <h2 className="text-4xl font-clash-regular split-text line-height-base"><span className="text-4xl font-clash-bold accent-100 line-height-base">W</span>HAT I DO</h2>
            <hr />
            <div className="what-i-do-list">
                <div className="what-i-do-item">
                    <img src={ websiteDevelopmentIcon } alt="WordPress" width="30" height="30" />
                    <h3 className="text-base font-clash font-clash-medium">Website Development</h3>
                    <p className="font-clash-extralight font-clash">Custom WordPress websites or React websites tailored to your brand and goals.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ bugFixesIcon } alt="Bug" width="30" height="30" />
                    <h3 className="text-base font-clash font-clash-medium">Bug Fixes</h3>
                    <p className="font-clash-extralight font-clash">Quick and efficient bug fixes to keep your website running smoothly.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ websiteMaintenanceIcon } alt="Maintenance" width="30" height="30" />
                    <h3 className="text-base font-clash font-clash-medium">Website Maintenance</h3>
                    <p className="font-clash-extralight font-clash">Regular updates and maintenance to keep your website running smoothly.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ uiUxDesignIcon } alt="Design" width="30" height="30" />
                    <h3 className="text-base font-clash font-clash-medium">UI/UX Design (Figma)</h3>
                    <p className="font-clash-extralight font-clash">Custom UI/UX design for your website to enhance user experience.</p>
                </div>
                <div className="what-i-do-item">
                    <img src={ consultationIcon } alt="Consultation" width="30" height="30" />
                    <h3 className="text-base font-clash font-clash-medium">Consultation</h3>
                    <p className="font-clash-extralight font-clash">Consultation to help you understand your needs and help you create a website that meets your
                        goals.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatIDo