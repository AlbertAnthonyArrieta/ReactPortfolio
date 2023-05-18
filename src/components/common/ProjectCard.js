import React, { useState } from 'react';
import Placeholder from '../../images/placeholder.jpg';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as XIcon } from '../../icons/x-solid.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github-original.svg';
import { ReactComponent as LinkIcon } from '../../icons/desktop.svg';

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
                <img className='projectCard--img' src={project.imgs[0]} alt={project.name}></img>
                <div className='projectCard--container'>
                    <div className='projectCard--content'>
                        <h3 className="text--highlight__cyan projectCard--type">{project.type}</h3>
                        <h3 className='projectCard--name'>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className='tags project--tags'>
                            {project.tags.map((tag) => (
                                <p className='projectCard--tag--text text--highlight__pink'>{tag}</p>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Modal className='modal' size='lg' show={show} onHide={handleClose}>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {project.imgs.map((img) => (
                            <Carousel.Item className='modal--img-wrapper'>
                                <img className='modal--img' src={img} alt={project.name} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className='modal--header'>
                        <div className='modal--titles'>
                            <h2 className="text--highlight__cyan projectCard--type">{project.type}</h2>
                            <h2 className='modal--name'>{project.name}</h2>
                        </div>
                        <div className='tags modal--tags'>
                            {project.tags.map((tag) => (
                                <p className='text--highlight__pink'>{tag}</p>
                            ))}
                        </div>
                    </div>

                    <hr></hr>
                    <h3 className='modal--subheading text--subheading'>Project Summary</h3>
                    <p>{project.summary}</p>
                </Modal.Body>
                <Modal.Footer className='justify-content-between'>
                    <div className='modal--footer'>
                        {project.github ? (
                            <a href={project.github} className='modal--link'>
                                <GitHubIcon className='modal--icon' />
                                GitHub
                            </a>
                        ) : null}

                        {project.link ? (
                            <a href={project.link} className='modal--link' >
                                <LinkIcon className='modal--icon' />
                                Visit Site
                            </a>
                        ) : null}

                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='modal--button modal--icon__grey' onClick={handleClose}>
                            <XIcon />
                        </button>
                    </div>

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