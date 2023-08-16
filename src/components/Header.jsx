import React, { useState } from "react";

const headerNav = [
  {
    title: "INTRO",
    url: "#intro"
  },
  {
    title: "ABOUT ME",
    url: "#aboutMe"
  },
  {
    title: "EXPERIENCE",
    url: "#experience"
  },
  {
    title: "WORK",
    url: "#work"
  },
  {
    title: "CONTACT",
    url: "#contact"
  }
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">PORTFOLIO<em>CHLOE_CHOI</em></a>
        </div>
        <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
          <ul>
          {headerNav.map((nav, key) => (
            <li key={key}>
              <a href={nav.url}>{nav.title}</a>
            </li>
          ))}
          </ul>
        </nav>
        <div 
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button" 
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;