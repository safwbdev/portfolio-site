import React from "react";
function Work({ title, data }) {
  return (
    <div>
      <h1>Work</h1>
      {data &&
        data.map((data, index) => {
          return <div key={index}>{data.name}</div>;
        })}
    </div>
  );
}
export default Work;
