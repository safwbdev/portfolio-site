import React from "react";
function Skills({ title, data }) {
  return (
    <div>
      <h1>{title}</h1>
      {data &&
        data.map((data, index) => {
          return <div key={index}>{data.name}</div>;
        })}
    </div>
  );
}
export default Skills;
