import websiteDevelopmentIcon from "../assets/website-development-icon.svg";
import bugFixesIcon from "../assets/bug-fixes-icon.svg";
import websiteMaintenanceIcon from "../assets/website-maintenance-icon.svg";
import uiUxDesignIcon from "../assets/ui-ux-design-icon.svg";
import consultationIcon from "../assets/consultation-icon.svg";
// import AnimatedTitle from "./AnimatedTitle";
// import AnimatedHR from "./AnimatedHR";
import Copy from './Copy';

const WhatIDo = () => {
	return (
		<section id="what-i-do" className="what-i-do">
			<div className="container">
            <Copy><h2 className="font-playfair text-4xl font-clash-regular line-height-base split-text"><span className="text-4xl font-clash-bold accent-100">W</span>HAT I DO</h2></Copy>
				<div className="what-i-do-list">
					<div className="what-i-do-item">
						<img
							src={websiteDevelopmentIcon}
							alt="WordPress"
							width="30"
							height="30"
						/>
                  <Copy>
						   <h3 className="text-base font-clash-medium">Website Development</h3>
                  </Copy>
						<Copy>
                     <p className="font-clash-regular">
                        Ready to bring your brand to life online? Let’s create something that works beautifully across all devices and speaks to your audience.
						   </p>
                  </Copy>
					</div>
					<div className="what-i-do-item">
						<img src={bugFixesIcon} alt="Bug" width="30" height="30" />
						<Copy>
                     <h3 className="text-base font-clash-medium">Bug Fixes</h3>
                  </Copy>
						<Copy>
                     <p className="font-clash-regular">
							   Site acting up or something broken? I specialize in identifying and fixing front-end issues quickly and cleanly.
						   </p>
                  </Copy>
					</div>
					<div className="what-i-do-item">
						<img
							src={websiteMaintenanceIcon}
							alt="Maintenance"
							width="30"
							height="30"
						/>
						<Copy>
                     <h3 className="text-base font-clash-medium">Website Maintenance</h3>
                  </Copy>
						<Copy>
                     <p className="font-clash-regular">
							   Looking for regular updates and ongoing care to ensure your website always performs its best?
						   </p>
                  </Copy>
					</div>
					<div className="what-i-do-item">
						<img src={uiUxDesignIcon} alt="Design" width="30" height="30" />
						<Copy>
                     <h3 className="text-base font-clash-medium">
                        UI/UX Design (Figma)
                     </h3>
                  </Copy>
						<Copy>
                     <p className="font-clash-regular">
                        Want a design that’s both beautiful and user-friendly? Using Figma, I create modern, intuitive UI/UX designs for you.
                     </p>
                  </Copy>
					</div>
					<div className="what-i-do-item">
						<img
							src={consultationIcon}
							alt="Consultation"
							width="30"
							height="30"
						/>
						<Copy>
                     <h3 className="text-base font-clash-medium">Consultation</h3>
                  </Copy>
						<Copy>
                     <p className="font-clash-regular">
                        Let’s chat. I offer one-on-one consultations to guide you on strategy, tools, design direction, or development workflows.
                     </p>
                  </Copy>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatIDo;
