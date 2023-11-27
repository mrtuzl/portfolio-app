import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { IoIosArrowDropup } from "react-icons/io";



const App = () => {

    const[isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
                
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const scrollTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

  return <div className="container-fluid ps-5 pe-5 pt-5">
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
            <button className={`btn btn-white rounded-5 shadow-lg btn-up ${isVisible ? "visible" : "hidden"}`} onClick={scrollTop}> <IoIosArrowDropup size={25} color={"#189db8"}/> </button> 
        </div>
};

export default App;



