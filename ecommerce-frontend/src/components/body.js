import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa'; // Import FontAwesome icon
import './body.css'; // Rename the import to avoid conflict
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Body = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButton, setShowButton] = useState(false); // State variable to control button visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
 

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  return (
    <div>
      {!isMobile ? (
        // PC version
        <div>   
          {showButton && (
            <div className="fixed-button-container">
              <button className="floating-top-button" onClick={scrollToTop}>
                <FaArrowAltCircleUp className="arrow-up-icon" />
              </button>
            </div>
          )}
          <div className="body-container">
            {/* Add FloatingWhatsApp container */}
            <div className="floating-whatsapp-container">
              <FloatingWhatsApp 
                phoneNumber="1234567890"
                accountName="تكنوكندا"           
                statusMessage="متصل"
                placeholder="...اكتب رسالة"
                chatMessage="مرحبًا! كيف يمكننا مساعدتك؟"
                showPopupMessage={false}
                showAlways={false}
                zIndex={9999}
                avatar="./LOGO.png"
              />
            </div>
            <div className="text-description scroll-animation" >
    <p>استفد من خدمات</p>
    <br />
    <h2>جديدنا</h2>
    <br />
    <p>
       انطلق في رحلة إلى عالم البرمجة والتطوير مع مجموعتنا المتنوعة
       <br/>
       من الموارد والخدمات. سواء كنت مبرمجًا متمرسًا أو بدأت للتو
       <br/>فإن هذا القسم هو
        بوابتك لإطلاق العنان لقوة التكنولوجيا  
        <br/>
        لقد وفرنا لك محتوى ثاقبًا مصممًا لتلبية احتياجاتك.
<br/>
هل أنت مستعد للانطلاق؟ ابدأ التصفح الآن ودع رحلتك البرمجية تبدأ!
    </p>
    <br /><br />
    <button className="button-48" role="button">تسوّق الان</button>
</div>

            <div>
  <div className="image-container scroll-animation">
    <img src="./coding4.png" alt="Description of the image" className="image-size" />
  </div>
</div>

       </div>
        
       <div className="container">
  <div className="image2-container scroll-animation">
    <img src="./rep09.png" alt="Description of the image" className="image2-size" />
  </div>
  
  <div className="text2-description scroll-animation">
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
          <div className="floating-whatsapp-container"> {/* Move it here */}
            <FloatingWhatsApp 
              phoneNumber="1234567890"
              accountName="اسم العمل الخاص بك"
              sendButton="إرسال"
              placeholder="رسالة"
              statusMessage="عادة ما يتم الرد في غضون ساعة واحدة"
              chatMessage="مرحبًا! كيف يمكننا مساعدتك؟"
              showPopupMessage={false}
              showAlways={false}
              zIndex={9999}
            />
          </div>
     
          <div className="text-description-phone scroll-animation">
            <div className="image-container-phone scroll-animation">
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
          <div className="text-description-phone scroll-animation">
            <div className="image-container-phone scroll-animation">
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
          {showButton && (
            <div className="fixed-button-container-gray">
              <button className="floating-top-button" onClick={scrollToTop}>
                <FaArrowAltCircleUp className="arrow-up-icon" />
              </button>
            </div>
          )}
        </div>
        
      )}
    </div>
  );
};

export default Body;
