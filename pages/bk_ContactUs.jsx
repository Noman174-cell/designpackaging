import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/faqs';

import '../contactUs.scss'
import cxCompanyIcons from '../images/Contact Us/customer-company-icons.png'
import consultationImg from '../images/Contact Us/consultation-support.png'
import factoryImg from '../images/Contact Us/pakfactory-business.png'
import { Link } from 'react-router-dom';



const ContactUs = () => {

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

    return (
        <div className="contact-us-page">
            <Header />

            <section className="hero-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-4">
                                <div className="d-flex gap-2 align-items-center">
                                    <div>
                                        <img src={cxCompanyIcons} alt="Customer company icons" />
                                    </div>
                                    <div>
                                        <p className='m-0 ff-arial'>Join 3,000+ brands and experience the</p>
                                        <p className='m-0 green-font text-decoration-underline ff-arial'>DesignPackaging difference</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className="green-font ff-inter">Your Packaging Success Starts with Design Packaging</h1>

                            <p className="ff-arial">At Design Packaging, we strive to provide superior services and solutions that surpass your expectations. Let us find the ideal packaging solution for your project. <a href='#' className="green-font text-decoration-underline">Got a Question?</a></p>

                            <FAQSection faqData={faqData} />
                        </div>

                        <div className="col-md-6">
                            <div className="right-column">
                                <h5 className="ff-inter fw-semibold">REQUEST A QUOTE</h5>
                                <p className="ff-arial">Complete our quote request form or email us at <a href="mailto:quote@designpackaging.com" className="green-font">quote@designpackaging.com</a> receive a customized quote from our product specialists.</p>

                                <div className="row align-items-center g-0">
                                    <div className="col">
                                        <hr />
                                    </div>
                                    <div className="col-auto">
                                        <span className="green-font mx-4 ff-arial">CONTACT INFO</span>
                                    </div>
                                    <div className="col">
                                        <hr />
                                    </div>
                                </div>

                                <form method="post" className='mt-4'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="first_name" className="form-label">First Name <span className="text-danger">*</span></label>
                                                <input type="text" name="first_name" id="first_name" className="form-control rounded-0 focus-ring focus-ring-success" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="last_name" className="form-label">Last Name <span className="text-danger">*</span></label>
                                                <input type="text" name="last_name" id="last_name" className="form-control rounded-0 focus-ring focus-ring-success" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input type="email" name="email" id="email" className="form-control rounded-0 focus-ring focus-ring-success" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                                                <input type="tel" name="phone" id="phone" className="form-control rounded-0 focus-ring focus-ring-success" required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="company" className="form-label">Company name</label>
                                                <input type="text" name="company" id="company" className="form-control rounded-0 focus-ring focus-ring-success" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row align-items-center g-0">
                                        <div className="col">
                                            <hr />
                                        </div>
                                        <div className="col-auto">
                                            <span className="green-font mx-4 ff-arial">PROJECT INFO</span>
                                        </div>
                                        <div className="col">
                                            <hr />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="product" className="form-label">Product <span className="text-danger">*</span></label>
                                                <select name="product" id="product" className="form-control rounded-0 focus-ring focus-ring-success">
                                                    <option value="">Select a product</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="quantity" className="form-label">Quantity <span className="text-danger">*</span></label>
                                                <input type="number" name="quantity" id="quantity" className="form-control rounded-0 focus-ring focus-ring-success" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="time_frame" className="form-label">Time Frame <span className="text-danger">*</span></label>
                                                <select name="time_frame" id="time_frame" className="form-control rounded-0 focus-ring focus-ring-success">
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="comments" className="form-label">Please describe your project. <span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" className="form-control rounded-0 focus-ring focus-ring-success" rows="4" placeholder='Please provide details on the box are looking for, the dimensions, and whether you want printing inside, outside, or both. Additionally, feel free to share  or specific requirements that will help us better understand your project.'></textarea>
                                            </div>
                                        </div>

                                        <div className="text-center mt-3">
                                            <p className="ff-arial">By submitting this form you agree to our <Link className='text-decoration-none green-font'>Terms of Service</Link> and <Link className='text-decoration-none green-font'>Privacy Policy</Link>.</p>

                                            <button type="submit" className="btn custom-btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="live-support-section py-5">
                <div className="container">
                    <div className="row g-3 g-md-5">
                        <div className="col-md-6">
                            <img src={consultationImg} alt="Live support" />
                        </div>

                        <div className="col-md-6">
                            <div className="d-flex h-100 align-items-center">
                                <div>
                                    <h5 className="sub-heading">LIVE SUPPORT</h5>

                                    <h2 className="main-heading">Looking for instant support? Speak with our experts within a minute.</h2>

                                    <p className='ff-arial'>Get in contact with our packaging experts in a matter of minutes for direct support to your packaging needs.</p>

                                    <div className="row">
                                        <div className="col-6">
                                            <h6 className="ff-inter fw-semibold mb-4">Toll-free Call Center</h6>

                                            <div className="d-flex gap-3 align-items-center ff-arial font-87 mb-2">
                                                <div>
                                                    <i class="fa-solid fa-phone"></i>
                                                </div>
                                                <div>
                                                    1-888-622-2819
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3 align-items-center ff-arial font-87 mb-2">
                                                <div>
                                                    <i class="fa-regular fa-calendar"></i>
                                                </div>
                                                <div>
                                                    Monday - Friday
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3 align-items-center ff-arial font-87 mb-2">
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                </div>
                                                <div>
                                                    9:30 AM - 6:30 PM EST
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="ff-inter fw-semibold mb-4">Sales Inquiries</h6>

                                            <div className="d-flex gap-3 align-items-center ff-arial font-87">
                                                <div>
                                                    <i class="fa-regular fa-envelope"></i>
                                                </div>
                                                <div>
                                                    quote@designpackaging.com
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sales-office-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex h-100 align-items-center">
                                <div>
                                    <h3 className="ff-inter">Our sales office</h3>

                                    <p className="ff-arial">Our office is walk-in by appointment only. Please call us at <a href="tel:1-888-622-2819" className="green-font">1-888-622-2819</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={factoryImg} alt="Our sales office" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactUs;
{/* <i class="fa-solid fa-phone"></i> */ }
{/* <i class="fa-regular fa-calendar"></i> */ }
{/* <i class="fa-regular fa-clock"></i> */ }
{/* <i class="fa-regular fa-envelope"></i> */ }
