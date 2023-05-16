import Container from 'react-bootstrap/Container';
import {ReactComponent as LinkedinIcon} from '../../icons/linkedin-in.svg';
import {ReactComponent as GitIcon} from '../../icons/github-original.svg';
import {ReactComponent as CodepenIcon} from '../../icons/codepen.svg';
import {ReactComponent as EmailIcon} from '../../icons/paper-plane.svg';



export const ContactSection = () => {

    return (
        <div id="contact" className='section contact'>
            <Container>
                <h1>CONTACT ME</h1>
                <h2 className='contact--subheading'>If you need any further information or want to connect, feel free to reach out by sending me a message! </h2>
                <div className='contact--email--container'>
                    <button className='contact--email--btn' onClick={() => window.location.href = 'mailto:albert.arrieta12@gmail.com'}> Send me an Email <EmailIcon className='emailIcon'/> </button>
                </div>
                <div className='contacts--links'>
                    <button className='contact--btn' onClick={() => window.location.href='https:www.linkedin.com/in/albert-arrieta/?originalSubdomain=ca'}><LinkedinIcon /></button>
                    <button className='contact--btn' onClick={() => window.location.href='https://github.com/AlbertAnthonyArrieta'}><GitIcon /></button>
                    <button className='contact--btn' onClick={() => window.location.href='https://codepen.io/Albert-Arrieta'} ><CodepenIcon /></button>
                </div>
            </Container>
        </div>
    )
}
export default ContactSection