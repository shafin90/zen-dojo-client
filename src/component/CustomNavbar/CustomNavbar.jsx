// This is the navbar of the website.


import { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import './CustomNavbar.css';

// text-red,text-blue, bg-red,bg-blue,no-border-radius class are created to match color and theme of website. Those class are created in CustomNavbar.css file

const CustomNavbar = () => {
  //Getting datafrom Authprovider component through context API.
  const { user, handleLogout, allUser } = useContext(authContext);
  const [path, setPath] = useState('');


  //I will check the email of current user with all the data that is being loaded. In this way i can find the current users photo from database.
  const currentUser = allUser.find(item => item.email == user?.email)
  
  
  //Getting the current pathname. It is needed to highlight the rout where user currently in.
  const { pathname } = useLocation();
  
  //setting the pathname
  useEffect(()=>{
    setPath(pathname)
  },[pathname])

  // LggedInUser's information
  const loggedINUserInformation = allUser.find(item=>item.email==user?.email);
  
  
  return (
    <Navbar expand="lg" className='pt-5'>
      <Container>
        <Navbar.Brand className='fw-bold' href="#home"><img style={{ width: '90px', height: '90px' }} src="https://i.ibb.co/XC2WwHN/z-removebg-preview.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center w-100">
            <Nav.Link className={path == '/' ? 'fw-bold  fs-5 text-red' : 'fw-bold '} as={Link} to='/' >Home</Nav.Link>
            <Nav.Link className={path == '/instructor' ? 'fw-bold fs-5 text-red' : 'fw-bold'} as={Link} to='/instructor'>Instructors</Nav.Link>

            <Nav.Link className={path == '/class_list' ? 'fw-bold fs-5 text-red' : 'fw-bold'} as={Link} to='/class_list' >{loggedINUserInformation?.status=='admin'?'':'Class'}</Nav.Link>

            <Nav.Link className={user ? 'fw-bold' : 'd-none'} as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <div className={user ? 'd-block d-flex justy-content-between align-items-center' : 'd-none'}>
              <img src={currentUser?.img} alt="User" className="user-profile-picture me-3" />

              <Button onClick={handleLogout} className='px-4 py-2 btn no-border-radius bg-red text-white' href="#logout">Logout</Button>
            </div>
            <Button as={Link} to='/login' className={user ? 'd-none ' : 'd-block px-5 py-2 btn no-border-radius bg-blue'} >Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
