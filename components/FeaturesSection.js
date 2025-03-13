import React from "react";
import "../FeaturesSection.css";

// Importing icons
import BusinessSuccessIcon from '../images/Services/icon-circle-arrow.svg-3.png';
import CostReductionIcon from '../images/Services/icon-circle-arrow.svg-4.png';
import ProductProtectionIcon from '../images/Services/icon-circle-arrow.svg-5.png';
import SustainablePracticesIcon from '../images/Services/icon-circle-arrow.svg.png';
import UnboxingExperienceIcon from '../images/Services/icon-circle-arrow.svg-1.png';
import StorageTransportationIcon from '../images/Services/icon-circle-arrow.svg-2.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: BusinessSuccessIcon,
      title: "Brand Identity Design",
      description: "Craft a unique brand identity that resonates. We build cohesive systems – logo, typography, colors, imagery – for a consistent brand experience.",
    },
    {
      icon: CostReductionIcon,
      title: "Print & Publication Design",
      description: "Captivating print materials that leave a lasting impact. We craft brochures, magazines, and books that effectively communicate your brand's story.",
    },
    {
      icon: ProductProtectionIcon,
      title: "Web & Digital Design",
      description: "Essential digital presence. We create user-centric websites and apps that captivate and drive results. UI/UX focused for seamless experiences.",
    },
    {
      icon: SustainablePracticesIcon,
      title: "Packaging Design",
      description: "Packaging that sells. We design more than containers – we tell your brand story. Functional, sustainable, and cost-effective solutions that elevate your product.",
    },
    {
      icon: UnboxingExperienceIcon,
      title: "Amazon Image Design",
      description: "Boost Amazon sales with compelling product images. Professional photography, editing, and infographics optimized for Amazon.",
    },
    {
      icon: StorageTransportationIcon,
      title: "Brand Collateral Design",
      description: "Consistent branding across all touchpoints. We create impactful brand collateral – presentations, social media, business cards – that leave a lasting impression.",
    },
  ];

  return (
    <section className="features-section py-5">
      <div className="container text-center">
      <h4 className="text-grey">The Custom Design and Packaging Experts</h4>
        <h2 className="mb-3">Design and Packaging Services We Offer</h2>
        <p className="mb-5">
          We have a whole range of design and packaging services that will help your business grow. 
          Create your brand <br/>identity and package it so well that it has an impact. 
          We provide creative solutions that can help you<br/> boost your brand and accomplish results that can be delivered.
        </p>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="feature-card p-3">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="feature-icon mb-3"
                />
                <h5 className="feature-title mb-2">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
