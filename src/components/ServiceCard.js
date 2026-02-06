import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card h-100 border-0 shadow-sm service-card" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      transition: 'all 0.3s ease',
      borderRadius: '15px',
      overflow: 'hidden'
    }}>
      <div className="card-body text-center p-4">
        <div className="service-icon mb-3" style={{
          fontSize: '3rem',
          filter: 'drop-shadow(0 0 10px rgba(0,123,255,0.3))'
        }}>
          {service.icon}
        </div>
        <h5 className="card-title mb-3" style={{ color: '#333', fontWeight: 'bold' }}>
          {service.title}
        </h5>
        <p className="card-text" style={{ color: '#666' }}>
          {service.description}
        </p>
      </div>
      <style jsx>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .service-card:hover .service-icon {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
