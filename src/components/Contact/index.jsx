import React from "react";
import "./index.scss";
import PDFfile from "../../assets/resume.pdf";
import {
  Grid,
  Typography,
  IconButton,
  Hidden,
  Container,
  Button,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import {
  PROFILE_LINKEDIN_2,
  PROFILE_LOADING,
  PROFILE_DOWNLOAD,
  PROFILE_CONTACT,
} from "../../constants/lang";

const fileName = "Stefaan_CV_092020.pdf";

function ContactSection({ data }) {
  const ViewContacts = ({ data: { email, linkedin, tel } }) => {
    return (
      <>
        <Grid container className="contact-links">
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h3">{PROFILE_CONTACT}</Typography>
          </Grid>
          <Grid item xs={4} sm={6} md={3}>
            <a href={`tel:${tel}`}>
              <Typography variant="h6">
                <IconButton>
                  <PhoneIcon />
                </IconButton>
                <br />
                <Hidden only="xs">{tel}</Hidden>
              </Typography>
            </a>
          </Grid>
          <Grid item xs={4} sm={6} md={3}>
            <a href={"mailto:" + email}>
              <Typography variant="h6">
                <IconButton>
                  <EmailIcon />
                </IconButton>
                <br />
                <Hidden only="xs">{email}</Hidden>
              </Typography>
            </a>
          </Grid>
          <Grid item xs={4} sm={6} md={3}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Typography variant="h6">
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <br />
                <Hidden only="xs">{PROFILE_LINKEDIN_2}</Hidden>
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <a href={PDFfile} download={fileName}>
              <Hidden only="xs">
                <Typography variant="h6">
                  <IconButton>
                    <CloudDownloadIcon />
                  </IconButton>
                  <br />
                  {PROFILE_DOWNLOAD}
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Button
                  variant="contained"
                  className="dl-btn"
                  startIcon={<CloudDownloadIcon />}
                >
                  {" "}
                  {PROFILE_DOWNLOAD}
                </Button>
              </Hidden>
            </a>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <div className="contact-section">
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          {data ? <ViewContacts data={data} /> : PROFILE_LOADING}
        </Grid>
      </Container>
    </div>
  );
}

export default ContactSection;
