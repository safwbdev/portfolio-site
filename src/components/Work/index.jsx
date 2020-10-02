import React from "react";
import "./index.scss";
import WorkBox from "./WorkBox";
import { Grid, Typography, Hidden, Container } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { WORK_TITLE } from "../../constants/lang";

function Work({ title, data }) {
  const WorkList = (work) => {
    return (
      <>
        {work &&
          work.map((data, index) => {
            return (
              <Grid key={index} item xs={12} sm={12} md={6}>
                <WorkBox key={index} data={data} />
              </Grid>
            );
          })}
      </>
    );
  };

  const WorkSlider = (work) => {
    return (
      <Slider {...WORK_SETTINGS}>
        {work &&
          work.map((data, index) => {
            return <WorkBox key={index} data={data} />;
          })}
      </Slider>
    );
  };

  return (
    <div className="work-section">
      <Grid item xs={12} className="skill-box">
        <Typography variant="h4" component="h4">
          {WORK_TITLE}
        </Typography>
      </Grid>
      <Hidden only="xs">
        <Container maxWidth="lg">
          <Grid container spacing={0} className="work-slider">
            {WorkList(data)}
          </Grid>
        </Container>
      </Hidden>
      <Hidden smUp>
        <Grid container spacing={0} className="work-slider">
          {WorkSlider(data)}
        </Grid>
      </Hidden>
    </div>
  );
}
export default Work;
