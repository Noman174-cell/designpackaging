import React, { useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import '../Testimonials.css'; // Custom styles

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Design Packaging Co. truly exceeded our expectations. They brought our vision to life with stunning packaging that perfectly reflects our brand. Highly recommend!",
      name: "Sarah J.",
      description: "on the packaging's reflection of their brand",
    },
    {
      text: "Working with Design Packaging Co. was a breeze. They listened to our needs and delivered exceptional results within our budget. Our customers love the new packaging!",
      name: "David L.",
      description: "on delivering exceptional results within budget",
    },
    {
      text: "We were impressed by the professionalism and creativity of the Design Packaging Co. team. They provided valuable insights and helped us create packaging that stands out from the competition.",
      name: "Emily R.",
      description: "on professionalism and creativity",
    },
    {
      text: "Design Packaging Co. helped us achieve our sustainability goals with their eco-friendly packaging solutions. We're thrilled with the results and the positive impact on our brand.",
      name: "Michael S.",
      description: "on eco-friendly packaging solutions",
    },
    {
      text: "We highly recommend Design Packaging Co. for their outstanding customer service and dedication to client satisfaction. They went above and beyond to ensure we were happy with the final product.",
      name: "Anna B.",
      description: "on outstanding customer service",
    },
  ];

  // Handle carousel slide change
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="testimonials-section">
      <h2 className="text-center mb-4">See what our customers say</h2>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={3000}
        indicators={true} // keeps the indicators
        controls={false}  // removes the next/previous buttons
      >
        <Carousel.Item>
          <Row className="d-flex justify-content-center">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                <div
                  className={`testimonial-card ${
                    index === activeIndex ? 'active-testimonial' : ''
                  } ${testimonial.highlight ? 'highlighted' : ''}`}
                >
                  <blockquote className="blockquote mb-3">
                    <p>"{testimonial.text}"</p>
                  </blockquote>
                  <footer className="blockquote-footer">
                    {testimonial.name} <cite>{testimonial.description}</cite>
                  </footer>
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="d-flex justify-content-center">
            {testimonials.slice(3).map((testimonial, index) => (
              <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                <div
                  className={`testimonial-card ${
                    index === activeIndex ? 'active-testimonial' : ''
                  } ${testimonial.highlight ? 'highlighted' : ''}`}
                >
                  <blockquote className="blockquote mb-3">
                    <p>"{testimonial.text}"</p>
                  </blockquote>
                  <footer className="blockquote-footer">
                    {testimonial.name} <cite>{testimonial.description}</cite>
                  </footer>
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
