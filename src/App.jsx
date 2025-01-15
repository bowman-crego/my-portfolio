
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';


function App() {
    return (
        <div className="">
        <Routes>
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
    );
}

export default App;