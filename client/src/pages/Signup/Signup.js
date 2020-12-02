import React, { Component } from 'react'
import logo from "../Assets/bubble-logo.png";
import { Row, Container } from "../../components/Grid";
import "./Signup.css"

class Signup extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="signupCard">
                        <div className="card col-md-6 mx-auto col-md-offset-3">
                        <h2 className="text-center">Sign Up</h2>
                            <div>
                                <img className="logo" src={logo} alt="bubble-logo" />
                            </div>
                            <h6 class="text-muted text-center">Enter a valid first name, last name, password and email address</h6>
                            <form>
                                <div className="form-group">
                                    <label for="InputFirstName"></label>
                                    <input type="first-name" class="form-control" id="first-name-input" placeholder="FirstName" />
                                </div>
                                <div className="form-group">
                                    <label for="InputLastName"></label>
                                    <input type="last-name" class="form-control" id="last-name-input" placeholder="LastName" />
                                </div>
                                <div className="form-group">
                                    <label for="InputEmail"></label>
                                    <input type="email" class="form-control" id="email-input" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="InputPassword"></label>
                                    <input type="password" class="form-control" id="password-input" placeholder="Password" />
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn-primary text-center">Sign Up!</button>
                                </div>
                            </form>
                            <p className="text-center text-muted">Or if you have an existing account log in <a href="/">here</a></p>

                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Signup;