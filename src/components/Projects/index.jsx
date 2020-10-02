import React from "react";
import {
  Grid,
  Container,
  Typography,
  Hidden,
  // IconButton,
  //   Hidden,
} from "@material-ui/core";
import ProjectBox from "./ProjectBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  PERSONAL_PROJECT_SETTINGS,
  CLIENT_PROJECT_SETTINGS,
} from "../../constants/sliderSettings";
import { TYPE_CLIENT, TYPE_PERSONAL } from "../../constants/types";
import "./index.scss";

function Projects({ title, data, subtitle, getType }) {
  const newTitle =
    getType === TYPE_PERSONAL ? title + "(" + data.length + ")" : title;
  let settings;
  if (getType === TYPE_PERSONAL) {
    settings = PERSONAL_PROJECT_SETTINGS;
  } else if (getType === TYPE_CLIENT) {
    settings = CLIENT_PROJECT_SETTINGS;
  }

  const ProjectSlider = (projectData) => {
    // console.log(getType);
    return (
      <Slider {...settings}>
        {projectData &&
          projectData.map((data, index) => {
            return <ProjectBox key={index} data={data} getType={getType} />;
          })}
      </Slider>
    );
  };

  return (
    <div className="project-section">
      <Grid item xs={12} className="skill-box">
        {/* <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 300 },
          }}
        > */}
        <Typography variant="h4" component="h4">
          {newTitle}
        </Typography>
        {/* </motion.div> */}
      </Grid>
      <Hidden only="xs">
        <Container maxWidth="lg">
          <Grid container spacing={0} className="project-slider">
            {ProjectSlider(data)}
          </Grid>
        </Container>
      </Hidden>
      <Hidden smUp>
        <Grid container spacing={0} className="project-slider">
          {ProjectSlider(data)}
        </Grid>
      </Hidden>
      <Grid container>
        <Grid item xs={12} />
        <br />
        <br />
        <Grid item xs={12} align="center">
          <Typography variant="body2">{subtitle}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Projects;
