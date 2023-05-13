import { Container } from "react-bootstrap"
import { FilterBar } from "../common/FilterBar"



export const ProjectsSection = () => {

    return (
        <div id="projects" className="section projects">
            <Container>
                <h1 className="section--title">PROJECTS</h1>
                <div className="section--container">
                    <FilterBar />
                </div>
            </Container>
        </div>
    )
}
export default ProjectsSection