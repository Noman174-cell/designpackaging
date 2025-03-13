import React from 'react';
import '../Banner Sec.css'; // Ensure to import the CSS file

const BannerSection = ({ bgImg, heading, description, textColor = 'black', showPackagingButton = true }) => {

    return (
        <section className="how-it-works" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container">
                <section className="banner-section row align-items-center">
                    {/* Left side content */}
                    <div className="col-lg-6 banner-content text-white">
                        <h1 style={{ color: textColor }}>{heading}</h1>

                        <p style={{ color: textColor }}>{description}</p>
                        <button data-bs-toggle="modal" data-bs-target="#popupForm" className="banner-button">Request a Quote</button>
                        
                        {/* Conditionally render the "Choose Packaging style" button */}
                        {showPackagingButton && (
                            <button data-bs-toggle="modal" data-bs-target="#popupForm" className="banner-button-v2">Choose Packaging style</button>
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default BannerSection;
