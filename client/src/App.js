import React from "react";
import {BrowserRouter as Router , Route} from  "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login.js"
// import CardContainer from './components/CardContainer'
// import Footer from './components/Footer'
import Signup from "./pages/Signup.js"
import Fitness from "./pages/Fitness"
import Food from "./pages/Food"
import Thoughts from "./pages/Thoughts"

function App(){
  return (
    <Router>
      <div>
        <Navbar />
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/home/fitness" component={Fitness}/>
      <Route exact path="/home/food" component={Food}/>
      <Route exact path="/home/thoughts" component={Thoughts}/>

      {/* <Footer/> */}
      </div>

    </Router>
  )
}
export default App