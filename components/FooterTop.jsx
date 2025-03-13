import { Link } from 'react-router-dom';
import '../footer.scss'




const Footer = () => {
    return (
        <>
            <section className="pre-footer-section my-4 my-md-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="ff-inter fw-semibold">Start your packaging journey with Design Packaging</h2>

                        <p className="ff-arial mt-3">Get in touch with our product specialist now</p>

                        <button data-bs-toggle="modal" data-bs-target="#popupForm" className="unique-section-button">Get Started</button>
                    </div>
                </div>
            </section>
          
        </>
    );
};

export default Footer;
