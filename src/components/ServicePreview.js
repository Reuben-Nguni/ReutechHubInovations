import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ServicePreview = () => {
  const services = [
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure & Configuration',
      description: 'Design, implement, and optimize robust network systems for seamless connectivity.',
      icon: '🌐'
    },
    {
      id: 'cctv-surveillance',
      title: 'CCTV Installation & Surveillance Systems',
      description: 'Advanced surveillance solutions for comprehensive security monitoring.',
      icon: '📹'
    },
    {
      id: 'printer-maintenance',
      title: 'Printer Maintenance & Managed Print Services',
      description: 'Comprehensive printer support and managed print solutions for efficient operations.',
      icon: '🖨️'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Configuration & Deployment Services',
      description: 'Seamless cloud migration and configuration for scalable business solutions.',
      icon: '☁️'
    },
    {
      id: 'electrical-installation',
      title: 'Electrical Installation & Maintenance',
      description: 'Professional electrical services for safe and reliable power systems.',
      icon: '⚡'
    },
    {
      id: 'cable-management',
      title: 'Structured Cable Management',
      description: 'Organized and efficient cable infrastructure for optimal performance.',
      icon: '🔌'
    }
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-5 mb-4" style={{ color: '#007bff' }}>Our Services</h2>
        <p className="lead">Comprehensive technology solutions tailored to your business needs</p>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <Link to={`/services/${service.id}`} style={{ textDecoration: 'none' }}>
              <ServiceCard service={service} />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/services" className="btn btn-primary btn-lg">
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default ServicePreview;
