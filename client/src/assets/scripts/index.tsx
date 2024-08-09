import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import Post from "./components/post";
import PostPage from "./pages/postpage";
import "../styles/index.scss";
import "../styles/post.scss";
import "../styles/postpage.scss";
import "../styles/Login.scss";
import Login from "./pages/Login";
import Panel from "./pages/Panel";

interface PostData {
	Title: string;
	Description: string;
	Date: string;
	ReadTime: string;
	ImgSrc: string;
	ImgAlt: string;
	Content: string;
	PostId: number;
	Likes:number;
}
interface UserData {
	UserId: string;
	Email: string;
	Password: string;
	Firstname: string;
	Lastname: string;
	Description: string;
	ImgUrl: string;
	AccessLevel: number;
}
function App() {
	const [posts, setPosts] = useState<PostData[]>([]);
    const [loggedInUser, setLoggedInUser] = useState<UserData | null>(null);
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
	const [Users, setUsers] = useState<UserData[]>([]);
	console.log(Users);

	useEffect(() => {
        fetch("http://localhost:8000/api/users")
          .then(async (response) => await response.json())
          .then((data) => {
            setUsers(data);
    
            const email = localStorage.getItem("email");
    
            if (email) {
              const currentUser = data.find(
                (user: UserData) => user.Email.toLowerCase() === email.toLowerCase()
              );
              setLoggedInUser(currentUser || null);
            }
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      }, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin/login" element={<Login />} />
				{loggedInUser && (
          <Route
            path={`/admin/panel`}
            element={
              <Panel
                Firstname={loggedInUser.Firstname}
                Lastname={loggedInUser.Lastname}
                Description={loggedInUser.Description}
                ImgUrl={loggedInUser.ImgUrl}
                AccessLevel={loggedInUser.AccessLevel}
              />
            }
          />
        )}

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
								Likes={post.Likes}
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

	if (currentUrl.split("/")[3] == "") {
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
							likes={post.Likes}
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
