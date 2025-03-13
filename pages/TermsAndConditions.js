import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import TermsAndConditionsSec from '../components/TermsAndConditions';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/Contact Us/contact.png';




const Home = () => {




    // ******************************** End FAQ Section ******************************

    return (
        <>
            <Helmet>
                <title>Privacy Policy - Design Packaging</title>
                <meta name="description" content="We have terms and conditions for all clients. Enjoy a low initiation fee on projects with a full refund policy. Please review our terms and conditions." />
                <link rel="canonical" href="https://dsgnpackaging.com/privacy-policy" />
            </Helmet>
            <HeaderSection />
            <div>
                <BreadcrumbSection
                    heading="Design Packaging - Terms And Conditions"
                    // description="Top-rated mobile app development company.Let's create a mobile app <br/>that your clients will enjoy and will move your business forward."
                    buttonText="Get Started"
                    backgroundImage={aboutusbc}
                />
            </div>
            <TermsAndConditionsSec />
            <Footer />

        </>
    );
};

export default Home;
