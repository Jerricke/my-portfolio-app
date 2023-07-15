function ProjectDetail({title, desc, LoR="left"}) { 
    return (
        <div className={`fade-in projectDetail ${LoR}`}>
            <h1>{title}</h1>
            <h3>{desc}</h3>
        </div>
    )
}

export default ProjectDetail;