import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return <div className="container pt-5 ps-5 pe-5">
            <header className="header d-flex justify-content-center"> 
            <Navbar />
            </header>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
             
        </div>;
};

export default App;



