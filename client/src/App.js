import React from "react";
import {BrowserRouter as Router , Route} from  "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import './App.css';
import Login from "./pages/Login/Login.js"
import Signup from "./pages/Signup/Signup.js"
import Fitness from "./pages/Fitness"
import Food from "./pages/Food"
import Thoughts from "./pages/Thoughts"
import BubbleForm from "./pages/BubbleForm/BubbleForm.js"



function App(){
  return (
    <Router>
      <div>
        <Navbar />
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/bubbleform" component={BubbleForm}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/home/fitness" component={Fitness}/>
      <Route exact path="/home/food" component={Food}/>
      <Route exact path="/home/thoughts" component={Thoughts}/>
      <Footer />
      </div>

    </Router>
  )
}
export default App;