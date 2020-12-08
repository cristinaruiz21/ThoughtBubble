import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


import { Row, Container } from "../../components/Grid";
import "./Signup.css"
import logo from "../Assets/bubble-logo.png";




import axios from 'axios'
class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
					console.log('successful signup')
					// this.setState({ //redirect to login page
					// 	redirectTo: '/home'
					// })
				} else {
					console.log("username is already taken")
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


// render() {
// 	if (this.state.redirectTo) {
// 		return <Redirect to={{ pathname: this.state.redirectTo}} />
// 	}

// 	return (
// 		<div className="SignupForm">
// 			<h4>Sign up</h4>
// 			<form className="form-horizontal">
// 				<div className="form-group">
// 					<div className="col-1 col-ml-auto">
// 						<label className="form-label" htmlFor="username">Username</label>
// 					</div>
// 					<div className="col-3 col-mr-auto">
// 						<input className="form-input"
// 							type="text"
// 							id="username"
// 							name="username"
// 							placeholder="Username"
// 							value={this.state.username}
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group">
// 					<div className="col-1 col-ml-auto">
// 						<label className="form-label" htmlFor="password">Password: </label>
// 					</div>
// 					<div className="col-3 col-mr-auto">
// 						<input className="form-input"
// 							placeholder="password"
// 							type="password"
// 							name="password"
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group ">
// 					<div className="col-7"></div>
// 					<button
// 						className="btn btn-primary col-1 col-mr-auto"
// 						onClick={this.handleSubmit}
// 						type="submit"
// 					>Sign up</button>
// 				</div>
// 				<p className="text-center text-muted">Or if you have an existing account log in <a href="/">here</a></p>

// 			</form>
// 		</div>

// 	)
// }
// }
render() {
	return (
		<Container>
			<Row>
				<div className="signupCard">
					<div className="card col-md-10 mx-auto col-md-offset-3">
						<h2 className="text-center">Sign Up</h2>
						<div>
							<img className="logo" src={logo} alt="bubble-logo" />
						</div>
						<h6 class="text-muted text-center">Enter a valid first name, last name, password and email address</h6>
						<form>

							<div className="form-group">
								<label for="InputEmail"></label>
								<input type="text" class="form-control"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-group">
								<label for="InputPassword"></label>
								<input type="password" className="form-control" id="password-input" placeholder="Password" name="password"

									value={this.state.password}
									onChange={this.handleChange} />
							</div>
							<div className="text-center">
								<button type="submit" className="btn-primary text-center" onClick={this.handleSubmit}>Sign Up!</button>
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

export default Signup
