import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav/TopNavbar';
import Sidebar from './Sidebar/Sidebar';
import VideoCategory from './Nav/Videocategory';
import './LearningPageApp.css';  // Ensure to include your global styles

const App = () => {
  const [category, setCategory] = useState('All'); // Default category is 'All'
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    // <Router>
      <div className="app">
        <Navbar setSearchQuery={handleSearch} />
        <div className="content">
          <Sidebar setCategory={setCategory} />
          <div className="main-content">
               <VideoCategory category={category} searchQuery={searchQuery} /> 
            {/* <Routes> */}
              {/* <Route path="/" element={<VideoCategory category="Java" searchQuery={searchQuery} />} />
              <Route path="/java" element={<VideoCategory category="Java" searchQuery={searchQuery} />} />
              <Route path="/cplus" element={<VideoCategory category="C++" searchQuery={searchQuery} />} />
              <Route path="/python" element={<VideoCategory category="Phyton" searchQuery={searchQuery} />} />
              <Route path="/javascript" element={<VideoCategory category="Javascript" searchQuery={searchQuery} />} />
              <Route path="/dsa" element={<VideoCategory category="DSA" searchQuery={searchQuery} />} />
              <Route path="/ui-ux" element={<VideoCategory category="UI/UX" searchQuery={searchQuery} />} />
              <Route path="/html-css" element={<VideoCategory category="HTML/CSS" searchQuery={searchQuery} />} />
              <Route path="/tailwind" element={<VideoCategory category="Tailwind CSS" searchQuery={searchQuery} />} />
              <Route path="/nosql" element={<VideoCategory category="NoSQL" searchQuery={searchQuery} />} />
              <Route path="/sql" element={<VideoCategory category="SQL" searchQuery={searchQuery} />} />
              <Route path="/mongodb" element={<VideoCategory category="MongoDB" searchQuery={searchQuery} />} />
              <Route path="/cloud" element={<VideoCategory category="Cloud" searchQuery={searchQuery} />} />
              <Route path="/aws" element={<VideoCategory category="AWS" searchQuery={searchQuery} />} />
              <Route path="/azure" element={<VideoCategory category="Azure" searchQuery={searchQuery} />} />
              <Route path="/docker" element={<VideoCategory category="Docker" searchQuery={searchQuery} />} />
              <Route path="/kubernetes" element={<VideoCategory category="Kubernetes" searchQuery={searchQuery} />} />
              <Route path="/react" element={<VideoCategory category="React" searchQuery={searchQuery} />} />
              <Route path="/nodejs" element={<VideoCategory category="Node.js" searchQuery={searchQuery} />} />
              <Route path="/angular" element={<VideoCategory category="Angular" searchQuery={searchQuery} />} />
              <Route path="/vue" element={<VideoCategory category="Vue" searchQuery={searchQuery} />} /> */}
            {/* </Routes> */}
          </div>
        </div>
      </div>
    // </Router>/
  );
};

export default App;
