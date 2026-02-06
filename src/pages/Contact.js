import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Network Infrastructure & Configuration',
    'CCTV Installation & Surveillance Systems',
    'Printer Maintenance & Managed Print Services',
    'Cloud Configuration & Deployment Services',
    'Electrical Installation & Maintenance',
    'Structured Cable Management',
    'IT Support & Technical Maintenance',
    'Hardware Installation & Repair',
    'Server Setup & Administration',
    'Cybersecurity & Network Protection'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, simulate submission
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-success text-center" role="alert">
              <h4 className="alert-heading">Thank You!</h4>
              <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4" style={{ color: '#007bff' }}>Contact Us</h1>
        <p className="lead">Get in touch with our experts for personalized technology solutions</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone *</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="service" className="form-label">Service of Interest *</label>
                <select
                  className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <div className="invalid-feedback">{errors.service}</div>}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center mb-3">
          <div style={{ fontSize: '2rem', color: '#007bff', marginBottom: '1rem' }}>📍</div>
          <h5>Address</h5>
          <p>123 Tech Street<br />Innovation City, IC 12345</p>
        </div>
        <div className="col-md-4 text-center mb-3">
          <div style={{ fontSize: '2rem', color: '#007bff', marginBottom: '1rem' }}>📞</div>
          <h5>Phone</h5>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="col-md-4 text-center mb-3">
          <div style={{ fontSize: '2rem', color: '#007bff', marginBottom: '1rem' }}>✉️</div>
          <h5>Email</h5>
          <p>info@reutechhub.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
