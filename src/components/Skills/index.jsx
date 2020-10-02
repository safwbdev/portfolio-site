import React from "react";
import "./index.scss";
import { Chip, Typography, Container, Grid } from "@material-ui/core";

function Skills({ skillData }) {
  const SkillSection = ({ title, data }) => {
    return (
      <Grid item xs={12} className="skill-box">
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        {data &&
          data.map((data, index) => {
            const content = (
              <span>
                <i className={data.icon}></i> <>{data.name}</>
              </span>
            );
            return (
              <Chip
                key={index}
                size="medium"
                label={content}
                className={data.type}
              ></Chip>
            );
          })}
      </Grid>
    );
  };
  return (
    <Container maxWidth="lg" className="skill-section">
      <Grid container spacing={2}>
        <Grid item xs={12} className="skill-box">
          <Typography variant="h4" component="h4">
            Skills
          </Typography>
          {skillData &&
            skillData.map(({ title, data }, index) => {
              return <SkillSection key={index} title={title} data={data} />;
            })}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Skills;
