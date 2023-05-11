import Container from 'react-bootstrap/Container';
import ImageAndDesc from "../common/ImageAndDesc";
import ProfilePic from '../../images/profile.png';
export const AboutSection = () => {

    return (
        <div className='about'>
            <Container>
                <h1 className='section--title'>ABOUT ME</h1>
                <ImageAndDesc
                    img={ProfilePic}
                    heading={"Who is this guy?"}
                    // paragraph={'I am a young aspiring software developer located in Calgary, Alberta with about 4 years of programming experience. I am a proud SAIT Alumni graduating from the IT Software Development Diploma program and I am now pursuing a degree in Computer Science at the University of Lethbridge to broaden my skills as a software developer.'}
                    paragraph={
                        "Hi there! I'm Albert, a Computer Science major in my last year at The University of Lethbridge, with a minor in New Media. I specialize in front-end development, utilizing my creative ideas and eye for design to construct remarkable web applications. Furthermore, I hold a keen interest in full-stack development and aspire to develop robust, top-notch software."}
                />
                <div className='about--technologies'>
                    <h2 className='section--subheading section--subheading__technologies'>Technologies</h2>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection