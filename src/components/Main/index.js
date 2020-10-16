import React from "react";
import Social from "../Social";
import { motion } from "framer-motion";
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

export const index = ({ data }) => {
  return (
    <>
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
      <section className="nav-section" id="about">
        <div className="container">
          <div className="section-header">
            <h3 className="heading">{PROFILE_TITLE}</h3>
            <h4 className="subheading">{PROFILE_SUBTITLE}</h4>
          </div>
          <div className="about-content">
            <div className="image-wrapper">
              <img
                src={data.image}
                alt={PROFILE_SUBTITLE}
                width="100"
                height="100"
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
          </div>
        </div>
      </section>
    </>
  );
};
export default index;
