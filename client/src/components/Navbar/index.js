import React, { Component } from "react"
import {Link} from "react-router-dom";
import "./style.css"

class Navbar extends Component{
  render()
  {
    console.log(this.props)

    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a class="navbar-brand" href="/home">Thought Bubble</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
    
        {/* <li className="nav-item">
            <Link
              to="/home"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            Home
            </Link>
          </li>
          <li class="nav-item ">
            <Link className="navbar-brand" to="/bubbleform" > TestingBubbleF</Link>
            </li>
          <li className="nav-item">
            <Link
              to="/bubbleform"
              className={window.location.pathname === "/bubbleform" ? "nav-link active" : "nav-link"}
            >
              BubbleForm
            </Link>
          </li>
      
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
           
          </li> */}
          <li class="nav-item ">
            <Link className="navbar-brand" to="/home" >Home</Link>

            </li>
            <li class="nav-item ">
            <Link className="navbar-brand" to="/bubbleform" > BubbleForm</Link>

            </li>
            <li class="nav-item ">
            <Link className="navbar-brand" to="/login" onClick={this.props.logout} > Logout</Link>

            </li>
       </ul>
       </div>
      </nav>
    )
        }
}
export default Navbar