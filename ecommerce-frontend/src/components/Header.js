import React, { useState, useEffect } from "react";
import "./Header.css"; // Import CSS file for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPhoneViewport, setIsPhoneViewport] = useState(false);
  const [showEventSubMenu, setShowEventSubMenu] = useState(false);
  const [showBrandSubMenu, setShowBrandSubMenu] = useState(false);
  const [showSharSubMenu, setShowSharSubMenu] = useState(false); // Add state for Shar submenu
  const [showNewSubMenu, setShowNewSubMenu] = useState(false); // Add state for New submenu
  const [showAnotherSubMenu, setShowAnotherSubMenu] = useState(false); // Add state for Another submenu
  const [showMoreSubMenu, setShowMoreSubMenu] = useState(false); // Add state for More submenu
  const [showOneMoreMenu, setShowOneMoreMenu] = useState(false); // Add state for One More menu without submenu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleEventSubMenu = () => {
    setShowEventSubMenu(!showEventSubMenu);
    setShowBrandSubMenu(false); // Close other submenus when opening this one
    setShowSharSubMenu(false); // Close Shar submenu when opening this one
    setShowNewSubMenu(false); // Close New submenu when opening this one
    setShowAnotherSubMenu(false); // Close Another submenu when opening this one
    setShowMoreSubMenu(false); // Close More submenu when opening this one
    setShowOneMoreMenu(false); // Close One More menu without submenu when opening this one
  };

  const toggleBrandSubMenu = () => {
    setShowBrandSubMenu(!showBrandSubMenu);
    setShowEventSubMenu(false); // Close other submenus when opening this one
    setShowSharSubMenu(false); // Close Shar submenu when opening this one
    setShowNewSubMenu(false); // Close New submenu when opening this one
    setShowAnotherSubMenu(false); // Close Another submenu when opening this one
    setShowMoreSubMenu(false); // Close More submenu when opening this one
    setShowOneMoreMenu(false); // Close One More menu without submenu when opening this one
  };

  const toggleSharSubMenu = () => {
    setShowSharSubMenu(!showSharSubMenu);
    setShowEventSubMenu(false); // Close other submenus when opening this one
    setShowBrandSubMenu(false); // Close other submenus when opening this one
    setShowNewSubMenu(false); // Close New submenu when opening this one
    setShowAnotherSubMenu(false); // Close Another submenu when opening this one
    setShowMoreSubMenu(false); // Close More submenu when opening this one
    setShowOneMoreMenu(false); // Close One More menu without submenu when opening this one
  };

  const toggleNewSubMenu = () => {
    setShowNewSubMenu(!showNewSubMenu);
    setShowEventSubMenu(false); // Close other submenus when opening this one
    setShowBrandSubMenu(false); // Close other submenus when opening this one
    setShowSharSubMenu(false); // Close other submenus when opening this one
    setShowAnotherSubMenu(false); // Close Another submenu when opening this one
    setShowMoreSubMenu(false); // Close More submenu when opening this one
    setShowOneMoreMenu(false); // Close One More menu without submenu when opening this one
  };

  const toggleAnotherSubMenu = () => {
    setShowAnotherSubMenu(!showAnotherSubMenu);
    setShowEventSubMenu(false); // Close other submenus when opening this one
    setShowBrandSubMenu(false); // Close other submenus when opening this one
    setShowSharSubMenu(false); // Close other submenus when opening this one
    setShowNewSubMenu(false); // Close New submenu when opening this one
    setShowMoreSubMenu(false); // Close More submenu when opening this one
    setShowOneMoreMenu(false); // Close One More menu without submenu when opening this one
  };

  const toggleMoreSubMenu = () => {
    setShowMoreSubMenu(!showMoreSubMenu);
    setShowEventSubMenu(false); // Close other submenus when opening this one
    setShowBrandSubMenu(false); // Close other submenus when opening this one
    setShowSharSubMenu(false); // Close other submenus when opening this one
    setShowNewSubMenu(false); // Close New submenu when opening this one
    setShowAnotherSubMenu(false); // Close Another submenu when opening this one
    setShowOneMoreMenu(false); // Close One More menu without submenu when opening this one
  };

  const toggleOneMoreMenu = () => {
    setShowOneMoreMenu(!showOneMoreMenu);
    setShowEventSubMenu(false); // Close other submenus when opening this one
    setShowBrandSubMenu(false); // Close other submenus when opening this one
    setShowSharSubMenu(false); // Close other submenus when opening this one
    setShowNewSubMenu(false); // Close New submenu when opening this one
    setShowAnotherSubMenu(false); // Close Another submenu when opening this one
    setShowMoreSubMenu(false); // Close More submenu when opening this one
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneViewport(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
  {/* Desktop Version */}
  <div className="desktop-version">
        <header>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          <img src="/logo00.png" alt="Logo" className="logo" />
          <div className="header-content">
            <nav>
         
              <ul className={`horizontal-menu ${menuOpen ? 'menu-open' : ''}`}>
             
                <li><a href="#">جديد</a></li>
                <li className="menu-item-sec">
                  <a href="#">خدمات إنشاء المواقع</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">تصميم مواقع الشركات الصغيرة</a></li>
                    <li><a href="#" className="submenu-link">تطوير نظام ERP Odoo </a></li>
                  </ul>
                </li>
                <li className="menu-item-sec">
                  <a href="#">شركاء العلامة التجارية</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">شريك 1</a></li>
                    <li><a href="#" className="submenu-link">شريك 2</a></li>
                  </ul>
                </li>
                <li className="menu-item-sec">
                  <a href="#">منتجاتنا</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">أجهزة مصلحة</a></li>
                    <li><a href="#" className="submenu-link">أجهزة جديدة</a></li>
                  </ul>
                </li>
                <li className="menu-item-sec">
                  <a href="#">خدماتنا</a>
                  <ul className="submenu">
                    <li><a href="#" className="submenu-link">تصليح الأجهزة</a></li>
                    <li><a href="#" className="submenu-link">إنشاء المواقع</a></li>
                  </ul>
                </li>
                <li><a href="#">عالمنا</a></li>
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
<div className="moving-line-phone">
  <div className="moving-text-container-phone">
    <p className="moving-text-phone">
    🎉 عروض حصرية على بيع وتصليح جميع أنواع الأجهزة الإلكترونية! 📱💻 استفد الآن من خصومات خاصة لفترة محدودة. اتصل بنا للاستفسار 📞
    </p>
  </div>
</div>
</div>

      {/* Phone Version */}
      {isPhoneViewport && (
        <div className="phone-version">
          <header>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src="/logo00.png" alt="Logo" className="logo" style={{ width: '200px', height: 'auto' }} />
</div>

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
          <div className="moving-line-phone">
  <div className="moving-text-container-phone">
    <p className="moving-text-phone">🎉 عروض حصرية على بيع وتصليح جميع أنواع الأجهزة الإلكترونية! 📱💻 استفد الآن من خصومات خاصة لفترة محدودة. اتصل بنا للاستفسار 📞
    </p>
  </div>
</div>
          <div className={`menu-container ${menuOpen ? 'menu-open' : ''}`}>
            <div className={`bottom-menu ${menuOpen ? 'show-menu' : ''}`} onClick={toggleMenu}>
              <div className="menu-content">
                {isPhoneViewport && <p className="menu-text-phone">القائمة</p>}
                {isPhoneViewport && (menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>)}
              </div>
            </div>

            <div className={`menu-content-phone ${menuOpen && isPhoneViewport ? 'open' : ''}`}>
              {isPhoneViewport && <p className="menu-text-phone">القائمة</p>}
              <div className="header-content">
                <nav>
                  <ul className="horizontal-menu">
                    {/* Brand submenu */}
                    <span onClick={toggleBrandSubMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    جديد<i className={`fas ${showBrandSubMenu ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: '0.8rem', marginLeft: '0.25rem' }}></i>
                    </span>
          
                    <br></br>
                    {/* Shar submenu */}
                    <span onClick={toggleSharSubMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    خدمات إنشاء المواقع <i className={`fas ${showSharSubMenu ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: '0.8rem', marginLeft: '0.25rem' }}></i>
                    </span>
                    {showSharSubMenu && (
                      <ul className={`sub-menu ${showSharSubMenu ? 'show' : 'hide'}`}>
                        <br></br>
                        <div>
                          <a>تصميم مواقع الشركات الصغيرة</a>
                        </div>
                        <div>
                          <a>تطوير نظام ERP Odoo </a>
                        </div>
                      </ul>
                    )}
                    {/* New submenu */}
                    <br></br>
                    <span onClick={toggleNewSubMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    شركاء العلامة التجارية <i className={`fas ${showNewSubMenu ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: '0.8rem', marginLeft: '0.25rem' }}></i>
                    </span>
                    {showNewSubMenu && (
                      <ul className={`sub-menu ${showNewSubMenu ? 'show' : 'hide'}`}>
                        <br></br>
                        <div>
                          <a>شريك 1</a>
                        </div>
                        <div>
                          <a>شريك 2</a>
                        </div>
                      </ul>
                    )}
                    {/* Another submenu */}
                       <br></br>
                    <span onClick={toggleAnotherSubMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    منتجاتنا <i className={`fas ${showAnotherSubMenu ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: '0.8rem', marginLeft: '0.25rem' }}></i>
                    </span>
                    {showAnotherSubMenu && (
                      <ul className={`sub-menu ${showAnotherSubMenu ? 'show' : 'hide'}`}>
                        <br></br>
                        <div>
                          <a>أجهزة مصلحة</a>
                        </div>
                        <div>
                          <a>أجهزة جديدة</a>
                        </div>
                      </ul>
                    )}
                    <br></br>
                    {/* More submenu */}
                    <span onClick={toggleMoreSubMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    خدماتنا <i className={`fas ${showMoreSubMenu ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ fontSize: '0.8rem', marginLeft: '0.25rem' }}></i>
                    </span>
                    {showMoreSubMenu && (
                      <ul className={`sub-menu ${showMoreSubMenu ? 'show' : 'hide'}`}>
                        <br></br>
                        <div>
                          <a>إنشاء المواقع</a>
                        </div>
                        <div>
                          <a>تصليح الأجهزة</a>
                        </div>
                      </ul>
                    )}
                     <br></br>
                    {/* One more menu without submenu */}
                    <span onClick={toggleOneMoreMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    عالمنا
                    </span>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
