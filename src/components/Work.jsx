import AnimatedTitle from './AnimatedTitle';
import AnimatedHR from './AnimatedHR';

const Work = () => {

  return (
    <section id="work" className="work">
        <div className="container">
            <AnimatedTitle>WORK</AnimatedTitle>
            <AnimatedHR />
            <div className="job-list">
                <h3 className="text-base font-clash-medium">Dex AI Solutions LLC</h3>
                <div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Position:</p>
                        <p className="font-clash-regular">Front-End Developer</p>
                    </div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Duration:</p>
                        <p className="font-clash-regular ">2024 - Present</p>
                    </div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Location:</p>
                        <p className="font-clash-regular">Dubai, UAE</p>
                    </div>
                </div>
                <div>
                    <p className="font-clash-regular">I design and develop SEO-friendly WordPress websites with custom themes, ensuring seamless user
                        experience and optimal performance. I translate client visions into high-quality digital
                        solutions through clear communication and technical expertise, while managing project workflows
                        and facilitating team collaboration.</p>
                </div>
            </div>
            <div className="job-list">
                <h3 className="text-base font-clash-medium">Precise Communications Design LLC</h3>
                <div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Position:</p>
                        <p className="font-clash-regular">PHP Developer</p>
                    </div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Duration:</p>
                        <p className="font-clash-regular">January 2021 - February 2023</p>
                    </div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Location:</p>
                        <p className="font-clash-regular">Dubai, UAE</p>
                    </div>
                </div>
                <div>
                    <p className="font-clash-regular">I design and implement customized WordPress websites, collaborating closely with designers and
                        content creators to develop effective website strategies. My role involves tailoring themes and
                        plugins to meet client needs, ensuring optimal performance, security, and SEO, as well as
                        providing ongoing maintenance, troubleshooting, and technical support. I also stay current with
                        the latest WordPress trends and best practices to deliver high-quality results.</p>
                </div>
            </div>
            <div className="job-list">
                <h3 className="text-base font-clash-medium">Bright Gas LLC</h3>
                <div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Position:</p>
                        <p className="font-clash-regular">Office Admin/Web Developer</p>
                    </div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Duration:</p>
                        <p className="font-clash-regular">January 2019 – October 2019</p>
                    </div>
                    <div className="job-list-item">
                        <p className="font-clash-medium">Location:</p>
                        <p className="font-clash-regular">Dubai, UAE</p>
                    </div>
                </div>
                <div>
                    <p className="font-clash-regular">Build and maintain the user-facing side of web applications. Translate design and wireframes into
                        functional user interfaces using HTML, CSS, and JavaScript</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work