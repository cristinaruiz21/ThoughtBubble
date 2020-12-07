// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home"
import Navbar from "./components/Navbar"
// import Footer from './components/Footer'
import './App.css';
import Login from "./pages/Login/Login.js"
import Signup from "./pages/Signup/Signup.js"
// // import Fitness from "./pages/Fitness"
// // import Food from "./pages/Food"
import Thoughts from "./pages/Thoughts"
import BubbleForm from "./pages/BubbleForm/BubbleForm.js"
// import Check from "./pages/Check"

// function App(){
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Check />
//       <Route exact path="/" component={Login}/>
//       <Route exact path="/home" component={Home}/>
//       <Route exact path="/login" component={Login}/>
//       <Route exact path="/bubbleform/:category" component={BubbleForm}/>
//       <Route exact path="/bubbleform/" component={BubbleForm}/>

//       <Route exact path="/signup" component={Signup}/>
//       {/* <Route exact path="/home/fitn" component={Fitness}/>
//       <Route exact path="/home/:category" component={Food}/> */}
//       <Route exact path="/home/:category" component={Thoughts}/>
//       <Footer />
//       </div>

//     </Router>
//   )
// }
// export default App;
import React, { Component } from 'react';
import axios from 'axios'
// import { Route, Link } from 'react-router-dom'
// components
// import Signup from './components/sign-up'
// import LoginForm from './components/login-form'
// import Navbar from './components/navbar'
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
    this.setState({
      loggedIn: false,
      username: null
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar logout={this.logoutUser} />
          <Switch >
            {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> */}
            {/* greet user if logged in: */}
            {this.state.loggedIn &&

              <div>
                <Switch>
                  <Route exact from="/" to="/home" component={Home} />
                  <Route exact path="/home" component={Home} />

                  <Route exact path="/bubbleform/:category" component={BubbleForm} />
                  <Route exact path="/bubbleform/" component={BubbleForm} />
                  <Route path="/home/:category" component={Thoughts} />
                  <Route exact path="/signup" component={Signup} />
                </Switch>

              </div>

            }
            <Route
              path="/"
              render={() =>
                <Login
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path="/signup"
              render={() =>
                <Signup />}
            />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
