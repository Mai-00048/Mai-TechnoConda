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

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    adaptiveHeight: true,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className={`slider-container ${isMobile ? 'mobile' : 'desktop'}`}>
      {!isMobile ? (
        <div className="desktop-slider">
          <br></br>
        <h2 className="textslider"> جهاز الكمبيوتر الخاص بك واستفد</h2>
        <div className="gap"></div>
          <Slider {...desktopSettings}>
            <div>
              <img src="./dell.png" alt="Description of the image" className="slider-image" />
            </div>
            <div>
              <img src="./hp.png" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./mackbook.png" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./lonovo.png" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./msi.png" alt="Description of the new image" className="slider-image" />
            </div>
            {/* Add more images as needed */}
          </Slider>
          <br></br>
        </div>
      ) : (
        <div className="mobile-slider">
            <br></br>
            <h2 className="textslider"> جهاز الكمبيوتر الخاص بك واستفد</h2>
            <div className="gap"></div>
          <Slider {...mobileSettings}>
          <div>
              <img src="./dell.png" alt="Description of the image" className="slider-image" />
            </div>
            <div>
              <img src="./hp.png" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./mackbook.png" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./lonovo.png" alt="Description of the new image" className="slider-image" />
            </div>
            <div>
              <img src="./msi.png" alt="Description of the new image" className="slider-image" />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
      )}

      {isMobile && (
        <div className="phone-version">
          <div className="brand-partners-gap"></div>
          <div className="brand-partners">شركاء العلامة التجارية</div>

          <div className="image-row scroll-animation">
          <img src="./b1.jpg" alt="Image 1" className="small-image" />
            <img src="./b3.jpg" alt="Image 3" className="small-image" />
          </div>
          <div className="image-row scroll-animation">
          <img src="./b1.jpg" alt="Image 1" className="small-image" />
            <img src="./b3.jpg" alt="Image 3" className="small-image" />
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
        <div className="desktop-version scroll-animation">
          <div className="image-row">
            <img src="./b1.jpg" alt="Image 1" className="small-image" />
            <img src="./b2.png" alt="Image 2" className="small-image" />
            <img src="./b3.jpg" alt="Image 3" className="small-image" />
          </div>
          <div className="image-row">
          <img src="./b3.jpg" alt="Image 3" className="small-image" />
          <img src="./b1.jpg" alt="Image 1" className="small-image" />
            <img src="./b2.png" alt="Image 2" className="small-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
