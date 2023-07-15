import ProjectCard from "./ProjectCard";
import poke from "../../assets/test.jpeg";
import "../CSS/projectCss.css";
import ProjectDetail from "./ProjectDetail";


function ProjectSection() {
    
    return( 
        <div id="ProjectSection" className="projectSection">
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