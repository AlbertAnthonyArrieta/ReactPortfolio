import { Container } from 'react-bootstrap';
export const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer--container'>
                <p>
                    <a href='#home'> HOME </a>
                    <span>|</span>
                    <a href='#about'> ABOUT </a>
                    <span>|</span>
                    <a href='#projects'> PROJECTS </a>
                    <span>|</span>
                    <a href='#contact'> CONTACT </a>
                    <span>|</span>
                </p>

                <p>ALBERT ARRIETA <span className='color__pink'>©2023</span> All Rights Reserved.</p>

                <p>
                    <a href='#home'> GitHub </a>
                    <span>|</span>
                    <a href='#about'> Linkedin </a>
                    <span>|</span>
                    <a href='#projects'> CodePen </a>
                </p>
            </div>

        </div>
    )
}
export default Footer