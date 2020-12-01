import React from "react";
import {BrowserRouter as Router , Route} from  "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login.js"
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'

function App(){
  return (
    <Router>
      <div>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <CardContainer/>

      <Footer/>
      </div>

    </Router>
  )
}
export default App