import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const Index = ({ data, getType, title, subtitle }) => {
  let settings;
  if (getType === TYPE_PERSONAL) {
    settings = PERSONAL_PROJECT_SETTINGS;
  } else if (getType === TYPE_CLIENT) {
    settings = CLIENT_PROJECT_SETTINGS;
  }

  const SectionHeader = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="section-header"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <h3 className="heading">{title}</h3>
        <h4 className="subheading">{subtitle}</h4>
      </motion.div>
    );
  };
  const GetStacks = ({ skillType }) => {
    return (
      <div className="stack-wrapper">
        {skillType &&
          skillType.map(({ icon, name }, index) => {
            const content = (
              <>
                <i className={icon}></i>
                <>{name}</>
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
      <div className="portfolio-item">
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
  const GetSlides = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <Slider {...settings}>
          {data &&
            data.map((project, index) => {
              return <ProjectBox key={index} data={project} />;
            })}
        </Slider>
      </motion.div>
    );
  };
  return (
    <>
      <div className="nav-section">
        <div className="container">
          <SectionHeader />
          <GetSlides />
        </div>
      </div>
    </>
  );
};
export default Index;
