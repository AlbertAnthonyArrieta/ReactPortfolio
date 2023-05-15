import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = () => {

	return (
		<div id="home" className="hero">
			<div className="hero__main">
				<div className="hero__main">
					<Container className='hero__text'>
						<h1 className='text__big'>Hello!</h1>
						<h1>
							My name is
							<span className='color__white'> Albert Arrieta</span>.<br></br>
							I am a
							<span className='color__cyan'> Software Developer </span>
							who is driven to create
							<span className='color__pink'> Functional</span>
							,
							<span className='color__pink'> Elegant</span>
							,
							and
							<span className='color__pink'> User-friendly </span>
							applications.
						</h1>
					</Container>
				</div>

			</div>
			<div className='hero__scroller'>
				<p className='color__white'>Take a Look!</p>
				<FontAwesomeIcon className='color__cyan' icon={faAngleDoubleDown} size="2xl" />
			</div>
		</div>


	)
}
export default HeroSection