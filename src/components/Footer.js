import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">ReuTech Hub Innovations</h5>
            <p>Innovation, Connectivity, Security – Empowering Your Digital Future</p>
            <div className="social-links">
              <a href="https://www.facebook.com/ReuTechHub" className="text-light me-3" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com/ReuTechHub" className="text-light me-3" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.linkedin.com/company/reutechhub" className="text-light" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-2 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/services" className="text-light" style={{ textDecoration: 'none' }}>Services</Link></li>
              <li><Link to="/about" className="text-light" style={{ textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/contact" className="text-light" style={{ textDecoration: 'none' }}>Contact</Link></li>
              <li><Link to="/faq" className="text-light" style={{ textDecoration: 'none' }}>FAQ</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h6 className="mb-3">Services</h6>
            <ul className="list-unstyled">
              <li>Network Infrastructure</li>
              <li>CCTV & Surveillance</li>
              <li>Cloud Services</li>
              <li>Cybersecurity</li>
              <li>IT Support</li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <p><i className="fas fa-map-marker-alt me-2"></i> Balastone Park, House No. 24 Lusaka</p>
            <p><i className="fas fa-phone me-2"></i> +260 970067982 / 0769963307</p>
            <p><i className="fas fa-envelope me-2"></i> ngunireubenjr@gmail.com</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 ReuTech Hub Innovations. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/privacy" className="text-light me-3" style={{ textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" className="text-light" style={{ textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
