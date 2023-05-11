import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = () => {

	return (
		<div id="section--hero">
			<div id="section--hero__main">
				<div id="section--hero__main">
					<Container id='section--hero__text'>
						<h1 className='text--big'>Hello!</h1>
						<h1>
							My name is
							<span className='color--white'> Albert Arrieta</span>.<br></br>
							I am a
							<span className='color--cyan'> Software Developer </span>
							who is driven to create
							<span className='color--pink'> Functional</span>
							,
							<span className='color--pink'> Elegant</span>
							,
							and
							<span className='color--pink'> User-friendly </span>
							code.
						</h1>
					</Container>
				</div>

			</div>
			<div id='container--scroller'>
				<p className='color--white'>Take a Look!</p>
				<FontAwesomeIcon className='color--cyan' icon={faAngleDoubleDown} size="2xl" />
			</div>
		</div>


	)
}
export default HeroSection