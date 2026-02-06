import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <Container>
        <Row className="py-5">
          {/* Brand */}
          <Col md={6}>
            <h5 className="footer-brand">9x Investments</h5>
            <p className="footer-text">
              Dubai-based investment firm focused on premium hospitality
              and nightlife ventures across DIFC and beyond.
            </p>
            <p className="footer-location">Dubai, United Arab Emirates</p>
          </Col>

          {/* Links */}
          <Col md={3}>
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Legal */}
          <Col md={3}>
            <h6 className="footer-heading">Legal</h6>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="mb-0">
            © {new Date().getFullYear()} 9x Investments. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
