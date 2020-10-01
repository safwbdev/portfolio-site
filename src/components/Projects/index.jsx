import React from "react";
function Projects({ title, data, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      {data &&
        data.map((data, index) => {
          return <div key={index}>{data.title}</div>;
        })}
      <p>{subtitle}</p>
    </div>
  );
}
export default Projects;
