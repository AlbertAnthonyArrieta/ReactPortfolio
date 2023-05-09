import Container from 'react-bootstrap/Container';
import ImageAndDesc from "../components/ImageAndDesc";
export const AboutSection = () => {

	return (
		<div id='section--about' className='section'>
            <Container>
            <h1 className='section--title'>ABOUT ME</h1>
            <ImageAndDesc />
            </Container>
        </div>
	)
}
export default AboutSection