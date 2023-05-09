import Image from 'react-bootstrap/Image';
import ProfilePic from '../images/profile.png';
import { Container } from 'react-bootstrap';
export const ImageAndDesc = ({img, paragraph, order}) => {

    return (
        <Container>
        <div className='section__imageanddesc'>
            <Image className='section__imageanddesc--image' src={img} rounded />
            <p>
                {paragraph}
            </p>
        </div>
        </Container>
    )
}

ImageAndDesc.defaultProps = {
    img: ProfilePic,
	paragraph: 'I am a young aspiring software developer located in Calgary, Alberta with about 4 years of programming experience. I am a proud SAIT Alumni graduating from the IT Software Development Diploma program and I am now pursuing a degree in Computer Science at the University of Lethbridge to broaden my skills as a software developer.'
}
export default ImageAndDesc