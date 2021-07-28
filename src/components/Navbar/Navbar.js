import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
function NavigationBar({ user, setPath, path }) {
  console.log("navbar=", user.name);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {user ? (
          <h5>
            Welcome <br /> {user.name}
          </h5>
        ) : null}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
               
                  <Nav.Link onClick={() => setPath("/signin")}>
                    Sign In
                  </Nav.Link>
        
                  <Nav.Link onClick={() => setPath("/register")}>
                    Register
                  </Nav.Link>
              
              </>
            ) : (
              <Nav.Link href="/">Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
