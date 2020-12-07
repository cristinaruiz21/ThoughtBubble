import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Jumbotron(props) {
  return (
    <jumbotron className={props.className}>
      {props.children}
    </jumbotron>
  );
}

export default Jumbotron;