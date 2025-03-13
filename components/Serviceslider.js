import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ServicesSlider.css"; // Custom styles
import customserviceimage1 from '../images/icon-CustomSize.svg fill.png';
import customserviceimage2 from '../images/icon-End-to-end-solution.svg.png';
import customserviceimage3 from '../images/icon-Expert-Support.svg.png';
import customserviceimage4 from '../images/icon-The-PakFactory-promise.svg fill.png';
import customserviceimage5 from '../images/icon-CustomSize.svg fill.png';
import customserviceimage6 from '../images/icon-End-to-end-solution.svg.png';
import customserviceimage7 from '../images/icon-Expert-Support.svg.png';
import customserviceimage8 from '../images/icon-The-PakFactory-promise.svg fill.png';

const ServicesSlider = () => {
    const services = [
        {
          image: customserviceimage1,
          title: "Dedicated Support",
          description:
            "Enjoy dedicated expert support throughout your entire packaging journey.",
        },
        {
          image: customserviceimage2,
          title: "End-to-end Solution",
          description:
            "Experience a seamless end-to-end solution, from concept to delivery.",
        },
        {
          image: customserviceimage3,
          title: "Custom Sizing",
          description:
            "Benefit from custom sizing options tailored to your unique product needs.",
        },
        {
          image: customserviceimage4,
          title: "The Design Packaging Promise",
          description:
            "Design Packaging promises exceptional quality, on-time delivery, and guaranteed customer satisfaction.",
        },
        // {
        //   image: customserviceimage5,
        //   title: "Motion Graphics",
        //   description:
        //     "Add some dramatic effects to your videos with motion graphics services. Ranging from simple transitions to complex animations, our creative capacity knows no bounds.",
        // },
        // {
        //   image: customserviceimage6,
        //   title: "Whiteboard Animation",
        //   description:
        //     "Your message will be unforgettable with our whiteboard animations. We use illustrations drawn by hand and voiceovers to explain complex material in a simple, engaging manner.",
        // },
        // {
        //   image: customserviceimage7,
        //   title: "3D Architecture Animation",
        //   description:
        //     "You can now have your great design come alive through our architectural animations. We can visualize practically anything from buildings to interiors and landscapes.",
        // },
        // {
        //   image: customserviceimage8,
        //   title: "Cartoon Animation",
        //   description:
        //     "Enjoy and enlighten your audiences with our cartoon animations. Our team will create animated cartoons that entertain, soothe the heart, and educate.",
        // }
    ];

    const settings = {
      dots: false,  // Set this to false to remove the dots
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },



      ],
  };

    return (
      <section id="servicesslider" className="servicesslider">
        <div className="container">
          <h2 className="choose-service-heading font-weight-bold">
          Packaging that<span className="lightblue-h2"> Makes an Impact</span>
          </h2>
          <p className="choose-service-description">
          Experience the power of impactful packaging that promotes your brand identity, drives sales, and leaves a lasting impression.
          </p>
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-card">
                  <img src={service.image} alt={service.title} className="service-icon" />
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
};

export default ServicesSlider;
