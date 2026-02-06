import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
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
    },
    {
      id: 'it-support',
      title: 'IT Support & Technical Maintenance',
      description: '24/7 technical support and maintenance for all your IT needs.',
      icon: '🛠️'
    },
    {
      id: 'hardware-repair',
      title: 'Hardware Installation & Repair',
      description: 'Expert installation and repair services for all hardware components.',
      icon: '💻'
    },
    {
      id: 'server-administration',
      title: 'Server Setup & Administration',
      description: 'Professional server configuration and ongoing administration services.',
      icon: '🖥️'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Network Protection',
      description: 'Advanced security solutions to protect your digital assets.',
      icon: '🔒'
    }
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4" style={{ color: '#007bff' }}>Our Services</h1>
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
    </div>
  );
};

export default Services;
