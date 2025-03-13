import React from "react";
import "../ShowcaseSection.css";
import image1 from "../images/Services/structural-img-04.jpg.png"; // Replace with actual image paths
import image2 from "../images/Services/structural-img-05.jpg.png";
import image3 from "../images/Services/structural-img-06.jpg.png";
import image4 from "../images/Services/structural-img-07.jpg.png";
import image5 from "../images/Services/structural-img-08.jpg.png";

const ShowcaseSection = () => {
  return (
    <section className="showcase-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">Partnering with Businesses to Design<br/> Winning Packaging Solutions</h2>
        <p className="mb-5">
        We boast a proven success story in assisting businesses across all industries to meet their 
        packaging objectives. Thousands of small businesses and large corporations have teamed up with 
        us to design unique and effective packaging strategies that boost their brand image while offering 
        maximum protection for their products and increasing sales.
        </p>
        <div className="row g-4">
          {/* Row 1 */}
          <div className="col-md-7">
            <img
              src={image1}
              alt="Showcase 1"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-5">
            <img
              src={image2}
              alt="Showcase 2"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Row 2 */}
          <div className="col-md-12">
            <img
              src={image3}
              alt="Showcase 3"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-5">
            <img
              src={image4}
              alt="Showcase 4"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-7">
            <img
              src={image5}
              alt="Showcase 5"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
