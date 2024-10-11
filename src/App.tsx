import './App.css'

import LandingPage from './pages/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogSection from './components/blogSection';
import BlogPost from './pages/blogPage';
import { blogPosts } from './contents/posts';





function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogSection posts={blogPosts} />} />

          <Route path="/blog/:id" element={<BlogPost post={blogPosts[0]} />} />

        </Routes>
      </div>
    </Router>

    

  )
}

export default App
