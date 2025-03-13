import React from 'react';
import '../PakFactoryDifference.css'; // Importing the CSS for styling
import circle from "../images/Home/stamp-regular-green.svg fill.png";

const PakFactoryDifference = () => {
  return (
    <section className="pakfactory-difference">
      <div className="content">
        <div className="circle-image-container">
          <img
           src={circle} // You can replace this with the path to your image
            alt="PakFactory Image"
            className="circle-image"
          />
        </div>
      </div>
    </section>
  );
};

export default PakFactoryDifference;
