import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import Privacypolicy from '../components/PrivacyPolicy';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import aboutusbc from '../images/Contact Us/contact.png';
import BreadcrumbSection from '../components/BreadCrumb';


const About = () => {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy - Design Packaging</title>
                <meta name="description" content="We prioritize your online privacy while delivering a valuable and enjoyable design and packaging experience." />
                <link rel="canonical" href="https://dsgnpackaging.com/privacy-policy" />
            </Helmet>

            <HeaderSection />
            <div>
                <BreadcrumbSection
                    heading="Design Packaging - Privacy Policy"
                    // description="Top-rated mobile app development company.Let's create a mobile app <br/>that your clients will enjoy and will move your business forward."
                    buttonText="Get Started"
                    backgroundImage={aboutusbc}
                />
            </div>
            <Privacypolicy />
            <Footer />

        </div>
    );
};

export default About;
