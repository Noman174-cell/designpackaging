import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../QualityPackaging.css'; // Updated CSS file name
import quality from '../images/Home/img-manufacturer-b.webp.png';

const QualityPackaging = () => {
  return (
    <section className="packaging-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="packaging-title">Quality Packaging, Affordable Prices</h2>
            <p className="packaging-description">
            Premium design and packaging should not cost a fortune. We provide a fair range of affordable design and packaging 
            services that relate to your requirements as well as help to save costs. Our committed team of skilled experts who 
            are more than one beginner in design and packaging works out to achieve great value by using the most affordable 
            solutions but with no compromise on quality or creativity. We have innovative 
            techniques and knowledge of the industry that can ensure you get the most value out of the investment.</p>
            <Row className="custom-packaging-row">
              <Col md={6}>
                <Card className="packaging-card">
                  <Card.Body>
                    <h5 className="card-title">Affordable Premium Design & Packaging </h5>
                    <p className="card-text">
                    The core message is that high-quality design and packaging don't have to be prohibitively expensive. They offer competitive pricing while maintaining premium standards.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="packaging-card">
                  <Card.Body>
                    <h5 className="card-title">Value-Driven Approach</h5>
                    <p className="card-text">
                    The company emphasizes delivering excellent value for the investment. They achieve this by using cost-effective solutions without compromising on quality or creativity.                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card className="packaging-card">
                  <Card.Body>
                    <h5 className="card-title">Client-Centric Focus </h5>
                    <p className="card-text">
                    They understand budget constraints and offer flexible pricing options. They work closely with clients to tailor solutions that fit their financial parameters, ensuring a transparent and collaborative approach.                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <img src={quality} alt="Packaging" className="packaging-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QualityPackaging;
