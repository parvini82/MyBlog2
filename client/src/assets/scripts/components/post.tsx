interface PostProps {
	title: string;
	description: string;
	date: string;
	readTime: string;
	imageSrc: string;
	imageAlt: string;
	postId: number;
}

function Post(props: PostProps) {
	return (
		<div className="blog-post">
			<img className="post-image" src={props.imageSrc} alt={props.imageAlt} />
			<div>
				<h2 className="post-title">{props.title}</h2>

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
		</div>
	);
}

export default Post;
