import React from "react";
import { NavLink } from 'react-router-dom';
import { PiCodeBold   } from "react-icons/pi";



const Navbar = () => {
  return <>
            <nav className="navbar navbar-expand-sm bg-white shadow rounded-5 m-3">
                <div className="container-fluid ">
                  <PiCodeBold  className="mx-1" size={20} color="#189db8"/>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-3" id="navbarNav">
                 <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to="/" className="nav-link active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className="nav-link active">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/project" className="nav-link active">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" className="nav-link active">Contact</NavLink>
                    </li>
                  </ul>
                 </div>
                </div>
              </nav>
        </>;
};

export default Navbar;