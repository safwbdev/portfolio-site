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
