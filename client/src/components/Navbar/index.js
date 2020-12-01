import React from "react"
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Thought Bubble
      </Link>
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            Home
            </Link>
          </li>
      
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
          </li>
       </ul>
       </div>
      </nav>
    )
}
export default Navbar