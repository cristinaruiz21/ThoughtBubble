import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  return (
    // <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
    //   {children}
    // </button>
    <button type="button" className="btn btn-primary btn-lg btn-block text-center">{props.children}</button>
  );
}

export default Button;
