import { Container } from "react-bootstrap";
import { ProjectCard } from "../common/ProjectCard";
import { useState } from "react";
import PortfolioPic from '../../images/portfolioPic.png';
import PortfolioPic2 from '../../images/portfolioB.png';
import PortfolioPic3 from '../../images/portfolioA.png';
import RiddlerPic from '../../images/riddlerPic.png';
import RiddlerPic2 from '../../images/riddlerPic2.png';
import RiddlerPic3 from '../../images/riddlerPic3.png';
import AlbronPic from '../../images/albronPic.png';
import CarsPic from '../../images/carsPic.png';
import CarsPic2 from '../../images/cars2.jpg';
import CarsPic3 from '../../images/cars3.jpg';
import SpiritPic from '../../images/spiritPic.png';
import ThresholdPic from '../../images/thresholdPic.png';
import TicPic from '../../images/ticPic.png';
import InfinityPic from '../../images/infinityPic.png';
import InfinityPic2 from '../../images/infinityPic2.png';
import InfinityPic3 from '../../images/infinityPic3.png';

const projects = [
    {
        name: "My Portfolio",
        type: "Web App",
        description: "This current website portfolio you are on right now! Upgraded to React.",
        imgs: [PortfolioPic, PortfolioPic2, PortfolioPic3],
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        summary: "This project is the current website you are on right now! This website was created using React and showcases everything about myself! If you would like to get to know more about me, feel free to contact me!"
    },
    {
        name: "Riddler",
        type: "Mobile App",
        description: "A small riddle game created with Framework7 for android devices.",
        imgs: [RiddlerPic, RiddlerPic2, RiddlerPic3],
        tags: ['Framework7', 'JavaScript', 'HTML', 'CSS'],
        summary: "A small riddle game created with Framework7 for android devices. This mobile game will take you into 10 levels of riddles. You are rewarded points for every riddle solved allowing you to buy hints for future riddles. "
    },
    {
        name: "Albron DGS Inc Website",
        type: "Web App",
        description: "A commercial Website created for Design and Drafting company AlbronDGS Inc, built on the React framework.",
        imgs: [AlbronPic],
        tags: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: "CARS Volunteer Management System",
        type: "Web App",
        description: "A volunteer management system created for the non-profit organization Calgary Animal Rescue Society (CARS).",
        imgs: [CarsPic, CarsPic2, CarsPic3],
        tags: ['AngularJS', 'TypeScript', 'HTML', 'CSS']
    },
    {
        name: "The Infinity Stones",
        type: "Web App",
        description: "A mini website that explains the journey of the Infinity Stones in the Marvel Cinematic Universe.",
        imgs: [InfinityPic, InfinityPic2, InfinityPic3],
        tags: ['JQuery', 'JavaScript', 'HTML', 'CSS'],
        github: "https://github.com/AlbertAnthonyArrieta/The-Infinity-Stones",
        link: "https://www.albertarrieta.dev/The-Infinity-Stones/index.html",
        summary: "Learn more about the infinity stones in this mini website. Collect the stones and discover what each of the stones are used for in the Marvel Cinematic Universe. Once all the stones are collected, click snap to see what happens when the stones were used for post Avengers: Infinity War."
    },
    {
        name: "Spirit Detector",
        type: "Mobile App",
        description: "An android app created using Framework7 that utilizes the device's gyroscope and accelerometer.",
        imgs: [SpiritPic],
        tags: ['Framework7', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: "Image Thresholding",
        type: "Desktop App",
        description: "A Java application that processes several image thresholding algorithms for black and white images.",
        imgs: [ThresholdPic],
        tags: ['Java', 'Image Processing']
    },
    {
        name: "Tic Tac Toe AI",
        type: "Desktop App",
        description: "A Java application with an unbeatable AI using the MinMax Algorithm.",
        imgs: [TicPic],
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
        } else {
            return true;
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