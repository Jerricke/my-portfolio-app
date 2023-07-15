import Welcome from "../components/Animations/Welcome";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ProjectSection from "../components/Project/ProjectSection";

export default function Home() {
    return (
      <div className="home">
        <>
            <Welcome />
            <Hero />
            <div className="spacer layer1"></div>
            <About />
            <div id="pJump"className="spacer layer2"></div>
            <ProjectSection />
        </>
      </div>
    )
  }