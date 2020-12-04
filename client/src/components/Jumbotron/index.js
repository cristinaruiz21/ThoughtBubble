import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ background: "rgb(159, 187, 224)", color: "white"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
