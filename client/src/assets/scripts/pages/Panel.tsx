import React, { useState } from "react";
import "../../styles/Panel.scss";
import logo from "../../images/logo2.jpg";

interface UserProps {
	Firstname: string;
	Lastname: string;
	Description: string;
	ImgUrl: string;
	AccessLevel: number;
}

export default function Panel(props: UserProps) {
	const [activeLink, setActiveLink] = useState("");

	const handleClick = (e: any) => {
		setActiveLink(e.currentTarget.getAttribute('data-name'));
	};

	return (
		<>
			<div className="Panel">
				<div className="leftnavbar">
					<div className="UserInfo">
						<div className="logo3">
							<img src={logo}></img>
							<div className="name-about">
								<p className="name">{props.Firstname} {props.Lastname}</p>
							</div>
						</div>
					</div>
					<ul>
						<li>
							<a className={activeLink === "posts" ? "active" : ""} data-name="posts" onClick={handleClick}>Your Posts</a>
						</li>
						<li>
							<a className={activeLink === "addPost" ? "active" : ""} data-name="addPost" onClick={handleClick}>Add Post</a>
						</li>
						<li>
							<a className={activeLink === "interactions" ? "active" : ""} data-name="interactions" onClick={handleClick}>Interactions</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
