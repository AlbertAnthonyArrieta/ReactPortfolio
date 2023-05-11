import Container from 'react-bootstrap/Container';
import ImageAndDesc from "../components/ImageAndDesc";
import ProfilePic from '../images/profile.png';
export const AboutSection = () => {

    return (
        <div id='section--about' className='section'>
            <Container>
                <h1 className='section--title'>ABOUT ME</h1>
                <ImageAndDesc
                    img={ProfilePic}
                    heading={"Who is this guy?"}
                    // paragraph={'I am a young aspiring software developer located in Calgary, Alberta with about 4 years of programming experience. I am a proud SAIT Alumni graduating from the IT Software Development Diploma program and I am now pursuing a degree in Computer Science at the University of Lethbridge to broaden my skills as a software developer.'}
                    paragraph={
                        "Hello! I'm Albert and I'm a 5th year Computer Science major with a minor in New Media at The University of Lethbridge. Front-end development is my area of expertise where I utilize my creative ideas and eye for design. I do however have an interest in full-stack development andn would love to create applications that are both visually appealing and user-friendly."}
                />
                <div>
                    <h2>Technologies</h2>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection