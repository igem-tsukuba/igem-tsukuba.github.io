import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutIGEM from './pages/about_us/About_iGEM';
import AboutSymBio from './pages/about_us/About_symbio';
import AboutIGEMTSUKUBA from './pages/about_us/About_iGEM_TSUKUBA';
import Project from './pages/about_us/Project';
import Log from './pages/about_us/Log';
import Members from './pages/about_us/Members';
import News from './pages/News';
import Recruitment from './pages/Recruitment';
import Sponsorship from './pages/Sponsorship'

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about_iGEM" element={<AboutIGEM />} />
          <Route path="/about/about_symbio" element={<AboutSymBio />} />
          <Route path="/about/about_iGEM_TSUKUBA" element={<AboutIGEMTSUKUBA />} />
          <Route path="/about/project" element={<Project />} />
          <Route path="/about/log" element={<Log />} />
          <Route path="/about/members" element={<Members />} />
          <Route path="/news" element={<News />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/Sponsorship" element={<Sponsorship />} />
        </Routes>
    </Router>
  );
}

export default App;
