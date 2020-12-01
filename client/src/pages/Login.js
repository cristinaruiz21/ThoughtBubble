import React from "react";
import logo from "../Assets/bubble-logo.png";
import {Row, Col, Container} from "../components/Grid"
 function Login() {
    return (
        <Container>
            <Row>
                <div id="loginCard" className="form-inline justify-content-center card col-md-6 mx-auto col-md-offset-3 text-dark">
                    <div id="loginBody">
                        <div>
                            <img src={logo} alt="bubble-logo" />
                        </div>
                            <h2 className="text-center">Login</h2>
                            <h6 className="text-muted">Log in with your email and password that you entered during sign up</h6>
                        <form className="login justify-content-center">
                            <div className="form-group justify-content-center">
                                <label for="InputEmail">Email address</label>
                                    <input type="email" class="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div class="form-group justify-content-center">
                                <label for="InputPassword">Password</label>
                                    <input type="password" class="form-control" id="password-input" placeholder="Password"/>
                            </div>
                        <button type="submit" className="btn-primary justify-content-center" id="submit">Login</button>
                        </form>
                        <p className="text-muted">Or if you dont have an account sign up <a href="/signup">here</a></p>

                    </div>
                </div> 
            </Row>
        </Container>

)
}
export default Login