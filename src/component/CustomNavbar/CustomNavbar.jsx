
import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';


const CustomNavbar = () => {

  const { user, handleLogout } = useContext(authContext);

  return (
    <Navbar expand="lg" className='py-5'>
      <Container>
        <Navbar.Brand className='fw-bold' href="#home">Zen Dojo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center w-100">
            <Nav.Link className='fw-bold' as={Link} to='/' >Home</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to='/instructor'>Instructors</Nav.Link>
            <Nav.Link className='fw-bold' as={Link} to='/class_list' >Classes</Nav.Link>
            <Nav.Link className={user?'fw-bold':'d-none'} as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              className={user ? 'd-block' : 'd-none'}
              title={<img src="user-profile-picture.jpg" alt="User" className="user-profile-picture" />}
              id="basic-nav-dropdown"
              align="end"
            >

              <NavDropdown.Item onClick={handleLogout} href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
            <Button as={Link} to='/login' className={user ? 'd-none btn btn-primary' : 'd-block btn btn-primary'} >Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
