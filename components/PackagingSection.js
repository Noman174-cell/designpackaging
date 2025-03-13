import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../PackagingSection.css";
import headset from '../images/Services/icon-headset.svg.png';
import design from '../images/Services/icon-design.svg.png';
import tools from '../images/Services/icon-tools.svg.png';

const PackagingSection = () => {
  return (
    <section className="packagingSec-section">
      <Container>
        <div className="main-heading text-center">
          <h2>Get Amazing Packaging Without Having to Deal With It</h2>
          <p>
            Get professional quality and service with efficient bespoke packaging without having to do any work.
          </p>
        </div>
        <Row className="text-center mt-5">
          <Col xs={12} md={6} lg={4} className="mb-4">
            <div className="packagingSec-card">
              <div className="icon">
                <img src={headset} alt="Bespoke Packaging Icon" />
              </div>
              <h3>Bespoke Packaging</h3>
              <p>
                We design custom packaging solutions that redefine your brand. Spectacular and one-of-a-kind bespoke packaging reflects your brand identity while retaining it in customers' minds long after they have parted from it.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <div className="packagingSec-card">
              <div className="icon">
                <img src={design} alt="Product Protection Icon" />
              </div>
              <h3>Product Protection</h3>
              <p>
                Our priority is the safety and security of your products. Packaging designs are done with the intent to provide maximum protection during shipping and handling and with minimal risks of damage and ensure that the products reach their destination in perfect condition.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={4} className="mb-4">
            <div className="packagingSec-card">
              <div className="icon">
                <img src={tools} alt="Stress-Free Packaging Icon" />
              </div>
              <h3>Stress-Free Packaging</h3>
              <p>
                Packaging takes your stress away. You will be taken through the whole process from conception to production by our expert team, making this a seamless experience. You will be able to concentrate on the business while we take care of all your packaging needs.
              </p>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-4">
        <button data-bs-toggle="modal" data-bs-target="#popupForm" className="create-packagingSec">Let's Create Packaging</button>
        </div>
      </Container>
    </section>
  );
};

export default PackagingSection;
