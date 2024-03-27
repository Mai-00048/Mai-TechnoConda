import React, { useState, useEffect } from 'react';
import './body.css'; // Rename the import to avoid conflict

const Body = () => {
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

  return (
    <div>
      {!isMobile ? (
        // PC version
        <div>
          <div className="body-container">
            <div className="text-description">
              <p>استفد من خدمات</p>
              <br />
              <h2>جديدنا</h2>
              <br />
              <p>احصل على جهاز الكمبيوتر الخاص بك واستفد من خدمات الإصلاح المتميزة
                <br />
                تسوّق وأصلح: راحة وموثوقية في مكان واحد
                <br />
                اختر جهازك بعناية وثق بخدمات الإصلاح المتميزة
                <br />
                استمتع بأفضل العروض على الحواسيب وخدمات الإصلاح المتميزة
                <br />
                تسوّق وأصلح: راحة وموثوقية في مكان واحد
              </p>
              <br /><br />
              <button className="button-48" role="button">تسوّق الان</button>
            </div>
            <div className="image-container">
              <img src="./coding.jpg" alt="Description of the image" />
            </div>
          </div>
          {/* New Container */}
          <div className="new-container">
            <div className="flex-container">
              <div className="image2-container">
                <img src="./mac3.jpg" alt="Description of the new image" />
              </div>
            </div>
            <div className="text2-description">
              <p>استفد من خدمات</p>
              <br />
              <h2>جديدنا</h2>
              <br />
              <p>احصل على جهاز الكمبيوتر الخاص بك واستفد من خدمات الإصلاح المتميزة
                <br />
                تسوّق وأصلح: راحة وموثوقية في مكان واحد
                <br />
                اختر جهازك بعناية وثق بخدمات الإصلاح المتميزة
                <br />
                استمتع بأفضل العروض على الحواسيب وخدمات الإصلاح المتميزة
                <br />
                تسوّق وأصلح: راحة وموثوقية في مكان واحد
              </p>
              <br /><br />
              <button className="button-49" role="button">تسوّق الان</button>
            </div>
          </div>
        </div>
      ) : (
        // Phone version
        <div className="phone-version">
           <div className="brand-partners-gap"></div>
          <div className="text-description-phone">
          <div className="image-container-phone">
            <img src="./coding.jpg" alt="Description of the image" />
          </div>
            <p>استفد من خدمات</p>
            <br />
            <h2>جديدنا</h2>
            <br />
            <p>احصل على جهاز الكمبيوتر الخاص بك واستفد من خدمات الإصلاح المتميزة
              <br />
              تسوّق وأصلح: راحة وموثوقية في مكان واحد
              <br />
              اختر جهازك بعناية وثق بخدمات الإصلاح المتميزة
              <br />
              استمتع بأفضل العروض على الحواسيب وخدمات الإصلاح المتميزة
              <br />
              تسوّق وأصلح: راحة وموثوقية في مكان واحد
            </p>
            <br /><br />
            <button className="button-49" role="button">تسوّق الان</button>
          </div>
          <div className="brand-partners-gap"></div>

          <div className="image-container-phone">
            <img src="./mac3.jpg" alt="Description of the image" />
          </div>
            <p>استفد من خدمات</p>
            <br />
            <h2>جديدنا</h2>
            <br />
            <p>احصل على جهاز الكمبيوتر الخاص بك واستفد من خدمات الإصلاح المتميزة
              <br />
              تسوّق وأصلح: راحة وموثوقية في مكان واحد
              <br />
              اختر جهازك بعناية وثق بخدمات الإصلاح المتميزة
              <br />
              استمتع بأفضل العروض على الحواسيب وخدمات الإصلاح المتميزة
              <br />
              تسوّق وأصلح: راحة وموثوقية في مكان واحد
            </p>
            <br /><br />
            <button className="button-49" role="button">تسوّق الان</button>
          </div>

     

        
      )}
    </div>
  );
};

export default Body;
