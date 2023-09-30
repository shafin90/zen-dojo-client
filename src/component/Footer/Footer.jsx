import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-5 w-100">
      <Container className='py-5'>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Zen Dojo provides expert instruction.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              Email: zendojo@example.com<br />
              Phone: +1234567890<br />
              Address: 123 Martial Street, City
            </address>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <p>Stay connected with us on social media for updates and news.</p>
            {/* social icon, facebook, linkedin, youtube */}
            <div>
              <FaFacebookSquare size={32} className="mr-3 me-3  " />
              <FaLinkedin size={32} className="mr-3 me-3 " />
              <FaYoutube size={32} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Your Martial Training Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
