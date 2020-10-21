import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_TITLE } from "../../constants/lang";
const Index = ({ skillData }) => {
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
        <h3 className="heading">{SKILL_TITLE}</h3>
      </motion.div>
    );
  };
  const SkillSection = ({ title, data }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="skill-content"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <h4>{title}</h4>
        {data &&
          data.map(({ icon, name }, index) => {
            const content = (
              <span>
                <i className={icon}></i> <>{name}</>
              </span>
            );
            return (
              <span key={index} className="stack">
                {content}
              </span>
            );
          })}
      </motion.div>
    );
  };
  return (
    <>
      <section className="nav-section" id="skills">
        <div className="container">
          <SectionHeader />
          <div className="skill-section">
            {skillData &&
              skillData.map(({ title, data }, index) => {
                return <SkillSection key={index} title={title} data={data} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
