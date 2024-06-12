import React from 'react';
import './Footer.css'; // Import CSS for footer styling
<div className="footer-gap"></div>

const Footer = () => {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="your-integrity-hash-here" crossorigin="anonymous" />

  return (
    
    <footer className="site-footer">
        
      <div className="site-footer__section">
        <ul className="no-bullets inline-list social-icons footer__social">
          <li>
            <a target="_blank" rel="noopener" href="https://www.instagram.com/thealkemistry/?hl=en" title="The Alkemistry on Instagram">
              {/* SVG icon for Instagram */}
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener" href="https://www.facebook.com/thealkemistry/?locale=en_GB" title="The Alkemistry on Facebook">
              {/* SVG icon for Facebook */}
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener" href="https://ar.pinterest.com/the_alkemistry/" title="The Alkemistry on Pinterest">
              {/* SVG icon for Pinterest */}
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/the-alkemistry-limited/" title="The Alkemistry on LinkedIn">
              {/* SVG icon for LinkedIn */}
            </a>
          </li>
        </ul>
      </div>

      <div className="site-footer__section">
  <ul className="no-bullets inline-list site-footer__linklist">
    <div className="social-circle">
      <a href="whatsapp_link_here" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="instagram_link_here" className="instagram-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="snapchat_link_here" className="snapchat-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-snapchat-ghost"></i>
      </a>
      <a href="tiktok_link_here" className="tiktok-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i>
      </a>
    </div>
    <li><a href="/search">البحث</a></li>
    <li><a href="/pages/become-a-retailer">كن تاجرًا بالتجزئة</a></li>
    <li><a href="/pages/contact">اتصل بنا</a></li>
    <li><a href="/pages/delivery-and-returns">التوصيل والإرجاع</a></li>
    <li><a href="/policies/privacy-policy">سياسة الخصوصية</a></li>
    <li><a href="/pages/terms-conditions">الشروط والأحكام</a></li>
    <li><a href="/pages/warranty-and-returns">الضمان والإرجاع</a></li>
  </ul>
</div>

      <div className="site-footer__section site-footer__copyright">
        <span className="footer__powered_by">
          <a target="_blank" rel="nofollow" href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"> </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
