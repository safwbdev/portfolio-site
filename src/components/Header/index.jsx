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

const links = [
  { url: "#about", label: HEADER_ABOUT },
  { url: "#portfolio", label: HEADER_PORTFOLIO },
  { url: "#skills", label: HEADER_SKILLS },
  { url: "#experience", label: HEADER_EXPERIENCE },
  { url: "#education", label: HEADER_EDUCATION },
  { url: "#contact", label: HEADER_CONTACT },
];
const Index = () => {
  return (
    <header>
      <div className="brand">
        <a href="/">{HEADER_BRAND}</a>
      </div>
      <ul className="nav-links">
        {links &&
          links.map((link, index) => {
            return (
              <li className="nav-link" key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            );
          })}
      </ul>

      <div className="mobile-nav">
        <button className="hamburger">
          <i className="fa fa-bars"></i>
        </button>

        <ul className="mobile-nav-links">
          {links &&
            links.map((link, index) => {
              return (
                <li className="nav-link" key={index}>
                  <a href={link.url}>{link.label}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </header>
  );
};
export default Index;
