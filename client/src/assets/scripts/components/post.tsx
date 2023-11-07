import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';

type PostProps = {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  readMoreLink: string;
  readTime: string;
  postId:string;
};

function Post(props: PostProps) {
  const navigate = useNavigate();

  

  return (
    <section className="blog-post" >
      <a>
        <img className="post-image" src={props.imageSrc} alt={props.imageAlt} />
      </a>
      <div>
        <a target="_blank" className="read-more-href">
          <h2 className="post-title">{props.title}</h2>
        </a>
        <div className="post-details">
          <p className="post-date">{props.date}</p>
          <img src="./assets/images/bookicon.png" alt="Book Icon" />
          <p className="post-readTime">{props.readTime}</p>
        </div>
        <div className="post-content">
          <p className="post-description">{props.description}</p>
        </div>
        <img className="post-image2" src={props.imageSrc} alt={props.imageAlt} />
      </div>
    </section>
  );
}

export default Post;
