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
      date='Sep 24, 2023' readTime='3min read' imageSrc='./assets/images/Java.png' imageAlt='image' readMoreLink='https://www.java.com/'></Post>
      <Post title='Python' description='Java is a widely-used programming language for coding web applications.
     It has been a popular choice among developers for over two decades, with millions of Java applications 
     in use today.'
      date='Sep 24, 2023' readTime='3min read' imageSrc='./assets/images/Java.png' imageAlt='image' readMoreLink='https://www.python.org/'></Post>
      <Post title='Java' description='Java is a widely-used programming language for coding web applications.
     It has been a popular choice among developers for over two decades, with millions of Java applications 
     in use today.'
      date='Sep 24, 2023' readTime='3min read' imageSrc='./assets/images/Java.png' imageAlt='image' readMoreLink='https://www.java.com/'></Post>

    
  </React.StrictMode>
)