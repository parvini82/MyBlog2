import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  // Replace this with your logic to fetch the post data based on the postId
  const post = {
    id: postId,
    title: 'Sample Post Title',
    content: 'This is the content of the sample post.',
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Post: {post.title}</h1>
      <p>{post.content}</p>
      <button onClick={handleGoBack}>Go Back to Home</button>
    </div>
  );
}

export default PostPage;
