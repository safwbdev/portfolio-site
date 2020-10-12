import React from "react";
import {
  HEADER_BRAND,
  HEADER_ABOUT,
  HEADER_PORTFOLIO,
  HEADER_SKILLS,
  HEADER_EXPERIENCE,
  HEADER_EDUCATION,
  HEADER_CONTACT,
} from "../../constants/lang";
const Index = () => {
  return (
    <header>
      <div className="brand">
        <a href="/">{HEADER_BRAND}</a>
      </div>

      <ul className="nav-links">
        <li className="nav-link">
          <a href="#about">{HEADER_ABOUT}</a>
        </li>

        <li className="nav-link">
          <a href="#portfolio">{HEADER_PORTFOLIO}</a>
        </li>

        <li className="nav-link">
          <a href="#skills">{HEADER_SKILLS}</a>
        </li>

        <li className="nav-link">
          <a href="#experience">{HEADER_EXPERIENCE}</a>
        </li>

        <li className="nav-link">
          <a href="#education">{HEADER_EDUCATION}</a>
        </li>

        <li className="nav-link">
          <a href="#contact">{HEADER_CONTACT}</a>
        </li>
      </ul>

      <div className="mobile-nav">
        <button className="hamburger">
          <i className="fa fa-bars"></i>
        </button>

        <ul className="mobile-nav-links">
          <li className="nav-link">
            <a href="#portfolio">{HEADER_PORTFOLIO}</a>
          </li>

          <li className="nav-link">
            <a href="#skills">{HEADER_SKILLS}</a>
          </li>

          <li className="nav-link">
            <a href="#experience">{HEADER_EXPERIENCE}</a>
          </li>

          <li className="nav-link">
            <a href="#education">{HEADER_EDUCATION}</a>
          </li>

          <li className="nav-link">
            <a href="#contact">{HEADER_CONTACT}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Index;
