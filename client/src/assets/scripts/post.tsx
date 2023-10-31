import "../styles/post.scss"


type PostProps = {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  readMoreLink: string;
  readTime: string;
};

function Post(props: PostProps) {
  return (
    <section className="blog-post">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div>
        <a href="https://www.java.com/" target="_blank" className="read-more-href">
          <h2 className="post-title">{props.title}</h2>
        </a>
        <div className="post-details">
          <p className="post-date">Posted on {props.date}  </p>
          <img src="./assets/images/bookicon.png"></img>
          <p className="post-readTime">{props.readTime}</p>
          
        </div>
        <div className="post-content">
          <p className="post-description">{props.description}</p>
        </div>

      </div>


    </section>
  );
}

export default Post;
