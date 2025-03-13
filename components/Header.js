import React, { useState, useEffect } from "react";
import logoimage from "../images/Layer_1.png";
import "../Header.css"; // Include your custom CSS
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation()

    const [color, setColor] = useState(location.pathname === '/' ? 'white' : 'black');

    useEffect(() => {
        setColor(location.pathname === '/' ? 'white' : 'black');
    }, [location]);

    // Detect scroll for sticky header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 35) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid px-4">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logoimage}
                            alt="DSGN Packaging Logo"
                            style={{ height: "50px" }}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    style={{ color, fontWeight: 500 }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/about-us"
                                    style={{ color, fontWeight: 500 }}
                                >
                                    About Us
                                </Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/services"
                                    style={{ color, fontWeight: 500 }}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/contact-us"
                                    style={{ color, fontWeight: 500 }}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="contact-info">
                            <p className="m-0">Call us toll free:</p>
                            <p className="phone-number" style={{ fontSize: "24px", fontWeight: "bold" }}>
                                <a href="tel:+15515543283" style={{ textDecoration: "none", color: "inherit" }}>
                                    +1 (551) 554-3283
                                </a>
                            </p>
                            <p className="m-0">
                                Speak to our experts in 1 min
                                <br />
                                9:30am - 6:30pm EST
                            </p>
                        </div>


                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
