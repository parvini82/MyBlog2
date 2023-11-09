import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type PostProps = {
  postId:number;
};

function PostPage(props: PostProps) {
  
  
  
  const handleGoBack = () => {
    
  };

  return (
    <div>
      <h1>Post: {props.postId}</h1>
      
    </div>
  );
}

export default PostPage;
