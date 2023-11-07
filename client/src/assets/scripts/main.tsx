import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './footer.tsx'
import Post from './post.tsx'
import '../styles/index.scss'
import '../styles/post.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Footer />

  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('posts')!).render(
  <React.StrictMode>

    <Post title='Java' description='Java is a widely-used programming language for coding web applications.
     It has been a popular choice among developers for over two decades, with millions of Java applications 
     in use today.'
      date='Sep 24, 2023' readTime='3 min read' imageSrc='./assets/images/Java.png' imageAlt='image' readMoreLink='https://www.java.com/'></Post>
    <Post title='Python' description='Python can be easy to pick up whether youre a first time programmer or youre experienced with other languages. The following pages are a useful first step to get on your way writing programs with Python!'
      date='Sep 24, 2023' readTime='3 min read' imageSrc='./assets/images/Java.png' imageAlt='image' readMoreLink='https://www.python.org/'></Post>
    <Post title='JavaScript' description='JavaScript is a high-level, versatile, and widely-used programming language primarily used for adding interactivity and dynamic behavior to websites. It is one of the core technologies for building web applications and is supported by all modern web browsers, making it a fundamental part of web development.'
      date='Sep 24, 2023' readTime='3 min read' imageSrc='./assets/images/Java.png' imageAlt='image' readMoreLink='https://www.java.com/'></Post>


  </React.StrictMode>
)