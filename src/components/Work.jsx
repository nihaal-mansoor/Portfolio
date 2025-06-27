import AnimatedHR from './AnimatedHR';
import Copy from './Copy';

const Work = () => {

  return (
    <section id="work" className="work">
        <div className="container">
            <Copy>
               <h2 className="font-playfair text-4xl font-clash-regular line-height-base split-text">WORK <span className="text-4xl font-clash-bold accent-100">EXPERIENCE</span></h2>
            </Copy>
            <div className="job-list">
               <Copy>
                  <h3 className="text-base font-clash-medium">Dex AI Solutions LLC</h3>
               </Copy>
               <div>
                  <div className="job-list-item">
                     <Copy><p className="font-clash-medium">Position:</p></Copy>
                     <Copy><p className="font-clash-regular">Front-End Developer</p></Copy>
                  </div>
                  <div className="job-list-item">
                     <Copy><p className="font-clash-medium">Duration:</p></Copy>
                     <Copy><p className="font-clash-regular ">2024 - Present</p></Copy>
                  </div>
                  <div className="job-list-item">
                     <Copy><p className="font-clash-medium">Location:</p></Copy>
                     <Copy><p className="font-clash-regular">Dubai, UAE</p></Copy>
                  </div>
               </div>
               <div>
                  <Copy>
                     <p className="font-clash-regular">Currently working as a Front-End Developer, specializing in designing and developing SEO-friendly WordPress websites with custom themes. My role centers on delivering seamless user experiences and high-performance digital products, transforming client ideas into impactful web solutions through clear communication and technical precision. I manage project workflows, promote effective team collaboration, and stay hands-on with modern technologies—actively honing my skills in React, Next.js, and Laravel.</p>
                  </Copy>
               </div>
            </div>
            <AnimatedHR />
            <div className="job-list">
            <Copy><h3 className="text-base font-clash-medium">Precise Communications Design LLC</h3></Copy>
                <div>
                    <div className="job-list-item">
                    <Copy><p className="font-clash-medium">Position:</p></Copy>
                    <Copy><p className="font-clash-regular">PHP Developer</p></Copy>
                    </div>
                    <div className="job-list-item">
                    <Copy><p className="font-clash-medium">Duration:</p></Copy>
                    <Copy><p className="font-clash-regular">January 2021 - February 2023</p></Copy>
                    </div>
                    <div className="job-list-item">
                    <Copy><p className="font-clash-medium">Location:</p></Copy>
                    <Copy><p className="font-clash-regular">Dubai, UAE</p></Copy>
                    </div>
                </div>
                <div>
                <Copy><p className="font-clash-regular">Previously held a PHP Developer position where I focused on crafting customized WordPress websites in close collaboration with designers and content teams. My work involved developing tailored themes and plugins to match specific client needs, with a strong emphasis on performance, security, and SEO optimization. I also handled ongoing site maintenance and provided technical support. During this time, I explored other frameworks like Laravel, Django, and React, expanding my development toolkit and staying aligned with evolving web technologies.</p></Copy>
                </div>
            </div>
            <AnimatedHR />
            <div className="job-list">
            <Copy><h3 className="text-base font-clash-medium">Bright Gas LLC</h3></Copy> 
                <div>
                    <div className="job-list-item">
                    <Copy><p className="font-clash-medium">Position:</p></Copy>
                    <Copy><p className="font-clash-regular">Office Admin/Web Developer</p></Copy>
                    </div>
                    <div className="job-list-item">
                    <Copy><p className="font-clash-medium">Duration:</p></Copy>
                    <Copy><p className="font-clash-regular">January 2019 – October 2019</p></Copy>
                    </div>
                    <div className="job-list-item">
                    <Copy><p className="font-clash-medium">Location:</p></Copy>
                    <Copy><p className="font-clash-regular">Dubai, UAE</p></Copy>
                    </div>
                </div>
                <div>
                <Copy><p className="font-clash-regular">Build and maintain the user-facing side of web applications. Translate design and wireframes into
                        functional user interfaces using HTML, CSS, and JavaScript</p></Copy>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work