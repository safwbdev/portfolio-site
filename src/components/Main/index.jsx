import React from "react";
import desc_image from "./../../assets/images/desc_bg.jpeg";
import "./index.scss";

const descbgStyle = { backgroundImage: `url(${desc_image})` };

export const index = ({ data }) => {
  // console.log(data);
  return (
    <>
      <section className="hero" style={descbgStyle}>
        <div className="inner-text">
          <h1>{data.name}</h1>
          <h2>{data.role}</h2>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="nav-section" id="about">
        <div className="container">
          <div className="section-header">
            <h3 className="heading">About Me</h3>
            <h4 className="subheading">Get To Know Me</h4>
          </div>
          <div className="about-content">
            <div className="image-wrapper">
              <img src={data.image} alt="" />
            </div>
            <div className="text-content">
              <h3 className="content-heading">Hello there</h3>
              <p>{data.desc}</p>
              <hr />
              <div className="text-content-footer">
                <div className="button-wrapper">
                  <a href="/" className="primary-button" target="_blank">
                    Download CV
                  </a>
                </div>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default index;
