import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import "../DoubleImage.css"; // Custom styling
import service1 from "../images/Home/Background+Shadow.png";
import service2 from "../images/Home/Background+Shadow-1.png";

const DoubleImage = () => {
  const services = [
    {
      heading: (
        <>
          Reduced Environmental Impact
        </>
      ), // Using JSX to handle <br />
      description: "Packaging in an eco-friendly fashion is to limit the harm to our environment in terms of waste and conservation of resources.", // Description for the first service
      image: service1,
      buttonText: "Browse products", // Dynamic button text
      link: "/services", // Add the link to the services page
    },
    {
      heading: (
        <>
          Enhances Brand Image
        </>
      ), // Using JSX to handle <br />
      description: "Adopting green packaging proportionately enhances brand image because it signifies a commitment to sustainability and appeals to environmentally aware consumers.", // Description for the second service
      image: service2,
      buttonText: "Learn how we do it", // Dynamic button text
    },
  ];

  return (
    <div className="creative-services-section">
      {/* Row 1: Centered Heading and Subheading */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-left"> {/* Aligning to the left */}
            <h2 className="section-heading">
              Eco-Friendly Packaging Solutions For a Sustainable Future
            </h2>
            <p className="section-description">
              At Design Packaging, we believe in a sustainable future where businesses thrive while minimizing their environmental impact.
            </p>
          </div>
        </div>

        {/* Row 2: Left and Right Image Layout */}
        <div className="row mt-4">
          {services.map((service, index) => (
            <div className="col-md-6 text-center" key={index}>
              <div className="vv-service-card">
                <img src={service.image} alt={service.description} className="img-fluid" />
                <div className="service-content">
                  <h4 className="service-heading-vv">{service.heading}</h4> {/* Heading for each service */}
                  <h3 className="service-description-vv">{service.description}</h3> {/* Description for each service */}
                  {service.link ? (
                    <Link to={service.link}>
                      <button className="service-button-vv">{service.buttonText}</button> {/* Link without class */}
                    </Link>
                  ) : (
                    <button data-bs-toggle="modal" data-bs-target="#popupForm" className="service-button-vv">{service.buttonText}</button> // Regular button
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoubleImage;
