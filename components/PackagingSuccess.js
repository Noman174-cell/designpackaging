import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../PackagingSuccess.css'; // CSS for styling
import packagingImage from '../images/Home/total-packaging-success.webp.png'; // Image for the section

const PackagingSuccess = ({ items }) => { // Assuming 'items' is passed as a prop
  return (
    <section className="packaging-success-section">
      <Container>
        
        <Row className="justify-content-center mt-4">
          <Col md={12} className="d-flex justify-content-center">
            <img src={packagingImage} alt="Packaging" className="packaging-image" />
          </Col>
        </Row>

        <h2 className="section-title text-left"> {/* Updated alignment class */}
          <span className="highlighted-text">Why Choose </span><br/>Our Design and <br/>Packaging Services
        </h2>

        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} sm={6} md={6} lg={3} className="mb-4" key={index}>
              <Card className="packaging-card">
                <Card.Body className="text-left"> {/* Updated alignment class */}
                  <div className="card-icon">
                    <img src={item.icon} alt={item.title} className="icon-img" /> {/* Dynamically loading icon */}
                  </div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       
      </Container>
    </section>
  );
};

export default PackagingSuccess;
