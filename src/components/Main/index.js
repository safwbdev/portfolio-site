import React, { useEffect } from "react";
import Social from "../Social";

import {
  titleVariants,
  subTitleVariants,
  socialVariants1,
} from "../../constants/variants";
import {
  CV_FILE_NAME,
  MAIN_BACKGROUND,
  CV_FILE_DOWNLOAD,
} from "../../constants/assets";
import {
  PROFILE_TITLE,
  PROFILE_SUBTITLE,
  PROFILE_GREETING,
  PROFILE_DOWNLOAD,
} from "../../constants/lang";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = ({ data }) => {
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
        <h3 className="heading">{PROFILE_TITLE}</h3>
        <h4 className="subheading">{PROFILE_SUBTITLE}</h4>
      </motion.div>
    );
  };

  const Main = () => {
    return (
      <section className="hero" style={MAIN_BACKGROUND}>
        <div className="inner-text">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {data.name}
          </motion.h1>
          <motion.h2
            variants={subTitleVariants}
            initial="hidden"
            animate="visible"
          >
            {data.role}
          </motion.h2>
        </div>
        <motion.span
          variants={socialVariants1}
          initial="hidden"
          animate="visible"
        >
          <Social data={data} />
        </motion.span>
      </section>
    );
  };

  const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <section className="nav-section" id="about">
        <div className="container">
          <SectionHeader />
          <motion.div
            className="about-content"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 300 },
            }}
          >
            <div className="image-wrapper">
              <img
                src={data.image}
                alt={PROFILE_SUBTITLE}
                width="100%"
                height="100%"
              />
            </div>
            <div className="text-content">
              <h3 className="content-heading">{PROFILE_GREETING}</h3>
              <p>{data.desc}</p>
              <hr />
              <div className="text-content-footer">
                <div className="button-wrapper">
                  <a
                    href={CV_FILE_DOWNLOAD}
                    download={CV_FILE_NAME}
                    className="primary-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PROFILE_DOWNLOAD}
                  </a>
                </div>
                <Social data={data} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Main />
      <About />
    </>
  );
};

export default Index;
