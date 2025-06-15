import AnimatedTitle from './AnimatedTitle';
import AnimatedHR from './AnimatedHR';

const About = () => {
  return (
    <section id="about" className="about">
        <div className="container">
            <AnimatedTitle>ABOUT</AnimatedTitle>
            <AnimatedHR />
            <p className="text-sm font-clash-regular">With over four years of hands-on experience in front-end web development, I specialize in creating high-performance, responsive <span className="font-clash-medium accent-100">WordPress</span> websites tailored to the unique needs and objectives of each client. From crafting compelling landing pages to delivering comprehensive web solutions, I am committed to transforming business visions into engaging online experiences through clean, maintainable code and attention to detail.

            <br /><br />Currently, I am expanding my expertise by delving into <span className="font-clash-medium accent-100">React</span> and modern JavaScript frameworks, ensuring that I remain at the cutting edge of front-end technology. My passion for user-centered design drives me to continuously explore and adopt new tools and methodologies, enabling me to deliver innovative solutions that elevate both user experience and business outcomes.
            </p>
        </div>
    </section>
  )
}

export default About