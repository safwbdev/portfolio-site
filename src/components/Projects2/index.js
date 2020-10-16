import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TYPE_CLIENT, TYPE_PERSONAL } from "../../constants/types";
import {
  PERSONAL_PROJECT_SETTINGS,
  CLIENT_PROJECT_SETTINGS,
} from "../../constants/sliderSettings";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
} from "../../constants/lang";

export const index = ({ data, getType, title, subtitle }) => {
  let settings;
  if (getType === TYPE_PERSONAL) {
    settings = PERSONAL_PROJECT_SETTINGS;
  } else if (getType === TYPE_CLIENT) {
    settings = CLIENT_PROJECT_SETTINGS;
  }

  const GetStacks = ({ skillType }) => {
    return (
      <div className="stack-wrapper">
        {skillType &&
          skillType.map((data, index) => {
            const content = (
              <>
                <i className={data.icon}></i>
                <>{data.name}</>
              </>
            );
            return (
              <span key={index} className="stack">
                {content}
              </span>
            );
          })}
      </div>
    );
  };
  return (
    <>
      <div className="nav-section">
        <div className="container">
          <div className="section-header">
            <h3 className="heading">{title}</h3>
            <h4 className="subheading">{subtitle}</h4>
          </div>
          <div className="portfolio-grida">
            <Slider {...settings}>
              {data &&
                data.map((project, index) => {
                  return (
                    <div className="portfolio-item" key={index}>
                      <div className="image-wrapper">
                        <img
                          src={project.image}
                          alt=""
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="title-wrapper">
                        <h2>{project.title}</h2>
                      </div>
                      {getType === TYPE_CLIENT && (
                        <div className="desc-wrapper">
                          <p>{project.desc}</p>
                        </div>
                      )}
                      {getType === TYPE_PERSONAL && (
                        <GetStacks skillType={project.skillType} />
                      )}

                      <div
                        className={`link-wrapper ${
                          project.github && project.demo ? "two" : "one"
                        }`}
                      >
                        {project.demo && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt"></i>{" "}
                            {getType === TYPE_PERSONAL
                              ? PROJECT_DEMO
                              : PROJECT_VISIT}
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github"></i> {PROJECT_GITHUB}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
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
