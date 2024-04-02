import React, { useEffect, useState } from "react";
import { navLinks } from "../data";

import Cv from "../assets/cv/CV_JEEVAN_SHRESTHA.pdf";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [headerBackground, setHeaderBackground] = useState(false);

  const handleMenuClick = () => {
    alert("Menu clicked");
    setMenuOpen(!menuOpen);
  };
  const setActiveLink = () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;

      if (
        scrollY >= sectionTop - sectionHeight / 3 &&
        scrollY < sectionTop + sectionHeight / 2
      ) {
        const sectionId = section.getAttribute("id");
        const correspondingNavLink = document.querySelector(
          `.nav__links a[href="#${sectionId}"]`
        );

        document
          .querySelectorAll(".nav__links a")
          .forEach((link) => link.classList.remove("active"));
        correspondingNavLink.classList.add("active");
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header__area');
        let topPosition = window.scrollY;
        if(topPosition>100){
            header.classList.add('background__header');
        }else{
            header.classList.remove('background__header');
        }
    });
    window.addEventListener('scroll', setActiveLink);

    return () => {
      window.removeEventListener('scroll', setActiveLink);
    };
  }, []);

  return (
    <header className="header__area" data-aos='fade-down'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main__nav d-flex  align-items-center justify-content-between">
              <a href="index.html" className="logo p-3">
                <img src="./assets/images/logo/logo.png" alt="jdev" />
              </a>
              {/* menu start  */}
              <ul className="nav d-flex align-items-center">
                {navLinks.map((link, index) => {
                  return (
                    <li key={index} className="nav__links px-4  px-md-2">
                      <a
                        href={link.path}
                        className={link.active == "active" ? "active" : ""}
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
                <li className="nav__links ps-5 ps-md-3 ">
                  <div className="main__red__button py-2">
                    <a download={'cv__jeevan__shrestha'} href={Cv} className="" target="_blank" rel="noreferrer">
                      Download CV
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mobile__nav">
                <i
                  className={`fa-solid ${menuOpen ? "fa-bars" : "fa-xmark"}`}
                  id="menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                ></i>
                <ul
                  className={`mobile__menu ${
                    menuOpen ? "hide d-none" : "show d-block"
                  }`}
                >
                  {navLinks.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="nav__links px-4 px-md-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                      >
                        <a
                          href={link.path}
                          className={link.active == "active" ? "active" : ""}
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
