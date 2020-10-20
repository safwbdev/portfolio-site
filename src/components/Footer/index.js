import React from "react";
import Social from "../Social";

const Index = ({ data }) => {
  return (
    <footer>
      <div className="container">
        <div className="inner-content">
          <div className="left-content">&copy; {data.name}</div>
          <Social data={data} />
        </div>
      </div>
    </footer>
  );
};
export default Index;
