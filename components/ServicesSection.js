import React, { useState } from "react";
import "../ServicesSection.css";  // Make sure to include your custom CSS for styling
import Brand from '../images/Brand Identity Design.png';
import Digital from '../images/Digital Design Services.png';
import Character from '../images/Illustration & Character Design.png';
import Packaging from '../images/Packaging Design & Development.png';
import Experience from '../images/user-experience.png';
import responsive from '../images/responsive-design.png';
import Driven from '../images/Data-Driven Design.png';
import Accessibility from '../images/Accessibility.png';
import Strategic from '../images/Strategic Packaging.png';
import Sustainable from '../images/Sustainable Packaging.png';
import Consistency from '../images/Brand Consistency.png';
import Appeal from '../images/Shelf Appeal.png';
import storytelling from '../images/storytelling.png';
import Memorable from '../images/Unique and Memorable Styles.png';
import Adaptability from '../images/Versatility and Adaptability.png';
import Concept from '../images/Concept Development.png';





const App = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Brand Identity Design" },
    { id: "tab2", label: "Digital Design Services" },
    { id: "tab3", label: "Packaging Design & Development" },
    { id: "tab4", label: "Illustration & Character Design" },
   
  ];

  const content = {
    tab1: [
      { 
        title: "Comprehensive Brand Strategy", 
        icon: Brand, 
        description: "Develop a unique brand story, mission, vision, and values that resonate with your target audience."
      },
      { 
        title: "Visual Identity Guidelines", 
        icon: Digital, 
        description: "Create a consistent brand look and feel across all platforms, including logo design, color palettes, typography, and imagery."
      },
      { 
        title: "Brand Application", 
        icon: Packaging,
        description: "Guide the implementation of your brand identity across various touchpoints such as websites, social media, marketing materials, and merchandise."
      },
      { 
        title: "Brand Evolution", 
        icon: Character, 
        description: "Continuously monitor and adapt your brand identity to stay relevant and competitive in the ever-changing market."
       
      },
    ],
    tab2: [
      { 
        title: "User-Centered Design", 
        icon: Experience, 
        description: "Focus on creating intuitive and engaging user experiences for websites, mobile apps, and other digital platforms."
      },
      { 
        title: "Responsive Design", 
        icon: responsive, 
        description: "Ensure seamless functionality and visual appeal across all devices, from desktops to smartphones and tablets."
      },
      { 
        title: "Data-Driven Design", 
        icon: Driven, 
        description: "Utilize data and analytics to understand user behavior and make informed design decisions that drive conversions and engagement."
      },
      { 
        title: "Accessibility", 
        icon: Accessibility, 
        description: "Design inclusive digital experiences that are accessible to users with disabilities, adhering to accessibility standards and guidelines."
      },
    ],
    tab3: [
      { 
        title: "Strategic Packaging", 
        icon: Strategic, 
        description: "Design packaging that effectively communicates brand values, product information, and target audience appeal."
      },
      { 
        title: "Sustainable Packaging", 
        icon: Sustainable, 
        description: "Explore eco-friendly materials and packaging solutions to minimize environmental impact."
      },
      { 
        title: "Brand Consistency", 
        icon: Consistency, 
        description: "Ensure packaging design aligns seamlessly with the overall brand identity and visual language."
      },
      { 
        title: "Shelf Appeal", 
        icon: Appeal, 
        description: "Create visually striking packaging that stands out on store shelves and attracts consumer attention."
      },
    ],
    tab4: [
      { 
        title: "Storytelling through Visuals", 
        icon: storytelling, 
        description: "Create compelling illustrations and characters that effectively communicate narratives, emotions, and brand messages."
      },
      { 
        title: "Unique and Memorable Styles", 
        icon: Memorable, 
        description: "Develop distinctive illustration and character styles that reflect the brand's personality and resonate with the target audience."
      },
      { 
        title: "Versatility and Adaptability", 
        icon: Adaptability, 
        description: "Create illustrations and characters that can be used across various platforms and applications, from marketing materials to digital products."
      },
      { 
        title: "Concept Development", 
        icon: Concept, 
        description: "Collaborate with clients to develop original and creative concepts for illustrations and characters that bring their ideas to life."
      },
    ],
  
  
  };

  return (
    <div className="services-section">
      <div className="container">
        <h2>Design and Packaging Service Company</h2>
        <p>
          As a leading Design and Packaging Service Company, we offer a comprehensive range of<br/>
          services to help businesses elevate their brands and optimize their products.
        </p>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {content[activeTab].map((item, index) => (
            <div key={index} className="service-box">
              <div className="icon">
                <img src={item.icon} alt={item.title} />  {/* Displaying the custom icon */}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p> {/* Displaying the description */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
