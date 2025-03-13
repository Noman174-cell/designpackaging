import React from 'react';
import "../UniqueSection.css";  // Make sure to include your custom CSS for styling
import packagingImage from '../images/Home/picBackground.png'; // Image for the section


const UniqueSection = () => {
  return (
    <section className="unique-section">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center unique-section-container">
              <img 
                src= {packagingImage}
                alt="Project Illustration" 
                className="unique-section-image me-3"
              />
              <p className="unique-section-text mb-0">
              Have other questions for us?  <a href="tel:+15515543283" className="unique-section-link">Ask our experts directly!</a>
              </p>
              <button data-bs-toggle='modal' data-bs-target='#popupForm' className="unique-section-button">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
