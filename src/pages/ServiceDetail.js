import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    'network-infrastructure': {
      title: 'Network Infrastructure & Configuration',
      description: 'Comprehensive network design, implementation, and optimization for seamless connectivity.',
      features: [
        'Network architecture design',
        'Router and switch configuration',
        'VPN setup and management',
        'Network security implementation',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Improved network reliability',
        'Enhanced security',
        'Scalable infrastructure',
        '24/7 monitoring and support'
      ]
    },
    'cctv-surveillance': {
      title: 'CCTV Installation & Surveillance Systems',
      description: 'Advanced surveillance solutions for comprehensive security monitoring.',
      features: [
        'Camera system design and installation',
        'Video recording and storage setup',
        'Remote monitoring configuration',
        'Motion detection and alerts',
        'Integration with existing security systems'
      ],
      benefits: [
        'Enhanced security and monitoring',
        'Deterrence of criminal activity',
        'Evidence collection capabilities',
        'Peace of mind for business owners'
      ]
    },
    'printer-maintenance': {
      title: 'Printer Maintenance & Managed Print Services',
      description: 'Comprehensive printer support and managed print solutions for efficient operations.',
      features: [
        'Regular maintenance and cleaning',
        'Toner and supply management',
        'Print queue optimization',
        'Cost tracking and analysis',
        'Remote diagnostics and troubleshooting'
      ],
      benefits: [
        'Reduced downtime',
        'Cost savings on supplies',
        'Improved print quality',
        'Predictive maintenance'
      ]
    },
    'cloud-services': {
      title: 'Cloud Configuration & Deployment Services',
      description: 'Seamless cloud migration and configuration for scalable business solutions.',
      features: [
        'Cloud platform assessment',
        'Data migration planning',
        'Infrastructure as Code (IaC)',
        'Security configuration',
        'Performance optimization'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'Improved disaster recovery',
        'Enhanced collaboration'
      ]
    },
    'electrical-installation': {
      title: 'Electrical Installation & Maintenance',
      description: 'Professional electrical services for safe and reliable power systems.',
      features: [
        'Electrical system design',
        'Wiring and installation',
        'Safety inspections',
        'Emergency repairs',
        'Energy efficiency upgrades'
      ],
      benefits: [
        'Safe electrical systems',
        'Compliance with regulations',
        'Energy cost savings',
        'Reduced risk of electrical failures'
      ]
    },
    'cable-management': {
      title: 'Structured Cable Management',
      description: 'Organized and efficient cable infrastructure for optimal performance.',
      features: [
        'Cable system design',
        'Installation and termination',
        'Labeling and documentation',
        'Testing and certification',
        'Cable tray and rack installation'
      ],
      benefits: [
        'Improved network performance',
        'Easier maintenance and upgrades',
        'Reduced cable-related issues',
        'Professional appearance'
      ]
    },
    'it-support': {
      title: 'IT Support & Technical Maintenance',
      description: '24/7 technical support and maintenance for all your IT needs.',
      features: [
        'Help desk support',
        'Remote assistance',
        'On-site technical support',
        'System maintenance',
        'User training'
      ],
      benefits: [
        'Minimized downtime',
        'Faster issue resolution',
        'Improved productivity',
        'Peace of mind'
      ]
    },
    'hardware-repair': {
      title: 'Hardware Installation & Repair',
      description: 'Expert installation and repair services for all hardware components.',
      features: [
        'Hardware diagnostics',
        'Component replacement',
        'System upgrades',
        'Data recovery',
        'Warranty support'
      ],
      benefits: [
        'Extended hardware lifespan',
        'Cost-effective repairs',
        'Improved system performance',
        'Data protection'
      ]
    },
    'server-administration': {
      title: 'Server Setup & Administration',
      description: 'Professional server configuration and ongoing administration services.',
      features: [
        'Server hardware setup',
        'Operating system installation',
        'Software configuration',
        'Security hardening',
        'Performance monitoring'
      ],
      benefits: [
        'Reliable server infrastructure',
        'Optimized performance',
        'Enhanced security',
        'Scalable solutions'
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity & Network Protection',
      description: 'Advanced security solutions to protect your digital assets.',
      features: [
        'Security assessment',
        'Firewall configuration',
        'Antivirus and malware protection',
        'Data encryption',
        'Security training'
      ],
      benefits: [
        'Protection against cyber threats',
        'Compliance with regulations',
        'Data integrity',
        'Business continuity'
      ]
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <h1>Service Not Found</h1>
          <p>The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-4 mb-4" style={{ color: '#007bff' }}>{service.title}</h1>
          <p className="lead mb-4">{service.description}</p>

          <h3 className="mb-3">Key Features</h3>
          <ul className="list-group list-group-flush mb-4">
            {service.features.map((feature, index) => (
              <li key={index} className="list-group-item">
                <i className="fas fa-check-circle text-success me-2"></i>
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="mb-3">Benefits</h3>
          <ul className="list-group list-group-flush">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="list-group-item">
                <i className="fas fa-star text-warning me-2"></i>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Ready to Get Started?</h5>
              <p className="card-text">Contact our experts to discuss your specific needs and get a customized solution.</p>
              <a href="/contact" className="btn btn-primary w-100">Contact Us</a>
            </div>
          </div>

          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h6 className="card-title">Why Choose Us?</h6>
              <ul className="list-unstyled">
                <li><i className="fas fa-certificate text-primary me-2"></i>Certified Professionals</li>
                <li><i className="fas fa-clock text-primary me-2"></i>24/7 Support</li>
                <li><i className="fas fa-shield-alt text-primary me-2"></i>Guaranteed Quality</li>
                <li><i className="fas fa-handshake text-primary me-2"></i>Proven Track Record</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
