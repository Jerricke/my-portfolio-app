import Jerrick from "../../assets/Jerrick.jpeg";
import '../CSS/Hero.css'

function Hero() {

    return (
        <div id="Hero" className="hero">
            <img className="fade-ina" id="pfp" src={Jerrick} alt="jerrick" />
            <div className="fade-in heroText">
                <h1>Jerrick Ee</h1>
                <p>Full-stack Developer | Software Engineer | Mobile Developer</p>
            </div>
        </div>
    )
}

export default Hero;``