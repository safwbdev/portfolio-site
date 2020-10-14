import React from "react";
import desc_image from "./../../assets/images/desc_bg.jpeg";
import Social from "../Social";
import PDFfile from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import {
  titleVariants,
  subTitleVariants,
  socialVariants1,
} from "../../constants/variants";
const cvFileName = "Stefaan_CV_092020.pdf";
const descbgStyle = { backgroundImage: `url(${desc_image})` };

export const index = ({ data }) => {
  return (
    <>
      <section className="hero" style={descbgStyle}>
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
            <h3 className="heading">About Me</h3>
            <h4 className="subheading">Get To Know Me</h4>
          </div>
          <div className="about-content">
            <div className="image-wrapper">
              <img src={data.image} alt="" />
            </div>
            <div className="text-content">
              <h3 className="content-heading">Hello there</h3>
              <p>{data.desc}</p>
              <hr />
              <div className="text-content-footer">
                <div className="button-wrapper">
                  <a
                    href={PDFfile}
                    download={cvFileName}
                    className="primary-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
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
