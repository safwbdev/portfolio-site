import React from "react";
import "./index.scss";
import { Grid, Chip, Typography } from "@material-ui/core";

function Skills({ title, data }) {
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
}
export default Skills;
