import '../aboutUs.scss'

import bannerImg from '../images/About Us/banner.png'
import customPrintingImg from '../images/About Us/custom-printed-packaging-solution.png'
import desginedForBusinessesImg1 from '../images/About Us/icon-headphone.png'
import desginedForBusinessesImg2 from '../images/About Us/icon-loop.png'
import desginedForBusinessesImg3 from '../images/About Us/icon-earth.png'
import desginedForBusinessesImg4 from '../images/About Us/icon-tag.png'
import totalPackagingImg from '../images/About Us/360-solutions.png'
import endlessResultsPointsImg1 from '../images/About Us/packaging-consultation.png'
import endlessResultsPointsImg2 from '../images/About Us/save-costs.png'
import endlessResultsPointsImg3 from '../images/About Us/project-big-and-small.png'
import endlessResultsPointsImg4 from '../images/About Us/global-supply-chain.png'
import FooterTopSec from '../components/FooterTop';
import PopupForm1 from '../components/PopupForm';
import HeaderSection from '../components/Header';
import BannerSec from '../components/BannerSection';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet'
import LogoSection from '../components/logos';

const About = () => {

    const desginedForBusinessesPoints = [
        {
            img: desginedForBusinessesImg1,
            title: 'Free Consultation',
            description: 'Schedule a free consultation with our packaging experts to discuss your project goals, challenges, and budget.',
        },
        {
            img: desginedForBusinessesImg2,
            title: 'Expert Advice',
            description: 'Receive personalized recommendations and expert advice on the best packaging solutions for your specific product and industry.',
        },
        {
            img: desginedForBusinessesImg3,
            title: 'Customized Solutions',
            description: 'Our team will work closely with you to develop customized packaging solutions that perfectly align with your brand identity and marketing objectives.',
        },
        {
            img: desginedForBusinessesImg4,
            title: 'Industry Best Practices',
            description: 'Benefit from our in-depth knowledge of packaging industry best practices, materials, and regulations.',
        },
    ]

    const totalPackagingPoints = [
        {
            number: '01',
            title: 'CONSULTATION',
            description: "Begin with a thorough consultation to understand your specific needs, goals, and brand identity.",
        },
        {
            number: '02',
            title: 'DESIGN',
            description: "Based on the consultation, our design team will create initial concepts and explore various design directions.",
        },
        {
            number: '03',
            title: 'PROTOTYPING',
            description: "Create physical prototypes of the packaging to test its functionality, durability, and overall effectiveness.",
        },
        {
            number: '04',
            title: 'PRODUCTION',
            description: "Once the design is finalized and prototypes are approved, we move into the production phase.",
        },
        {
            number: '05',
            title: 'LOGISTICS',
            description: "Coordinate with transportation and warehousing partners to ensure smooth and secure delivery.",
        },
        {
            number: '06',
            title: 'OPTIMIZE',
            description: "Continuously evaluate and optimize the packaging design based on market feedback and performance data.",
        },
    ]

    const resultsPoints = [
        {
            percent: '40%',
            title: 'Cost & time saved',
            description: 'Streamlining processes and automation reduce costs and free up valuable employee time.',
        },
        {
            percent: '50%',
            title: 'More sustainable packaging',
            description: 'Eco-friendly packaging minimizes environmental impact and enhances brand image.',
        },
        {
            percent: '25%',
            title: 'Increase in sales',
            description: 'Improved customer experience and effective marketing drive sales growth.',
        },
        {
            percent: '100%',
            title: 'More reliable service',
            description: 'Consistent and reliable service builds trust and customer loyalty.',
        },
    ]

    const endlessResultsPoints = [
        {
            img: endlessResultsPointsImg1,
            title: 'Packaging Consultations',
            description: "At Design Packaging, successful packaging begins with a thorough understanding of your unique needs and goals. Our expert consultants will work closely with you to analyze your product, target audience, and market trends. We'll delve into your brand identity, marketing objectives, and budget constraints to develop a customized packaging strategy that aligns perfectly with your business vision.",
        },
        {
            img: endlessResultsPointsImg2,
            title: 'Lower Costs, Greater Impact',
            description: 'We are committed to helping you achieve the most cost-effective packaging solutions without compromising on quality or impact. Our expertise allows us to identify opportunities for cost savings through material optimization, efficient production processes, and leveraging our vast global network of packaging suppliers. By streamlining your packaging process and minimizing waste, we help you maximize your return on investment while delivering exceptional results.',
        },
        {
            img: endlessResultsPointsImg3,
            title: 'No Project Too Big or Too Small',
            description: "Whether you're a small startup launching your first product or a large corporation seeking to revitalize your packaging line, we have the expertise and resources to meet your unique needs. Our team is adept at handling projects of all sizes and complexities, providing tailored solutions that address your specific challenges and objectives. We believe in building long-term partnerships with our clients, providing ongoing support and guidance throughout your packaging journey.",
        },
        {
            img: endlessResultsPointsImg4,
            title: 'A Vast Network of Packaging Expertise',
            description: 'Leveraging our extensive global network of packaging suppliers and manufacturers allows us to access various materials, technologies, and production capabilities. This global reach allows us to source the most suitable and cost-effective solutions for your specific packaging requirements, regardless of your location or target market. We can connect you with the best-in-class suppliers worldwide, ensuring that your packaging is produced efficiently and to the highest quality standards.',
        },
    ]


    return (
        <div className="about-us-page">
            <Helmet>
                <title>About Design Packaging</title>
                <meta name="description" content="At Design Packaging, we offer a smooth and attentive design and packaging process at an affordable price. Read more about us and contact us today!" />
                <link rel="canonical" href="https://dsgnpackaging.com/about-us" />
            </Helmet>


            <HeaderSection />

            <BannerSec
                bgImg={bannerImg}
                heading="Design Packaging Solutions"
                description="One place to go for personalized packaging and design services that boost your brand identity and captivate your customers."
                showPackagingButton={false} 

            />
                        <LogoSection />


            {/* Designed for businesses section */}
            <section className="designed-for-businesses-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="order-2 order-lg-1 col-lg-6">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <div>
                                    <img src={customPrintingImg} alt="Not sure what you want? Our experts can help." className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 order-lg-2 col-lg-6">
                            <div className="d-flex h-100 align-items-center">
                                <div>
                                    <h5 className="sub-heading text-uppercase">Packaging Solutions for Every Business</h5>

                                    <h2 className="main-heading">Need guidance? Our experts are here to assist.</h2>

                                    <div className="mt-4">
                                        <div className="row g-3 g-xl-5">
                                            {desginedForBusinessesPoints.map((point, index) => (
                                                <div className="col-sm-6" key={index}>
                                                    <img src={point.img} alt={point.title} />

                                                    <p className="fw-bold mt-4">{point.title}</p>
                                                    <p className="ff-arial">{point.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Generate real results section */}
            <section className="generate-results-section py-5">
                <div className="container">
                    {/* <h5 className="sub-heading">GENERATE REAL RESULTS</h5> */}
                    <h2 className="main-heading">Your Packaging Success: A Step-by-Step Approach</h2>

                    <p className='ff-arial'>Our approach encompasses a series of key steps, from in-depth consultation to understanding your unique needs to rigorous quality control throughout production. We guide you through each stage, ensuring seamless collaboration and delivering exceptional results that exceed your expectations. These steps are outlined below, providing a clear roadmap to your packaging success.</p>

                    <img src={totalPackagingImg} alt="Total Packaging Success Images" className="img-fluid" />

                    <div className="mt-5">
                        <div className="row justify-content-center">
                            {totalPackagingPoints.map((point, index) => (
                                <div className="col-sm-6 col-md-4 col-lg-2" key={index}>
                                    <h3 className="green-font ff-inter">{point.number}</h3>
                                    <h6 className="green-font ff-inter fw-bold">{point.title}</h6>

                                    <div className="mt-4">
                                        <p className="ff-arial">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-center ff-inter fw-bold my-5">See results up to...</h2>

                    <div className="row">
                        {resultsPoints.map((point, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="text-center">
                                    <h3 className="green-font ff-inter display-2 fw-semibold">{point.percent}</h3>
                                    <h5 className="green-font ff-inter fw-semibold">{point.title}</h5>
                                    <p className="ff-arial">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Endless results section */}
            <div className="endless-results-section pt-5">
                <div className="container">
                    <div className="text-center">
                        {/* <h5 className="sub-heading">GENERATE REAL RESULTS</h5> */}

                        <h2 className="main-heading">Expert Guidance, Cost Optimization, and Global Reach</h2>

                        <p className='ff-arial'>Our packaging solutions are supported by expert guidance, a commitment to cost optimization, and a vast global network of suppliers to deliver exceptional results for your business.</p>
                    </div>

                    {endlessResultsPoints.map((point, index) => (
                        <div className="mt-5" key={index}>
                            <div className="row">
                                <div className={`order-2 order-md-${index % 2 === 0 ? 1 : 2} col-md-6`}>
                                    <div className="d-flex h-100 align-items-center">
                                        <div>
                                            <img src={point.img} alt={point.title} className='img-fluid' />
                                        </div>
                                    </div>
                                </div>

                                <div className={`order-1 order-md-${index % 2 === 0 ? 2 : 1} col-md-6`}>
                                    <div className="d-flex h-100 align-items-center">
                                        <div>
                                            <h2 className="ff-inter fw-bold">{point.title}</h2>

                                            <p className="ff-arial">{point.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <FooterTopSec />
            <Footer />
            <PopupForm1/>

        </div>
    );
};

export default About;
