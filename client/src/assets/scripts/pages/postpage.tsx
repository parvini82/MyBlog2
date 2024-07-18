import bookicon from "../../images/bookicon.png";
import like from "../../images/icons8-like-50.png";
import comment from "../../images/icons8-comment-48.png";
import bookmark from "../../images/icons8-bookmark-48 (2).png";
import share from "../../images/icons8-share-24.png";
import logo from "../../images/logo2.jpg"
import ReactMarkdown from "react-markdown";

import React, { useState } from "react";

interface PostProps {
  Title: string;
  Date: string;
  ReadTime: string;
  Content: string;
  PostId: number;
  Likes: number;
}

function LikeBtnClicked(postId: number, setLikes: React.Dispatch<React.SetStateAction<number>>) {
	fetch(`http://localhost:8000/api/posts/${postId}/like`, {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	})
	  .then((response) => {
		if (!response.ok) {
		  throw new Error("Network response was not ok");
		}
		return response.json();
	  })
	  .then((data) => {
		setLikes(data.likes);
	  })
	  .catch((error) => {
		console.error("There was a problem with the fetch operation:", error);
	  });
  }
  

function PostPage(props: PostProps) {
  const [likes, setLikes] = useState(props.Likes);

  return (
    <div className="post-page">
      <div className="header">
        <a href="http://localhost:5173">
          <img
            className="back"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nO3ZQQqDQBBE0X/CaMQwi+TuggEN5AgGDMKsgq67y9QD99XVLmYUzORdgRl4Az1iCrAAa322IWTDr8AL4fAL0CHgthP+A9wR4PBR3HwUNx/FzUdx81HcfBQ3H6U9OM9v53wJT+XwpxigVX+FqJ9A9q6GD4T0HiIJbyILbyILbyILbyILbyILbyL7L6YG8SFGxJSfISYENcBQ279Eh7G/8wUG4eG0hTVm9AAAAABJRU5ErkJggg=="
          />
        </a>
        <div className="logo">
          <img src={logo} className="logo2"></img>
          <p>Mohammad Hosein Parvini</p>
        </div>
      </div>
      <div className="body">
        <h1 className="title">{props.Title}</h1>
        <div className="stats">
          <img src={logo} className="logo2"></img>
          <p className="name">Mohammad Hosein Parvini</p>
          <p className="dot">.</p>
          <p className="date">{formatDate(props.Date)}</p>
          <p className="dot">.</p>
          <div className="readtime">
            <img src={bookicon} />
            <p>{props.ReadTime} min read</p>
          </div>
        </div>
        <ReactMarkdown className="content">{props.Content}</ReactMarkdown>
      </div>
      <div className="interaction-floating-bar">
        <div className="interaction-content">
          <img src={like} onClick={() => LikeBtnClicked(props.PostId, setLikes)}></img>
          <span>{likes}</span>
          <img src={comment}></img>
          <img src={bookmark}></img>
          <img src={share} />
        </div>
      </div>
      <div className="written-by">
        <p className="title">Written by</p>
        <div className="logo3">
          <img src={logo}></img>
          <div className="name-about">
            <p className="name">Mohammad Hosein Parvini</p>
            <p className="about">Student at K. N. Toosi University of Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
