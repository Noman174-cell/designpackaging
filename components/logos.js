import React, { useEffect } from 'react'; // Import useEffect
import '../logos.css'; // Ensure the path is correct
import logo1 from '../images/Frame 8.png';
import logo2 from '../images/Frame 9.png';
import logo3 from '../images/Frame 10.png';
import logo4 from '../images/Frame 11.png';
import logo5 from '../images/Frame 12.png';
import logo6 from '../images/Frame 13.png';


const LogoSection = () => {
  useEffect(() => {
    const logosSlide = document.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={logo1} alt="React Logo" />
        <img src={logo2} alt="NOP Logo" />
        <img src={logo3} alt="Woo Logo" />
        <img src={logo4} alt="WordPress Logo" />
        <img src={logo5} alt="Shopify Logo" />
        <img src={logo6} alt="Vue Logo" />
      </div>
    </div>
  );
};

export default LogoSection;
