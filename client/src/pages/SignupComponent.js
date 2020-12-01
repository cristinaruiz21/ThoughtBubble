import React from "react";
 import logo from "../Assets/bubble-logo.png";


 function SignupComponent() {
    return (
        <div className="container">
            <div className="row">
                <div id="signupCard" className="form-inline justify-content-center card col-md-6 mx-auto col-md-offset-3 text-dark">
                    <div id="signupBody">
                        <div>
                            <img src={logo} alt="bubble-logo" />
                        </div>
                        <h2 className="text-center">Sign Up</h2>
                        <h6 class="text-muted">Enter a valid first name, last name, password and email address</h6>
                        <form className="signup justify-content-center">
                            <div className="form-group justify-content-center">
                                <label for="InputFirstName">First Name</label>
                                <input type="first-name" class="form-control" id="first-name-input" placeholder="FirstName" />
                            </div>
                            <div class="form-group justify-content-center">
                                <label for="InputLastName">Last Name</label>
                                <input type="last-name" class="form-control" id="last-name-input" placeholder="LastName" />
                            </div>
                            <div class="form-group justify-content-center">
                                <label for="InputEmail">Email address</label>
                                <input type="email" class="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div class="form-group justify-content-center">
                                <label for="InputPassword">Password</label>
                                <input type="password" class="form-control" id="password-input" placeholder="Password" />
                            </div>
                                <button type="submit" className="btn-primary justify-content-center">Sign Up!</button>
                        </form>
                        <p class="text-muted">Or if you have an existing account log in <a href="/">here</a></p>

                    </div>
                    </div>
                </div>
            </div>
    )
}

export default SignupComponent