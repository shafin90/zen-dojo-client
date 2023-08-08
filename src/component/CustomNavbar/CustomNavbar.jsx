
import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import './CustomNavbar.css'

const CustomNavbar = () => {
  //Getting datafrom Authprovider component through context API.
  const { user, handleLogout } = useContext(authContext);
  
  
  //Getting the current pathname. It is needed to highlight the rout where user currently in.
  const {pathname} = useLocation();

  return (
    <Navbar expand="lg" className='pt-5'>
      <Container>
        <Navbar.Brand className='fw-bold' href="#home"><img style={{width:'90px',height:'90px'}} src="https://i.ibb.co/fvQz5vS/z.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center w-100">
            <Nav.Link className={pathname=='/'?'fw-bold  fs-5 text-red':'fw-bold '} as={Link} to='/' >Home</Nav.Link>
            <Nav.Link className={pathname=='/instructor'?'fw-bold fs-5 text-red':'fw-bold'} as={Link} to='/instructor'>Instructors</Nav.Link>
            <Nav.Link className={pathname=='/class_list'?'fw-bold fs-5 text-red':'fw-bold'} as={Link} to='/class_list' >Classes</Nav.Link>
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
            <Button as={Link} to='/login' className={user ? 'd-none ' : 'd-block px-5 py-2 btn no-border-radius bg-blue'} >Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
