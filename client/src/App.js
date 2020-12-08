// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import './App.css';
import Login from "./pages/Login/Login.js"
import Signup from "./pages/Signup/Signup.js"

import Thoughts from "./pages/Thoughts"
import BubbleForm from "./pages/BubbleForm/BubbleForm.js"
import Welcome from "./pages/Welcome"

import React, { Component } from 'react';
import axios from 'axios'

import Home from "./pages/Home"

class App extends Component {
  // constructor() {
  //   super()
  state = {
    loggedIn: false,
    username: null
  }

  // this.getUser = this.getUser.bind(this)
  // this.componentDidMount = this.componentDidMount.bind(this)
  // this.updateUser = this.updateUser.bind(this)
  // }

  componentDidMount() {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
    window.location.href ="/"

  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  logoutUser = () => {
    axios.post('/user/logout').then(response =>{
      this.setState({
        loggedIn: false,
        username: null

      },
      window.location.href ="/"
      )
    }).catch(err=>console.log(err))
  
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar logout={this.logoutUser} loggedIn={this.state.loggedIn} />

        
          {this.state.loggedIn ?(
  <div>
  <Switch>
    <Route exact from="/" to="/home" component={Home} />
    <Route exact path="/home" component={Home} />

    <Route exact path="/bubbleform/:category" component={BubbleForm} />
    <Route path="/home/:category" component={Thoughts} />
  </Switch>

</div>
          ):(
            <Switch>
            <Route
           exact path="/"
            render={() =>
              <Login
                updateUser={this.updateUser}
              />}
          />
          <Route
           exact path="/signup"
            render={() =>
              <Signup  updateUser={this.updateUser}

              />}
          />
             </Switch>
          )

          

          }
        

          



        </div>
     </Router>
    );
  }
}

export default App;