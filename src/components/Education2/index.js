import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { EDUCATION_TITLE } from "../../constants/lang";

export const index = ({ data }) => {
  let settings = WORK_SETTINGS;

  const EduBox = ({ data }) => {
    return (
      <div className="edu-item" key={index}>
        <div className="image-side">
          <div className="image-wrapper">
            <img src={data.image} alt="" width="100%" height="100%" />
          </div>
        </div>
        <div className="detail-side">
          <div className="title-wrapper">
            <div className="title">
              <h2 className="yearField">
                {data.endYear} <span>|</span> {data.field}
              </h2>
              <h2 className="institute">{data.name}</h2>
              <h2 className="location">{data.location}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const EduDesktop = () => {
    return (
      <div className="edu-grid">
        {data &&
          data.map((edu, index) => {
            return <EduBox data={edu} key={index} />;
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
              return <EduBox data={edu} key={index} />;
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
    </>
  );
};
export default index;
