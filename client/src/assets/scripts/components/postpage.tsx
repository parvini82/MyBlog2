import logo from '../../images/logo2.png';

type PostProps = {
  postId: number;
};

function PostPage(props: PostProps) {

  return (
    <div className="post-page">
      <div className="header">
        <img className='back' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nO3ZQQqDQBBE0X/CaMQwi+TuggEN5AgGDMKsgq67y9QD99XVLmYUzORdgRl4Az1iCrAAa322IWTDr8AL4fAL0CHgthP+A9wR4PBR3HwUNx/FzUdx81HcfBQ3H6U9OM9v53wJT+XwpxigVX+FqJ9A9q6GD4T0HiIJbyILbyILbyILbyILbyILbyL7L6YG8SFGxJSfISYENcBQ279Eh7G/8wUG4eG0hTVm9AAAAABJRU5ErkJggg==" />
        <div className="logo">
          <img src={logo} className="logo2"></img>
          <p>Mohammad Hosein Parvini</p>
        </div>
      </div>
      <div className="body">
        <h1 className='title'>JS Front-End Libraries and Their Meta-Frameworks
        </h1>
        <div className='stats'>
          <div className='name'>
            <img src={logo} className="logo2"></img>
            <p>Mohammad Hosein Parvini</p>
          </div>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
}

export default PostPage;
