import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { EDUCATION_TITLE } from "../../constants/lang";

export const index = ({ data }) => {
  let settings = WORK_SETTINGS;

  const EduDesktop = () => {
    return (
      <div className="edu-grid">
        {data &&
          data.map((edu, index) => {
            return (
              <div className="edu-item" key={index}>
                <div className="image-side">
                  <div className="image-wrapper">
                    <img src={edu.image} alt="" width="100%" height="100%" />
                  </div>
                </div>
                <div className="detail-side">
                  <div className="title-wrapper">
                    <div className="title">
                      <h2 className="yearField">
                        {edu.endYear} <span>|</span> {edu.field}
                      </h2>
                      <h2 className="institute">{edu.name}</h2>
                      <h2 className="location">{edu.location}</h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };
  const EduMobile = () => {
    return (
      <div className="edu-slider">
        <Slider {...settings}>
          {data &&
            data.map((edu, index) => {
              return (
                <div className="edu-item" key={index}>
                  <div className="image-side">
                    <img src={edu.image} alt="" width="100%" height="100%" />
                  </div>
                  <div className="detail-side">
                    <div className="title-wrapper">
                      <div className="title">
                        <h2 className="company">{edu.name}</h2>
                        <h2 className="duration">{edu.endYear}</h2>
                        <h2 className="location">{edu.location}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  };

  return (
    <>
      <div className="nav-section" id="education">
        <div className="container">
          <div className="section-header">
            <h3 className="heading">{EDUCATION_TITLE}</h3>
          </div>
          <EduDesktop />
          <EduMobile />
        </div>
      </div>

      {/* MODAL */}
      <div className="portfolio-modal">
        <div className="close-button-wrapper">
          <button className="close-button">
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="image-wrapper"></div>
      </div>
    </>
  );
};
export default index;
