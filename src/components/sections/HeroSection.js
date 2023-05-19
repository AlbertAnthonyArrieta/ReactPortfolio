import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useEffect } from 'react';

export const HeroSection = () => {

	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		// Set canvas dimensions to match parent container
		canvas.width = canvas.parentElement.clientWidth;
		canvas.height = canvas.parentElement.clientHeight;

		// Animation variables
		let particles = [];

		// Particle constructor
		function Particle(x, y, radius, color, dx, dy) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;
			this.dx = dx;
			this.dy = dy;

			this.draw = () => {
				context.beginPath();
				context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				context.fillStyle = this.color;
				context.fill();
				context.closePath();
			};

			this.update = () => {
				this.x += this.dx;
				this.y += this.dy;

				if (this.x + this.radius < 0 || this.x - this.radius > canvas.width) {
					this.dx = -this.dx;
				}

				if (this.y + this.radius < 0 || this.y - this.radius > canvas.height) {
					this.dy = -this.dy;
				}

				this.draw();
			};

			this.connectParticles = (particles) => {
				particles.forEach((particle) => {
					const distance = Math.sqrt(
						(this.x - particle.x) ** 2 + (this.y - particle.y) ** 2
					);

					if (distance < canvas.width/5) {
						context.beginPath();
						context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
						context.lineWidth = 1;
						context.moveTo(this.x, this.y);
						context.lineTo(particle.x, particle.y);
						context.stroke();
						context.closePath();
					}
				});
			};
		}

		// Create particles
		function createParticles() {
			const numParticles = 20;
			const colors = ['#50C8CF', '#4b4b4b', '#FE206F'];

			for (let i = 0; i < numParticles; i++) {
				const x = Math.random() * canvas.width;
				const y = Math.random() * canvas.height;
				const radius = Math.random() * 3 + 1;
				const color = colors[Math.floor(Math.random() * colors.length)];
				const dx = (Math.random() - 0.5) * 0.5;
				const dy = (Math.random() - 0.5) * 0.5;

				particles.push(new Particle(x, y, radius, color, dx, dy));
			}
		}

		// Animation loop
		function animate() {
			requestAnimationFrame(animate);
			context.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].connectParticles(particles.slice(i + 1));
			}
		}

		// Initialize the animation
		createParticles();
		animate();

		// Clean up on unmount
		return () => cancelAnimationFrame(animate);
	}, []);

	return (
		<div id="home" className="hero">
			<canvas ref={canvasRef}></canvas>
			<div className='canvas--overlay'></div>
			<div className="hero__main">
				<div className="circuit-board">
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