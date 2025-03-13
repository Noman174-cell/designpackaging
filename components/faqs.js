import React, { useState } from 'react';
import "../faq.css";  // Make sure to include your custom CSS for styling

const FAQSection = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container faqs">
            <header>
                <h2>Frequently Asked Questions</h2>
            </header>
            <div className="row mt-4">
                <div className="col-12">
                    {faqData.map((faq, index) => (
                        <div
                            className={`faq ${openIndex === index ? 'open' : ''}`}
                            key={index}
                        >
                            <div className="faq-question" onClick={() => handleToggle(index)}>
                                {faq.question}
                            </div>
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
