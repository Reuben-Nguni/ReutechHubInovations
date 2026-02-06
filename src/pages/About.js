import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4" style={{ color: '#007bff' }}>About ReuTech Hub Innovations</h1>
        <p className="lead">Empowering businesses with cutting-edge technology solutions</p>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6">
          <h2 className="mb-4">Our Mission</h2>
          <p className="mb-4">
            At ReuTech Hub Innovations, we are dedicated to transforming businesses through innovative technology solutions.
            We believe that technology should empower, not complicate, and we're committed to delivering solutions that
            drive real results for our clients.
          </p>
          <p>
            Our team of certified professionals combines deep technical expertise with a passion for innovation,
            ensuring that every solution we deliver is not just effective, but future-proof.
          </p>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">Why Choose Us?</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="fas fa-check-circle text-success me-3"></i>
              <strong>Expertise:</strong> Years of experience in diverse technology domains
            </li>
            <li className="mb-3">
              <i className="fas fa-check-circle text-success me-3"></i>
              <strong>Innovation:</strong> Cutting-edge solutions tailored to your needs
            </li>
            <li className="mb-3">
              <i className="fas fa-check-circle text-success me-3"></i>
              <strong>Reliability:</strong> 24/7 support and guaranteed service quality
            </li>
            <li className="mb-3">
              <i className="fas fa-check-circle text-success me-3"></i>
              <strong>Partnership:</strong> Long-term relationships built on trust
            </li>
          </ul>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Values</h2>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <div className="p-4 h-100" style={{ border: '2px solid #007bff', borderRadius: '10px' }}>
            <div style={{ fontSize: '3rem', color: '#007bff', marginBottom: '1rem' }}>🚀</div>
            <h5>Innovation</h5>
            <p>We stay ahead of technology trends to deliver future-ready solutions.</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="p-4 h-100" style={{ border: '2px solid #007bff', borderRadius: '10px' }}>
            <div style={{ fontSize: '3rem', color: '#007bff', marginBottom: '1rem' }}>🔒</div>
            <h5>Security</h5>
            <p>Your data and systems are protected with enterprise-grade security.</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="p-4 h-100" style={{ border: '2px solid #007bff', borderRadius: '10px' }}>
            <div style={{ fontSize: '3rem', color: '#007bff', marginBottom: '1rem' }}>🤝</div>
            <h5>Connectivity</h5>
            <p>We connect people, systems, and ideas to create seamless experiences.</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="p-4 h-100" style={{ border: '2px solid #007bff', borderRadius: '10px' }}>
            <div style={{ fontSize: '3rem', color: '#007bff', marginBottom: '1rem' }}>⚡</div>
            <h5>Excellence</h5>
            <p>We deliver exceptional quality and service in everything we do.</p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 className="mb-4">Ready to Transform Your Business?</h2>
          <p className="lead mb-4">Join hundreds of satisfied clients who trust ReuTech Hub Innovations for their technology needs.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get Started Today</a>
        </div>
      </div>
    </div>
  );
};

export default About;
