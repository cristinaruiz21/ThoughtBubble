import React from "react";
import {BrowserRouter as Router , Route} from  "react-router-dom";
import Home from "./pages/Home"
import Check from "./pages/checkout"
import Navbar from "./components/Navbar"
function App(){
  return (
    <Router>
      <div>
        <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/logout" component={Check}/>


      </div>
    </Router>
  )
}
export default App