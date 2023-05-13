import { Container } from "react-bootstrap";
import { ProjectCard } from "../common/ProjectCard";
import { useState } from "react";
import PortfolioPic from '../../images/portfolioPic.png';
import RiddlerPic from '../../images/riddlerPic.png';
import SpiritPic from '../../images/spiritPic.png';

const projects = [
    {
        name: "My Portfolio",
        type: "web",
        description: "This current website portfolio you are on right now! Upgraded to React.",
        img: PortfolioPic
    },
    {
        name: "Riddler",
        type: "mobile",
        description: "A small riddle game created with Framework7 for android devices.",
        img: RiddlerPic
    },
    {
        name: "Albron DGS Inc Website",
        type: "web",
        description: "A commercial Website that is built on React."
    },
    {
        name: "CARS Volunteer Management System",
        type: "web",
        description: "A volunteer management system created for the non-profit organization Calgary Animal Rescue Society (CARS)."
    },
    {
        name: "Spirit Detector",
        type: "mobile",
        description: "An android app created using Framework7 that utilizes the device's gyroscope and accelerometer.",
        img: SpiritPic
    },
    {
        name: "Image Thresholding",
        type: "java",
        description: "A Java application that processes several image thresholding algorithms for black and white images."
    },
    {
        name: "Impossible Tic Tac Toe",
        type: "java",
        description: "A Java application with an unbeatable AI using the MinMax Algorithm."
    },
    
    
]


export const ProjectsSection = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((project) => {
        if (filter === "All") {
          return true;
        } else if (filter === "Web Apps") {
          return project.type === "web";
        } else if (filter === "Java") {
          return project.type === "java";
        } else if (filter === "Mobile Apps") {
            return project.type === "mobile";
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
                        <button className={filter === "Java" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Java")}>JAVA</button>
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