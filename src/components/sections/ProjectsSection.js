import { Container } from "react-bootstrap";
import { ProjectCard } from "../common/ProjectCard";
import { useState } from "react";
import PortfolioPic from '../../images/portfolioPic.png';
import RiddlerPic from '../../images/riddlerPic.png';
import AlbronPic from '../../images/albronPic.png';
import CarsPic from '../../images/carsPic.png';
import SpiritPic from '../../images/spiritPic.png';
import ThresholdPic from '../../images/thresholdPic.png';
import TicPic from '../../images/ticPic.png';

const projects = [
    {
        name: "My Portfolio",
        type: "Web App",
        description: "This current website portfolio you are on right now! Upgraded to React.",
        img: PortfolioPic,
        tags: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: "Riddler",
        type: "Mobile App",
        description: "A small riddle game created with Framework7 for android devices.",
        img: RiddlerPic,
        tags: ['Framework7', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: "Albron DGS Inc Website",
        type: "Web App",
        description: "A commercial Website created for Design and Drafting company AlbronDGS Inc, built on the React framework.",
        img: AlbronPic,
        tags: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: "CARS Volunteer Management System",
        type: "Web App",
        description: "A volunteer management system created for the non-profit organization Calgary Animal Rescue Society (CARS).",
        img: CarsPic,
        tags: ['AngularJS', 'TypeScript', 'HTML', 'CSS']
    },
    {
        name: "Spirit Detector",
        type: "Mobile App",
        description: "An android app created using Framework7 that utilizes the device's gyroscope and accelerometer.",
        img: SpiritPic,
        tags: ['Framework7', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: "Image Thresholding",
        type: "Desktop App",
        description: "A Java application that processes several image thresholding algorithms for black and white images.",
        img: ThresholdPic,
        tags: ['Java', 'Image Processing']
    },
    {
        name: "Tic Tac Toe AI",
        type: "Desktop App",
        description: "A Java application with an unbeatable AI using the MinMax Algorithm.",
        img: TicPic,
        tags: ['Java', 'AI']
    },
    
    
]


export const ProjectsSection = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((project) => {
        if (filter === "All") {
          return true;
        } else if (filter === "Web Apps") {
          return project.type === "Web App";
        } else if (filter === "Desktop Apps") {
          return project.type === "Desktop App";
        } else if (filter === "Mobile Apps") {
            return project.type === "Mobile App";
        }
      });

    return (
        <div id="projects" className="section projects">
            <Container>
                <h1 className="section--title">PROJECTS</h1>
                <div className="section--container">
                    <div className="filterBar">
                        <button className={filter === "All" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("All")}>ALL</button>
                        <button className={filter === "Web Apps" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Web Apps")}>WEB APPS</button>
                        <button className={filter === "Desktop Apps" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Desktop Apps")}>DESKTOP APPS</button>
                        <button className={filter === "Mobile Apps" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Mobile Apps")}>MOBILE APPS</button>
                    </div>

                    <div className="project--cards--container">
                        {filteredProjects.map((project) => (
                            <ProjectCard project={project} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectsSection