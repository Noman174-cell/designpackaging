import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import '../ShopPackagingSec.css';

// Import images
import TinContainers from '../images/Home/apparel-packaging-solution.webp.png';
import PopDisplays from '../images/Home/candle-packaging-solution.webp.png';
import StickersAndLabels from '../images/Home/bakery-and-cake-packaging-solution.webp.png';
import TissuePaperAndLiners from '../images/Home/apparel-packaging-solution.webp.png';
import PackingTape from '../images/Home/apparel-packaging-solution.webp.png';
import CardInserts from '../images/Home/apparel-packaging-solution.webp.png';

// Features data
const features = [
  {
    title: 'Apparel & Fashion',
    image: TinContainers,
    description: 'Visually appealing, protective packaging for luxury unboxing.',
  },
  {
    title: 'Candle Packaging',
    image: PopDisplays,
    description: 'Functional and aesthetic, using glass, tin, and sustainable materials.',
  },
  {
    title: 'Bakery & Cake Packaging',
    image: StickersAndLabels,
    description: 'Sturdy, and visually appealing for transporting delicate goods.',
  },
  {
    title: 'Chocolate Packaging',
    image: TissuePaperAndLiners,
    description: 'Eye-catching, and protective, using foil, boxes, and sustainable materials.',
  },
  {
    title: 'Pharmaceutical Packaging',
    image: PackingTape,
    description: 'Safe, tamper-evident, child-resistant, and withstands various conditions.',
  },

];

const ShopPackagingSec = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        599: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <section className="full-width-section" style={{ width: '100%', margin: '0 auto' }}>
      <h2>Design and Packaging Services for Diverse Industries</h2>
      <p>We work in many industries; some are diverse and require unique packaging solutions.</p>

      <div className="swiper">
        <div className="swiper-wrapper">
          {features.map((feature, index) => (
            <div className="swiper-slide" key={index}>
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default ShopPackagingSec;
