import Container from 'react-bootstrap/Container';
import ImageAndDesc from "../common/ImageAndDesc";
import ProfilePic from '../../images/profile.png';
export const AboutSection = () => {

    return (
        <div className='section about'>
            <Container>
                <h1 className='section--title'>ABOUT ME</h1>
                <div className='about--subcontainer'>
                    <ImageAndDesc
                        img={ProfilePic}
                        heading={"Who is this guy?"}
                        paragraph={
                            "Hi there! I'm Albert, a Computer Science major in my last year at The University of Lethbridge, with a minor in New Media. I specialize in Front-end development, utilizing my creative ideas and eye for design to construct remarkable web applications. Furthermore, I hold a keen interest in full-stack development and aspire to develop robust, top-notch software."}
                    />
                </div>
                <div className='about--subcontainer'>
                    <h2 className='section--subheading'>Technologies</h2>
                    <div className='about--container'>
                        <div className='about--item'>
                            <h3>Programming Languages</h3>
                        </div>
                        <div className='about--item'>
                            <h3>Frameworks</h3>
                        </div>
                        <div className='about--item'>
                            <h3>Tools</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection