import ProjectCard from "./ProjectCard";
// import ProjectDetail from "./ProjectDetail";
import poke from "../assets/test.jpeg";
import "./projectCss.css";
import ProjectDetail from "./ProjectDetail";


function ProjectSection() {
    console.log(poke);
    
    return( 
        <div className="projectSection">
            <h1>My Work</h1>
            <div className="projectDiv">
                <ProjectCard classInput={"first"} img={poke}/>
                <ProjectDetail LoR="right" title={"My First Project"} desc={"some description"}/>
                <ProjectCard classInput={"second"} img={poke}/>   
                <ProjectDetail LoR="left"title={"My Second Project"} desc={"some description"} /> 
                <ProjectCard classInput={"third"} img={poke}/>    
                <ProjectDetail LoR="right"title={"My Third Project"} desc={"some description"} />
            </div>
        </div>
    )
}

export default ProjectSection;