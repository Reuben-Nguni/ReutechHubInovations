import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does ReuTech Hub Innovations offer?',
      answer: 'We offer a comprehensive range of technology services including network infrastructure, CCTV installation, cloud services, cybersecurity, IT support, and more. Visit our Services page for a complete list.'
    },
    {
      question: 'Do you provide 24/7 technical support?',
      answer: 'Yes, our IT Support & Technical Maintenance service includes 24/7 monitoring and support to ensure your systems are always running smoothly.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on the scope and complexity. Network infrastructure projects may take 2-4 weeks, while simpler installations can be completed in a few days. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Absolutely! We serve small businesses, medium enterprises, and large corporations. Our solutions are scalable and tailored to meet the specific needs of each client.'
    },
    {
      question: 'What makes ReuTech Hub Innovations different?',
      answer: 'We combine cutting-edge technology with personalized service, ensuring innovative solutions that drive real business results. Our team of experts stays ahead of industry trends to provide future-proof solutions.'
    },
    {
      question: 'Do you offer training for your services?',
      answer: 'Yes, we provide comprehensive training and documentation for all our services. This ensures your team can effectively use and maintain the systems we implement.'
    },
    {
      question: 'What is your approach to cybersecurity?',
      answer: 'We take a proactive, multi-layered approach to cybersecurity, including threat assessment, implementation of security best practices, regular monitoring, and employee training.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in seamless integration with existing infrastructure. Our team assesses your current setup and designs solutions that complement and enhance your existing systems.'
    }
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4" style={{ color: '#007bff' }}>Frequently Asked Questions</h1>
        <p className="lead">Find answers to common questions about our services</p>
      </div>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
