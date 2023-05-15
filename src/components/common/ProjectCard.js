import Placeholder from '../../images/placeholder.jpg';

export const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard">
            <div className='projectCard--content'>
            <img className='projectCard--img' src={project.img}></img>
                <h3 className="text--highlight__cyan projectCard--type">{project.type}</h3>
                <h3 className='projectCard--name'>{project.name}</h3>
                <p>{project.description}</p>
            </div>
                <div className='projectCard--tags'>
                    {project.tags.map((tag) => (
                        <p className='projectCard--tag--text text--highlight__pink'>{tag}</p>
                    ))}
                </div>
        </div>
    )
}

ProjectCard.defaultProps = {
    project: {
        name: "Title",
        img: Placeholder,
        description: "Desc",
        type: "web",

    }
}
export default ProjectCard