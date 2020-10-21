import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { EDUCATION_TITLE } from "../../constants/lang";

const Index = ({ data }) => {
  let settings = WORK_SETTINGS;

  const EduBox = ({ data: { image, endYear, field, name, location } }) => {
    return (
      <div className="edu-item">
        <div className="image-side">
          <div className="image-wrapper">
            <img src={image} alt="" width="100%" height="100%" />
          </div>
        </div>
        <div className="detail-side">
          <div className="title-wrapper">
            <div className="title">
              <h2 className="yearField">
                {endYear} <span>|</span> {field}
              </h2>
              <h2 className="institute">{name}</h2>
              <h2 className="location">{location}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const EduDesktop = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="edu-grid"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        {data &&
          data.map((edu, index) => {
            return <EduBox data={edu} key={index} />;
          })}
      </motion.div>
    );
  };
  const EduMobile = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="edu-slider"
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
            data.map((edu, index) => {
              return <EduBox data={edu} />;
            })}
        </Slider>
      </motion.div>
    );
  };
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
        <h3 className="heading">{EDUCATION_TITLE}</h3>
      </motion.div>
    );
  };

  return (
    <>
      <div className="nav-section" id="education">
        <div className="container">
          <SectionHeader />
          <EduDesktop />
          <EduMobile />
        </div>
      </div>
    </>
  );
};
export default Index;
