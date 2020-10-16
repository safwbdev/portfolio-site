import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { WORK_TITLE } from "../../constants/lang";
import moment from "moment";
import Modal from "./Modal";

export const index = ({ data, getType, title, subtitle }) => {
  let settings = WORK_SETTINGS;
  const getWorkDate = (date) => {
    const d = new Date(date);
    const newDate = moment(d).format("MMM YYYY");
    return newDate;
  };
  const WorkBox = ({
    data: { image, role, name, startDate, endDate, location, desc },
  }) => {
    return (
      <div className="work-item">
        <div className="image-side">
          <div className="image-wrapper">
            <img src={image} alt={name} width="100" height="100" />
          </div>
        </div>
        <div className="detail-side">
          <div className="title-wrapper">
            <div className="title">
              <h2 className="role">{role}</h2>
              <h2 className="company">{name}</h2>
              <h2 className="duration">
                {`${getWorkDate(startDate)} -
            ${getWorkDate(endDate)}`}
              </h2>
              <h2 className="location">{location}</h2>
            </div>
          </div>
          <div className="task-wrapper">
            <ul>
              {desc &&
                desc.map((task, index) => {
                  return <li key={index}>{task}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const WorkDesktop = () => {
    return (
      <div className="work-grid">
        {data &&
          data.map((data, index) => {
            return <WorkBox data={data} key={index} />;
          })}
      </div>
    );
  };
  const WorkMobile = () => {
    return (
      <div className="work-slider">
        <Slider {...settings}>
          {data &&
            data.map((work, index) => {
              return (
                <div className="work-item" key={index}>
                  <div className="image-side">
                    <img
                      src={work.image}
                      alt={work.name}
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="detail-side">
                    <div className="title-wrapper">
                      <div className="title">
                        <h2 className="role">{work.role}</h2>
                        <h2 className="company">{work.name}</h2>
                        <h2 className="duration">
                          {`${getWorkDate(work.startDate)} -
                        ${getWorkDate(work.endDate)}`}
                        </h2>
                        <h2 className="location">{work.location}</h2>
                      </div>
                    </div>

                    <div className="task-wrapper">
                      <Modal id={index} name={work.name} data={work.desc} />
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
      <div className="nav-section" id="experience">
        <div className="container">
          <div className="section-header">
            <h3 className="heading">{WORK_TITLE}</h3>
            <h4 className="subheading">{subtitle}</h4>
          </div>
          <WorkDesktop />
          <WorkMobile />
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