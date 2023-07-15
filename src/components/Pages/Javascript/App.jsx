import { useEffect } from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
import ProjectSection from './ProjectSection';
import About from './About';
import Welcome from './Welcome';
import '../CSS/App.css';
import '../CSS/divider.css';

function App() {
  
  useEffect( ()=> {
    const elements = document.querySelectorAll(".fade-in")
    const options = {
      rootMargin: "0px",
      threshhold: .4
    }
    const callbacks = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }
    let observer = new IntersectionObserver(callbacks, options)
    elements.forEach(element => {
      observer.observe(element)
    })
  }, [])

  

  return (
    <>
        <NavBar />
        <Welcome />
        <Hero />
        <div className="spacer layer1"></div>
        <About />
        <div id="pJump"className="spacer layer2"></div>
        <ProjectSection />
    </>
  )
}

export default App
