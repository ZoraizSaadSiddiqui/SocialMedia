import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './MyComponents/Header';
import Sidebar from './MyComponents/Sidebar';
import Profile from './MyComponents/Profile';
import Home from './MyComponents/Home';
import Settings from './MyComponents/Settings';
import Posts from './MyComponents/Posts';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Header title="Social Media Dashboard" searchBar={true} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="container">
        <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/profile" element={<Profile isDarkMode={isDarkMode} />} />
          <Route path="/settings" element={<Settings toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/posts" element={<Posts isDarkMode={isDarkMode} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
