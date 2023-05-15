import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" id="navbar" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ALBERT ARRIETA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;