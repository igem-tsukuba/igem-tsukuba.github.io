import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AboutIGEM from './pages/about_us/About_iGEM';
import AboutSymBio from './pages/about_us/About_symbio';
import AboutIGEMTSUKUBA from './pages/about_us/About_iGEM_TSUKUBA';
import Project from './pages/about_us/Project';
import Project2023 from './pages/about_us/Project2023';
import Log from './pages/about_us/Log';
import Members from './pages/about_us/Members';
import News from './pages/News';
import Recruitment from './pages/Recruitment';
import Sponsorship from './pages/Sponsorship';
import EducationRequest from './pages/Education_request';

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/igem-tsukuba.github.io'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about_iGEM" element={<AboutIGEM />} />
          <Route path="/about/about_symbio" element={<AboutSymBio />} />
          <Route path="/about/about_iGEM_TSUKUBA" element={<AboutIGEMTSUKUBA />} />
          <Route path="/about/project" element={<Project />} />
          <Route path="/about/project2023" element={<Project2023 />} />
          <Route path="/about/log" element={<Log />} />
          <Route path="/about/members" element={<Members />} />
          <Route path="/news" element={<News />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/education_request" element={<EducationRequest />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
