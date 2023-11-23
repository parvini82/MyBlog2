import LoginImg from "../../images/account.png";
import { useEffect, useState } from "react";
import { MD5 } from 'crypto-js';

interface UserData {
	UserId: string;
	Email: string;
	Password: string;
	AccessLevel: string;
}

function loginClicked(users: UserData[], enteredEmail: string, enteredPassword: string) {
	// console.log(users);
	// console.log(enteredEmail);
	for (const user of users) {
	  if(user.Email.toLowerCase()==enteredEmail.toLowerCase()){
		if(MD5(enteredPassword).toString()==user.Password){
			console.log("Login!");
		}else{
			console.log("wrong");
		}
	  }
	}
	console.log("wrong");
}

export default function Login() {
	const [users, setUsers] = useState<UserData[]>([]);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};
	const handleLoginClick = () => {
		loginClicked(users, email, password);
	};

	useEffect(() => {
		fetch("http://localhost:8000/api/users")
			.then(async (response) => await response.json())
			.then((data) => {
				setUsers(data);
			})
			.catch((error) => {
				console.error("Error fetching Users:", error);
			});
	}, []);
	return (
		<>
			<section className="loginPage">
				<div className="loginBox">
					<div className="loginContent">
						<div className="loginTitle">
							<img src={LoginImg}></img>
						</div>

						<div className="emailInput">
							<input placeholder="Email" value={email} onChange={handleEmailChange} />
						</div>

						<div className="passwordInput">
							<input placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
						</div>

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
