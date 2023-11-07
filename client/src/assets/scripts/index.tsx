import ReactDOM from "react-dom/client";
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Footer from "./components/footer";
import Post from "./components/post";
import PostPage from "./components/postpage";

// import Post from './components/Post'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById('content')!).render(
  <App></App>

)
ReactDOM.createRoot(document.getElementById('footer')!).render(
  <Footer/>
 

)
ReactDOM.createRoot(document.getElementById('posts')!).render(
  <div>
    <Post
      title='Java'
      description='Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today.'
      date='Sep 24, 2023'
      readTime='3 min read'
      imageSrc='./assets/images/Java.png'
      imageAlt='image'
      readMoreLink='https://www.java.com/'
      postId="1"
    />
    <Post
      title='Python'
      description='Python can be easy to pick up whether youre a first-time programmer or youre experienced with other languages. The following pages are a useful first step to get on your way writing programs with Python!'
      date='Sep 24, 2023'
      readTime='3 min read'
      imageSrc='./assets/images/Java.png'
      imageAlt='image'
      readMoreLink='https://www.python.org/'
      postId="2"
    />
    <Post
      title='JavaScript'
      description='JavaScript is a high-level, versatile, and widely-used programming language primarily used for adding interactivity and dynamic behavior to websites. It is one of the core technologies for building web applications and is supported by all modern web browsers, making it a fundamental part of web development.'
      date='Sep 24, 2023'
      readTime='3 min read'
      imageSrc='./assets/images/Java.png'
      imageAlt='image'
      readMoreLink='https://www.java.com/'
      postId="3"
    />
  </div>
);
