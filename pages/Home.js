import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BannerSec from '../components/BannerSection';
import LogoSection from '../components/logos';
import ServicesSlider from '../components/Serviceslider';
import ProductPackagingSec from '../components/ProductPackagingSec';
import bannerimg from "../images/Home/bg1232.png";
import Footer from '../components/Footer';
import ShopPackagingSec from '../components/ShopPackagingSec';
import DoubleImage from '../components/DoubleImage';
import PakFactoryDifference from '../components/PakFactoryDifference';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/faqs';
import QualityPackaging from '../components/QualityPackaging';
import { Helmet } from 'react-helmet';
import PackagingSuccess from '../components/PackagingSuccess';
import packagingImage1 from '../images/icon-save-cost.svg fill.png'; 
import packagingImage2 from '../images/icon-reliability.svg.png'; 
import packagingImage3 from '../images/icon-sustainable.svg.png'; 
import packagingImage4 from '../images/icon-reliability.svg.png'; 
import UniqueSection from '../components/unique';
import TestimonialsSection from '../components/TestimonialsSec';
import FooterTopSec from '../components/FooterTop';

import PopupForm1 from '../components/PopupForm';



const Home = () => {


    // ******************************** Start FAQ Section ******************************
    const faqData = [
        {
            question: "What do packaging design services entail?",
            answer: "Packaging design services refer to the development of beautiful and useful containers that protect products, communicate brand identity, attract consumers, and provide necessary information about the product. Art and science around how the packaging can be made to effectively serve those purposes."
        },
        {
            question: "What is the role of a packaging designer?",
            answer: "That is the responsibility of a packaging designer. It involves the entire course of design research on the product and the target audience to initial concepts, structural designs, graphics, prototypes, and production input."
        },
        {
            question: "How much does a packaging designer charge?",
            answer: "The packaging design service ranges from one designer to another, depending on the project, the experience of the designer, the time of the project, and the location of the designer. The prices could range from hundreds to thousands of dollars."
        },
        {
            question: "How can I get a packaging designer?",
            answer: "There are several ways to connect with a qualified packaging designer, including using online venues such as Behance and Dribble, going through a design agency, a referral from your network, or connecting with designers from local design schools."
        },
        {
            question: "How long does it take to complete a packaging design?",
            answer: "The timeline for a packaging design project will vary greatly depending on its complexity. Such a project could take a few weeks to complete, while a more sophisticated one could take many months or even longer."
        }
    ];

    
    const items = [
        { 
            icon: packagingImage1, 
            title: 'Save Cost & Time', 
            description: 'Innovative designs and benefits of production coupled with optimized packaging materials create overall minimum costs and faster time to market.' 
        },
        { 
            icon: packagingImage2, 
            title: 'More Reliability', 
            description: 'Professional package design keeps your products safe throughout shipping and handling, reducing damages and returns.' 
        },
        { 
            icon: packagingImage3, 
            title: 'More Brand Impact', 
            description: 'Innovative designs and attractive packaging become identifiable features on the shelf for your products, raising brand awareness, and increasing customers\' perception of value.' 
        },
        { 
            icon: packagingImage4, 
            title: 'Become Sustainable', 
            description: 'Eco-friendly materials and reduced waste are values that consumers appreciate and improve your brand image while helping create a better future.' 
        },
    ];
    


    // ******************************** End FAQ Section ******************************

    return (
        <>
            <Helmet>
                <title>Affordable Design and Packaging Service | Design Packaging</title>
                <meta name="description" content="Design Packaging offers premier design and packaging solutions. Unlimited concepts and revisions. 17 years of experience. 100% satisfaction guaranteed." />
                <link rel="canonical" href="https://dsgnpackaging.com" />
            </Helmet>

            <HeaderSection />
            <BannerSec
                bgImg={bannerimg}
                heading={(<>Premier Design And<br />Packaging Solutions</>)}
                description="Make your brand stand out with visually stunning design 
                and packaging service. Create enduring box experiences that strengthen 
                your brand."
                textColor='white'
            />
            <LogoSection />
            <ServicesSlider />
            <ProductPackagingSec />
            <ShopPackagingSec />
            <DoubleImage />
            <PakFactoryDifference />
            <ServicesSection />
            <PackagingSuccess items={items} />
            <QualityPackaging />
            <UniqueSection/>
            <TestimonialsSection/>
            <FAQSection faqData={faqData} />
            <FooterTopSec />
            <Footer />

            <PopupForm1/>







        </>
    );
};

export default Home;
