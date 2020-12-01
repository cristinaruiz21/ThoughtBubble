import React from "react";
import {BrowserRouter as Router , Route} from  "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login.js"
import CardContainer from './components/CardContainer'
import Signup from "./pages/Signup.js"

function App(){
  return (
    <Router>
      <div>
        <Navbar />
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      
      <CardContainer/>
      </div>
    </Router>
  )
}
export default App