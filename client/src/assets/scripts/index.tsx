import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import Home from './components/home';
import Footer from "./components/footer";
import Post from "./components/post";
import PostPage from "./components/postpage";
import '../styles/index.scss'
import '../styles/post.scss'
import '../styles/postpage.scss'

interface PostData {
	Title: string;
	Description: string;
	Date: string;
	ReadTime: string;
	ImgSrc: string;
	ImgAlt: string;
	PostId: string;
}

function App() {
	return (


		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/1" element={<PostPage postId={1} />} />
				<Route path="/post/2" element={<PostPage postId={2} />} />
				<Route path="/post/3" element={<PostPage postId={3} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
const currentUrl = window.location.href;

ReactDOM.createRoot(document.getElementById('content')!).render(
	<App></App>


)
ReactDOM.createRoot(document.getElementById('footer')!).render(
	<Footer />


)
function Posts() {
	const [posts, setPosts] = useState<PostData[]>([]);
	console.log(posts);
	
	useEffect(() => {
		fetch('http://localhost:8000/api/posts')
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => {
				console.error('Error fetching posts:', error);
			});
	}, []);

	if (currentUrl.split("/")[3] != 'post') {
		return (
			<div>
				{posts.map((post) => (
					
					
					<Post
						title={post.Title}
						description={post.Description}
						date={formatDate(post.Date)}
						readTime={post.ReadTime+' min read'}
						imageSrc={post.ImgSrc}
						imageAlt={post.ImgAlt}
						postId={post.PostId}
					/>
				))}
				<Outlet />
			</div>
		);
	}
	function formatDate(dateString: string): string {
		const options: Intl.DateTimeFormatOptions = {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		  };
		  return new Date(dateString).toLocaleDateString('en-US', options)
	  }


}
ReactDOM.createRoot(document.getElementById('posts')!).render(
	<Posts />


)
