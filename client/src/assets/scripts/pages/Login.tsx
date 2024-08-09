import { useState } from "react";
import LoginImg from "../../images/account.png";
import warning from "../../images/warning.png";
import { Console } from "console";

export default function Login() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<boolean>(false);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleLoginClick = async () => {
		try {
			const response = await fetch("http://localhost:8000/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
	
			if (response.ok) {
				const data = await response.json();
				const token = data.token;
				localStorage.setItem("token", token);
				localStorage.setItem("email", email);
				window.location.href = "/admin/panel"; // Redirect to admin panel
			} else {
				setError(true); // Set error state to true if login fails
			}
		} catch (err) {
			console.error("Error during login:", err);
			setError(true);
		}
	};
	
	

	return (
		<>
			<section className="loginPage">
				<div className="loginBox">
					<div className="loginContent">
						<div className="loginTitle">
							<img src={LoginImg} alt="Login" />
						</div>

						<div className="emailInput">
							<input
								placeholder="Email"
								value={email}
								onChange={handleEmailChange}
							/>
						</div>

						<div className="passwordInput">
							<input
								placeholder="Password"
								type="password"
								value={password}
								onChange={handlePasswordChange}
							/>
						</div>

						{error && (
							<div className="error" style={{ display: "flex" }}>
								<img src={warning} alt="Warning" />
								<p>Password or Email is not correct!</p>
							</div>
						)}

						<button type="submit" className="loginButton" onClick={handleLoginClick}>
							Login
						</button>

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
