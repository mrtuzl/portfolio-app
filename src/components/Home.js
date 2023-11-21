import React from "react";
import mrtuzl from "../img/mrtuzl.png";
import pp from "../img/pp.png";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { SiStackoverflow } from "react-icons/si";
import About from "./About";
import Project from "./Project";


const Home = () => {
  return <>
           <div className="container pt-5 ps-5 pe-5"> 
              <div className="row"> 
                <div className="col-lg-8 col-sm-12"> 
                    <img src={pp} alt="pp" className="img-fluid img-p mx-3 border border-3 border-white shadow"/> 
                    <h1 className="p-3"> Front-end web app developer, and content creator.</h1>
                    <p className="mx-3 prompt justify"> 
                    I am a front-end developer with expertise in technologies such as React, 
                    highlighting my proficiency in this field. I have experience building scalable, 
                    secure, and reliable web applications using various frameworks like Bootstrap 
                    and tools like Webpack. I enjoy tackling complex problems and am dedicated to 
                    learning new skills. Crafting high-quality code following best practices and 
                    industry standards is my forte. Beyond development, I possess the ability to 
                    create content and edit videos using Adobe Creative Cloud tools such as Premiere
                     Pro and Photoshop. I thrive on new challenges and opportunities for continual 
                     growth as a developer.
                    </p>
                    <div className="social p-3  d-flex flex-column"> 
                        <div>
                              <a href="https://www.linkedin.com/in/mertmehmetuzel/" className="text-decoration-none">
                                <ImLinkedin size={25} color="gray" className="m-3 grow-on-hover" /> 
                                <span className="prompt fw-bold text-secondary"> Follow on LinkedIn</span> </a>
                              </div>
                              <div> 
                              <a href="https://github.com/mrtuzl/" className="text-decoration-none">
                                <ImGithub size={25} color="gray" className="m-3 grow-on-hover"/> 
                                <span className="prompt fw-bold text-secondary"> Follow on Github</span> </a>
                              </div>
                              <div>
                                <a href="https://www.instagram.com/mertuzelofficial/" className="text-decoration-none">
                                <RiInstagramFill size={30} color="gray" className="m-3 grow-on-hover" /> 
                                <span className="prompt fw-bold text-secondary"> Follow on Instagram</span> </a>
                              </div>
                              <div>
                                <a href="https://stackoverflow.com/" className="text-decoration-none"> 
                                <SiStackoverflow size={25} color="gray" className="m-3 grow-on-hover"/> 
                                <span className="prompt fw-bold text-secondary"> Follow on Stack Overflow</span> </a> 
                              </div>
                    </div>
               
                </div>
                <div className="col-lg-4 col-sm-12 d-flex align-items-center justify-content-center"> 
                    <img src={mrtuzl} alt="mrtuzl" className="img-fluid img"/> 
                </div>
              </div>
            </div>
            <About/>
            <Project/>
        </>;
};

export default Home;