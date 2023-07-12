import poke from "../assets/test.jpeg"

function About() {

    return (
        <div className="aboutSection">
            <div className="aboutMe">
                <h1>My Passion 🔥</h1>
                <p>Growing up with tech always right beside me, I&apos;ve spent countless amounts of time playing around with different web and mobile applicaitons. 
                <br/>As I finished by bachelor of science degree at UC San Diego, I grew more and more interested in building applications that would improve our daily lives.
                <br/>With the desire to build, I&apos;ve picked up programming on my free time, and ultimately decided to attend Flatiron School Software Engineering Bootcamp.
                <br/>Everyday I work with like-minded peers and hone my skills and craft with the goal of creating the most intuitive and well-rounded applications.
                </p>
            </div>
            <div className="aboutPic">
                <img src={poke} alt="placeholder" />
            </div>
        </div>
    )
}

export default About;