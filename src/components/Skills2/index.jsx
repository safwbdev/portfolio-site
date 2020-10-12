import React from "react";

export const index = ({ skillData }) => {
  const SkillSection = ({ title, data }) => {
    return (
      <div className="skill-content">
        <h4>{title}</h4>
        {data &&
          data.map((data, index) => {
            const content = (
              <span>
                <i className={data.icon}></i> <>{data.name}</>
              </span>
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
      <section className="nav-section" id="skills">
        <div className="container">
          <div className="section-header">
            <h3 className="heading">Skills</h3>
          </div>
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
export default index;
