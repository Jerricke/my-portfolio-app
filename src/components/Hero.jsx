import Jerrick from "../assets/Jerrick.jpeg";

function Hero() {

    return (
        <div className="hero">
            <img id="pfp" src={Jerrick} alt="jerrick" />
            <div className="heroText">
                <h1>Jerrick Ee</h1>
                <p>Full-stack Developer | Software Engineer | Mobile Developer</p>
            </div>
        </div>
    )
}

export default Hero;