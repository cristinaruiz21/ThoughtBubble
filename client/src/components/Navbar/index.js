import React from "react"
import {Link} from "react-router-dom";
import "./style.css"

function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a class="navbar-brand" href="/home">Thought Bubble</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
    
          <li class="nav-item ">
            <Link className="navbar-brand" to="/home" >Home</Link>

            </li>
            <li class="nav-item ">
            <Link className="navbar-brand" to="/bubbleform" > BubbleForm</Link>

            </li>
            <li class="nav-item ">
            <Link className="navbar-brand" to="/login" > Logout</Link>

            </li>
       </ul>
       </div>
      </nav>
    )
}
export default Navbar