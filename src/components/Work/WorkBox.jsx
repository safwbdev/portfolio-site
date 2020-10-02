import React from "react";
import { Typography, Card, CardContent, Hidden } from "@material-ui/core";
import moment from "moment";
import WorkDialog from "./WorkDialog";

const WorkBox = ({
  data: { image, startDate, endDate, name, location, role, desc },
}) => {
  const getWorkDate = (date) => {
    const d = new Date(date);
    const newDate = moment(d).format("MMM YYYY");
    return newDate;
  };
  return (
    <div className="work-box">
      <Card>
        <CardContent className="work-content">
          <img alt="" src={image} className="work-img" />
          <div className="block">
            <Typography component="h6" variant="h6">
              {role}
            </Typography>
            <Typography variant="subtitle1" className="company">
              {name}
            </Typography>
            <Typography variant="subtitle1" className="">
              {getWorkDate(startDate)} - {getWorkDate(endDate)}
            </Typography>
            <Typography variant="subtitle2">{location}</Typography>
            <Hidden only="xs">
              <ul className="desc-list">
                {desc.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
              </ul>
            </Hidden>
            <Hidden smUp>
              <br />
              <WorkDialog name={name} tasks={desc} />
            </Hidden>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default WorkBox;
