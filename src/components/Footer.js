import React from "react";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return <>
           <footer>
       
             <NavLink to="/">Home</NavLink>
         
             <NavLink to="/about">About</NavLink>
          
             <NavLink to="/project">Projects</NavLink>
         
          
 </footer>

           
        </>;
};

export default Footer;