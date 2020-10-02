import React from "react";
import "./index.scss";
import desc_image from "./../../assets/desc_bg.jpeg";
import {
  Grid,
  Typography,
  IconButton,
  Hidden,
  Container,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  PROFILE_GITHUB,
  PROFILE_LINKEDIN,
  PROFILE_LOADING,
} from "../../constants/lang";

const descbgStyle = { backgroundImage: `url(${desc_image})` };

function ProfileSection({ data }) {
  const getProfile = ({
    email,
    github,
    image,
    linkedin,
    location,
    name,
    role,
    tel,
  }) => {
    return (
      <>
        <Grid item xs={12} sm={12} md={3} className="profile-image">
          <img src={image} alt="" className="profile" />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Grid container className="detail-links">
            <Grid item xs={12} className="titles">
              <Typography variant="h2">{name}</Typography>

              <Typography variant="h3">{role}</Typography>

              <Hidden smUp>
                <Typography variant="h6">
                  <IconButton>
                    <LocationOnIcon />
                  </IconButton>
                  {location}
                </Typography>
              </Hidden>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={tel}>
                <Typography variant="h6">
                  <IconButton className="link-btn">
                    <PhoneIcon />
                  </IconButton>
                  <Hidden only="xs">{tel}</Hidden>
                </Typography>
              </a>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={"mailto:" + email}>
                <Typography variant="h6">
                  <IconButton className="link-btn">
                    <EmailIcon />
                  </IconButton>
                  <Hidden only="xs">{email}</Hidden>
                </Typography>
              </a>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Typography variant="h6">
                  <IconButton className="link-btn">
                    <GitHubIcon />
                  </IconButton>
                  <Hidden only="xs">{PROFILE_GITHUB}</Hidden>
                </Typography>
              </a>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Typography variant="h6">
                  <IconButton className="link-btn">
                    <LinkedInIcon />
                  </IconButton>
                  <Hidden only="xs">{PROFILE_LINKEDIN}</Hidden>
                </Typography>
              </a>
            </Grid>
            <Hidden only="xs">
              <Grid item xs={12} sm={12} md={12} className="location">
                <Typography variant="h6">
                  <IconButton>
                    <LocationOnIcon />
                  </IconButton>
                  {location}
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </>
    );
  };

  function getDesc({ desc }) {
    return (
      <Grid item xs={12}>
        <Typography variant="h6">{desc}</Typography>
      </Grid>
    );
  }
  return (
    <div className="intro-section">
      <Container maxWidth="lg" className="profile-row">
        <Grid container spacing={0}>
          {data ? getProfile(data) : null}
        </Grid>
      </Container>

      <Grid container spacing={0} className="desc-section" style={descbgStyle}>
        <Container maxWidth="lg">
          {data ? getDesc(data) : PROFILE_LOADING}
        </Container>
      </Grid>
    </div>
  );
}

export default ProfileSection;
