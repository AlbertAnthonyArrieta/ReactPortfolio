import Image from 'react-bootstrap/Image';
import Placeholder from '../images/placeholder.jpg';
import { Container } from 'react-bootstrap';
export const ImageAndDesc = ({img, heading, paragraph, order}) => {

    return (
        <Container>
            <Container>
                <div className='imageanddesc'>
                    <Image className='imageanddesc--image' src={img} rounded />
                    <div>
                    <h2 className='imageanddesc--heading'>{heading}</h2>
                    <p>
                        {paragraph}
                    </p>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

ImageAndDesc.defaultProps = {
    img: Placeholder,
    heading: "Heading",
	paragraph: "Insert Paragraph Here"
}
export default ImageAndDesc