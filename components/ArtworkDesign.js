import React from "react";
import "../ArtworkDesign.css";
import ArtworkImage from "../images/Services/Background.png"; // Replace with your actual image path

const ArtworkDesign = () => {
  return (
    <section className="artwork-design-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="artwork-text bg-white p-4 shadow rounded">
              <h2 className="artwork-title mb-3">Artwork Design</h2>
              <p className="artwork-description">
              At Design Packaging, we have a great team of talented and brilliant 
              artists who build up eye-catching artwork for your brand and are relevant 
              to your customers' following target market. It includes various stunning 
              visual formats like illustrations, photography, typography, etc., to package 
              this cool stuff, giving you something to look at that reinforces your brand 
              identity and consumer engagement.
              </p>
              <button data-bs-toggle="modal" data-bs-target="#popupForm" className="btn btn-success mt-3">Learn More</button>
            </div>
          </div>

          {/* Image Section */}
          {/* <div className="col-md-6">
            <div className="artwork-image text-center">
              <img
                src={ArtworkImage}
                alt="Artwork Design"
                className="img-fluid rounded"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ArtworkDesign;
