import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/faqs';

import '../contactUs.scss'
import cxCompanyIcons from '../images/Contact Us/customer-company-icons.png'
import consultationImg from '../images/Contact Us/consultation-support.png'
import factoryImg from '../images/Contact Us/pakfactory-business.png'
import backgroundImage from '../images/Contact Us/contact.png'
import contactusbg from '../images/Contact Us/Contactform.png'


import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import PopupForm1 from '../components/PopupForm';



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

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmailAndPhone = () => {
        console.log(document.querySelector('.contactuspg-form input[name=email]'));
        console.log(document.querySelector('.contactuspg-form input[name=phone]'));
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+1\d{10}$/
        if (!emailRegex.test(formData.email))
            document.querySelector('.contactuspg-form input[name=email]').classList.add('is-invalid')
        else
            document.querySelector('.contactuspg-form input[name=email]').classList.remove('is-invalid')
        if (!phoneRegex.test(formData.phone))
            document.querySelector('.contactuspg-form input[name=phone]').classList.add('is-invalid');
        else
            document.querySelector('.contactuspg-form input[name=phone]').classList.remove('is-invalid');
        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        // Email & phone validation
        if (!validateEmailAndPhone())
            return
        setLoading(true)
        await fetch("https://dsgnpackaging.com/php_mailer/contact.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false)
                if (success)
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
    }

    return (
        <div className="contact-us-page">
            <Helmet>
                <title>Contact Us | Design Packaging</title>
                <meta name="description" content="Contact Design Packaging today for your design and packaging needs made easy! We guarantee a response from our expert team within 24 hours!" />
                <link rel="canonical" href="https://dsgnpackaging.com/contact-us" />
            </Helmet>

            <Header />

            <div className="breadcrumb-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className="breadcrumb-heading" >Get in touch and let us <br />know how we can help.</h1>
            </div>

            <section className="contactuspg-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div className="contactuspg-bg py-5">
                        <div className="row">
                            <div className="col-lg-5 contactuspg-info mb-4">
                                <div
                                    className="contactuspg-info-box p-4"
                                    style={{
                                        backgroundImage: `url(${contactusbg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '10px',
                                        color: '#fff',
                                    }}
                                >
                                    <h3>Contact Information</h3>
                                        <p>Say something to start a live chat</p>
                                        <address>
                                            <FaMapMarkerAlt /> 43 3rd Ave, 2nd Floor, Edison, NJ 08837<br />
                                        </address>
                                        <a href="tel:+15515543283" className="contactuspg-link">
                                            <FaPhoneAlt /> +1-551-554-3283
                                        </a><br />
                                        <a href="mailto:info@dsgnpackaging.com" className="contactuspg-link">
                                            <FaEnvelope /> info@dsgnpackaging.com
                                        </a>

                                    {/* Social Icons */}
                                    <div className="contactuspg-social-icons d-flex">
                                        <a href="https://www.facebook.com/dsgnpackaging/" className="contactuspg-icon"><FaFacebookF /></a>
                                        <a href="https://www.instagram.com/dsgnpackaging/" className="contactuspg-icon"><FaInstagram /></a>
                                        <a href="https://www.linkedin.com/company/dsgn-packaging/" className="contactuspg-icon"><FaLinkedin /></a>

                                    </div>
                                </div>
                            </div>
                            {/* Second Column - Form */}
                            <div className="col-lg-7 contactuspg-form  p-4">
                                <form method='POST' onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.firstName} name='firstName' placeholder="First Name" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.lastName} name='lastName' placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input type="email" className="form-control contactuspg-input" onChange={handleChange} value={formData.email} name='email' placeholder="Email" required />
                                            <div className="invalid-feedback">
                                                Invalid Email address
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="tel" className="form-control contactuspg-input" onChange={handleChange} value={formData.phone} name='phone' placeholder="Phone Number" required />
                                            <div className="invalid-feedback">
                                                Invalid Phone number. Example: +19876543210
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.subject} name='subject' placeholder="Subject" required />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control contactuspg-input" rows="5" onChange={handleChange} value={formData.message} name='message' placeholder="Message" required></textarea>
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-submit" disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                                    <span role="status">Submitting...</span>
                                                </>
                                            ) : 'Submit Now'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqData={faqData} />

            <Footer />
            <PopupForm1/>

        </div>
    )
}

export default ContactUs;
