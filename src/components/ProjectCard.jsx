function ProjectCard({img, classInput}) {

    return (
        <div className={`fade-in projectCard ${classInput}`}> 
            <img src={img} />
            <div className="overlay">
                <button>Learn More</button>
            </div>
        </div>
    )
}



export default ProjectCard;