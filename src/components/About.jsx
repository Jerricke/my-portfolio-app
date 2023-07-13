
import VisualAnimation from "./VisualAnimation";

function About() {

    return (
        <div id="About" className="aboutSection">
            <div className="aboutMe fade-in">
                <h1>My Passion 🔥</h1>
                <p>Growing up with tech always right beside me, I&apos;ve spent countless amounts of time playing around with different web and mobile applicaitons. </p>
                <p>As a student at Flatiron school, not only am I learning programming at a face pace environment, I am constantly pushing myself to learn more than the curriculum.</p>
                <p>With the desire to build, I&apos;ve picked up many different programming skills to deliver the most interactive and engaging applications.</p>
                <p>Everyday I work with like-minded peers and hone my skills and craft. I firmly belive that there is never an end to learning.</p>
            </div>
            <div className="aboutAnimation fade-in">
                <VisualAnimation />
            </div>
        </div>
    )
}

export default About;