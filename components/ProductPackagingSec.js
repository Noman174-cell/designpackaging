import React from "react";
import "../ProductPackagingSec.css"; // Add CSS here
import Article1 from '../images/Home/folding-carton-boxes.webp.png';
import Article2 from '../images/Home/corrugated-boxes.webp.png';
import Article3 from '../images/Home/rigid-boxes.webp.png';
import Article4 from '../images/Home/box-packaging-inserts.webp.png';
import Article5 from '../images/Home/paper-shopping-bags.webp.png';
import Article6 from '../images/Home/reusable-bags.webp.png';
import Article7 from '../images/Home/mailer-bags.webp.png';
import Article8 from '../images/Home/flexible-pouches.webp.png';
import Article9 from '../images/Home/tin-containers.webp.png';
import Article10 from '../images/Home/pop-displays.webp.png';
import Article11 from '../images/Home/stickers-and-labels.webp.png';
import Article12 from '../images/Home/tissue-paper-and-liners.webp.png';
import Article13 from '../images/Home/packing-tape.webp.png';
import Article14 from '../images/Home/card-inserts.webp.png';



const ProductPackagingSec = () => {
  return (
    <div className="custom-product-packaging-wrapper">
      {/* First Container with Heading, Description, and Button */}
      <div className="custom-container my-5">
        <div className="row">
          {/* Left Column with Heading and Description */}
          <div className="col-8">
            <h2 className="custom-section-heading">
            Custom Design and <span className="green-h2"> Packaging Services</span>
            </h2>
           
            <p className="custom-section-description">
            One-stop shop for custom design and packaging, from concept to delivery.
            </p>
          </div>

          {/* Right Column with Button */}
          <div className="col-4 d-flex align-items-center justify-content-end">
          {/* <button class="custom-section-button" onclick="window.location.href='/services'">Browse full catalog</button> */}
          <a href="/services" class="custom-section-button">Browse full catalog</a>

          </div>
        </div>
      </div>

      {/* Second Container with Image Boxes */}
      <div className="custom-container">
        <div className="row">
          {/* First Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-4 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article1} className="custom-img-fluid" alt="Image 1" />
              <h4 className="custom-image-heading">Product Packaging</h4>
              <p className="custom-image-description">Complete design and development of product packaging tailored to specific product needs.</p>
            </div>
          </div>

          {/* Second Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article2} className="custom-img-fluid" alt="Image 2" />
              <h4 className="custom-image-heading">Corrugated Boxes</h4>
              <p className="custom-image-description">Durable and versatile boxes for shipping and storage, available in various sizes and styles. </p>
            </div>
          </div>

          {/* Third Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article3} className="custom-img-fluid" alt="Image 3" />
              <h4 className="custom-image-heading">Rigid Boxes</h4>
              <p className="custom-image-description">High-end luxury boxes made from sturdy materials like cardboard or chipboard are often used for premium products.</p>
            </div>
          </div>

          {/* Fourth Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article4} className="custom-img-fluid" alt="Image 4" />
              <h4 className="custom-image-heading">Box Inserts</h4>
              <p className="custom-image-description">Custom-made inserts protect and showcase products within boxes, such as foam, trays, and dividers.</p>
            </div>
          </div>
        </div>
      </div>



       {/* Second Container with Image Boxes */}
       <div className="custom-container ">
        <div className="row">
          {/* First Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article5} className="custom-img-fluid" alt="Image 1" />
              <h4 className="custom-image-heading">Paper Shopping Bags</h4>
              <p className="custom-image-description">Eco-friendly and stylish bags for retail and takeaway purposes, available in various sizes and colors.</p>
            </div>
          </div>

          {/* Second Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article6} className="custom-img-fluid" alt="Image 2" />
              <h4 className="custom-image-heading">Reusable Shopping Bags</h4>
              <p className="custom-image-description">Durable and stylish bags designed for multiple uses, promoting sustainability and brand awareness.</p>
            </div>
          </div>

          {/* Third Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article7} className="custom-img-fluid" alt="Image 3" />
              <h4 className="custom-image-heading">Mailer Shipping Bags</h4>
              <p className="custom-image-description">Lightweight and cost-effective bags for shipping smaller items, often used for e-commerce orders.</p>
            </div>
          </div>

          {/* Fourth Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article8} className="custom-img-fluid" alt="Image 4" />
              <h4 className="custom-image-heading">Flexible Pouches</h4>
              <p className="custom-image-description">Stand-up pouches, flat pouches, and other flexible packaging options for food, cosmetics, and other products.</p>
            </div>
          </div>
        </div>
      </div>



       {/* Second Container with Image Boxes */}
       <div className="custom-container">
        <div className="row">
          {/* First Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article9} className="custom-img-fluid" alt="Image 1" />
              <h4 className="custom-image-heading">Tin Containers</h4>
              <p className="custom-image-description">Durable and attractive metal containers for food, beverages, and other products offer excellent protection and shelf appeal.</p>
            </div>
          </div>

          {/* Second Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article10} className="custom-img-fluid" alt="Image 2" />
              <h4 className="custom-image-heading">POP Displays</h4>
              <p className="custom-image-description">Eye-catching point-of-sale displays to showcase products and attract customer attention.</p>
            </div>
          </div>

          {/* Third Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article11} className="custom-img-fluid" alt="Image 3" />
              <h4 className="custom-image-heading">Stickers & Labels</h4>
              <p className="custom-image-description">Customized stickers and labels for product branding, identification, and promotional purposes.</p>
            </div>
          </div>

          {/* Fourth Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article12} className="custom-img-fluid" alt="Image 4" />
              <h4 className="custom-image-heading">Tissue Paper & Liners</h4>
              <p className="custom-image-description">High-quality tissue paper and liners to enhance product presentation and protect delicate items.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container with Image Boxes */}
      <div className="custom-container">
        <div className="row">
          {/* First Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article13} className="custom-img-fluid" alt="Image 1" />
              <h4 className="custom-image-heading">Packing Tape</h4>
              <p className="custom-image-description">High-quality adhesive tape for secure and efficient packaging and shipping.</p>
            </div>
          </div>

          {/* Second Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article14} className="custom-img-fluid" alt="Image 2" />
              <h4 className="custom-image-heading">Card Inserts</h4>
              <p className="custom-image-description">Custom inserts crafted from cardstock are used for product details, marketing, or promotions.</p>
            </div>
          </div>

          {/* Third Column with Image Box */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box-vv text-center">
              {/* <img src={Article11} className="custom-img-fluid" alt="Image 3" /> */}
              <h4 className="custom-image-heading-vv">Looking for something else? We can help.</h4>
              <button data-bs-toggle="modal" data-bs-target="#popupForm" className="custom-section-button-vv">Request a custom quote</button>
            </div>
          </div>

          {/* Fourth Column with Image Box
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 custom-col-img">
            <div className="custom-image-box text-center">
              <img src={Article12} className="custom-img-fluid" alt="Image 4" />
              <h4 className="custom-image-heading">Heading 4</h4>
              <p className="custom-image-description">Standard cardstock boxes made from thin, flexible paperboard.</p>
            </div>
          </div> */}
        </div>
      </div>





    </div>
  );
};

export default ProductPackagingSec;
