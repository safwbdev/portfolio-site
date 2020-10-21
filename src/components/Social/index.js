import React from "react";
const index = ({ data }) => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", url: null },

    { icon: "fab fa-twitter", url: null },

    { icon: "fab fa-instagram", url: null },

    { icon: "fab fa-linkedin", url: data.linkedin },

    { icon: "fab fa-github", url: data.github },
  ];
  return (
    <div className="social-icons">
      <ul>
        {socialLinks &&
          socialLinks.map(({ url, icon }, index) => {
            if (url) {
              return (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
};
export default index;
