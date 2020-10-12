import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { WORK_TITLE, WORK_TASK_BTN } from "../../constants/lang";

export const index = ({ data, getType, title, subtitle }) => {
  let settings = WORK_SETTINGS;

  const WorkDesktop = () => {
    return (
      <div className="work-grid">
        {data &&
          data.map((project, index) => {
            return (
              <div className="work-item" key={index}>
                <div className="image-side">
                  <div className="image-wrapper">
                    <img src={project.image} alt="" />
                  </div>
                </div>
                <div className="detail-side">
                  <div className="title-wrapper">
                    <div className="title">
                      <h2 className="role">{project.role}</h2>
                      <h2 className="company">{project.name}</h2>
                      <h2 className="duration">
                        {project.startDate} -{project.endDate}
                      </h2>
                      <h2 className="location">{project.location}</h2>
                    </div>
                  </div>
                  <div className="task-wrapper">
                    <ul>
                      {project.desc &&
                        project.desc.map((task, index) => {
                          return <li key={index}>{task}</li>;
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };
  const WorkMobile = () => {
    return (
      <div className="work-slider">
        <Slider {...settings}>
          {data &&
            data.map((project, index) => {
              return (
                <div className="work-item" key={index}>
                  <div className="image-side">
                    <img src={project.image} alt="" />
                  </div>
                  <div className="detail-side">
                    <div className="title-wrapper">
                      <div className="title">
                        <h2 className="role">{project.role}</h2>
                        <h2 className="company">{project.name}</h2>
                        <h2 className="duration">
                          {project.startDate} -{project.endDate}
                        </h2>
                        <h2 className="location">{project.location}</h2>
                      </div>
                    </div>

                    <div className="task-wrapper">
                      <button className="primary-button">
                        {WORK_TASK_BTN}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  };

  console.log(data);
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
