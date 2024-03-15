import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './components/Nav';
import Home from './components/Home';
import Schemes from './components/Schemes';
import Modern from './components/Modern';
import News from './components/News';
import Weather from './components/Weather';
import RecommendationComponent from './components/Recommend';
import Authentication from './components/Authentication';
import CreatePost from './components/CreatePost';
import ViewPosts from './components/ViewPosts';
import Bot from './components/Bot'
const App = () => {
  return (
    <Router>
      <Navi />
      <div style={{ marginTop: '60px' }}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/modern" element={<Modern />} />
            <Route path="/news" element={<News />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/recommend" element={<RecommendationComponent />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/blog" element={<CreatePost />} />
            <Route path="/blog/view" element={<ViewPosts />} />
          </Routes>
        </div>
      </div>
     <Bot />
    </Router>
  );
};

export default App;
