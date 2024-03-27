import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint as per your requirement
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  return (
    <div className="slider-container">
      {!isMobile ? (
        <div className="desktop-slider">
          <Slider {...desktopSettings}>
            <div>
              <img src="./coding.jpg" alt="Description of the image" className="slider-image" />
            </div>
            <div>
              <img src="./mac3.jpg" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./mac2.jpg" alt="Description of the new image" className="slider-image" />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
      ) : (
        <div className="mobile-slider">
          <Slider {...mobileSettings}>
            <div>
              <img src="./coding.jpg" alt="Description of the image" className="slider-image" />
            </div>
            <div>
              <img src="./mac3.jpg" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./mac2.jpg" alt="Description of the new image" className="slider-image" />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
      )}

 
{isMobile && (
  <div className="phone-version">
        <div className="brand-partners-gap"></div>
    <div className="brand-partners">شركاء العلامة التجارية</div>
    <br></br>
    <div className="image-row">
      <img src="./mac3.jpg" alt="Image 1" className="small-image" />
      <img src="./mac3.jpg" alt="Image 2" className="small-image" />
    </div>
    <div className="image-row">
      <img src="./mac3.jpg" alt="Image 3" className="small-image" />
      <img src="./mac3.jpg" alt="Image 4" className="small-image" />
    </div>
  </div>

      )}

      {/* Brand partners */}
      {!isMobile && (
        <div>
          <div className="brand-partners-gap"></div>
          <div className="brand-partners">شركاء العلامة التجارية</div>
        </div>
      )}

      {/* PC version image rows */}
      {!isMobile && (
        <div className="desktop-version">
          <div className="image-row">
            <img src="./mac3.jpg" alt="Image 1" className="small-image" />
            <img src="./mac3.jpg" alt="Image 2" className="small-image" />
            <img src="./mac3.jpg" alt="Image 3" className="small-image" />
          </div>
          <div className="image-row">
            <img src="./mac3.jpg" alt="Image 4" className="small-image" />
            <img src="./mac3.jpg" alt="Image 5" className="small-image" />
            <img src="./mac3.jpg" alt="Image 6" className="small-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
