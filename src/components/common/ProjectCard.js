import Placeholder from '../../images/placeholder.jpg';

export const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard">
            <img className='projectCard--img' src={project.img}></img>
            <div className='projectCard--content'>
                <h3 className="text--highlight__cyan projectCard--type">{project.type}</h3>
                <h3 className='projectCard--name'>{project.name}</h3>
                <p>{project.description}</p>
                <div className='projectCard--footer'>
                    <div className='projectCard--links'>

                    </div>
                    <div className='projectCard--tags'>
                        <p className='text--highlight__pink'>HTML</p>
                        <p className='text--highlight__pink'>React</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProjectCard.defaultProps = {
    project: {
        name: "Title",
        img: Placeholder,
        description: "Desc",
        type: "web"
    }
}
export default ProjectCard