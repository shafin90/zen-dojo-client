import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 w-100">
      <Container >
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Your martial arts training center provides expert instruction...</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              Email: info@example.com<br />
              Phone: +1234567890<br />
              Address: 123 Martial Street, City
            </address>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <p>Stay connected with us on social media for updates and news.</p>
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
