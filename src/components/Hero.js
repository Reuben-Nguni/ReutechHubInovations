import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section position-relative d-flex align-items-center justify-content-center text-center text-white" style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="floating-circle" style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)',
          top: '20%',
          left: '10%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div className="floating-circle" style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,0,255,0.3) 0%, transparent 70%)',
          top: '60%',
          right: '15%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        <div className="floating-circle" style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,0,0.3) 0%, transparent 70%)',
          bottom: '30%',
          left: '70%',
          animation: 'float 7s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container">
        <h1 className="display-1 fw-bold mb-4" style={{
          textShadow: '0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4)',
          animation: 'glow 2s ease-in-out infinite alternate'
        }}>
          ReuTech Hub Innovations
        </h1>
        <p className="lead mb-5" style={{ fontSize: '1.5rem', opacity: 0.9 }}>
          Innovation, Connectivity, Security – Empowering Your Digital Future
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="btn btn-primary btn-lg me-3" style={{
            background: 'linear-gradient(45deg, #007bff, #00d4ff)',
            border: 'none',
            boxShadow: '0 0 20px rgba(0,123,255,0.5)',
            transition: 'all 0.3s ease'
          }}>
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg" style={{
            border: '2px solid #fff',
            transition: 'all 0.3s ease'
          }}>
            Get in Touch
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          from { text-shadow: 0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4); }
          to { text-shadow: 0 0 30px rgba(0,255,255,1), 0 0 50px rgba(0,255,255,0.6); }
        }
        .hero-section:hover .floating-circle {
          animation-duration: 3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
