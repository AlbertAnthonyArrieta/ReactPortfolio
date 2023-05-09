import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar id="navbar" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ALBERT ARRIETA</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#projects">PROJECTS</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;