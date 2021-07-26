import { Navbar, Nav, Container } from "react-bootstrap";
import './navbar.css'
function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
