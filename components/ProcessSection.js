import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../ProcessSection.css"; 
import structural from '../images/Services/structural-img-01.jpg.png';
import structural2 from '../images/Services/structural-img-02.jpg.png';
import structural3 from '../images/Services/structural-img-03.jpg.png';
import square from '../images/square_icon_big.svg.png'; // Replace this with your actual icon image path
import circle from '../images/circle_icon_big.svg.png'; // Replace this with your actual icon image path
import triangle from '../images/triangle group.png'; // Replace this with your actual icon image path

const ProcessSection = () => {
  return (
    <section className="process-section-custom py-5">
      <Container className="text-center">
        <h2 className="process-heading-main">Our Packaging Process: From Strategy to Success</h2>
        <p className="process-description-main">
          It is our firm belief that superior packaging in reality begins with a very strong strategy. The process that we have here <br/>
          involves intensive consultation, detailed design, and engineering, as well as thorough testing and validation. Thus, every single <br/>
          package we create will not only protect your product but also enhance your brand and build customer satisfaction.
        </p>
      </Container>

      <Container>
        <Row className="process-row-custom align-items-center">
          <Col md={6}>
            <div className="process-icon-box">
              <img className="process-icon-img" src={square} alt="Icon" />
            </div>
            <h3 className="process-heading">Strategic Packaging Consultation</h3>
            <p className="process-description">
              Strategic packaging consultations commence with us inward at identifying the very 
              business needs, target audience, and product characteristics unique to you. We carry 
              out qualitative discussions followed by extensive market analysis to identify your key 
              objectives, which include:
            </p>
            <ul className="process-list">
              <li><i className="fas fa-check"></i> Brand differentiation</li>
              <li><i className="fas fa-check"></i> Shelf impact</li>
              <li><i className="fas fa-check"></i> Sustainability</li>
              <li><i className="fas fa-check"></i> Cost effectiveness</li>
            </ul>
            <p className="process-description">
              The combined phase assures that our packaging solutions integrate with overall business goals and hence offer true ROI.
            </p>
          </Col>
          <Col md={6} className="process-image-right">
            <img className="process-img-fluid" src={structural} alt="Packaging Consultation" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="process-row-custom align-items-center">
          <Col md={6} className="process-image-left order-md-1 order-2">
            <img className="process-img-fluid" src={structural2} alt="Packaging Consultation" />
          </Col>
          <Col md={6} className="order-md-2 order-1">
            <div className="process-icon-box">
              <img className="process-icon-img" src={circle} alt="Icon" />
            </div>
            <h3 className="process-heading">Professional Design & Engineering</h3>
            <p className="process-description">
              At the close of the strategic consult, the experienced group of designers and engineers brings out-of-the-box an idea you've made. 
              We make sure the application of cutting-edge software and industry best practices to come out with innovative, mouth-watering 
              packaging solutions. Our expertise covers all areas of packaging design, structural design, material selection, and graphics development.
            </p>
            <p className="process-description">
              We consider factors such as ergonomics, sustainability, and manufacturability while keeping your package concerned not just about 
              beauty but also functionality and efficiency.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="process-row-custom align-items-center">
          <Col md={6}>
            <div className="process-icon-box">
              <img className="process-icon-img" src={triangle} alt="Icon" />
            </div>
            <h3 className="process-heading">Packaging Testing & Validation</h3>
            <p className="process-description">
              We put your packaging through rigorous tests and validations before it reaches the market, ensuring integrity 
              and performance in the final stages of testing. This consists of a series of tests that run through drop and vibration 
              tests and environmental stress tests to check the pack's ability to survive, usually unkind treatment along the supply 
              chain. Shelf-life studies are conducted, as well as sessions to collect field data from consumers on packaging performance 
              in the real world. 
            </p>
            <p className="process-description">
              All of this testing and validation helps ensure that your packaging is fortified, reliable,
              and ready for use to wrap your product and project your image.
            </p>
          </Col>
          <Col md={6} className="process-image-right">
            <img className="process-img-fluid" src={structural3} alt="Packaging Consultation" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProcessSection;
