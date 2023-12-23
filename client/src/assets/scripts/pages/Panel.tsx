import "../../styles/Panel.scss";
import logo from "../../images/logo2.jpg";
import Post from "./../components/post";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

interface UserProps {
	Firstname: string;
	Lastname: string;
	Description: string;
	ImgUrl: string;
	AccessLevel: number;
}
interface PostData {
	Title: string;
	Description: string;
	Date: string;
	ReadTime: string;
	ImgSrc: string;
	ImgAlt: string;
	Content: string;
	PostId: number;
}
function Posts() {
	const [posts, setPosts] = useState<PostData[]>([]);
	//console.log(posts);

	useEffect(() => {
		fetch("http://localhost:8000/api/posts")
			.then(async (response) => await response.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => {
				console.error("Error fetching posts:", error);
			});
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<a href={`/post/${post.PostId}`} key={post.PostId}>
					<Post
						key={post.PostId}
						title={post.Title}
						description={post.Description}
						date={formatDate(post.Date)}
						readTime={post.ReadTime + " min read"}
						imageSrc={post.ImgSrc}
						imageAlt={post.ImgAlt}
						postId={post.PostId}
					/>
				</a>
			))}
			<Outlet />
		</div>
	);
}
function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric",
		year: "numeric",
	};
	return new Date(dateString).toLocaleDateString("en-US", options);
}

export default function Panel(props: UserProps) {
	const [activeLink, setActiveLink] = useState("");
	const [content, setContent] = useState(<></>);

	const handleClick = (e: any) => {
		const name = e.currentTarget.getAttribute('data-name');
		setActiveLink(name);
		if (name === "posts") {
			setContent(<Posts />);
		}
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
				<div className="panel-content" id="panel-content">
					{content}
				</div>
			</div>
		</>
	);
}
