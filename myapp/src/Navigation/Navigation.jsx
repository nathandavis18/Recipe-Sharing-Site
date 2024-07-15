import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Nathan Davis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Recipes">Recipes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;