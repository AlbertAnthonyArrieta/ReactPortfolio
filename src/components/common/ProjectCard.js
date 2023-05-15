import React, { useState } from 'react';
import Placeholder from '../../images/placeholder.jpg';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export const ProjectCard = ({ project }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="projectCard" onClick={handleShow}>
                <div className='projectCard--content'>
                    <img className='projectCard--img' src={project.imgs[0]}></img>
                    <h3 className="text--highlight__cyan projectCard--type">{project.type}</h3>
                    <h3 className='projectCard--name'>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
                <div className='project--tags'>
                    {project.tags.map((tag) => (
                        <p className='projectCard--tag--text text--highlight__pink'>{tag}</p>
                    ))}
                </div>
            </div>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {project.imgs.map((img) => (
                            <Carousel.Item>
                                <img src={img} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className='modal--header'>
                        <div>
                            <h2 className="text--highlight__cyan projectCard--type">{project.type}</h2>
                            <h2 className='modal--name'>{project.name}</h2>
                        </div>
                        <div className='project--tags modal--tags'>
                            {project.tags.map((tag) => (
                                <p className='projectCard--tag--text text--highlight__pink'>{tag}</p>
                            ))}
                        </div>
                    </div>

                    <hr></hr>
                    <h3 className='modal--subheading text--subheading'>Project Summary</h3>
                    <p>{project.summary}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='modal--button'>
                        {/* adding buttons */}
                    </button>
                </Modal.Footer>
            </Modal>

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