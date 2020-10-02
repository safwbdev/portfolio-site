import React from "react";
import { Grid, Container, Typography, Hidden } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import EducationBox from "./EducationBox";
import "./index.scss";
import { EDUCATION_SETTINGS } from "../../constants/sliderSettings";

function Educations({ title, data }) {
  const EducationList = (education) => {
    return (
      <>
        {education &&
          education.map((data, index) => {
            return (
              <Grid key={index} item xs={12} sm={6}>
                <EducationBox key={index} data={data} />
              </Grid>
            );
          })}
      </>
    );
  };
  // NOT IN THE RIGHT ORDER
  const EducationSlider = (education) => {
    return (
      <Slider {...EDUCATION_SETTINGS}>
        {education &&
          education.map((data, index) => {
            return <EducationBox key={index} data={data} />;
          })}
      </Slider>
    );
  };

  return (
    <div className="education-section">
      <Grid item xs={12} className="skill-box">
        <Typography variant="h4" component="h4">
          Education
        </Typography>
      </Grid>
      <Hidden only="xs">
        <Container maxWidth="lg">
          <Grid container spacing={0} className="edu-slider">
            {EducationList(data)}
          </Grid>
        </Container>
      </Hidden>
      <Hidden smUp>
        <Grid container spacing={0} className="edu-slider">
          {EducationSlider(data)}
        </Grid>
      </Hidden>
    </div>
  );
}
export default Educations;
