import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Footer from "./components/footer";
import Post from "./components/post";
import PostPage from "./pages/postpage";
import "../styles/index.scss";
import "../styles/post.scss";
import "../styles/postpage.scss";
import "../styles/Login.scss"
import Login from "./pages/Login";

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

function App() {
	const [posts, setPosts] = useState<PostData[]>([]);
	console.log(posts);

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
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/admin/login" element={<Login />} />

				{posts.map((post) => (
					<Route
						key={post.PostId}
						path={`/post/${post.PostId}`}
						element={
							<PostPage
								PostId={post.PostId}
								Title={post.Title}
								Date={post.Date}
								ReadTime={post.ReadTime}
								Content={post.Content}
							/>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
const currentUrl = window.location.href;

ReactDOM.createRoot(document.getElementById("content")!).render(<App></App>);
ReactDOM.createRoot(document.getElementById("footer")!).render(<Footer />);
function Posts() {
	const [posts, setPosts] = useState<PostData[]>([]);
	console.log(posts);

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

	if (currentUrl.split("/")[3] == "home") {
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
}

ReactDOM.createRoot(document.getElementById("posts")!).render(<Posts />);
