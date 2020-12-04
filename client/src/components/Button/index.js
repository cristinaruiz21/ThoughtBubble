import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
}

export default Button;
