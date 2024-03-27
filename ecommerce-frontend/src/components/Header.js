import React, { useState, useEffect } from "react";
import "./Header.css"; // Import CSS file for styling
// Header component
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPhoneViewport, setIsPhoneViewport] = useState(false); // Define isPhoneViewport state

  // Function to toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const menuContentPhone = document.querySelector('.menu-content-phone');
    if (menuContentPhone) {
      menuContentPhone.classList.toggle('open');
    }
  };

  // Check viewport size on initial render and on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsPhoneViewport(window.innerWidth <= 767);
    };

    handleResize(); // Check viewport size on initial render
    window.addEventListener("resize", handleResize); // Check viewport size on window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  // Function to toggle menu on DOMContentLoaded
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const menuTextPhone = document.querySelector('.menu-text-phone');
      if (menuTextPhone) {
        menuTextPhone.addEventListener('click', toggleMenu);
      }
    };

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    return () => document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
  }, []);
  
  return (
    <div>
      {/* Desktop Version */}
      <div className="desktop-version">
        <header>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="header-content">
            <nav>
              <ul className={`horizontal-menu ${menuOpen ? 'menu-open' : ''}`}>
                {/* Add an additional class to the <ul> element */}
                <li><a href="#">جديد</a></li>
                <li className="menu-item-sec">
                  <a href="#">مصنوع يدويًا بواسطتنا</a>
                  {/* Add a submenu for the specific menu item */}
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">صنع يدويًا بواسطتنا</a></li>
                    <li><a href="#" className="submenu-link">صنع يدويًا بواسطتنا</a></li>
                  </ul>
                </li>
                <li className="menu-item-sec"><a href="#">شركاء العلامة التجارية</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">صنسطتنا</a></li>
                    <li><a href="#" className="submenu-link">صنصطتنا</a></li>
                  </ul>
                </li>
                <li className="menu-item-sec"><a href="#">حسب المناسبة</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">مناسبة 1</a></li>
                    <li><a href="#" className="submenu-link">مناسبة 2</a></li>
                  </ul>
                </li>
                <li className="menu-item-sec"><a href="#">حسب الفئة</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">فئة 1</a></li>
                    <li><a href="#" className="submenu-link">فئة 2</a></li>
                  </ul>
                </li>
                <li><a href="#">الاستدامة</a></li>
              </ul>
            </nav>
          </div>
          {/* New section with <h1>, paragraph, and button */}
          <div className="additional-content">
            <h1>تسوّق وأصلح</h1>
            <br />
            <p>
              <button className="button-47" role="button">تسوّق الان</button>&nbsp;&nbsp;
              راحة وموثوقية في مكان واحد
            </p>
          </div>
        </header>

        {/* Moving text line */}
        <div className="moving-line">
          <div className="moving-text-container">
            <p className="moving-text">الاستدامة فئة.المناسبة صنصطتنا</p>
          </div>
        </div>
      </div>

   
      {isPhoneViewport && (
  <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
    <img src="/logo.png" alt="Logo" className="logo" />
    <div className="header-content">
      <div className="additional-content">
        <h1>تسوّق وأصلح</h1>
        <br />
        <p>
          <button className="button-47" role="button">تسوّق الان</button>&nbsp;&nbsp;
          راحة وموثوقية في مكان واحد
        </p>
      </div>
    </div>
  </header>
)}

<div>
<div className="phone-version">
  <div className={`menu-container ${menuOpen ? 'menu-open' : ''}`}>
    <div className={`bottom-menu ${menuOpen ? 'show-menu' : ''}`} onClick={toggleMenu}>
      <div className="menu-content">
        {/* Conditionally render the word only in phone version */}
        {isPhoneViewport && <p className="menu-text-phone">القائمة</p>}
        {/* Render the menu icon if menu is closed, and the cross icon if menu is open */}
        {isPhoneViewport && (menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>)}
      </div>
    </div>
 

    <div className={`menu-content-phone ${menuOpen && isPhoneViewport ? 'open' : ''}`}>
      {/* Conditionally render the word only in phone version */}
      {isPhoneViewport && <p className="menu-text-phone">القائمة</p>}
      <div className="header-content">
        <nav>
          <ul className="horizontal-menu">
            {/* Conditionally render menu items for phone version only */}
            {isPhoneViewport && (
              <>
                <li><a href="#">جديد</a></li>
                <li className="menu-item-sec">
                  <a href="#">مصنوع يدويًا بواسطتنا</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">صنع يدويًا بواسطتنا</a></li>
                    <li><a href="#" className="submenu-link">صنع يدويًا بواسطتنا</a></li>
                  </ul>
                </li>
                {/* Add other menu items for phone version as needed */}
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  
    {/* Conditionally render the "Moving text line" only in phone version */}
    {isPhoneViewport && (
      <div className="moving-line-phone">
        <div className="moving-text-container-phone">
          <p className="moving-text-phone">الاستدامة فئة.المناسبة صنصطتنا</p>
        </div>
      </div>
    )}
  
  </div>
</div>
</div>
</div>

  )}

 
 

  export default Header;