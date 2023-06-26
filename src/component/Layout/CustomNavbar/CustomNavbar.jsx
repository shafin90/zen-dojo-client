
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';


const CustomNavbar = () => {

  return (
    <Navbar expand="lg" className='py-3'>
      <Container>
        <Navbar.Brand href="#home">Zen Dojo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#instructors">Instructors</Nav.Link>
            <Nav.Link href="#classes">Classes</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            {/* <NavDropdown
              title={<img src="user-profile-picture.jpg" alt="User" className="user-profile-picture" />}
              id="basic-nav-dropdown"
              align="end"
            >
              
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown> */}
            <Button className='btn btn-primary'>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
