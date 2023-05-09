import Container from 'react-bootstrap/Container';
export const HeroSection = () => {

	return (
		<div id="section--hero">
			{/* <canvas id="particleArt"></canvas>
            <script src="./scripts/particles.js"></script> */}
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
					software.
					
				</h1>
			</Container>

		</div>
	)
}
export default HeroSection