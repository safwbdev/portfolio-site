import React from "react";
import { Typography, Card, CardContent, Hidden } from "@material-ui/core";

const EducationBox = ({ data }) => {
  const { image, endYear, field, name, location } = data;
  return (
    <div className="edu-box">
      <Card>
        <CardContent className="edu-content">
          <img alt="" src={image} className="edu-img" />
          <div className="block">
            <Typography component="h6" variant="h6">
              {endYear} <i className="fas fa-graduation-cap "></i>{" "}
              <Hidden smUp>
                <br />
              </Hidden>
              {field}
            </Typography>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="subtitle2">{location}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default EducationBox;
