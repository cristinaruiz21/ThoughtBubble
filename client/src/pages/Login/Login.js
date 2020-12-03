import React, { Component } from 'react'
import logo from "../Assets/bubble-logo.png";
import { Row, Container } from "../../components/Grid";
import "./Login.css"


class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="loginCard">
                        <div className="card col-md-6 mx-auto col-md-offset-3">
                        <h2 className="text-center">Thought Bubble</h2>
                            <div>
                                <img className="logo" src={logo} alt="bubble-logo" />
                            </div>
                            <h6 className="text-muted text-center">Log in with your email and password that you entered during sign up</h6>
                            <form>
                                <div className="form-group">
                                    <label for="InputEmail"></label>
                                    <input type="email" class="form-control" id="email-input" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="InputPassword"></label>
                                    <input type="password" class="form-control" id="password-input" placeholder="Password" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn-primary text-center" id="submit">Login</button>
                                </div>
                            </form>
                            <div className="text-center">
                                <p className="text-muted">Or if you dont have an account sign up <a href="/signup">here</a></p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>

        )
    }
}
export default Login