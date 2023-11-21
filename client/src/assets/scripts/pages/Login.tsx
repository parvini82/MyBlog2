import React from "react"
import LoginImg from '../../images/account.png'

export default function Login() {
	return (
		<>
			<section className="loginPage">
				<div className="loginBox">
					<div className="loginContent">
						<div className="loginTitle">
							<img src={LoginImg}></img>
						</div>

						<div className="emailInput">
							<input placeholder="Email"></input>
						</div>

						<div className="passwordInput">
							<input placeholder="Password" />
						</div>

						<p>
							<a href="#!">Forgot password?</a>
						</p>

						<button type="submit" className="loginButton" onClick={loginButtonClicked}>Login</button>

						<div>
							<a href="#!">
								<i></i>
							</a>
							<a href="#!">
								<i></i>
							</a>
							<a href="#!">
								<i></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
function loginButtonClicked(){

}
