import React from "react";
import "./index.scss";
import { Chip, Typography } from "@material-ui/core";

function Skills({ title, data }) {
  return (
    <>
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
    </>
  );
}
export default Skills;
