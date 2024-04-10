import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <div>
              <a href="https://facebook.com"><FaFacebook className="mr-3" /></a>
              <a href="https://twitter.com"><FaTwitter className="mr-3" /></a>
              <a href="https://instagram.com"><FaInstagram className="mr-3" /></a>
              <a href="https://linkedin.com"><FaLinkedin /></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Contact Information</h5>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
