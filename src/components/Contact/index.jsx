// import React from "react";
// import "./index.scss";
// import PDFfile from "../../assets/resume.pdf";
// import {
//   Grid,
//   Typography,
//   IconButton,
//   Hidden,
//   Container,
//   Button,
// } from "@material-ui/core";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneIcon from "@material-ui/icons/Phone";
// import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// import {
//   PROFILE_LINKEDIN_2,
//   PROFILE_LOADING,
//   PROFILE_DOWNLOAD,
//   PROFILE_CONTACT,
// } from "../../constants/lang";

// const fileName = "Stefaan_CV_092020.pdf";

// function ContactSection({ data }) {
//   const ViewContacts = ({ data: { email, linkedin, tel } }) => {
//     return (
//       <>
//         <Grid container className="contact-links">
//           <Grid item xs={12} sm={12} md={12}>
//             <Typography variant="h3">{PROFILE_CONTACT}</Typography>
//           </Grid>
//           <Grid item xs={4} sm={6} md={3}>
//             <a href={`tel:${tel}`}>
//               <Typography variant="h6">
//                 <IconButton>
//                   <PhoneIcon />
//                 </IconButton>
//                 <br />
//                 <Hidden only="xs">{tel}</Hidden>
//               </Typography>
//             </a>
//           </Grid>
//           <Grid item xs={4} sm={6} md={3}>
//             <a href={"mailto:" + email}>
//               <Typography variant="h6">
//                 <IconButton>
//                   <EmailIcon />
//                 </IconButton>
//                 <br />
//                 <Hidden only="xs">{email}</Hidden>
//               </Typography>
//             </a>
//           </Grid>
//           <Grid item xs={4} sm={6} md={3}>
//             <a href={linkedin} target="_blank" rel="noopener noreferrer">
//               <Typography variant="h6">
//                 <IconButton>
//                   <LinkedInIcon />
//                 </IconButton>
//                 <br />
//                 <Hidden only="xs">{PROFILE_LINKEDIN_2}</Hidden>
//               </Typography>
//             </a>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <a href={PDFfile} download={fileName}>
//               <Hidden only="xs">
//                 <Typography variant="h6">
//                   <IconButton>
//                     <CloudDownloadIcon />
//                   </IconButton>
//                   <br />
//                   {PROFILE_DOWNLOAD}
//                 </Typography>
//               </Hidden>
//               <Hidden smUp>
//                 <Button
//                   variant="contained"
//                   className="dl-btn"
//                   startIcon={<CloudDownloadIcon />}
//                 >
//                   {" "}
//                   {PROFILE_DOWNLOAD}
//                 </Button>
//               </Hidden>
//             </a>
//           </Grid>
//         </Grid>
//       </>
//     );
//   };

//   return (
//     <div className="contact-section">
//       <Container maxWidth="lg">
//         <Grid container spacing={0}>
//           {data ? <ViewContacts data={data} /> : PROFILE_LOADING}
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default ContactSection;
import React from "react";

const Index = ({ data }) => {
  return (
    <div className="nav-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h3 className="heading">Contact</h3>
          <h4 className="subheading">Get in touch with me</h4>
        </div>
        <div className="inner-content">
          {/* <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos harum rem suscipit quos quod enim odit, minima nisi
              assumenda. Repellat delectus tenetur sapiente vel architecto sequi
              officia, fuga maxime soluta?
            </p>
            <div className="social-icons">
              <ul>
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="contact-info">
            {data.email && (
              <div className="contact-block">
                <div className="icon-wrapper">
                  <a href={`mailto:${data.email}`}>
                    <i className="fa fa-fw fa-envelope"></i>
                  </a>
                </div>
                <div className="details">
                  <a href={`mailto:${data.email}`}>
                    <h5 className="heading">Email</h5>
                    <span>{data.email}</span>
                  </a>
                </div>
              </div>
            )}
            {data.tel && (
              <div className="contact-block">
                <div className="icon-wrapper">
                  <a href={`tel:${data.tel}`}>
                    <i className="fa fa-fw fa-phone"></i>
                  </a>
                </div>
                <div className="details">
                  <a href={`tel:${data.tel}`}>
                    <h5 className="heading">Call me</h5>
                    <span>{data.tel}</span>
                  </a>
                </div>
              </div>
            )}
            {data.linkedin && (
              <div className="contact-block">
                <div className="icon-wrapper">
                  <a
                    href={`${data.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-fw fa-linkedin"></i>
                  </a>
                </div>
                <div className="details">
                  <a
                    href={`${data.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="heading">See me on</h5>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            )}
            {data.github && (
              <div className="contact-block">
                <div className="icon-wrapper">
                  <a
                    href={`${data.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-fw fa-github"></i>
                  </a>
                </div>
                <div className="details">
                  <a
                    href={`${data.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="heading">Check out my</h5>
                    <span>Github</span>
                  </a>
                </div>
              </div>
            )}
            {/* {data.location && (
              <div className="contact-block">
                <div className="icon-wrapper">
                  <i className="fa fa-fw fa-map-marker-alt"></i>
                </div>
                <div className="details">
                  <h5 className="heading">Location</h5>
                  <span>{data.location}</span>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
