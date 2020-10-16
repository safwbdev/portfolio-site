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

  const ProjectBox = ({
    data: { image, title, desc, skillType, github, demo },
  }) => {
    return (
      <div className="portfolio-item" key={index}>
        <div className="image-wrapper">
          <img src={image} alt="" width="100%" height="100%" />
        </div>
        <div className="title-wrapper">
          <h2>{title}</h2>
        </div>
        {getType === TYPE_CLIENT && (
          <div className="desc-wrapper">
            <p>{desc}</p>
          </div>
        )}
        {getType === TYPE_PERSONAL && <GetStacks skillType={skillType} />}

        <div className={`link-wrapper ${github && demo ? "two" : "one"}`}>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>{" "}
              {getType === TYPE_PERSONAL ? PROJECT_DEMO : PROJECT_VISIT}
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> {PROJECT_GITHUB}
            </a>
          )}
        </div>
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
                  return <ProjectBox key={index} data={project} />;
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
