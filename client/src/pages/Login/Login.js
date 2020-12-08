import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import logo from "../Assets/bubble-logo.png";
import { Card, Container, Row } from "react-bootstrap";


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            error: false,

            redirectTo: null,
            

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')

                this.setState({
                    error: true
                  })
                  

                
            })
    }

//     render() {
//         if (this.state.redirectTo) {
//             return <Redirect to={{ pathname: this.state.redirectTo}} />
//         } else {
//             return (
//                 <div>
//                     <h4>Login</h4>
//                     <form className="form-horizontal">
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="username">Username</label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     type="text"
//                                     id="username"
//                                     name="username"
//                                     placeholder="Username"
//                                     value={this.state.username}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="password">Password: </label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     placeholder="password"
//                                     type="password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group ">
//                             <div className="col-7"></div>
//                             <button
//                                 className="btn btn-primary col-1 col-mr-auto"
                               
//                                 onClick={this.handleSubmit}
//                                 type="submit">Login</button>

//                         </div>
//                         {this.state.error && <div className=" errormsg col-md-6 offset-md-3 ">Invalid Credentials, Please Try again!!</div>}

//                     </form>
//                 </div>
//             )
//         }
//     }
// }
render() {
    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
        return (
            <Container>
                <Card className="loginCard border-primary col-md-8 offset-md-2">
                    <Row>
                        <div className="greetingWrapper col-6">
                        <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <h4 className="thoughtBubbleTitle">Welcome to Thought Bubble!</h4>
                            <div className="greetingText">
                                <p className="p-2"> Thought bubble is an online journal that
                                lets you keep track of day to day tasks as well as express
                                your thoughts with a click of a button!
                                </p>
                                <p>
                                    Sign up to start your bubble entries!
                                </p>
                                <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            </div>
                        </div>

                        <div className="loginWrapper col-6">

                            <h4 className="loginTitle">Login</h4>

                            <div className="logoDiv">
                                <img className="logo" src={logo} alt="bubble-logo"></img>
                            </div>
                            <div className="promptText">
                                <h6>Log in with your email and password that you entered during sign up</h6>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="InputEmail"></label>
                                    <input type="text"
                                        className="form-input"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div classname="form-group">
                                    <label htmlFor="InputPassword"></label>
                                    <input type="password"
                                        className="form-input"
                                        name="password"
                                        id="password-input"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="Loginbutton">
                                    <button
                                        className="btn btn-primary text-center"
                                        onClick={this.handleSubmit}
                                        type="submit">Login</button>
                                </div>
                                {this.state.error && <div className=" errormsg col-md-6 offset-md-3 ">Invalid Credentials, Please Try again!!</div>}

                            </form>
                            <div className=" text-align-center signupText">
                                <p className="text- align-center text-muted">Or if you dont have an account sign up <a href="/signup">here</a></p>
                            </div>
                        </div>
                    </Row>
                </Card>
            </Container>

        )
    }
}
}

export default LoginForm
