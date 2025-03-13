import React, { Profiler } from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BannerSec from '../components/BannerSection';
import LogoSection from '../components/logos';
import bannerimg1 from "../images/Services/BGSER.png";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import UniqueSection from '../components/unique';
import FooterTopSec from '../components/FooterTop';
import FeaturesSec from '../components/FeaturesSection';

import PopupForm1 from '../components/PopupForm';
import ArtworkDesign from '../components/ArtworkDesign';
import ShowcaseSection from './ShowcaseSection';
import ProcessSection from '../components/ProcessSection';
import PackagingSection from '../components/PackagingSection';



const Home = () => {



    return (
        <>
            <Helmet>
                <title>Design Services at Design Packaging</title>
                <meta name="description" content="Our print-on-demand design services include logo, packaging design, web, character & mascot, illustration design, etc. We also provide print design solutions." />
                <link rel="canonical" href="https://dsgnpackaging.com" />
            </Helmet>

            <HeaderSection />
            <BannerSec
                bgImg={bannerimg1}
                heading={(<>All Design and Packaging<br />Services Under One Roof</>)}
                description="Leave the design and Packaging work to us and focus on growing your business. 
                Support your team with our broad range of customized design and packaging services."
                textColor='white'
                showPackagingButton={false} 

            />
            <LogoSection />
            <FeaturesSec/>
            <UniqueSection/>
            <ProcessSection/>
            <PackagingSection/>
            <ShowcaseSection/>
            <ArtworkDesign/>
            <FooterTopSec />
            <Footer />
            <PopupForm1/>







        </>
    );
};

export default Home;
