import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type PostProps = {
  postId:number;
};

function PostPage(props: PostProps) {
  
  
  
  

  return (
    <div>
      <div className='header'></div>
      <div className="body">
        <div className='title'></div>
        <div className='stats'></div>
        <div className=''></div>
      </div>
    </div>
  );
}

export default PostPage;
